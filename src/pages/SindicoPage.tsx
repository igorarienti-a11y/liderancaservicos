import Header from "@/components/landing/Header";
import HeroSection from "@/components/landing/HeroSection";
import CompactServicesSection from "@/components/landing/CompactServicesSection";
import StatsSection from "@/components/landing/StatsSection";
import CompactBenefits from "@/components/landing/CompactBenefits";
import CTASection from "@/components/landing/CTASection";
import LeadForm from "@/components/landing/LeadForm";
import Footer from "@/components/landing/Footer";
import MobileCTAButton from "@/components/landing/MobileCTAButton";
import heroImage from "@/assets/hero-sindico.jpg";
import { Users, Calendar, Wrench, DollarSign } from "lucide-react";

const SindicoPage = () => {
  const services = [
    {
      icon: <Users className="h-7 w-7 text-primary" />,
      title: "Síndico Profissional",
      description: "Gestão especializada",
    },
    {
      icon: <Calendar className="h-7 w-7 text-primary" />,
      title: "Gestão de Assembleias",
      description: "Organização e condução",
    },
    {
      icon: <Wrench className="h-7 w-7 text-primary" />,
      title: "Manutenção Predial",
      description: "Preventiva e corretiva",
    },
    {
      icon: <DollarSign className="h-7 w-7 text-primary" />,
      title: "Gestão Financeira",
      description: "Controle de contas",
    },
  ];

  const stats = [
    { value: "30", label: "Anos de experiência" },
    { value: "32 mil", label: "Colaboradores" },
    { value: "27", label: "Estados atendidos" },
    { value: "1000+", label: "Clientes satisfeitos" },
  ];

  const benefits = [
    { title: "Gestão imparcial e profissional" },
    { title: "Otimização de contratos e fornecedores" },
    { title: "Transparência total na prestação de contas" },
    { title: "Suporte 24h para emergências" },
    { title: "Assembleias organizadas e produtivas" },
    { title: "Valorização do patrimônio" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header ctaText="Falar com Especialista" />
      
      <HeroSection
        title="Gestão Profissional para seu"
        highlight="Condomínio"
        subtitle="Síndico profissional com experiência comprovada. Deixe a administração nas mãos de especialistas."
        heroImage={heroImage}
        ctaText="Falar com Especialista"
      />

      <MobileCTAButton />

      <StatsSection stats={stats} />

      <CompactServicesSection
        title="Serviços para Condomínios"
        services={services}
      />

      <CompactBenefits
        title="Por que escolher um Síndico Profissional?"
        subtitle="Benefícios de uma gestão especializada"
        benefits={benefits}
      />

      <CTASection
        title="Transforme a gestão do seu condomínio"
        subtitle="Solicite uma proposta personalizada e descubra como podemos ajudar."
        ctaText="Quero uma Proposta"
      />

      <LeadForm serviceName="Síndico Profissional" serviceType="sindico" />

      <Footer />
    </div>
  );
};

export default SindicoPage;
