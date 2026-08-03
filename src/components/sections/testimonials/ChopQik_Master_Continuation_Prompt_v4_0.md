# ChopQik — Master Continuation Prompt v4.0
**Date: 1 August 2026**
Supersedes v3.9. Read this in full before acting.

---

## 0. HOW TO WORK WITH ME (EJ / Enigma)

- **Verify before acting.** Never trust this document about what code or schema does — run a grep, read the file, query the database. This rule has caught real errors in every session.
- **A clean build is not a test.** Nothing is closed until verified live on a real device by a real user.
- **Complete file replacements only.** Never patches, diffs, or "change line 65 to…". I paste whole files.
- **One file per message** when I send you files. Rename before upload to avoid `route.ts` / `page.tsx` collisions.
- **SQL before dependent code.** One statement at a time when reading results — the Supabase editor shows only the last statement's output.
- **Direct communication.** Give me a specific recommendation, not a list of options. Defend your position with reasoning; don't abandon it because I pushed back. Own errors cleanly and record them.
- **Check the data before accepting a scoping argument.** If a query would settle the question, run the query.
- **I am not a strong developer.** Explain reasoning, give exact commands, don't assume I'll infer the missing step.

**Deploy chain (both repos):**
```bash
npm run build && git add . && git commit -m "..." && git push
```
`npx tsc --noEmit` first on the platform repo.

---

## 1. THE BUSINESS

**ChopQik LTD** — a subscription operating system for Nigerian food and hospitality businesses. Orders, inventory, staff, reservations, tables, catering, analytics, takings. **Not a delivery marketplace. No commission on vendor sales, ever.** That is the core differentiator.

**Founder:** EJ, sole product/engineering/strategy. Brother handles field sales. Commission-based sales liaison in the field. A PMP-certified friend abroad is joining as Project Manager (plan only — no production access, NDA first).

**Pricing (locked):** CQ Lite ₦5,000 / CQ Standard ₦20,000 / CQ Premium ₦30,000. Founding Ten: ₦30,000 flat, 60 days free, effectively Premium for life. Entitlement/tier system deliberately **not built** until 15 vendors observed.

**Revenue phases:** TODAY subscriptions → NEXT payment margin → LATER delivery ecosystem, premium modules, ChopPass ₦1,500/mo.

**Strategy lock, July–September:** vendors and data only. No partnership outreach. October opens: two POS terminal conversations in parallel, entitlement build, admin panel build.

**Live thesis (evidenced, not argued):** the highest-volume vendor has Paystack fully enabled and ~96% of her customers still pay by **bank transfer**. The opportunity is digitising transfer volume, not competing for card volume. This is the October pitch.

---

## 2. THE ESTATE — 5 live vendors + 1 demo

| id | Vendor | Slug | Type | Notes |
|----|--------|------|------|-------|
| 1 | Ofejiro Stop Over | `ofejiro` | Dine-in | Founding pilot. Own Android tablet. `manual_takings = true`. 3-way payment mix. |
| 2 | Unik Bistro | `unikbistro` | **Demo only** | Excluded from every monitoring query and revenue number. Now has 9 `tables` rows incl. "The Loft" VIP. |
| 3 | Dina's Gourmet | `dinasgourmet` | Delivery only | Highest volume. Online payments on. **Trial converts 25 Sept.** |
| 4 | Fransil Hills Hotel | `fransilhills` | Hotel F&B | Launched 27 July, cold start. Delivery relabelled Room Service, 30 zero-fee room zones. **Trial converts 25 Sept.** |
| 6 | EJ Cuisine (Ihama) | `ejcuisineihama` | Dine-in | 171 items, 15 tables, QR tents. **Installed + staff trained 31 July — went well.** Transfer only. |
| 7 | Home by EJ Cuisine | (Country Home) | Dine-in + private rooms | Same owner as 6. 190 items, 19 tables, 4 staff. **NOT YET LAUNCHED.** |

No vendor_id 5 — burned sequence value.

**Two locations, one owner, two full subscriptions.** No multi-branch concept. Deliberate.

