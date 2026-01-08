import ServicePageTemplate from "@/components/landing/ServicePageTemplate";
import { Phone, Users, Calendar, Smile } from "lucide-react";

const RecepcaoPage = () => {
  const services = [
    {
      icon: <Users className="h-7 w-7 text-primary" />,
      title: "Atendimento ao Público",
      description: "Recepção de visitantes",
    },
    {
      icon: <Phone className="h-7 w-7 text-primary" />,
      title: "Atendimento Telefônico",
      description: "Gestão de ligações",
    },
    {
      icon: <Calendar className="h-7 w-7 text-primary" />,
      title: "Agenda e Reservas",
      description: "Organização de salas",
    },
    {
      icon: <Smile className="h-7 w-7 text-primary" />,
      title: "Hospitalidade",
      description: "Primeira impressão impecável",
    },
  ];

  const stats = [
    { value: "30", label: "Anos de experiência" },
    { value: "32 mil", label: "Colaboradores" },
    { value: "27", label: "Estados atendidos" },
    { value: "1000+", label: "Clientes satisfeitos" },
  ];

  const benefits = [
    { title: "Recepcionistas treinados e uniformizados" },
    { title: "Apresentação impecável e cordialidade" },
    { title: "Domínio de idiomas (quando necessário)" },
    { title: "Gestão de agenda e reservas" },
    { title: "Atendimento telefônico profissional" },
    { title: "Primeira impressão que valoriza sua marca" },
  ];

  return (
    <ServicePageTemplate
      heroTitle="Serviços de"
      heroHighlight="Recepção"
      heroSubtitle="Recepcionistas profissionais que representam sua marca. Atendimento elegante, cordial e eficiente para impressionar seus visitantes."
      heroImage="https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1920&q=80"
      stats={stats}
      servicesTitle="Soluções em Recepção"
      services={services}
      benefitsTitle="Vantagens do serviço terceirizado"
      benefitsSubtitle="Por que terceirizar recepção com a Liderança"
      benefits={benefits}
      ctaTitle="Recepção que valoriza sua empresa"
      ctaSubtitle="Solicite um orçamento para serviços de recepção."
      serviceName="Recepção"
      serviceType="recepcao"
    />
  );
};

export default RecepcaoPage;
