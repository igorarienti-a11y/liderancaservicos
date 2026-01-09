import Header from "@/components/landing/Header";
import HeroSection from "@/components/landing/HeroSection";
import CompactServicesSection from "@/components/landing/CompactServicesSection";
import StatsSection from "@/components/landing/StatsSection";
import CompactBenefits from "@/components/landing/CompactBenefits";
import CTASection from "@/components/landing/CTASection";
import LeadForm from "@/components/landing/LeadForm";
import Footer from "@/components/landing/Footer";
import MobileCTAButton from "@/components/landing/MobileCTAButton";
import heroSeguranca from "@/assets/hero-seguranca-new.png";
import { Shield, Building2, DoorOpen, Camera } from "lucide-react";

const SegurancaPage = () => {
  const services = [
    {
      icon: <Shield className="h-7 w-7 text-primary" />,
      title: "Vigilância Patrimonial",
      description: "Proteção para empresas e indústrias",
    },
    {
      icon: <Building2 className="h-7 w-7 text-primary" />,
      title: "Segurança Condominial",
      description: "Residenciais e comerciais",
    },
    {
      icon: <DoorOpen className="h-7 w-7 text-primary" />,
      title: "Portaria e Recepção",
      description: "Controle de acesso profissional",
    },
    {
      icon: <Camera className="h-7 w-7 text-primary" />,
      title: "CFTV e Alarmes",
      description: "Monitoramento eletrônico 24h",
    },
  ];

  const stats = [
    { value: "30", label: "Anos de experiência" },
    { value: "32 mil", label: "Colaboradores" },
    { value: "27", label: "Estados atendidos" },
    { value: "1000+", label: "Clientes satisfeitos" },
  ];

  const benefits = [
    { title: "Vigilantes com curso de formação da PF" },
    { title: "Monitoramento eletrônico integrado" },
    { title: "Protocolos rigorosos de emergência" },
    { title: "Resposta rápida para ocorrências" },
    { title: "Controle de acesso completo" },
    { title: "Relatórios detalhados de segurança" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header ctaText="Solicitar Orçamento" />
      
      <HeroSection
        title="Segurança Patrimonial"
        highlight="de Excelência"
        subtitle="Proteja seu patrimônio com quem entende. Vigilantes treinados, tecnologia de ponta e protocolos rigorosos."
        heroImage={heroSeguranca}
        ctaText="Quero um Orçamento"
      />

      <MobileCTAButton />

      <StatsSection stats={stats} />

      <CompactServicesSection
        title="Soluções Completas em Segurança"
        services={services}
      />

      <CompactBenefits
        title="Segurança que você pode confiar"
        subtitle="Referência em segurança patrimonial há mais de 30 anos"
        benefits={benefits}
      />

      <CTASection
        title="Seu patrimônio merece proteção profissional"
        subtitle="Solicite um orçamento personalizado e proteja sua empresa."
        ctaText="Solicitar Orçamento Gratuito"
      />

      <LeadForm serviceName="Segurança" serviceType="seguranca" />

      <Footer />
    </div>
  );
};

export default SegurancaPage;
