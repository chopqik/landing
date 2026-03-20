import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { LegalSidebar } from "@/components/legal/legal-sidebar";

export const metadata = {
  title: "Legal Hub - ChopQik",
  description:
    "Terms, privacy, and policy documents for customers, partners, and delivery partners on ChopQik.",
};

export default function LegalPage() {
  const sections = [
    { id: "terms-of-service", label: "Terms of Service" },
    { id: "privacy-policy", label: "Privacy Policy" },
    { id: "cookie-policy", label: "Cookie Policy" },
    { id: "partner-agreement", label: "Partner Agreement" },
    { id: "delivery-partner-agreement", label: "Delivery Partner Agreement" },
    {
      id: "acceptable-use-community-guidelines",
      label: "Acceptable Use and Community Guidelines",
    },
    { id: "refunds-and-returns-policy", label: "Refunds and Returns Policy" },
    {
      id: "food-safety-allergy-policy",
      label: "Food Safety and Allergy Policy",
    },
    {
      id: "anti-fraud-chargeback-policy",
      label: "Anti-Fraud and Chargeback Policy",
    },
    { id: "anti-discrimination-policy", label: "Anti-Discrimination Policy" },
    { id: "accessibility-policy", label: "Accessibility Policy" },
    {
      id: "ip-copyright-policy",
      label: "Intellectual Property and Copyright Infringement Policy",
    },
    { id: "data-processing-addendum", label: "Data Processing Addendum" },
    { id: "supplier-code-of-conduct", label: "Supplier Code of Conduct" },
    { id: "whistleblower-policy", label: "Whistleblower Policy" },
    { id: "service-fee-breakdown", label: "Service Fee Breakdown" },
    {
      id: "physical-address-contact-information",
      label: "Physical Address and Contact Information",
    },
  ];

  return (
    <div className="min-h-screen bg-zinc-100/60 pt-32 pb-24 scroll-smooth">
      <div className="container mx-auto px-4 max-w-7xl">
        <Link
          href="/"
          className="inline-flex items-center text-sm font-medium text-zinc-500 hover:text-[#F2891C] transition-colors mb-8"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Home
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-8 lg:gap-12">
          <aside className="lg:sticky lg:top-28 lg:self-start bg-white rounded-3xl border border-zinc-200 p-4 md:p-6 h-fit max-h-[calc(100vh-8rem)] overflow-y-auto shadow-xl shadow-zinc-200/40">
            <p className="text-xs font-bold tracking-wide uppercase text-zinc-500 mb-4">
              Legal Sections
            </p>
            <LegalSidebar sections={sections} />
          </aside>

          <div className="bg-white rounded-3xl p-8 md:p-12 border border-zinc-200 shadow-xl shadow-zinc-200/50 text-zinc-700 text-[15px] leading-7 [&_h1]:tracking-tight [&_h2]:scroll-mt-36 [&_h2]:mt-14 [&_h2]:mb-4 [&_h2]:pb-3 [&_h2]:border-b [&_h2]:border-zinc-200 [&_h2]:text-2xl [&_h2]:md:text-3xl [&_h2]:font-black [&_h2]:text-zinc-900 [&_h3]:mt-8 [&_h3]:mb-3 [&_h3]:text-lg [&_h3]:font-bold [&_h3]:text-zinc-800 [&_p]:my-3 [&_ul]:my-4 [&_ul]:pl-6 [&_ul]:list-disc [&_li]:my-1 [&_li]:marker:text-[#F2891C] [&_a]:text-[#F2891C] hover:[&_a]:text-orange-500">
            <h1 className="text-4xl md:text-5xl lg:text-6xl text-zinc-900 mb-6">
              Legal Hub
            </h1>
            <p className="lead text-xl text-zinc-500 mb-8">
              Last updated: March 2026
            </p>

            <div className="not-prose mb-10 rounded-2xl border border-zinc-200 bg-zinc-50 p-5 md:p-6">
              <p className="text-sm md:text-base text-zinc-700 leading-relaxed m-0">
                This page contains ChopQik&apos;s customer, partner, courier,
                and compliance policies in one place. Use the section index on
                the left to jump to a specific document.
              </p>
            </div>

            <h2 id="terms-of-service" className="scroll-mt-36">
              Terms of Service (for Customers)
            </h2>
            <p>
              <strong>Last Updated:</strong> March 2026
            </p>
            <h3>1. Introduction and Acceptance</h3>
            <p>
              ChopQik Ltd. operates an online platform that connects customers
              with independent restaurants, street food vendors, grocery stores,
              and other retailers (&quot;Partners&quot;) and arranges delivery
              through independent couriers (&quot;Delivery Partners&quot;). Our
              role is limited to providing the technology that facilitates
              orders; we do not own, prepare, or deliver the goods.
            </p>
            <p>
              By accessing or using our website or mobile application (the
              &quot;Platform&quot;) you agree to these Terms of Service (the
              &quot;Terms&quot;). If you do not accept these Terms you may not
              use the Platform.
            </p>

            <h3>2. Account Registration, Eligibility and Suspension</h3>
            <p>
              <strong>Eligibility.</strong> You must be at least 18 years of age
              and capable of entering into a legally binding contract under
              Nigerian law to use the Platform. Persons under 18 are not
              permitted to create an account.
            </p>
            <p>
              <strong>Registration.</strong> When creating an account, you must
              provide accurate, current, and complete information and keep it
              updated. You are responsible for maintaining the confidentiality
              of your login credentials and for all activities that occur under
              your account. You must notify us immediately of any unauthorised
              use.
            </p>
            <p>
              <strong>Account Suspension or Termination.</strong> We may suspend
              or terminate your account, with or without notice, where: (a) we
              reasonably believe you have breached these Terms or any applicable
              law; (b) fraudulent or abusive activity is detected; (c) you
              provide false or misleading information; or (d) it is necessary to
              protect other users, Partners, or ChopQik. Before suspension we
              will, where practicable, notify you of the alleged breach and give
              you an opportunity to respond. Suspensions may be lifted upon
              resolution of the issue. Termination permanently revokes your
              right to use the Platform and may result in deletion of your
              account data in accordance with applicable data protection laws.
              Provisions intended to survive termination (e.g., intellectual
              property rights, limitation of liability, dispute resolution) will
              continue in force.
            </p>

            <h3>3. Our Role and Relationship</h3>
            <p>
              ChopQik provides a marketplace to help you discover and order
              goods from Partners. We do not own, prepare, package, or deliver
              the goods and we are not the seller. When you place an order you
              are making an offer to purchase from the Partner; a contract for
              the sale of goods arises between you and the Partner once the
              Partner accepts your order. ChopQik disclaims liability for the
              quality, safety, or legality of Partner goods and for actions of
              Delivery Partners; our role is limited to facilitating the
              transaction.
            </p>

            <h3>4. Orders, Order Modifications and Payment</h3>
            <p>
              <strong>Placing Orders.</strong> When you submit an order on the
              Platform it constitutes an offer to the Partner. Partners may
              accept, reject, or modify the order in their discretion - for
              example, if an item is unavailable. Order acceptance occurs when
              the Partner confirms preparation. The Platform may send you status
              updates (accepted, in preparation, dispatched, delivered).
            </p>
            <p>
              <strong>Modifying or Cancelling Orders.</strong> You may request
              to modify or cancel an order using the in-app feature or by
              contacting customer support. Once the Partner begins preparation,
              modification may not be possible. Under the Federal Competition
              and Consumer Protection Act (&quot;FCCPA&quot;), consumers have
              the right to cancel bookings or orders within a reasonable time
              without unfair penalties. We support this right by enabling
              cancellation until preparation starts. Partners may cancel orders
              if products are unavailable, the store is closed, or there is no
              Delivery Partner. In such cases you will receive a full refund.
            </p>
            <p>
              <strong>Pricing and Fees.</strong> Prices displayed on the
              Platform are set by Partners and may include applicable taxes.
              ChopQik may charge additional fees - such as service fees,
              delivery fees, small-order fees, or regulatory fees - to maintain
              and improve our services. We will disclose all applicable fees at
              checkout before you confirm your order. Fee changes will take
              effect upon posting on the Platform. We will notify you of
              material fee changes via the app or email, and your continued use
              of the Platform after such changes constitutes acceptance.
            </p>
            <p>
              <strong>Payment.</strong> Payment must be made using the methods
              available on the Platform (e.g., credit/debit card, mobile wallet,
              bank transfer). Payments are processed by third-party payment
              processors acting on behalf of Partners and Delivery Partners. By
              submitting payment information you authorise us and our payment
              processors to charge your selected payment method for the total
              amount (including taxes and fees). You agree that our payment
              processors may use encryption and secure channels to process
              transactions. ChopQik does not store full payment card details.
            </p>

            <h3>5. Delivery and Logistics</h3>
            <p>
              ChopQik coordinates deliveries with independent Delivery Partners.
              Estimated delivery times provided on the Platform are for
              convenience only and may vary due to traffic, weather, or Partner
              preparation times. You must provide an accurate delivery address
              and be available to receive the order; failure to do so may result
              in forfeiture of the goods and fees paid. Delivery Partners are
              independent contractors, not employees of ChopQik, and are solely
              responsible for complying with road traffic laws and ensuring
              their vehicles are in safe working condition.
            </p>
            <h3>Courier Service Provider Agreement</h3>
            <p>
              <strong>Relationship.</strong> ChopQik may partner with
              independent courier service companies (&quot;Service
              Providers&quot;) to supplement delivery capacity. Service
              Providers are independent businesses that employ or engage their
              own delivery personnel.
            </p>
            <p>
              <strong>Service Provider Obligations.</strong> Service Providers
              agree to: ensure all their personnel meet the requirements set
              forth in ChopQik&apos;s Delivery Partner Agreement (age 18+, valid
              licence, insurance); maintain comprehensive third-party liability
              insurance for all vehicles and personnel; assume full
              responsibility for the acts and omissions of their personnel;
              comply with all Nigerian labour laws regarding their employees or
              contractors; and indemnify ChopQik for any claims arising from
              their personnel&apos;s conduct.
            </p>
            <p>
              <strong>No Vicarious Liability.</strong> ChopQik shall not be
              liable for any acts, omissions, or misconduct of Service Provider
              personnel. The Service Provider agrees to defend and indemnify
              ChopQik against any claims seeking to impose liability on ChopQik
              for actions of Service Provider personnel.
            </p>
            <p>
              <strong>Insurance Requirements.</strong> Service Providers must
              maintain at their sole expense: (a) comprehensive third-party
              motor insurance for all vehicles; (b) public liability insurance
              with minimum coverage of &#8358;5,000,000 (Five Million Naira);
              and (c) workers&apos; compensation insurance for employees where
              applicable under the Employee&apos;s Compensation Act 2010.
            </p>
            <p>
              <strong>Quality Standards.</strong> Service Providers must ensure
              personnel comply with ChopQik&apos;s delivery standards, including
              use of thermal bags, phone mounts, and professional conduct.
            </p>
            <p>
              <strong>Termination.</strong> ChopQik may terminate any Service
              Provider immediately upon notice for safety violations, repeated
              customer complaints, or breach of this Agreement.
            </p>

            <h3>6. User Conduct and Prohibited Activities</h3>
            <p>
              You agree to use the Platform in compliance with applicable laws
              and to respect other users. Prohibited activities include, but are
              not limited to: (a) violating any law or regulation; (b) providing
              false, misleading, or infringing content; (c) transmitting viruses
              or malicious code; (d) attempting to gain unauthorised access to
              our systems; (e) harassing, abusing, or harming another person;
              (f) discriminating on the basis of race, ethnicity, gender,
              religion, disability, or any other protected characteristic; (g)
              damaging property; or (h) using the Platform to facilitate money
              laundering or other financial crimes. Our Community Guidelines
              below provide further details. ChopQik may investigate and take
              legal action against any user who engages in prohibited conduct.
            </p>

            <h3>7. Third-Party Links</h3>
            <p>
              The Platform may contain links to third-party websites,
              applications, or services that are not owned or controlled by
              ChopQik. We provide these links for convenience only and do not
              endorse or assume responsibility for the content, products, or
              services offered by third parties. When you access third-party
              sites you do so at your own risk and are subject to their terms of
              use and privacy policies. We encourage you to read those policies
              carefully.
            </p>

            <h3>8. Limitation of Liability</h3>
            <p>
              <strong>Goods Quality and Safety.</strong> Under the FCCPA,
              consumers have the right to return products and receive a refund
              if the goods are defective, unsafe, or fail to match their
              advertised description. Partners are responsible for ensuring that
              the goods they sell are safe and meet applicable standards.
              ChopQik makes no representations or warranties about the quality,
              safety, or fitness for a particular purpose of the goods.
            </p>
            <p>
              <strong>Actions of Partners and Delivery Partners.</strong>{" "}
              ChopQik is not liable for the acts or omissions of Partners or
              Delivery Partners. Partners control the preparation and packaging
              of goods and are solely responsible for hygiene and compliance
              with food safety laws. Delivery Partners are independent
              contractors responsible for their conduct on the road (including
              compliance with traffic rules, vehicle maintenance, and
              insurance).
            </p>
            <p>
              <strong>Service Availability.</strong> The Platform and services
              are provided &quot;as is&quot; and &quot;as available&quot;
              without warranties of any kind, whether express or implied. We do
              not guarantee that the Platform will operate uninterrupted or
              error-free.
            </p>
            <p>
              <strong>Liability Cap.</strong> To the fullest extent permitted by
              law, ChopQik and its affiliates will not be liable for indirect,
              incidental, special, or consequential damages or any loss of
              profits, data, or goodwill. Our total aggregate liability to you
              for any claim related to the services will not exceed the greater
              of (i) the service fees you paid to ChopQik in the three months
              preceding the claim, or (ii) &#8358;50,000 (Fifty Thousand Naira).
              Nothing in these Terms excludes or limits liability for death or
              personal injury caused by negligence, fraud, or fraudulent
              misrepresentation.
            </p>

            <h3>9. Indemnification</h3>
            <p>
              You agree to defend, indemnify, and hold harmless ChopQik Ltd.,
              its affiliates, officers, directors, employees, and agents from
              any claims, damages, losses, and expenses (including reasonable
              legal fees) arising out of or related to: (a) your use of the
              Platform; (b) your violation of these Terms; (c) your violation of
              applicable law; or (d) your interaction with Partners or Delivery
              Partners.
            </p>

            <h3>10. Dispute Resolution and Governing Law</h3>
            <p>
              These Terms are governed by and construed in accordance with the
              laws of the Federal Republic of Nigeria.
            </p>
            <p>
              <strong>Negotiation and Mediation.</strong> If a dispute arises,
              the parties will first attempt to resolve it through good-faith
              negotiations. If the dispute cannot be resolved within thirty (30)
              days, the parties agree to attempt resolution through mediation
              administered by an independent mediator mutually agreed upon by
              both parties.
            </p>
            <p>
              <strong>Arbitration.</strong> If mediation fails, any dispute
              arising out of or relating to these Terms or the services shall be
              submitted to binding arbitration in accordance with the
              Arbitration and Mediation Act 2023 and either the Rules of the
              Lagos Court of Arbitration (LCA) or, where the parties agree, the
              UNCITRAL Arbitration Rules. The seat of arbitration shall be
              Lagos, Nigeria, and hearings may be conducted virtually. In
              accordance with applicable provisions of the Arbitration and
              Mediation Act 2023, parties shall deposit an advance on costs of
              arbitration, paid in equal shares. The arbitral tribunal shall
              consist of one (1) arbitrator, unless the parties agree otherwise.
              Each party shall bear its own legal costs, and the tribunal may
              apportion the costs of arbitration in the final award. The award
              of the arbitrator shall be final and binding on the parties and
              may be enforced in any court of competent jurisdiction.
            </p>
            <p>
              <strong>Jurisdiction.</strong> Notwithstanding the foregoing, the
              parties agree that Nigerian courts retain jurisdiction to grant
              interim or conservatory relief and to enforce or set aside
              arbitration awards in accordance with the Arbitration and
              Mediation Act 2023.
            </p>

            <h3>11. Force Majeure</h3>
            <p>
              ChopQik shall not be liable for any delay or failure to perform
              its obligations under these Terms where such delay or failure
              results from events beyond its reasonable control, including but
              not limited to natural disasters, epidemics, pandemics, government
              actions or restrictions, civil unrest, internet or
              telecommunications failures, power outages, or acts of terrorism
              (&quot;Force Majeure Event&quot;). ChopQik will make reasonable
              efforts to notify affected users and to resume performance as soon
              as practicable.
            </p>

            <h3>12. Severability</h3>
            <p>
              If any provision of these Terms is found by a court or tribunal of
              competent jurisdiction to be invalid, illegal, or unenforceable,
              that provision shall be severed from the remaining Terms, which
              shall continue in full force and effect. The invalid provision
              shall be modified to the minimum extent necessary to make it valid
              and enforceable while preserving the parties&apos; original
              intent.
            </p>

            <h3>13. Entire Agreement</h3>
            <p>
              These Terms, together with the Privacy Policy, Cookie Policy,
              Community Guidelines, and any other policies referenced herein,
              constitute the entire agreement between you and ChopQik with
              respect to your use of the Platform and supersede all prior or
              contemporaneous understandings, agreements, or representations.
            </p>

            <h3>14. Changes to Terms</h3>
            <p>
              We may modify these Terms from time to time. Material changes will
              be posted on the Platform along with an updated effective date.
              Where required by law, we will notify you by email or through the
              app at least fourteen (14) days before the changes take effect.
              Your continued use of the Platform after changes become effective
              constitutes acceptance of the updated Terms. If you do not agree
              with the changes, you must cease using the Platform.
            </p>

            <h2 id="privacy-policy" className="scroll-mt-36">
              Privacy Policy
            </h2>
            <p>
              <strong>Last Updated:</strong> March 2026
            </p>
            <h3>1. Introduction and Scope</h3>
            <p>
              This Privacy Policy explains how ChopQik Ltd. (&quot;we&quot;,
              &quot;our&quot;, or &quot;us&quot;) collects, uses, shares, and
              protects personal information when you access or use our Platform
              and services in Nigeria. We comply with the Nigeria Data
              Protection Act (NDPA) 2023, the Nigeria Data Protection Regulation
              (NDPR) 2019, and other applicable data protection laws. By using
              the Platform you consent to the practices described herein. Where
              we rely on consent as a lawful basis for processing, you may
              withdraw your consent at any time by contacting us or adjusting
              your account settings, without affecting the lawfulness of
              processing based on consent before its withdrawal.
            </p>

            <h3>2. Information We Collect</h3>
            <p>
              We collect information in three ways: (1) information you provide
              directly, (2) information collected automatically when you use the
              Platform, and (3) information we receive from third parties.
            </p>

            <h3>Information You Provide:</h3>
            <ul>
              <li>
                Personal and contact information: name, email address, phone
                number, billing and delivery address, and government-issued
                identification where required for verification.
              </li>
              <li>
                Account details: profile photo, preferences, settings, and login
                credentials.
              </li>
              <li>
                Order information: items ordered, quantities, prices, delivery
                instructions, and special requests.
              </li>
              <li>
                Payment information: cardholder name and masked payment card
                data. Full card numbers are processed by our payment partners
                and we do not store them.
              </li>
              <li>
                Communications: customer support messages, reviews, ratings,
                survey responses, and other communications.
              </li>
            </ul>

            <h3>Information Collected Automatically:</h3>
            <ul>
              <li>
                Geolocation data: if you enable location services, we collect
                your precise or approximate location to show nearby Partners,
                estimate delivery times, and assign deliveries. You may disable
                location access through your device settings, but some features
                may not function properly.
              </li>
              <li>
                Device and technical information: device type, operating system,
                browser type, IP address, app version, access times, and
                diagnostic logs.
              </li>
              <li>
                Usage information: pages viewed, search queries, order history,
                session duration, and navigation patterns.
              </li>
              <li>
                Cookies and similar technologies: we use cookies to operate the
                Platform, remember your preferences, analyse traffic, and
                personalise content. See our Cookie Policy for details.
              </li>
            </ul>

            <p>
              <strong>Information from Third Parties.</strong> We may receive
              information from Partners, Delivery Partners, authentication
              providers (e.g., Apple, Google), analytics providers, and payment
              processors (e.g., updates on payment status).
            </p>

            <h3>3. Lawful Basis for Processing</h3>
            <p>
              Under the NDPA 2023, we process your personal data on the
              following lawful bases: (a) your consent, which you may withdraw
              at any time; (b) performance of a contract (e.g., processing your
              orders); (c) compliance with a legal obligation; and (d) our
              legitimate interests, provided these do not override your
              fundamental rights and freedoms.
            </p>

            <h3>4. How We Use Your Information</h3>
            <p>
              We use your information to operate, improve, and protect our
              services, including to:
            </p>
            <ul>
              <li>
                Provide and manage services: process and fulfil orders,
                communicate between customers, Partners and Delivery Partners,
                authenticate users, process payments and refunds, and provide
                customer support.
              </li>
              <li>
                Improve and personalise: analyse usage trends and performance,
                enhance functionality and user experience, recommend Partners or
                products based on your preferences and location, and develop new
                features.
              </li>
              <li>
                Communications: send confirmations, receipts, delivery updates,
                and respond to inquiries. We may also send you marketing
                messages with your consent; you may opt out at any time.
              </li>
              <li>
                Safety, security, and fraud prevention: monitor transactions,
                prevent fraudulent or illegal activity, investigate violations,
                enforce our Terms, and protect our rights.
              </li>
              <li>
                Compliance and legal obligations: comply with laws, respond to
                legal requests, maintain records, and protect our legal rights.
              </li>
              <li>
                Aggregated or de-identified insights: create anonymised
                analytics and reports for market research and service
                optimisation.
              </li>
            </ul>

            <h3>5. How We Share and Disclose Information</h3>
            <p>
              We do not sell or rent your personal information. We may share
              information in the following circumstances:
            </p>
            <ul>
              <li>
                Service providers and operational partners: We share your
                contact, order, and location information with Partners and
                Delivery Partners to fulfil orders. We also share information
                with trusted service providers that assist us with payment
                processing, hosting, analytics, customer support, marketing, and
                communication. These providers are contractually required to
                protect your information and use it only for the purposes
                provided.
              </li>
              <li>
                Business transfers: If ChopQik participates in a merger,
                acquisition, restructuring, or sale of assets, your information
                may be transferred to a successor entity subject to the same
                privacy obligations.
              </li>
              <li>
                Legal obligations and safety: We may disclose information to
                comply with legal obligations, respond to lawful government
                requests, enforce our Terms, protect rights and safety, or
                prevent fraud.
              </li>
              <li>
                Aggregated or de-identified information: We may share aggregated
                data that does not personally identify you.
              </li>
            </ul>

            <h3>6. Data Security and Retention</h3>
            <p>
              We employ physical, technical, and administrative measures -
              including secure servers, encryption, access controls, and regular
              security audits - to protect personal information. Nevertheless,
              no method of transmission or storage is entirely secure. We retain
              personal data only as long as necessary to fulfil the purposes
              described herein or as required by law. Upon expiry of the
              retention period, personal data will be securely deleted or
              anonymised.
            </p>

            <h3>7. Data Breach Notification</h3>
            <p>
              In the event of a personal data breach that is likely to result in
              risk to the rights and freedoms of data subjects, ChopQik will
              notify the Nigeria Data Protection Commission (NDPC) within
              seventy-two (72) hours of becoming aware of the breach, in
              accordance with the NDPA 2023. Where the breach is likely to
              result in a high risk to affected individuals, we will also notify
              the affected data subjects without undue delay.
            </p>

            <h3>8. Your Rights and Choices</h3>
            <p>
              Under the NDPA 2023 and NDPR, you have the following rights
              regarding your personal data:
            </p>
            <ul>
              <li>
                Access, correction, and deletion: You may access or update your
                personal information via your account or request deletion by
                contacting us.
              </li>
              <li>
                Withdrawal of consent: Where processing is based on consent, you
                may withdraw your consent at any time. Withdrawal does not
                affect the lawfulness of processing carried out prior to
                withdrawal.
              </li>
              <li>
                Opt out of marketing: You may opt out of promotional
                communications through the unsubscribe link or by contacting us.
              </li>
              <li>
                Location and notification preferences: You can enable or disable
                location services, push notifications, or SMS communications
                through your device settings.
              </li>
              <li>
                Data portability: Subject to certain conditions, you may request
                a copy of your data in a structured, commonly used, and
                machine-readable format.
              </li>
              <li>
                Right to object: You may object to processing based on
                legitimate interests where you believe your fundamental rights
                override those interests.
              </li>
              <li>
                Lodge a complaint: You may lodge a complaint with the Nigeria
                Data Protection Commission if you believe your rights have been
                violated.
              </li>
            </ul>

            <h3>9. Children&apos;s Data</h3>
            <p>
              The Platform is not intended for persons under the age of 18. We
              do not knowingly collect personal data from children. If we become
              aware that we have collected personal data from a child without
              appropriate parental or guardian consent, we will take steps to
              delete such data promptly. If you believe we have collected
              information from a child, please contact us immediately.
            </p>

            <h3>10. International Data Transfers</h3>
            <p>
              We may transfer personal data outside Nigeria to service providers
              and infrastructure located in other countries. When transferring
              data internationally, we implement appropriate safeguards in
              accordance with the NDPA 2023, such as Standard Contractual
              Clauses (SCCs), adequacy decisions, or other lawful transfer
              mechanisms. By using our services you consent to these transfers,
              subject to the safeguards described.
            </p>

            <h3>11. Sub-processors</h3>
            <p>
              ChopQik engages third-party processors
              (&quot;sub-processors&quot;) to process personal data on our
              behalf. Categories of sub-processors include:
            </p>
            <ul>
              <li>
                Payment gateways (e.g., Paystack, Flutterwave) to process
                payments securely.
              </li>
              <li>
                Cloud hosting providers (e.g., AWS, Azure) to host our Platform
                and store data.
              </li>
              <li>
                Customer support tools (e.g., Zendesk) to manage customer
                inquiries.
              </li>
              <li>
                Analytics providers (e.g., Google Analytics) to analyse usage
                patterns and improve services.
              </li>
              <li>
                Marketing and communications services (e.g., email delivery
                providers) to send transactional and marketing emails.
              </li>
            </ul>
            <p>
              Each sub-processor enters into a data processing agreement with
              ChopQik that requires compliance with the NDPA 2023 and NDPR and
              prohibits unauthorised data use.
            </p>

            <h3>12. Contact Information and Data Protection Officer</h3>
            <p>
              In compliance with the NDPA 2023 and Regulation 3.1(7) of the
              NDPR, our Data Protection Officer (DPO) is reachable at
              dpo@chopqik.com. For any privacy questions, requests, or
              complaints, please contact our DPO or write to ChopQik Ltd., No.
              136, Second East Circular Road, Benin City, Edo State, Nigeria.
            </p>

            <h3>13. Changes to this Privacy Policy</h3>
            <p>
              We may update this Privacy Policy periodically. We will post the
              updated version on the Platform with a revised effective date and
              notify users of material changes via email or the app at least
              fourteen (14) days before they take effect. Your continued use of
              the services after the effective date constitutes acceptance of
              the updated policy.
            </p>

            <h2 id="cookie-policy" className="scroll-mt-36">
              Cookie Policy
            </h2>
            <p>
              <strong>Last Updated:</strong> March 2026
            </p>
            <h3>1. What Are Cookies?</h3>
            <p>
              Cookies are small text files stored on your device when you visit
              a website. They enable core functionality, remember preferences,
              enhance user experience, and analyse how the site is used. Cookies
              may be session cookies (deleted when you close your browser) or
              persistent cookies (remain on your device until expired or
              deleted).
            </p>

            <h3>2. Types of Cookies We Use</h3>
            <ul>
              <li>
                Essential cookies: Necessary for the Platform to function (e.g.,
                to keep you logged in or process payments). You cannot opt out
                of these without impacting our services.
              </li>
              <li>
                Functional cookies: Remember your preferences (such as language
                or region) and provide enhanced features.
              </li>
              <li>
                Performance/analytics cookies: Collect aggregated information
                about how visitors use the Platform so we can improve
                functionality and user experience.
              </li>
              <li>
                Advertising/targeting cookies: May be set by us or by
                advertising partners to build a profile of your interests and
                show relevant advertisements.
              </li>
            </ul>

            <h3>3. Managing Cookies</h3>
            <p>
              You can manage or disable cookies through your browser settings.
              Most browsers allow you to refuse all cookies or to receive alerts
              when cookies are being sent. Note that disabling certain cookies
              may affect the functionality of our Platform. You may also opt out
              of targeted advertising through industry tools. In compliance with
              the NDPA 2023, we will obtain your consent before placing
              non-essential cookies on your device. For more information on how
              we handle your personal data, please refer to our Privacy Policy.
            </p>

            <h3>4. Changes to this Cookie Policy</h3>
            <p>
              We may update this Cookie Policy periodically to reflect changes
              in technology or regulatory requirements. Updated versions will be
              posted on our Platform with a revised effective date.
            </p>

            <h2 id="partner-agreement" className="scroll-mt-36">
              Partner Agreement (Restaurants, Grocery Stores and Shops)
            </h2>
            <p>
              <strong>Last Updated:</strong> March 2026
            </p>
            <h3>1. Introduction and Definitions</h3>
            <p>
              This Partner Agreement (the &quot;Agreement&quot;) is between
              ChopQik Ltd. (&quot;ChopQik&quot;) and the business entering into
              this Agreement (&quot;Partner&quot; or &quot;you&quot;). ChopQik
              operates a marketplace connecting Partners who sell food,
              groceries, and retail goods (&quot;Products&quot;) with customers
              and arranges delivery through independent couriers. Each Partner
              is an independent business responsible for its goods and
              operations.
            </p>
            <p>
              <strong>Definitions:</strong>
            </p>
            <ul>
              <li>
                &quot;Platform&quot; means the ChopQik website, mobile
                applications, and related technology services.
              </li>
              <li>
                &quot;Partner Content&quot; means all menus, product
                descriptions, prices, images, trademarks, and other materials
                provided by Partner.
              </li>
            </ul>

            <h3>2. Services Provided by ChopQik</h3>
            <p>ChopQik will:</p>
            <ul>
              <li>
                Provide access to the Platform for listing Partner&apos;s
                Products and displaying Partner Content to customers.
              </li>
              <li>
                Facilitate the placement of orders by customers and transmit
                order details to the Partner.
              </li>
              <li>
                Process payments from customers on Partner&apos;s behalf and
                arrange settlement of amounts due to Partner, subject to the
                commission and other fees described below.
              </li>
              <li>
                Coordinate logistics with Delivery Partners to collect Products
                from Partner&apos;s location and deliver them to customers.
              </li>
              <li>
                Provide limited customer support and order-related assistance.
              </li>
            </ul>

            <h3>3. Partner Obligations</h3>
            <p>
              The Partner acknowledges that ChopQik&apos;s performance depends
              on Partner&apos;s timely and accurate performance. Partner agrees
              to:
            </p>
            <p>
              <strong>Accurate Information.</strong> Provide and maintain
              accurate menus, product descriptions, prices, availability, and
              images, including all required ingredient, allergen, and
              nutritional information. Provide descriptions in plain and
              understandable language, as the FCCPA requires that consumers have
              the right to information about goods in plain language.
            </p>
            <p>
              <strong>Food Safety and Quality.</strong> Prepare and package
              Products in a clean and sanitary manner in accordance with food
              safety laws, including listing allergens and preventing
              cross-contamination (see Food Safety and Allergy Policy). Partner
              is solely responsible for the quality and safety of Products.
            </p>
            <p>
              <strong>Licences and Compliance.</strong> Maintain all licences,
              permits, and certifications required for operating the business
              and selling the Products. Comply with all applicable laws
              (including food, health, safety, consumer, and tax laws).
            </p>
            <p>
              <strong>Order Fulfilment.</strong> Accept or reject orders
              promptly. Once an order is accepted, fulfil it in a timely manner
              and ensure that Products are available and packaged properly for
              pickup by Delivery Partners.
            </p>
            <p>
              <strong>Customer Service and Complaints.</strong> Handle customer
              inquiries, complaints, cancellations, and refund requests in
              accordance with applicable law and cooperate with ChopQik in
              resolving disputes.
            </p>
            <p>
              <strong>Equipment.</strong> Use any tablets, printers, or other
              equipment provided by ChopQik for order management only, maintain
              the equipment in good condition, and return it upon request or
              termination.
            </p>
            <p>
              <strong>Confidentiality.</strong> Protect ChopQik&apos;s
              confidential information, including non-public data about our
              business, customers, and technology. This obligation survives
              termination of this Agreement.
            </p>
            <p>
              <strong>Data Protection.</strong> Comply with the NDPA 2023 and
              NDPR with respect to any personal data received through the
              Platform. Partner shall not use customer personal data for any
              purpose other than fulfilling orders placed through the Platform.
            </p>

            <h3>4. Fees and Payouts</h3>
            <p>
              <strong>Commission.</strong> Partner will pay ChopQik a commission
              on each order, calculated as a percentage of the Product price.
              The applicable commission rates are agreed during onboarding and
              documented in the onboarding schedule, and may vary by category or
              promotion.
            </p>
            <p>
              <strong>Payment Processing.</strong> After each settlement period
              (e.g., weekly), ChopQik will aggregate amounts collected for
              Partner&apos;s orders (the &quot;Collected Revenues&quot;) and
              deduct the commission fee and any other applicable fees (e.g.,
              payment processing fees, small-order fees, promotional fees).
            </p>
            <p>
              <strong>Payout.</strong> ChopQik will remit the remaining amount
              to Partner&apos;s designated bank account within the period
              specified in the onboarding schedule after the end of the
              settlement period. We will provide statements showing orders,
              fees, and payouts.
            </p>
            <p>
              <strong>Taxes.</strong> Partner is the seller of record and is
              responsible for all applicable taxes on the sale of Products,
              including Value Added Tax (VAT) where applicable. Partner agrees
              to indemnify ChopQik from any tax liabilities relating to
              Partner&apos;s Products.
            </p>

            <h3>5. Intellectual Property</h3>
            <p>
              <strong>Partner Ownership.</strong> Partner retains all rights in
              its trademarks, menus, and other Partner Content.
            </p>
            <p>
              <strong>Licence to ChopQik.</strong> Partner grants ChopQik a
              non-exclusive, royalty-free licence to use, display, reproduce,
              distribute, and modify Partner Content solely as necessary to
              provide the services and promote the Products on the Platform.
              ChopQik will comply with any brand guidelines provided by Partner.
              This licence terminates upon termination of this Agreement, except
              as necessary to fulfil outstanding orders.
            </p>
            <p>
              <strong>Feedback.</strong> ChopQik may use and incorporate any
              feedback or suggestions provided by Partner without obligation or
              compensation.
            </p>

            <h3>6. Relationship of the Parties</h3>
            <p>
              Partner and ChopQik are independent contractors. Nothing in this
              Agreement creates an employment, agency, joint venture, or
              partnership relationship. Partner has no authority to bind ChopQik
              and vice versa. Delivery Partners are also independent contractors
              and not employees or agents of ChopQik.
            </p>

            <h3>7. Liability and Indemnification</h3>
            <p>
              <strong>Partner Liability.</strong> Partner is solely responsible
              for the Products it sells, including quality, safety, and
              regulatory compliance. Partner will defend and indemnify ChopQik
              and its affiliates against any claims, damages, or losses arising
              from (a) Partner&apos;s Products or content; (b) Partner&apos;s
              breach of this Agreement; or (c) Partner&apos;s failure to comply
              with applicable laws or regulations.
            </p>
            <p>
              <strong>ChopQik Liability.</strong> ChopQik&apos;s aggregate
              liability under this Agreement is limited to the amount of
              commission fees paid by Partner in the six (6) months preceding
              the event giving rise to the claim. ChopQik will not be liable for
              lost profits, consequential, or special damages.
            </p>

            <h3>8. Term and Termination</h3>
            <p>
              <strong>Term.</strong> This Agreement commences when Partner
              accepts it and continues until terminated by either party. Either
              party may terminate for convenience with thirty (30) days&apos;
              written notice.
            </p>
            <p>
              <strong>Termination for Cause.</strong> Either party may terminate
              immediately if the other materially breaches this Agreement and
              fails to cure the breach within thirty (30) days after receiving
              written notice. Either party may also terminate if the other
              becomes insolvent or files for bankruptcy.
            </p>
            <p>
              <strong>Effect of Termination.</strong> Upon termination, ChopQik
              will remit any amounts due for orders fulfilled before the
              termination date, less applicable fees. Each party will return or
              securely destroy the other&apos;s confidential information.
              Provisions that by their nature should survive termination
              (confidentiality, data protection, intellectual property,
              liability, dispute resolution) will remain in effect.
            </p>

            <h3>9. Governing Law and Dispute Resolution</h3>
            <p>
              This Agreement is governed by Nigerian law. Disputes shall be
              resolved in accordance with the dispute resolution provisions set
              forth in the Terms of Service.
            </p>

            <h3>10. Miscellaneous</h3>
            <p>
              This Agreement constitutes the entire understanding between the
              parties and supersedes all prior agreements on its subject matter.
              ChopQik may update this Agreement by providing at least fourteen
              (14) days&apos; notice through the Partner portal or email;
              Partner&apos;s continued use of the Platform after updates
              constitutes acceptance. Neither party may assign this Agreement
              without the other&apos;s written consent, except that ChopQik may
              assign to an affiliate or successor. If any provision of this
              Agreement is held to be unenforceable, the remaining provisions
              shall continue in full force and effect.
            </p>

            <h2 id="delivery-partner-agreement" className="scroll-mt-36">
              Delivery Partner Agreement
            </h2>
            <p>
              Delivery Partners are independent contractors, not employees. They
              control how deliveries are performed, may accept or reject
              opportunities, and must comply with applicable legal and safety
              obligations.
            </p>
            <ul>
              <li>
                Minimum age 18 with valid Nigerian license or rider permit.
              </li>
              <li>
                Roadworthy vehicle, phone mount, thermal bag, and
                internet-enabled phone.
              </li>
              <li>
                Comprehensive third-party insurance maintained at own cost.
              </li>
              <li>
                Tax reporting and payment obligations are the delivery partner’s
                responsibility.
              </li>
            </ul>

            <h2
              id="acceptable-use-community-guidelines"
              className="scroll-mt-36"
            >
              Acceptable Use and Community Guidelines
            </h2>
            <p>
              <strong>Last Updated:</strong> March 2026
            </p>
            <p>
              ChopQik strives to foster a safe, respectful, and inclusive
              community. These guidelines apply to all customers, Partners, and
              Delivery Partners. Violations may result in warnings, account
              suspension, or termination.
            </p>
            <h3>1. Respect for Others</h3>
            <p>
              Treat everyone-customers, Partners, couriers, and ChopQik
              staff-with respect and courtesy. Avoid aggressive language,
              yelling, or unwanted physical contact. Do not contact another user
              after a delivery has been completed except to return lost property
              through official channels.
            </p>
            <h3>2. Anti-Discrimination</h3>
            <p>
              Discrimination on the basis of race, ethnicity, nationality,
              religion, gender identity, sexual orientation, marital status,
              pregnancy, disability, age, or any other protected characteristic
              is strictly prohibited. Do not deny service, cancel orders, or
              provide inferior service due to someone&apos;s protected status.
              Report discriminatory behaviour through the app; confirmed
              violations will result in account suspension or permanent removal
              from the Platform.
            </p>
            <h3>3. Safety and Compliance</h3>
            <p>
              Do not engage in conduct that endangers yourself or others. This
              includes physical violence, sexual misconduct, harassment,
              carrying weapons, and driving under the influence of alcohol or
              drugs. Do not commit fraud or theft. Respect property and do not
              damage vehicles, food packages, restaurants, or personal
              belongings.
            </p>
            <h3>4. Account Integrity</h3>
            <p>
              Do not share your ChopQik account or allow unauthorised persons to
              use it. Use accurate identity information. Provide truthful
              feedback and do not manipulate ratings or reviews.
            </p>
            <h3>5. Reporting Misconduct</h3>
            <p>
              If you encounter behaviour that violates these guidelines, report
              it through the app or contact support at support@chopqik.com. We
              take reports seriously and will investigate, and may suspend or
              terminate accounts based on our findings.
            </p>

            <h2 id="refunds-and-returns-policy" className="scroll-mt-36">
              Refunds and Returns Policy
            </h2>
            <p>
              <strong>Last Updated:</strong> March 2026
            </p>
            <h3>1. Scope</h3>
            <p>
              This policy governs refunds and credits for orders placed through
              ChopQik in Nigeria. It differentiates between refunds (money
              returned to your original payment method) and credits (balance
              applied to your ChopQik wallet).
            </p>

            <h3>2. Cancellation and Refund Eligibility</h3>
            <p>
              Under the FCCPA, consumers have the right to cancel reservations,
              bookings, or orders within a reasonable time without unfair
              penalties.
            </p>
            <p>
              <strong>Perishable Goods (Food and Groceries).</strong> Because
              many items sold via ChopQik are perishable, cancellations and
              refunds are subject to timing limitations. You may cancel an order
              before the Partner begins preparation and receive a full refund.
              Once preparation has begun, cancellations are generally not
              permitted unless the Partner agrees or if the product is defective
              or unsafe.
            </p>
            <p>
              <strong>Non-perishable Goods.</strong> For retail goods or
              non-perishable products, you may cancel or return the item within
              fourteen (14) days of delivery if it is unused and in its original
              packaging.
            </p>
            <p>
              <strong>Defective or Unsafe Goods.</strong> Under Section 122 of
              the FCCPA, consumers may return products and receive a full refund
              if the product is defective, unsafe, or not suitable for its
              intended use. You must notify us within a reasonable time and
              provide evidence (e.g., photographs) of the defect.
            </p>

            <h3>3. Refunds vs. Credits</h3>
            <p>
              <strong>Refunds.</strong> Refunds are returned to your original
              payment method. It may take five (5) to ten (10) business days for
              the refund to appear in your bank account due to bank processing
              times.
            </p>
            <p>
              <strong>Credits.</strong> Alternatively, you may request a ChopQik
              wallet credit, which is typically processed within twenty-four
              (24) hours and can be applied to future orders. Credits may
              include promotional value or bonus amounts at ChopQik&apos;s
              discretion.
            </p>

            <h3>4. Process for Returns and Refunds</h3>
            <ul>
              <li>
                Contact customer support through the app or by emailing
                support@chopqik.com.
              </li>
              <li>
                Provide the order number, reason for the request, and any
                evidence of defect.
              </li>
              <li>
                We may require return to the Partner or disposal per our
                instructions.
              </li>
              <li>
                We assess requests with Partners in good faith and provide a
                resolution within a reasonable time.
              </li>
              <li>
                If approved, we process a refund or issue credits accordingly.
              </li>
            </ul>

            <h3>5. Exclusions</h3>
            <p>
              Customised or personalised items, digital products, gift cards,
              and certain perishable goods that have been consumed or that
              cannot be returned due to health or hygiene reasons may not be
              eligible for refunds.
            </p>

            <h3>6. No Blanket &quot;No Refund&quot; Policies</h3>
            <p>
              Any blanket &quot;no refund&quot; policy is unenforceable under
              Nigerian law. Section 120 of the FCCPA states that a consumer has
              the right to cancel advance bookings or orders, subject to a
              reasonable cancellation fee. Partners may not impose unfair
              cancellation fees or rely on blanket no-refund clauses.
            </p>

            <h2 id="food-safety-allergy-policy" className="scroll-mt-36">
              Food Safety and Allergy Policy
            </h2>
            <p>
              <strong>Last Updated:</strong> March 2026
            </p>
            <p>
              ChopQik is committed to ensuring that food delivered through our
              Platform is safe and that customers with food allergies can make
              informed choices.
            </p>

            <h3>1. Partner Responsibilities</h3>
            <p>
              <strong>Ingredient and Allergen Disclosure.</strong> Partners must
              provide accurate ingredient lists and clearly identify common
              allergens (e.g., peanuts, tree nuts, milk, eggs, wheat, soy, fish,
              shellfish) on their menus. Providing allergen information promotes
              transparency and caters to diverse dietary needs.
            </p>
            <p>
              <strong>Cross-Contamination Prevention.</strong> Partners should
              implement practices to prevent cross-contamination, such as using
              separate cutting boards, utensils, and surfaces for
              allergen-containing foods. Staff should be trained to prevent
              cross-contamination and to respond appropriately to allergy
              inquiries.
            </p>
            <p>
              <strong>Food Safety Compliance.</strong> Partners must comply with
              Nigerian food safety regulations, including the National Agency
              for Food and Drug Administration and Control (NAFDAC) guidelines
              where applicable, maintain sanitary facilities, and ensure that
              products are stored and prepared at appropriate temperatures.
            </p>

            <h3>2. Customer Responsibilities</h3>
            <p>
              Customers with food allergies should review ingredient information
              provided by Partners and alert the Partner through order notes or
              by contacting customer support if they have specific allergy
              concerns. Customers are encouraged to contact the Partner directly
              for detailed allergen information.
            </p>

            <h3>3. Limitations</h3>
            <p>
              ChopQik does not prepare or handle food and cannot guarantee that
              any product sold through the Platform is free from allergens.
              While we require Partners to provide allergen information and
              implement safety measures, we cannot independently verify their
              compliance. Customers with severe allergies should exercise
              caution and contact the Partner directly before ordering.
            </p>

            <h2 id="anti-fraud-chargeback-policy" className="scroll-mt-36">
              Anti-Fraud and Chargeback Policy
            </h2>
            <p>
              <strong>Last Updated:</strong> March 2026
            </p>
            <p>
              ChopQik takes fraud seriously and employs monitoring systems to
              detect suspicious activity. We may suspend or terminate accounts
              engaged in fraud or misuse. You agree not to use stolen payment
              instruments, submit false claims, or misrepresent facts to obtain
              refunds, credits, or promotional benefits to which you are not
              entitled.
            </p>
            <p>
              If a chargeback occurs due to fraud or misuse, we may: (a) deduct
              the disputed amount from your account or future payouts; (b)
              pursue reimbursement through available legal channels; and (c)
              cooperate with law enforcement authorities. Repeated chargebacks
              or fraudulent activity may result in permanent account termination
              and referral to the appropriate authorities, including the
              Economic and Financial Crimes Commission (EFCC) where warranted.
            </p>

            <h2 id="anti-discrimination-policy" className="scroll-mt-36">
              Anti-Discrimination Policy
            </h2>
            <p>
              <strong>Last Updated:</strong> March 2026
            </p>
            <p>
              ChopQik prohibits discrimination by customers, Partners, and
              Delivery Partners. Discrimination includes refusing service,
              cancelling orders, or providing inferior service based on race,
              ethnicity, religion, nationality, gender identity, sexual
              orientation, disability, age, marital status, pregnancy, or any
              other characteristic protected under Nigerian law, including the
              Constitution of the Federal Republic of Nigeria 1999 (as amended)
              and the Discrimination Against Persons with Disabilities
              (Prohibition) Act 2018.
            </p>
            <p>
              ChopQik will investigate reports of discrimination promptly and
              may impose sanctions including warnings, suspension, or permanent
              termination of accounts. All users are expected to treat one
              another with dignity and respect.
            </p>

            <h2 id="accessibility-policy" className="scroll-mt-36">
              Accessibility Policy
            </h2>
            <p>
              <strong>Last Updated:</strong> March 2026
            </p>
            <p>
              ChopQik is committed to making our Platform accessible to people
              with disabilities, in line with the Discrimination Against Persons
              with Disabilities (Prohibition) Act 2018. We strive to conform to
              the Web Content Accessibility Guidelines (WCAG) 2.1 Level AA.
              Features we implement include keyboard navigation, screen reader
              compatibility, alt text for images, colour contrast, semantic
              HTML, focus indicators, and responsive design.
            </p>
            <p>
              We conduct manual and automated accessibility testing and continue
              to improve our Platform. If you encounter accessibility barriers,
              please contact accessibility@chopqik.com so we can address your
              concerns promptly.
            </p>

            <h2 id="ip-copyright-policy" className="scroll-mt-36">
              Intellectual Property and Copyright Infringement Policy
            </h2>
            <p>
              <strong>Last Updated:</strong> March 2026
            </p>
            <p>
              ChopQik respects intellectual property rights. Users may not
              upload or transmit content that infringes copyrights, trademarks,
              or other proprietary rights. This policy is consistent with the
              Nigerian Copyright Act 2022 and other applicable intellectual
              property laws.
            </p>
            <p>
              If you believe your copyrighted work has been infringed on the
              Platform, please send a notice to our designated agent at
              copyright@chopqik.com with the following information:
            </p>
            <ol>
              <li>
                Identification of the copyrighted work claimed to have been
                infringed.
              </li>
              <li>
                Identification of the infringing material and its location on
                the Platform.
              </li>
              <li>Your contact information.</li>
              <li>
                A statement of good-faith belief that the use is not authorised
                by the copyright owner, its agent, or the law.
              </li>
              <li>
                A statement that the information in the notice is accurate and
                that you are the copyright owner or authorised to act on behalf
                of the owner.
              </li>
              <li>Your signature (electronic or physical).</li>
            </ol>
            <p>
              We will remove or disable access to the material upon receipt of a
              valid notice and, where appropriate, terminate accounts of repeat
              infringers. Counter-notification procedures are available for
              users who believe their content was removed in error.
            </p>

            <h2 id="data-processing-addendum" className="scroll-mt-36">
              Data Processing Addendum (DPA)
            </h2>
            <p>
              <strong>Last Updated:</strong> March 2026
            </p>
            <p>
              This DPA supplements the Privacy Policy and applies when ChopQik
              processes personal data on behalf of Partners or other business
              customers.
            </p>
            <h3>1. Roles and Definitions</h3>
            <p>
              For purposes of data protection laws, the Partner is the
              &quot;data controller&quot; and ChopQik is the &quot;data
              processor.&quot; Under the NDPA 2023 and NDPR, the controller
              determines the purposes and means of processing, while the
              processor processes personal data only on documented instructions
              from the controller.
            </p>
            <h3>2. Processor Obligations</h3>
            <p>
              ChopQik will: (a) process personal data only on the documented
              instructions of the data controller, unless required by law to do
              otherwise; (b) ensure that persons authorised to process the data
              are bound by appropriate confidentiality obligations; (c)
              implement appropriate technical and organisational measures to
              protect personal data, including encryption, access controls, and
              regular security assessments; (d) assist the controller in
              responding to data subject requests within the timeframes
              prescribed by the NDPA 2023; (e) notify the controller without
              undue delay (and in any event within forty-eight (48) hours) upon
              becoming aware of a personal data breach; (f) assist the
              controller with data protection impact assessments where required;
              and (g) delete or return all personal data after termination of
              the services, at the controller&apos;s election. ChopQik shall not
              sell personal data or use it for any purpose other than performing
              the services.
            </p>
            <h3>3. Sub-processors</h3>
            <p>
              The controller authorises ChopQik to engage sub-processors (as
              listed in the Privacy Policy) to process personal data on its
              behalf. ChopQik will notify the controller of any intended changes
              to sub-processors, providing the controller an opportunity to
              object. ChopQik will enter into written agreements with
              sub-processors that impose data protection obligations no less
              protective than those in this DPA. ChopQik remains liable for the
              acts and omissions of its sub-processors.
            </p>
            <h3>4. International Data Transfers</h3>
            <p>
              Where personal data is transferred outside Nigeria, ChopQik will
              ensure that the transfer is subject to appropriate safeguards in
              accordance with the NDPA 2023, such as Standard Contractual
              Clauses, adequacy decisions, or binding corporate rules.
            </p>
            <h3>5. Data Subject Rights and Audit</h3>
            <p>
              ChopQik will assist the controller in responding to data subject
              requests for access, rectification, erasure, restriction, or
              portability. ChopQik will make available information necessary to
              demonstrate compliance with this DPA and allow for audits by the
              controller or its authorised representative, subject to reasonable
              advance notice and conducted during normal business hours,
              provided that such audits do not interfere unreasonably with
              ChopQik&apos;s operations.
            </p>
            <h3>6. Governing Law and Jurisdiction</h3>
            <p>
              This DPA is governed by Nigerian law. Disputes shall be resolved
              according to the dispute resolution procedures set forth in the
              Terms of Service.
            </p>

            <h2 id="supplier-code-of-conduct" className="scroll-mt-36">
              Supplier Code of Conduct
            </h2>
            <p>
              <strong>Last Updated:</strong> March 2026
            </p>
            <p>
              ChopQik expects Partners and suppliers to uphold high standards of
              ethics and social responsibility. Suppliers must:
            </p>
            <ul>
              <li>
                <strong>Comply with laws:</strong> Adhere to all applicable laws
                and regulations, including labour, health and safety,
                environmental, and anti-corruption laws.
              </li>
              <li>
                <strong>Fair labour practices:</strong> Provide safe working
                conditions, fair wages, reasonable working hours, and respect
                workers&apos; rights to freedom of association and collective
                bargaining in accordance with Nigerian labour laws.
              </li>
              <li>
                <strong>Prohibit child and forced labour:</strong> Do not employ
                underage workers (as defined by the Child&apos;s Rights Act 2003
                and applicable state laws) or engage in forced labour.
              </li>
              <li>
                <strong>Health and safety:</strong> Maintain a safe and hygienic
                workplace and follow food safety standards, including NAFDAC
                guidelines where applicable.
              </li>
              <li>
                <strong>Environmental stewardship:</strong> Minimise
                environmental impact by managing waste, conserving resources,
                and preventing pollution.
              </li>
              <li>
                <strong>Ethical business practices:</strong> Avoid bribery,
                corruption, and conflicts of interest in accordance with the
                Corrupt Practices and Other Related Offences Act 2000. Keep
                accurate records and disclose relevant information.
              </li>
              <li>
                <strong>Data protection:</strong> Handle personal data in
                compliance with the NDPA 2023 and NDPR.
              </li>
            </ul>

            <h2 id="whistleblower-policy" className="scroll-mt-36">
              Whistleblower Policy
            </h2>
            <p>
              <strong>Last Updated:</strong> March 2026
            </p>
            <p>
              ChopQik encourages employees, Partners, and Delivery Partners to
              report suspected misconduct, including food safety violations,
              discrimination, fraud, data breaches, or other unethical
              behaviour. Reports may be made anonymously through
              whistleblower@chopqik.com.
            </p>
            <p>
              ChopQik will investigate all reports confidentially and promptly.
              We will not tolerate retaliation against anyone who raises a
              concern in good faith. Any person found to have engaged in
              retaliation will be subject to disciplinary action, up to and
              including termination of their relationship with ChopQik.
            </p>
            <p>
              This policy is consistent with the protections afforded to
              whistleblowers under Nigerian law.
            </p>

            <h2 id="service-fee-breakdown" className="scroll-mt-36">
              Service Fee Breakdown
            </h2>
            <p>
              <strong>Last Updated:</strong> March 2026
            </p>
            <p>
              Transparency in pricing is important to us. The total price you
              see at checkout includes the following components:
            </p>
            <ul>
              <li>
                <strong>Partner Price:</strong> The price set by the Partner for
                the item.
              </li>
              <li>
                <strong>Service Fee:</strong> A percentage of the item price
                that helps cover the cost of operating and improving the
                Platform, including maintaining technology infrastructure and
                providing customer support. The applicable service fee rate is
                displayed at checkout.
              </li>
              <li>
                <strong>Delivery Fee:</strong> A fee paid to Delivery Partners
                to compensate them for transportation and time. Delivery fees
                vary based on distance, time of day, and demand.
              </li>
              <li>
                <strong>Small Order Fee:</strong> A fee that may be applied to
                orders below a specified minimum to help cover the cost of
                fulfilment.
              </li>
              <li>
                <strong>Taxes:</strong> Applicable Value Added Tax (VAT) or
                other taxes required by Nigerian law.
              </li>
            </ul>
            <p>
              All fees and charges are disclosed before you confirm your order.
              You have the right to review and accept or decline the total cost
              before placing your order. ChopQik reserves the right to modify
              fee structures with prior notice to users.
            </p>

            <h2
              id="physical-address-contact-information"
              className="scroll-mt-36"
            >
              Physical Address and Contact Information
            </h2>
            <p>
              In compliance with Nigerian consumer and data protection laws, our
              contact details are provided below:
            </p>
            <ul>
              <li>
                Registered Address: ChopQik Ltd., No. 136, Second East Circular
                Road, Benin City, Edo State, Nigeria.
              </li>
              <li>Support Email: support@chopqik.com</li>
              <li>Data Protection Officer: dpo@chopqik.com</li>
              <li>Copyright Notices: copyright@chopqik.com</li>
              <li>Accessibility Concerns: accessibility@chopqik.com</li>
              <li>Whistleblower Reports: whistleblower@chopqik.com</li>
              <li>Telephone: +234-806-358-8816</li>
            </ul>
{/* 
            <div className="mt-16 p-8 bg-orange-50 rounded-2xl border border-orange-100 not-prose">
              <h3 className="text-xl font-bold text-zinc-900 mb-2">
                Need legal support?
              </h3>
              <p className="text-zinc-600 mb-6">
                If you need help interpreting any of these policies, contact our
                team and we will guide you.
              </p>
              <Link
                href="/#contact"
                className="inline-flex items-center justify-center px-6 py-3 bg-[#F2891C] text-white font-bold rounded-xl hover:bg-orange-500 transition-colors shadow-lg shadow-orange-500/20"
              >
                Contact Us
              </Link>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}
