import ServicePageTemplate from "@/components/landing/ServicePageTemplate";
import { Phone, Headphones, Users, Clock } from "lucide-react";

const TelefoniaPage = () => {
  const services = [
    {
      icon: <Phone className="h-7 w-7 text-primary" />,
      title: "Atendimento Telefônico",
      description: "Atendimento profissional e cordial",
    },
    {
      icon: <Headphones className="h-7 w-7 text-primary" />,
      title: "Central de Atendimento",
      description: "Operação de PABX e ramais",
    },
    {
      icon: <Users className="h-7 w-7 text-primary" />,
      title: "Telefonistas Treinados",
      description: "Profissionais qualificados",
    },
    {
      icon: <Clock className="h-7 w-7 text-primary" />,
      title: "Cobertura de Horários",
      description: "Disponibilidade flexível",
    },
  ];

  const stats = [
    { value: "30+", label: "Anos de experiência" },
    { value: "27", label: "Estados atendidos" },
    { value: "24h", label: "Disponibilidade" },
    { value: "1000+", label: "Clientes satisfeitos" },
  ];

  const benefits = [
    { title: "Atendimento profissional e cordial" },
    { title: "Telefonistas treinados e capacitados" },
    { title: "Cobertura para férias e afastamentos" },
    { title: "Gestão completa do serviço" },
    { title: "Redução de custos trabalhistas" },
    { title: "Supervisão e controle de qualidade" },
  ];

  return (
    <ServicePageTemplate
      heroTitle="Serviços de"
      heroHighlight="Telefonia"
      heroSubtitle="Atendimento telefônico profissional para sua empresa. Telefonistas treinados que representam sua marca com excelência."
      heroImage="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?auto=format&fit=crop&w=1920&q=80"
      stats={stats}
      servicesTitle="Soluções em Telefonia"
      services={services}
      benefitsTitle="Vantagens do serviço terceirizado"
      benefitsSubtitle="Por que terceirizar telefonia com a Liderança"
      benefits={benefits}
      ctaTitle="Melhore seu atendimento telefônico"
      ctaSubtitle="Solicite um orçamento e tenha telefonistas profissionais."
      serviceName="Telefonia"
      serviceType="telefonia"
    />
  );
};

export default TelefoniaPage;
