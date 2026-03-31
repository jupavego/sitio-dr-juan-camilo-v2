import Hero from "@/components/home/hero";
import AboutSection from "@/components/home/about-section";
import InstitutionsStrip from "@/components/home/institutions-strip";
import ServicesSection from "@/app/services/page";
import TestimonialsSection from "@/components/home/testimonials-section";
import ContentSection from "@/components/home/content-section";
import ContactSection from "@/components/home/contact-section";

export default function Page() {
  return (
    <>
      <Hero />
      <AboutSection />
      <InstitutionsStrip />
      <ServicesSection />
      <TestimonialsSection />
      <ContentSection />
      <ContactSection />
    </>
  );
}