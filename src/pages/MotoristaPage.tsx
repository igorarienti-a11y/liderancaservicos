import ServicePageTemplate from "@/components/landing/ServicePageTemplate";
import { Car, Truck, Clock, Shield } from "lucide-react";

const MotoristaPage = () => {
  const services = [
    {
      icon: <Car className="h-7 w-7 text-primary" />,
      title: "Motorista Executivo",
      description: "Transporte de diretoria",
    },
    {
      icon: <Truck className="h-7 w-7 text-primary" />,
      title: "Motorista de Carga",
      description: "Entregas e logística",
    },
    {
      icon: <Clock className="h-7 w-7 text-primary" />,
      title: "Cobertura de Férias",
      description: "Substituições temporárias",
    },
    {
      icon: <Shield className="h-7 w-7 text-primary" />,
      title: "Direção Defensiva",
      description: "Segurança no transporte",
    },
  ];

  const stats = [
    { value: "30+", label: "Anos de experiência" },
    { value: "27", label: "Estados atendidos" },
    { value: "Zero", label: "Tolerância a acidentes" },
    { value: "1000+", label: "Clientes satisfeitos" },
  ];

  const benefits = [
    { title: "Motoristas habilitados e experientes" },
    { title: "Treinamento em direção defensiva" },
    { title: "Conhecimento de rotas e trânsito" },
    { title: "Pontualidade e responsabilidade" },
    { title: "Cobertura para diversas categorias de CNH" },
    { title: "Gestão completa do serviço" },
  ];

  return (
    <ServicePageTemplate
      heroTitle="Serviços de"
      heroHighlight="Motorista"
      heroSubtitle="Motoristas profissionais para transporte executivo e de cargas. Segurança, pontualidade e eficiência no trânsito."
      heroImage="https://www.lideranca.com.br/wp-content/uploads/2024/11/Prancheta-1_9@4x.jpg"
      stats={stats}
      servicesTitle="Soluções em Transporte"
      services={services}
      benefitsTitle="Vantagens do serviço terceirizado"
      benefitsSubtitle="Por que terceirizar motoristas com a Liderança"
      benefits={benefits}
      ctaTitle="Transporte seguro e profissional"
      ctaSubtitle="Solicite um orçamento para serviços de motorista."
      serviceName="Motorista"
      serviceType="motorista"
    />
  );
};

export default MotoristaPage;
