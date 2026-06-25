import ServicePageTemplate from "@/components/landing/ServicePageTemplate";
import { HardHat, Wrench, Package, Users } from "lucide-react";
import heroMaoDeObra from "@/assets/hero-mao-de-obra.webp";

const MaoDeObraPage = () => {
  const services = [
    {
      icon: <HardHat className="h-7 w-7 text-primary" />,
      title: "Auxiliares de Produção",
      description: "Apoio à linha de produção",
    },
    {
      icon: <Package className="h-7 w-7 text-primary" />,
      title: "Operadores de Empilhadeira",
      description: "Logística e movimentação",
    },
    {
      icon: <Wrench className="h-7 w-7 text-primary" />,
      title: "Auxiliares Gerais",
      description: "Diversos segmentos",
    },
    {
      icon: <Users className="h-7 w-7 text-primary" />,
      title: "Demandas Sazonais",
      description: "Reforço de equipe",
    },
  ];

  const stats = [
    { value: "+30", label: "Anos de experiência" },
    { value: "35 mil", label: "Colaboradores" },
    { value: "27", label: "Estados atendidos" },
    { value: "1000+", label: "Clientes satisfeitos" },
  ];

  const benefits = [
    { title: "Profissionais para diversos segmentos" },
    { title: "Recrutamento e seleção ágil" },
    { title: "Flexibilidade para demandas sazonais" },
    { title: "Gestão trabalhista completa" },
    { title: "Treinamento e capacitação" },
    { title: "Supervisão e acompanhamento" },
  ];

  return (
    <ServicePageTemplate
      heroTitle="Mão de Obra"
      heroHighlight="em Geral"
      heroSubtitle="Profissionais qualificados para diversas funções. Auxiliares, operadores e equipes de apoio para sua operação."
      heroImage={heroMaoDeObra}
      stats={stats}
      servicesTitle="Soluções em Mão de Obra"
      services={services}
      benefitsTitle="Vantagens do serviço terceirizado"
      benefitsSubtitle="Por que terceirizar mão de obra com a Liderança"
      benefits={benefits}
      ctaTitle="Reforce sua equipe com profissionais"
      ctaSubtitle="Solicite um orçamento para mão de obra."
      serviceName="Mão de Obra em Geral"
      serviceType="mao-de-obra"
    />
  );
};

export default MaoDeObraPage;
