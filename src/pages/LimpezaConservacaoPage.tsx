import ServicePageTemplate from "@/components/landing/ServicePageTemplate";
import { Sparkles, Building, Factory, HeartPulse } from "lucide-react";
import heroLimpezaConservacao from "@/assets/hero-limpeza-conservacao.png";

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
    { value: "30", label: "Anos de experiência" },
    { value: "32 mil", label: "Colaboradores" },
    { value: "27", label: "Estados atendidos" },
    { value: "1000+", label: "Clientes satisfeitos" },
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
      heroImage={heroLimpezaConservacao}
      mobileImagePosition="100%"
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
