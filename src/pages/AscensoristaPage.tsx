import ServicePageTemplate from "@/components/landing/ServicePageTemplate";
import { ArrowUpDown, Users, Clock, Shield } from "lucide-react";

const AscensoristaPage = () => {
  const services = [
    {
      icon: <ArrowUpDown className="h-7 w-7 text-primary" />,
      title: "Operação de Elevadores",
      description: "Condução segura e eficiente",
    },
    {
      icon: <Users className="h-7 w-7 text-primary" />,
      title: "Atendimento ao Público",
      description: "Cordialidade e profissionalismo",
    },
    {
      icon: <Clock className="h-7 w-7 text-primary" />,
      title: "Controle de Fluxo",
      description: "Gestão do tráfego de pessoas",
    },
    {
      icon: <Shield className="h-7 w-7 text-primary" />,
      title: "Segurança",
      description: "Procedimentos de emergência",
    },
  ];

  const stats = [
    { value: "30+", label: "Anos de experiência" },
    { value: "27", label: "Estados atendidos" },
    { value: "24h", label: "Disponibilidade" },
    { value: "1000+", label: "Clientes satisfeitos" },
  ];

  const benefits = [
    { title: "Profissionais treinados e uniformizados" },
    { title: "Atendimento cordial ao público" },
    { title: "Conhecimento de procedimentos de emergência" },
    { title: "Controle eficiente do fluxo de pessoas" },
    { title: "Cobertura para férias e afastamentos" },
    { title: "Supervisão e gestão do serviço" },
  ];

  return (
    <ServicePageTemplate
      heroTitle="Serviços de"
      heroHighlight="Ascensorista"
      heroSubtitle="Operadores de elevador profissionais para seu edifício. Atendimento cordial, segurança e eficiência no transporte vertical."
      heroImage="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1920&q=80"
      stats={stats}
      servicesTitle="Soluções para Elevadores"
      services={services}
      benefitsTitle="Vantagens do serviço terceirizado"
      benefitsSubtitle="Por que terceirizar ascensoristas com a Liderança"
      benefits={benefits}
      ctaTitle="Eleve o padrão do seu atendimento"
      ctaSubtitle="Solicite um orçamento para serviços de ascensorista."
      serviceName="Ascensorista"
      serviceType="ascensorista"
    />
  );
};

export default AscensoristaPage;
