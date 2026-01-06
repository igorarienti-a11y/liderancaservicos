import Header from "@/components/landing/Header";
import HeroSection from "@/components/landing/HeroSection";
import CompactServicesSection from "@/components/landing/CompactServicesSection";
import StatsSection from "@/components/landing/StatsSection";
import CompactBenefits from "@/components/landing/CompactBenefits";
import CTASection from "@/components/landing/CTASection";
import LeadForm from "@/components/landing/LeadForm";
import Footer from "@/components/landing/Footer";
import heroImage from "@/assets/hero-limpeza.jpg";
import { Building, Factory, HeartPulse, Home } from "lucide-react";

const LimpezaPage = () => {
  const services = [
    {
      icon: <Building className="h-7 w-7 text-primary" />,
      title: "Limpeza Comercial",
      description: "Escritórios e espaços corporativos",
    },
    {
      icon: <Factory className="h-7 w-7 text-primary" />,
      title: "Limpeza Industrial",
      description: "Fábricas e galpões",
    },
    {
      icon: <HeartPulse className="h-7 w-7 text-primary" />,
      title: "Limpeza Hospitalar",
      description: "Clínicas e ambientes de saúde",
    },
    {
      icon: <Home className="h-7 w-7 text-primary" />,
      title: "Condomínios",
      description: "Áreas comuns e lazer",
    },
  ];

  const stats = [
    { value: "30+", label: "Anos de experiência" },
    { value: "15 mil+", label: "Profissionais de limpeza" },
    { value: "98%", label: "Satisfação dos clientes" },
    { value: "500+", label: "Contratos ativos" },
  ];

  const benefits = [
    { title: "Processos padronizados e checklist de qualidade" },
    { title: "Produtos premium e equipamentos profissionais" },
    { title: "Flexibilidade de horários 24/7" },
    { title: "Equipe treinada continuamente" },
    { title: "Práticas sustentáveis" },
    { title: "Supervisão e controle de qualidade" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header ctaText="Solicitar Orçamento" />
      
      <HeroSection
        title="Serviços de"
        highlight="Limpeza Profissional"
        subtitle="Ambientes impecáveis que impressionam. Equipe especializada, produtos de qualidade e processos certificados."
        heroImage={heroImage}
        ctaText="Quero um Orçamento"
      />

      <StatsSection stats={stats} />

      <CompactServicesSection
        title="Limpeza para Todos os Ambientes"
        services={services}
      />

      <CompactBenefits
        title="Limpeza que faz a diferença"
        subtitle="Por que as maiores empresas do Brasil confiam na Liderança"
        benefits={benefits}
      />

      <CTASection
        title="Ambiente limpo, negócio saudável"
        subtitle="Solicite um orçamento e transforme seu ambiente de trabalho."
        ctaText="Solicitar Orçamento Gratuito"
      />

      <LeadForm serviceName="Limpeza" serviceType="limpeza" />

      <Footer />
    </div>
  );
};

export default LimpezaPage;
