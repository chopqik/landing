import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { SplashScreen } from "@/components/ui/splash-screen";
import { TawkToScript } from "@/components/ui/tawk-to-script";
import { MobileWaitlistButton } from "@/components/ui/mobile-waitlist-button";

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
  title: "ChopQik | Fast Food Delivery in Benin City",
  description:
    "Order items, food, and groceries from local vendors in Benin City. Fast delivery, fair prices, and reliable service. Download the app today.",
  keywords: [
    "Food Delivery Benin City",
    "ChopQik",
    "Fast Food Benin",
    "Grocery Delivery Benin City",
    "Food App Nigeria",
    "Restaurant Delivery",
    "Local Food Vendors",
  ],
  authors: [{ name: "ChopQik Team" }],
  openGraph: {
    title: "ChopQik - Fast Food Delivery in Benin City",
    description:
      "Order from local restaurants and street food vendors in Benin City—fast, affordable, and reliable.",
    url: "https://chopqik.com",
    siteName: "ChopQik",
    locale: "en_NG",
    type: "website",
    images: [
      {
        url: "/og-image.jpg", // Ensure this image exists in public folder or use a placeholder
        width: 1200,
        height: 630,
        alt: "ChopQik - Fast Food Delivery",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ChopQik - Fast Food Delivery in Benin City",
    description:
      "Order from local restaurants and street food vendors in Benin City—fast, affordable, and reliable.",
    // images: ["/twitter-image.jpg"],
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

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "DeliveryService",
  name: "ChopQik",
  image: "https://chopqik.com/images/CHOP_Q_white_and_orange.png",
  url: "https://chopqik.com",
  telephone: "+234 800 CHOPQIK", // Placeholder
  address: {
    "@type": "PostalAddress",
    streetAddress: "Benin City",
    addressLocality: "Benin City",
    addressRegion: "Edo",
    postalCode: "300001",
    addressCountry: "NG",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 6.335,
    longitude: 5.6037,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "08:00",
      closes: "22:00",
    },
  ],
  menu: "https://chopqik.com",
  servesCuisine: "Nigerian, Continental, Fast Food",
  priceRange: "₦500 - ₦15000",
};

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
        <TawkToScript />
        <MobileWaitlistButton />
      </body>
    </html>
  );
}
