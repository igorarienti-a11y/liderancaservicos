import ServicePageTemplate from "@/components/landing/ServicePageTemplate";
import { Home, Wrench, ClipboardCheck, Eye } from "lucide-react";
import heroZeladoria from "@/assets/hero-zeladoria.png";

const ZeladoriaPage = () => {
  const services = [
    {
      icon: <Home className="h-7 w-7 text-primary" />,
      title: "Cuidado Predial",
      description: "Manutenção das áreas comuns",
    },
    {
      icon: <Wrench className="h-7 w-7 text-primary" />,
      title: "Pequenos Reparos",
      description: "Serviços de manutenção básica",
    },
    {
      icon: <ClipboardCheck className="h-7 w-7 text-primary" />,
      title: "Controle de Serviços",
      description: "Acompanhamento de prestadores",
    },
    {
      icon: <Eye className="h-7 w-7 text-primary" />,
      title: "Fiscalização",
      description: "Supervisão das instalações",
    },
  ];

  const stats = [
    { value: "30", label: "Anos de experiência" },
    { value: "32 mil", label: "Colaboradores" },
    { value: "27", label: "Estados atendidos" },
    { value: "1000+", label: "Clientes satisfeitos" },
  ];

  const benefits = [
    { title: "Profissionais experientes e dedicados" },
    { title: "Cuidado integral do patrimônio" },
    { title: "Supervisão de serviços terceirizados" },
    { title: "Pequenos reparos e manutenções" },
    { title: "Controle de entrada de prestadores" },
    { title: "Gestão completa das áreas comuns" },
  ];

  return (
    <ServicePageTemplate
      heroTitle="Serviços de"
      heroHighlight="Zeladoria"
      heroSubtitle="Zeladores profissionais para cuidar do seu patrimônio. Supervisão, manutenção e cuidado integral do seu empreendimento."
      heroImage={heroZeladoria}
      stats={stats}
      servicesTitle="Soluções em Zeladoria"
      services={services}
      benefitsTitle="Vantagens da terceirização"
      benefitsSubtitle="Por que terceirizar zeladoria com a Liderança"
      benefits={benefits}
      ctaTitle="Cuide do seu patrimônio com profissionais"
      ctaSubtitle="Solicite um orçamento para serviços de zeladoria."
      serviceName="Zeladoria"
      serviceType="zeladoria"
    />
  );
};

export default ZeladoriaPage;
