import Header from "@/components/landing/Header";
import HeroSection from "@/components/landing/HeroSection";
import CompactServicesSection from "@/components/landing/CompactServicesSection";
import StatsSection from "@/components/landing/StatsSection";
import CompactBenefits from "@/components/landing/CompactBenefits";
import CTASection from "@/components/landing/CTASection";
import LeadForm from "@/components/landing/LeadForm";
import Footer from "@/components/landing/Footer";
import MobileCTAButton from "@/components/landing/MobileCTAButton";
import heroFacilities from "@/assets/hero-facilities-new.png";
import { Wrench, Users, Building2, Coffee } from "lucide-react";

const FacilitiesPage = () => {
  const services = [
    {
      icon: <Wrench className="h-7 w-7 text-primary" />,
      title: "Manutenção Predial",
      description: "Elétrica, hidráulica e infraestrutura",
    },
    {
      icon: <Users className="h-7 w-7 text-primary" />,
      title: "Recepção e Portaria",
      description: "Atendimento profissional",
    },
    {
      icon: <Building2 className="h-7 w-7 text-primary" />,
      title: "Zeladoria",
      description: "Cuidado integral do patrimônio",
    },
    {
      icon: <Coffee className="h-7 w-7 text-primary" />,
      title: "Copa e Café",
      description: "Serviços com qualidade",
    },
  ];

  const stats = [
    { value: "30", label: "Anos de experiência" },
    { value: "32 mil", label: "Colaboradores" },
    { value: "27", label: "Estados atendidos" },
    { value: "1000+", label: "Clientes satisfeitos" },
  ];

  const benefits = [
    { title: "Gestão integrada de todos os serviços" },
    { title: "Redução de até 30% nos custos operacionais" },
    { title: "Equipe disponível 24 horas" },
    { title: "Profissionais treinados e certificados" },
    { title: "Manutenção preventiva planejada" },
    { title: "Relatórios e indicadores detalhados" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header ctaText="Solicitar Orçamento" />
      
      <HeroSection
        title="Gestão Completa de"
        highlight="Facilities"
        subtitle="Terceirize a gestão do seu empreendimento com quem tem mais de 30 anos de experiência. Foque no seu negócio enquanto cuidamos de tudo."
        heroImage={heroFacilities}
        ctaText="Quero um Orçamento"
      />

      <MobileCTAButton />

      <StatsSection stats={stats} />

      <CompactServicesSection
        title="Soluções Integradas para seu Empreendimento"
        services={services}
      />

      <CompactBenefits
        title="Por que terceirizar com a Liderança?"
        subtitle="Vantagens de ter um parceiro único para toda a gestão"
        benefits={benefits}
      />

      <CTASection
        title="Pronto para otimizar sua gestão?"
        subtitle="Solicite um orçamento personalizado e descubra como podemos ajudar sua empresa."
        ctaText="Solicitar Orçamento Gratuito"
      />

      <LeadForm serviceName="Facilities" serviceType="facilities" />

      <Footer />
    </div>
  );
};

export default FacilitiesPage;