---

## 3. PLATFORM — `github.com/chopqik/Chopqik-platform`

Next.js 14, TypeScript, Tailwind, Supabase (Postgres + Realtime), Vercel, Paystack, Termii (dormant).
Live at `vendors.chopqik.com` + per-vendor subdomains.

### Shipped and verified this session (31 July)

**1. VIP / VVIP reservation tiers — COMPLETE, verified live**

- `tables.tier text NOT NULL DEFAULT 'regular'` CHECK in (regular, vip, vvip)
- `tables.rate_note text` — vendor-authored charge warning, shown verbatim. **Deliberately no price stored.** The amount lives on the vendor's printed card and is quoted by a human. Do not add a rendered price.
- `tables.hourly_rate integer` — **added then abandoned. Empty. DROP IT at the next audit.**
- `reservations.requested_tier text` CHECK (null or regular/vip/vvip)
- `create_reservation` RPC rewritten with 10th arg `p_requested_tier`. **Strict tier matching — no cross-tier fall-through.**

**Why this mattered:** the old RPC ordered `is_vip ASC, seats ASC` and fell through into VIP rooms. At Country Home the largest regular table is 6 seats and Erediawa VIP is 12 — so a party of 7 was **silently placed in a chargeable private room**. Now they get flagged for the manager instead. Fixed before Country Home launched.

