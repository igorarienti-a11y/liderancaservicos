import ServicePageTemplate from "@/components/landing/ServicePageTemplate";
import { Wine, Users, Utensils, Calendar } from "lucide-react";
import heroGarcom from "@/assets/hero-garcom.png";

const GarcomPage = () => {
  const services = [
    {
      icon: <Wine className="h-7 w-7 text-primary" />,
      title: "Serviço de Mesa",
      description: "Atendimento profissional",
    },
    {
      icon: <Users className="h-7 w-7 text-primary" />,
      title: "Eventos Corporativos",
      description: "Reuniões e confraternizações",
    },
    {
      icon: <Utensils className="h-7 w-7 text-primary" />,
      title: "Buffet e Recepções",
      description: "Serviços completos",
    },
    {
      icon: <Calendar className="h-7 w-7 text-primary" />,
      title: "Demandas Pontuais",
      description: "Contratação por evento",
    },
  ];

  const stats = [
    { value: "30", label: "Anos de experiência" },
    { value: "32 mil", label: "Colaboradores" },
    { value: "27", label: "Estados atendidos" },
    { value: "1000+", label: "Clientes satisfeitos" },
  ];

  const benefits = [
    { title: "Garçons treinados e uniformizados" },
    { title: "Atendimento elegante e profissional" },
    { title: "Flexibilidade para eventos e demandas fixas" },
    { title: "Experiência em eventos corporativos" },
    { title: "Pontualidade e comprometimento" },
    { title: "Gestão completa do serviço" },
  ];

  return (
    <ServicePageTemplate
      heroTitle="Serviços de"
      heroHighlight="Garçom"
      heroSubtitle="Garçons profissionais para eventos e serviços contínuos. Atendimento elegante que valoriza sua empresa e seus convidados."
      heroImage={heroGarcom}
      stats={stats}
      servicesTitle="Soluções para Eventos"
      services={services}
      benefitsTitle="Vantagens do serviço terceirizado"
      benefitsSubtitle="Por que terceirizar garçons com a Liderança"
      benefits={benefits}
      ctaTitle="Eleve o padrão dos seus eventos"
      ctaSubtitle="Solicite um orçamento para serviços de garçom."
      serviceName="Garçom"
      serviceType="garcom"
    />
  );
};

export default GarcomPage;
