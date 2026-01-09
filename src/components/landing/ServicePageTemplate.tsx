import { ReactNode } from "react";
import Header from "@/components/landing/Header";
import HeroSection from "@/components/landing/HeroSection";
import CompactServicesSection from "@/components/landing/CompactServicesSection";
import StatsSection from "@/components/landing/StatsSection";
import CompactBenefits from "@/components/landing/CompactBenefits";
import CTASection from "@/components/landing/CTASection";
import LeadForm from "@/components/landing/LeadForm";
import Footer from "@/components/landing/Footer";
import MobileCTAButton from "@/components/landing/MobileCTAButton";

interface ServiceItem {
  icon: ReactNode;
  title: string;
  description: string;
}

interface Stat {
  value: string;
  label: string;
}

interface Benefit {
  title: string;
  description?: string;
}

interface ServicePageTemplateProps {
  // Hero
  heroTitle: string;
  heroHighlight: string;
  heroSubtitle: string;
  heroImage: string;
  ctaText?: string;
  mobileImagePosition?: string;
  // Stats
  stats: Stat[];
  
  // Services
  servicesTitle: string;
  services: ServiceItem[];
  
  // Benefits
  benefitsTitle: string;
  benefitsSubtitle?: string;
  benefits: Benefit[];
  
  // CTA
  ctaTitle: string;
  ctaSubtitle: string;
  ctaButtonText?: string;
  
  // Form
  serviceName: string;
  serviceType: string;
}

const ServicePageTemplate = ({
  heroTitle,
  heroHighlight,
  heroSubtitle,
  heroImage,
  ctaText = "Solicitar Orçamento",
  mobileImagePosition,
  stats,
  servicesTitle,
  services,
  benefitsTitle,
  benefitsSubtitle,
  benefits,
  ctaTitle,
  ctaSubtitle,
  ctaButtonText = "Solicitar Orçamento Gratuito",
  serviceName,
  serviceType,
}: ServicePageTemplateProps) => {
  return (
    <div className="min-h-screen bg-background">
      <Header ctaText={ctaText} />
      
      <HeroSection
        title={heroTitle}
        highlight={heroHighlight}
        subtitle={heroSubtitle}
        heroImage={heroImage}
        ctaText={ctaText}
        mobileImagePosition={mobileImagePosition}
      />

      <MobileCTAButton />

      <StatsSection stats={stats} />

      <CompactServicesSection
        title={servicesTitle}
        services={services}
      />

      <CompactBenefits
        title={benefitsTitle}
        subtitle={benefitsSubtitle}
        benefits={benefits}
      />

      <CTASection
        title={ctaTitle}
        subtitle={ctaSubtitle}
        ctaText={ctaButtonText}
      />

      <LeadForm serviceName={serviceName} serviceType={serviceType} />

      <Footer />
    </div>
  );
};

export default ServicePageTemplate;
