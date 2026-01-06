import ServicePageTemplate from "@/components/landing/ServicePageTemplate";
import { DoorOpen, Shield, Users, ClipboardCheck } from "lucide-react";

const PortariaPage = () => {
  const services = [
    {
      icon: <DoorOpen className="h-7 w-7 text-primary" />,
      title: "Controle de Acesso",
      description: "Entrada e saída de pessoas",
    },
    {
      icon: <Shield className="h-7 w-7 text-primary" />,
      title: "Segurança Preventiva",
      description: "Vigilância e monitoramento",
    },
    {
      icon: <Users className="h-7 w-7 text-primary" />,
      title: "Atendimento ao Público",
      description: "Orientação e informações",
    },
    {
      icon: <ClipboardCheck className="h-7 w-7 text-primary" />,
      title: "Registro de Visitantes",
      description: "Controle e documentação",
    },
  ];

  const stats = [
    { value: "30+", label: "Anos de experiência" },
    { value: "27", label: "Estados atendidos" },
    { value: "24h", label: "Disponibilidade" },
    { value: "1000+", label: "Clientes satisfeitos" },
  ];

  const benefits = [
    { title: "Porteiros treinados e uniformizados" },
    { title: "Controle rigoroso de acesso" },
    { title: "Atendimento cordial ao público" },
    { title: "Procedimentos de segurança" },
    { title: "Cobertura 24 horas se necessário" },
    { title: "Gestão e supervisão do serviço" },
  ];

  return (
    <ServicePageTemplate
      heroTitle="Serviços de"
      heroHighlight="Portaria"
      heroSubtitle="Porteiros profissionais para controle de acesso. Segurança, organização e atendimento de qualidade na entrada do seu empreendimento."
      heroImage="https://images.unsplash.com/photo-1560264280-88b68371db39?auto=format&fit=crop&w=1920&q=80"
      stats={stats}
      servicesTitle="Soluções em Portaria"
      services={services}
      benefitsTitle="Vantagens do serviço terceirizado"
      benefitsSubtitle="Por que terceirizar portaria com a Liderança"
      benefits={benefits}
      ctaTitle="Controle de acesso profissional"
      ctaSubtitle="Solicite um orçamento para serviços de portaria."
      serviceName="Portaria"
      serviceType="portaria"
    />
  );
};

export default PortariaPage;
