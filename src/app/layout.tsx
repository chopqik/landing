import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { SplashScreen } from "@/components/ui/splash-screen";
import { MobileWaitlistButton } from "@/components/ui/mobile-waitlist-button";
import Providers from "./Providers";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "ChopQik | The Operating System for Nigerian Restaurants",
  description:
    "ChopQik runs the whole floor for restaurants, bars and hotels — orders, stock, staff, reservations and daily takings on one screen. One flat monthly fee, no commission on any sale. Live in Benin City.",
  keywords: [
    "Restaurant POS Nigeria",
    "Restaurant management software Nigeria",
    "ChopQik",
    "Restaurant inventory software Nigeria",
    "Bar stock control Nigeria",
    "Hotel restaurant software Nigeria",
    "QR code ordering Nigeria",
    "Table reservation system Nigeria",
    "Restaurant software Benin City",
  ],
  authors: [{ name: "ChopQik LTD" }],
  openGraph: {
    title: "ChopQik | The Operating System for Nigerian Restaurants",
    description:
      "Orders, stock, staff, reservations and daily takings on one screen. One flat monthly fee. No commission on a single sale, ever.",
    url: "https://chopqik.com",
    siteName: "ChopQik",
    locale: "en_NG",
    type: "website",
    images: [
      {
        // TODO: this file does not exist yet. Until it does, every WhatsApp,
        // LinkedIn and X share of chopqik.com shows a blank preview box.
        // Needs one 1200x630 image in /public — a dashboard screenshot on the
        // charcoal background, not the logo.
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "The ChopQik vendor dashboard",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ChopQik | The Operating System for Nigerian Restaurants",
    description:
      "Orders, stock, staff, reservations and daily takings on one screen. One flat monthly fee. No commission on a single sale, ever.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://chopqik.com",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
};

// Structured data describing ChopQik as business software.
//
// This previously declared "@type": "DeliveryService" with servesCuisine,
// priceRange and restaurant opening hours — which told every search engine
// that ChopQik is a takeaway operating in Benin City. It is a SaaS product
// sold to restaurants, and the schema has to say so or the copy on the page
// and the machine-readable description of the company disagree.
//
// The telephone number is the ChopQik support line, the same one printed in
// the vendor dashboard footer. It answers on WhatsApp.
const SUPPORT_PHONE = "+2348063588816";
const SUPPORT_EMAIL = "support@chopqik.com";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "ChopQik",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web browser",
  url: "https://chopqik.com",
  image: "https://chopqik.com/images/CHOP_Q_white_and_orange.png",
  description:
    "An operating system for food and hospitality businesses in Nigeria. Orders, inventory, staff, reservations, catering, analytics and daily takings in one dashboard, with QR ordering for guests.",
  featureList: [
    "Counter and QR guest ordering",
    "Real-time stock control and theft prevention",
    "Staff accounts and permissions",
    "Table reservations",
    "Catering enquiries and estimates",
    "Daily takings and analytics",
  ],
  offers: {
    "@type": "Offer",
    price: "30000",
    priceCurrency: "NGN",
    description:
      "Flat monthly subscription. No commission on vendor sales. 60-day free trial.",
  },
  publisher: {
    "@type": "Organization",
    name: "ChopQik LTD",
    url: "https://chopqik.com",
    telephone: SUPPORT_PHONE,
    email: SUPPORT_EMAIL,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Benin City",
      addressRegion: "Edo",
      addressCountry: "NG",
    },
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer support",
      telephone: SUPPORT_PHONE,
      email: SUPPORT_EMAIL,
      areaServed: "NG",
      availableLanguage: ["English"],
    },
  },
  areaServed: {
    "@type": "Country",
    name: "Nigeria",
  },
};

// The Tawk.to live chat widget was removed here.
//
// It rendered a fixed panel over the bottom-right of every page, covering the
// no-commission line in the hero, the takings figure in the About section and
// the pricing card. It also promised "Hi! How can we help?" with an unread
// badge, implying someone is standing by — there is one person running this
// company, and an unanswered chat is worse than no chat. Vendors reach
// ChopQik on WhatsApp, which is answered.
//
// The component still exists at components/ui/tawk-to-script.tsx. To bring it
// back, restore the import and place <TawkToScript /> below <Footer />.

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased flex flex-col",
          jakarta.variable,
          inter.variable,
        )}
      >
        <Providers>
          <SplashScreen />
          <Navbar />
          <main className="flex-1">
            <script
              type="application/ld+json"
              dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            {children}
          </main>
          <Footer />
          <MobileWaitlistButton />
        </Providers>
      </body>
    </html>
  );
}