Tiered rooms: id 15 Ihama "Table VIP" (4 seats, `vip`, **no rate_note — it's a better seat, not a rented room**), id 33 Erediawa VIP (12, `vip`), id 34 Akenzua VVIP (20, `vvip`). Both Country Home rooms carry the rate note.

Verified: `requested_tier='vip'` + `table_id=15` on a real booking through the live page.

**2. Prominent pay-by-transfer panel — COMPLETE, verified live**

`renderPayLater` in `app/[slug]/page.tsx` rebuilt. **Collapsed by default and must stay that way** — a dine-in guest can still pay the waiter in cash, so expanding bank details unprompted presumes a payment method they haven't chosen. Prominence comes from a solid full-width orange CTA in the closed state: *"🏦 Paying by transfer? Tap for account details."* Open state has account number at `text-xl` + Copy, amount, ref as transfer description, and *"After transferring, show your waiter so they can mark it paid."*

**3. Ihama test data cleared.** Orders and reservations at 0. Stock untouched (8 tracked bar items — nothing was ever deducted).

### Hard-won platform knowledge

- **Three-change rule:** a new `vendors` column needs (1) DB column, (2) explicit field in the select list in `app/api/public/menu/route.ts`, (3) component. Build passes with only two. Has caused multiple silent failures.
- **New pattern:** the menu route now also reads `tables` (for `reservationTiers`). `createServerClient()` **is service-role** — confirmed, since `tables` has all grants revoked.
- `tables` columns are `label`, `seats`, `is_vip`, `sort_order`, `is_active`, `tier`, `rate_note`. **No `name`, no `active`.**
- `reservations` has no `order_items` child; `orders` stores items as jsonb.
- `stock_movements` uses `menu_item_id` and `quantity_delta`.
- `menu_items`: description is `note`, availability is `available`, `price` is INTEGER.
- `vendors.id` INTEGER; `menu_items.id`/`orders.id` BIGINT.
- `order_type` has **mixed casing** — all filters must be case-insensitive.
- Staff table is `staff_members` (the FSD is wrong).
- **`CREATE OR REPLACE` with an extra parameter creates an overload, not a replacement.** Drop by exact signature first. The DROP destroys EXECUTE revocations — reapply them, then verify `pg_proc` returns exactly ONE row.
- **Deleting `stock_movements` does not restore `stock_quantity`.** Check before deleting.
- Rejected INSERTs burn sequence IDs.
- RLS lockdowns must cover `anon` AND `authenticated`.
- **Tablet ceiling: Chrome 106** (Android 6.0, never updatable). Prohibited: `dvh`/`svh`/`lvh`, CSS nesting, Popover API, `text-wrap: balance`, view transitions.
- zsh: `read -s "?Password: " P; echo; echo "length: ${#P}"` — length check mandatory. `read -s -p` fails silently.

### Platform open items

- **Manual booking path may INSERT directly rather than calling `create_reservation`** — if so, vendor-side bookings skip the new tier protection. Grep and check. Not urgent, nothing broken.
- Drop the unused `hourly_rate` column.
- Second Supabase access route (see §6).

---

## 4. LANDING SITE — `github.com/chopqik/landing` ← **ACTIVE WORK**

Separate repo. Next.js 16 + Turbopack, Tailwind, framer-motion, Vercel → `chopqik.com`. All source under `src/`. One collaborator: the proposed CTO.

**The problem:** the site was built as a **food delivery marketplace** and markets a different company. It claimed "#1 Food Delivery App in Benin City," had fabricated testimonials, App Store buttons for a non-existent app, a placeholder phone number, and `DeliveryService` structured data. Most damagingly it promised vendors *"Fair Commission — we take a smaller cut"* while the actual pitch is **no commission ever**.

### Done and deployed (1 Aug)

| File | Change |
|---|---|
| `sections/hero-immersive.tsx` | Badge → "Live in Benin City · More cities loading". Headline → "One system. / Total control." Subhead → vendor OS + no-commission line. **CTAs flipped**: primary "Get ChopQik for your business" → `onVendorClick`; secondary "Delivery is coming — join the list" → waitlist. Overlay darkened. |
| `sections/testimonials/marquee.tsx` | 6 fabricated quotes → **3 real, vendor-approved**. Marquee → static 3-card grid. "Loved by thousands" → "From the people running on it." Fake 5-star ratings removed. |
| `layout/navbar.tsx` | "Order Now" (**had no href or onClick — completely inert**) → "Get ChopQik" linking to `#contact`. Desktop + mobile. |
| `app/layout.tsx` | Title/description/keywords → vendor OS. JSON-LD `DeliveryService` → `SoftwareApplication`. Placeholder phone removed. |

**Approved testimonials (permission granted, use as-is):**
- Fransil Hills Hotel — *"It is reducing theft in the hotel kitchen. Thank you."*
- Madam Ofejiro, Ofejiro Stop Over — *"It is helping me keep my records better. I know what I sold before I close."*
- Dina, Dina's Gourmet — *"This is wonderful. I love it."*

### NEXT UP — in priority order

1. **`sections/reality-scroll.tsx`** (`id="about"`, live, first thing after the hero). Contains **"Fair Commission — We take a smaller cut so you make more."** — directly contradicts the hero one scroll above it. Also "Distance-Based Fees", "Free professional photos", customer frustration cards about delivery. **Highest priority — the page currently contradicts itself.**
2. **`sections/how-it-works`** — almost certainly consumer ordering steps.
3. **`sections/faq`** — should answer vendor questions (cost, commission, offline, old tablets).
4. **`sections/waitlist-cta.tsx`** — keep, reposition as "delivery coming later".
5. **`app/legal/page.tsx`** — **UNREAD. Only piece with legal weight.** Published Partner Agreement written for a delivery marketplace while Vendor Service Agreement v2 says flat subscription. Two live documents describing the same relationship differently.
6. **Design quality pass.** EJ wants high-end and futuristic. Colours are right (#F2891C orange, charcoal). Weak points: Unsplash stock food photography, splash screen, busy animation. **Fix: replace stock photos with real product imagery.**
7. **`public/og-image.jpg`** — file does not exist; every link preview since launch has been blank. A version was generated and **rejected by EJ as not good enough**. Rebuild after the design direction is settled.

### Assets available
Demo account (vendor 2) populated with real orders — ₦34,100, 5 orders, payment badges across Transfer/POS/Cash, real Nigerian food names. Screenshots taken of Orders and History views. Still to capture: live order queue with tickets in progress, stock with low-stock badge, reservations with the VIP room, guest ordering page on a phone, printed table tent on a real table at Ihama.

**Verified anchors:** `#hero`, `#about` (reality-scroll), `#reviews`, `#contact` (contact-form). `#how-it-works`, `#blog`, `#faq` assumed but unverified.

**Keep, don't delete:** the blog (3 posts, genuinely good — the "Madam Stopover" one is a real vendor story). Delivery components stay in the repo, commented out of `page.tsx` when not needed — Phase 3 will want them.

---

## 5. POSITIONING — the story the site must tell

Delivery is **not** a pivot away from the vendor OS. It is what the vendor OS makes possible.

Every delivery app in Nigeria bolted delivery on top of restaurants with no system — which is why they take 24%. ChopQik comes from the other direction: once hundreds of restaurants already run their floor on ChopQik, menus, stock and kitchen status are already in one place. Delivery becomes a switch to flip, not a marketplace to build. **That is why ChopQik can afford not to take a commission**, and no competitor can copy it without rebuilding from the vendor side first.

**Sequence:** TODAY we run the restaurant → NEXT we handle the money → THEN we deliver.

**Audience priority: vendors first** (they pay), partners second (October), consumers third.

---

## 6. OPEN — NOT CODE

- **Second Supabase access route.** Supabase is GitHub-OAuth-only with no password fallback, so GitHub is the *same* route, not a second one. Set an email/password + 2FA, store recovery codes with the GitHub ones, then **log out and test in a private window**. Longest-standing open item.
- **`chopqik.com` renewal** — Hostinger, expires 2027-03-04, auto-renew unconfirmed. Raise at the **start of each month** until EJ confirms. Losing it takes down every vendor subdomain.
- **Referral ask — still not made to a single vendor.** Highest-leverage unclaimed item. Bundle it with the testimonial approval message.
- **25 September double renewal** — Dina and Fransil convert the same week. Pull volume/savings numbers in August and rehearse.
- **Subscription collection has no mechanism.** Paystack subaccounts route *order* value to vendors; nothing bills vendors. Entitlements are deferred to October. **How does a vendor actually pay on 25 September?**
- **Fransil has zero orders since launching 27 July.** A vendor that never starts won't trigger a churn query, which looks for a drop. Needs a first-week check.
- **Are Fransil / Ihama / Home by EJ signed on VSA v2?**
- **Whose number is `vendors.phone` for Ihama** (`+2347032788924`)? The guide tells the manager to watch it for reservations, bulk orders and complaints — none of which alert on the tablet.
- Ihama food photos: 0 of 79.
- LinkedIn company page — paused pending site coherence. Industry: **Software Development**. Size 2-10. Privately Held. Location Benin City.

---

## 7. CLOSED — do not reopen without new information

Spirits by the shot / bottle keep · further intelligence features · automated staff PIN rotation · chasing individual vendors' unpaid orders · Paystack policy docs · bill splitting (deferred to October terminal API) · table-level bill grouping · bulk photo upload (revisit ~vendor 8) · proprietary hardware (software on partner terminals first).

---

## 8. DOCUMENTS

Canonical: Operational Roadmap v2.1 (PM edition, Aug 2026 — **current**) · ChopQik Operations Guide · Master FSD v3.1 (**4 known errors + superseded pricing — fix before October**) · CTO Technical Brief · Vendor Service Agreement v2 · Sales Playbook · Operations and Training Manual · Vendor Onboarding Checklist (**predates tables/reservations/trial tracking**) · Tablet Setup Guide v2 · Staff Quick-Reference One-Pager.

**Correction for the next FSD/roadmap revision:** earlier notes said five private rooms at Country Home. It is **two** — Erediawa VIP and Akenzua VVIP. Eweka, Aduwawa and Ogba are ordinary tables (confirmed with the vendor).

**Never record:** shared system PINs, manager phone numbers, bank details, API keys.

---

## 9. IMMEDIATE NEXT ACTION

Rewrite `src/components/sections/reality-scroll.tsx` for the landing repo. It is the `#about` section, it is live, and it tells vendors ChopQik takes a commission one scroll below a hero promising the opposite.

Ask EJ to `cat` the file first — do not work from any version quoted in this document.
