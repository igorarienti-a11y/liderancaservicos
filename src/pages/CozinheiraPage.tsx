import ServicePageTemplate from "@/components/landing/ServicePageTemplate";
import { ChefHat, Utensils, Clock, Users } from "lucide-react";

const CozinheiraPage = () => {
  const services = [
    {
      icon: <ChefHat className="h-7 w-7 text-primary" />,
      title: "Preparo de Refeições",
      description: "Almoço e jantar",
    },
    {
      icon: <Utensils className="h-7 w-7 text-primary" />,
      title: "Cozinha Industrial",
      description: "Grandes volumes",
    },
    {
      icon: <Clock className="h-7 w-7 text-primary" />,
      title: "Lanches e Cafés",
      description: "Coffee breaks e eventos",
    },
    {
      icon: <Users className="h-7 w-7 text-primary" />,
      title: "Refeitório Corporativo",
      description: "Gestão de cozinha",
    },
  ];

  const stats = [
    { value: "30+", label: "Anos de experiência" },
    { value: "27", label: "Estados atendidos" },
    { value: "32 mil", label: "Colaboradores" },
    { value: "1000+", label: "Clientes satisfeitos" },
  ];

  const benefits = [
    { title: "Cozinheiras experientes e capacitadas" },
    { title: "Conhecimento em boas práticas alimentares" },
    { title: "Higiene e manipulação adequada" },
    { title: "Cardápios variados e nutritivos" },
    { title: "Atendimento a grandes volumes" },
    { title: "Gestão de estoque e compras" },
  ];

  return (
    <ServicePageTemplate
      heroTitle="Serviços de"
      heroHighlight="Cozinheira"
      heroSubtitle="Cozinheiras profissionais para refeitórios e cozinhas industriais. Refeições de qualidade para sua equipe."
      heroImage="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=1920&q=80"
      stats={stats}
      servicesTitle="Soluções para Cozinha"
      services={services}
      benefitsTitle="Vantagens do serviço terceirizado"
      benefitsSubtitle="Por que terceirizar cozinheiras com a Liderança"
      benefits={benefits}
      ctaTitle="Refeições de qualidade para sua equipe"
      ctaSubtitle="Solicite um orçamento para serviços de cozinheira."
      serviceName="Cozinheira"
      serviceType="cozinheira"
    />
  );
};

export default CozinheiraPage;
