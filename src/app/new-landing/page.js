import HeroSection from "./_components/HeroSection";
import { CTASection, ChipsetRepairSection, DeviceRepairSection, FAQSection, ServicesSection, StickyMobileCTA, TrustBadgesSection, WhyChooseUsSection } from "./_components/LandingSections";

export const metadata = {
  title: "Motherboard & Chipset Repair Services | ChipsetFix",
  description: "Modern 2026 motherboard repair landing page for chipset repair, laptop repair, mobile repair, LED TV repair, camera repair, diagnostics, WhatsApp CTA, and call support.",
};

export default function NewLandingPage() {
  return (
    <main className="min-h-screen bg-slate-950 pb-20 text-white md:pb-0">
      <HeroSection />
      <ServicesSection />
      <WhyChooseUsSection />
      <ChipsetRepairSection />
      <DeviceRepairSection />
      <TrustBadgesSection />
      <FAQSection />
      <CTASection />
      <StickyMobileCTA />
    </main>
  );
}
