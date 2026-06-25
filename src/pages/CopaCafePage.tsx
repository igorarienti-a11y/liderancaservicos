import ServicePageTemplate from "@/components/landing/ServicePageTemplate";
import { Coffee, Utensils, Users, Clock } from "lucide-react";
import heroCopaCafe from "@/assets/hero-copa-cafe.webp";

const CopaCafePage = () => {
  const services = [
    {
      icon: <Coffee className="h-7 w-7 text-primary" />,
      title: "Serviço de Café",
      description: "Preparo e distribuição",
    },
    {
      icon: <Utensils className="h-7 w-7 text-primary" />,
      title: "Manutenção da Copa",
      description: "Organização e limpeza",
    },
    {
      icon: <Users className="h-7 w-7 text-primary" />,
      title: "Atendimento em Reuniões",
      description: "Serviço para eventos internos",
    },
    {
      icon: <Clock className="h-7 w-7 text-primary" />,
      title: "Reposição Contínua",
      description: "Café e água sempre disponíveis",
    },
  ];

  const stats = [
    { value: "+30", label: "Anos de experiência" },
    { value: "35 mil", label: "Colaboradores" },
    { value: "27", label: "Estados atendidos" },
    { value: "1000+", label: "Clientes satisfeitos" },
  ];

  const benefits = [
    { title: "Profissionais treinados em serviço de copa" },
    { title: "Higiene e organização impecáveis" },
    { title: "Atendimento cordial e discreto" },
    { title: "Reposição contínua de café e água" },
    { title: "Suporte em reuniões e eventos" },
    { title: "Gestão de insumos e equipamentos" },
  ];

  return (
    <ServicePageTemplate
      heroTitle="Serviços de"
      heroHighlight="Copa e Café"
      heroSubtitle="Copeiros profissionais para manter sua copa sempre organizada. Serviço de café, água e atendimento em reuniões."
      heroImage={heroCopaCafe}
      stats={stats}
      servicesTitle="Soluções para Copa"
      services={services}
      benefitsTitle="Vantagens do serviço terceirizado"
      benefitsSubtitle="Por que terceirizar copa e café com a Liderança"
      benefits={benefits}
      ctaTitle="Tenha uma copa sempre impecável"
      ctaSubtitle="Solicite um orçamento para serviços de copa e café."
      serviceName="Copa e Café"
      serviceType="copa-cafe"
    />
  );
};

export default CopaCafePage;
