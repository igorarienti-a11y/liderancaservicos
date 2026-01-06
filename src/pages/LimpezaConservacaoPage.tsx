import ServicePageTemplate from "@/components/landing/ServicePageTemplate";
import { Sparkles, Building, Factory, HeartPulse } from "lucide-react";

const LimpezaConservacaoPage = () => {
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
      icon: <Sparkles className="h-7 w-7 text-primary" />,
      title: "Conservação Predial",
      description: "Manutenção da limpeza diária",
    },
  ];

  const stats = [
    { value: "30+", label: "Anos de experiência" },
    { value: "15 mil+", label: "Profissionais de limpeza" },
    { value: "98%", label: "Satisfação" },
    { value: "500+", label: "Contratos ativos" },
  ];

  const benefits = [
    { title: "Processos padronizados de qualidade" },
    { title: "Produtos e equipamentos profissionais" },
    { title: "Equipes treinadas continuamente" },
    { title: "Flexibilidade de horários 24/7" },
    { title: "Práticas sustentáveis" },
    { title: "Supervisão e controle de qualidade" },
  ];

  return (
    <ServicePageTemplate
      heroTitle="Limpeza e"
      heroHighlight="Conservação"
      heroSubtitle="Ambientes limpos e conservados que impressionam. Equipes especializadas para manter seu espaço sempre impecável."
      heroImage="https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=1920&q=80"
      stats={stats}
      servicesTitle="Soluções em Limpeza"
      services={services}
      benefitsTitle="Limpeza que faz a diferença"
      benefitsSubtitle="Por que terceirizar limpeza com a Liderança"
      benefits={benefits}
      ctaTitle="Ambiente limpo, negócio saudável"
      ctaSubtitle="Solicite um orçamento para limpeza e conservação."
      serviceName="Limpeza e Conservação"
      serviceType="limpeza-conservacao"
    />
  );
};

export default LimpezaConservacaoPage;
