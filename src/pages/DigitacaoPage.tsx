import ServicePageTemplate from "@/components/landing/ServicePageTemplate";
import { FileText, Keyboard, ClipboardList, Archive } from "lucide-react";

const DigitacaoPage = () => {
  const services = [
    {
      icon: <Keyboard className="h-7 w-7 text-primary" />,
      title: "Digitação de Documentos",
      description: "Transcrição e formatação",
    },
    {
      icon: <FileText className="h-7 w-7 text-primary" />,
      title: "Entrada de Dados",
      description: "Sistemas e planilhas",
    },
    {
      icon: <ClipboardList className="h-7 w-7 text-primary" />,
      title: "Cadastros",
      description: "Atualização de bases",
    },
    {
      icon: <Archive className="h-7 w-7 text-primary" />,
      title: "Organização de Arquivos",
      description: "Digitalização e indexação",
    },
  ];

  const stats = [
    { value: "30+", label: "Anos de experiência" },
    { value: "27", label: "Estados atendidos" },
    { value: "99%", label: "Precisão" },
    { value: "1000+", label: "Clientes satisfeitos" },
  ];

  const benefits = [
    { title: "Digitadores ágeis e precisos" },
    { title: "Conhecimento em sistemas diversos" },
    { title: "Organização e metodologia de trabalho" },
    { title: "Sigilo e confidencialidade" },
    { title: "Flexibilidade de horários" },
    { title: "Gestão e supervisão do serviço" },
  ];

  return (
    <ServicePageTemplate
      heroTitle="Serviços de"
      heroHighlight="Digitação"
      heroSubtitle="Profissionais de digitação para entrada de dados, transcrição e cadastros. Agilidade e precisão para sua operação."
      heroImage="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?w=1920&q=80"
      stats={stats}
      servicesTitle="Soluções em Digitação"
      services={services}
      benefitsTitle="Vantagens do serviço terceirizado"
      benefitsSubtitle="Por que terceirizar digitação com a Liderança"
      benefits={benefits}
      ctaTitle="Agilize sua entrada de dados"
      ctaSubtitle="Solicite um orçamento para serviços de digitação."
      serviceName="Digitação"
      serviceType="digitacao"
    />
  );
};

export default DigitacaoPage;
