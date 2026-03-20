"use client";

import * as React from "react";
import { Hero, WaitlistCTA, ContactForm } from "@/components/sections";
// import { ServiceGrid } from "@/components/sections/service-grid";
import { RealityScroll } from "@/components/sections/reality-scroll";
import { HowItWorks } from "@/components/sections/how-it-works";
import { TestimonialSwitcher as SocialProof } from "@/components/sections/testimonials";
import { FAQSwitcher as FAQ } from "@/components/sections/faq";
import { BlogSection } from "@/components/sections/blog";
import { PartnerModal } from "@/components/forms/partner-modal";

export default function Home() {
  const [isPartnerModalOpen, setIsPartnerModalOpen] = React.useState(false);
  const [partnerTab, setPartnerTab] = React.useState<"vendor" | "rider">(
    "vendor",
  );

  const openPartnerModal = (tab: "vendor" | "rider") => {
    setPartnerTab(tab);
    setIsPartnerModalOpen(true);
  };

  return (
    <>
      <Hero
        onPartnerClick={() => openPartnerModal("vendor")}
        onVendorClick={() => openPartnerModal("vendor")}
        onRiderClick={() => openPartnerModal("rider")}
      />
      {/* <ServiceGrid /> */}
      <RealityScroll />
      <HowItWorks />
      <SocialProof />
      <BlogSection />
      <FAQ />
      <WaitlistCTA />
      <ContactForm />

      <PartnerModal
        isOpen={isPartnerModalOpen}
        onClose={() => setIsPartnerModalOpen(false)}
        defaultTab={partnerTab}
      />
    </>
  );
}
