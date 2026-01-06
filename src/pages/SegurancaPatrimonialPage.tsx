import ServicePageTemplate from "@/components/landing/ServicePageTemplate";
import { Shield, Camera, DoorOpen, Users } from "lucide-react";

const SegurancaPatrimonialPage = () => {
  const services = [
    {
      icon: <Shield className="h-7 w-7 text-primary" />,
      title: "Vigilância Patrimonial",
      description: "Proteção 24 horas",
    },
    {
      icon: <Camera className="h-7 w-7 text-primary" />,
      title: "Monitoramento CFTV",
      description: "Câmeras e central 24h",
    },
    {
      icon: <DoorOpen className="h-7 w-7 text-primary" />,
      title: "Controle de Acesso",
      description: "Gestão de entradas e saídas",
    },
    {
      icon: <Users className="h-7 w-7 text-primary" />,
      title: "Ronda e Patrulhamento",
      description: "Vigilância ativa do perímetro",
    },
  ];

  const stats = [
    { value: "30+", label: "Anos de experiência" },
    { value: "8 mil+", label: "Vigilantes certificados" },
    { value: "< 5 min", label: "Tempo de resposta" },
    { value: "300+", label: "Contratos ativos" },
  ];

  const benefits = [
    { title: "Vigilantes certificados pela Polícia Federal" },
    { title: "Monitoramento eletrônico integrado" },
    { title: "Protocolos rigorosos de emergência" },
    { title: "Resposta rápida para ocorrências" },
    { title: "Relatórios detalhados de segurança" },
    { title: "Supervisão e gestão profissional" },
  ];

  return (
    <ServicePageTemplate
      heroTitle="Segurança"
      heroHighlight="Patrimonial"
      heroSubtitle="Proteja seu patrimônio com vigilantes certificados. Monitoramento 24 horas, tecnologia de ponta e protocolos rigorosos."
      heroImage="https://www.lideranca.com.br/wp-content/uploads/2024/11/Prancheta-1_11@4x.jpg"
      stats={stats}
      servicesTitle="Soluções em Segurança"
      services={services}
      benefitsTitle="Segurança que você pode confiar"
      benefitsSubtitle="Por que terceirizar segurança com a Liderança"
      benefits={benefits}
      ctaTitle="Proteja seu patrimônio"
      ctaSubtitle="Solicite um orçamento para segurança patrimonial."
      serviceName="Segurança Patrimonial"
      serviceType="seguranca-patrimonial"
    />
  );
};

export default SegurancaPatrimonialPage;
