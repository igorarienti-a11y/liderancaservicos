import ServicePageTemplate from "@/components/landing/ServicePageTemplate";
import { Trees, Leaf, Scissors, Droplets } from "lucide-react";

const JardinagemPage = () => {
  const services = [
    {
      icon: <Trees className="h-7 w-7 text-primary" />,
      title: "Manutenção de Jardins",
      description: "Cuidado com áreas verdes",
    },
    {
      icon: <Scissors className="h-7 w-7 text-primary" />,
      title: "Podas e Cortes",
      description: "Gramados e arbustos",
    },
    {
      icon: <Droplets className="h-7 w-7 text-primary" />,
      title: "Irrigação",
      description: "Sistemas e manutenção",
    },
    {
      icon: <Leaf className="h-7 w-7 text-primary" />,
      title: "Paisagismo",
      description: "Projetos e implantação",
    },
  ];

  const stats = [
    { value: "30+", label: "Anos de experiência" },
    { value: "27", label: "Estados atendidos" },
    { value: "32 mil", label: "Colaboradores" },
    { value: "1000+", label: "Clientes satisfeitos" },
  ];

  const benefits = [
    { title: "Jardineiros experientes e capacitados" },
    { title: "Manutenção periódica programada" },
    { title: "Equipamentos e ferramentas profissionais" },
    { title: "Conhecimento técnico em plantas e paisagismo" },
    { title: "Gestão completa das áreas verdes" },
    { title: "Práticas sustentáveis" },
  ];

  return (
    <ServicePageTemplate
      heroTitle="Serviços de"
      heroHighlight="Jardinagem"
      heroSubtitle="Jardineiros profissionais para manter suas áreas verdes sempre bonitas. Manutenção, podas e paisagismo completo."
      heroImage="https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=1920&q=80"
      stats={stats}
      servicesTitle="Soluções em Jardinagem"
      services={services}
      benefitsTitle="Vantagens do serviço terceirizado"
      benefitsSubtitle="Por que terceirizar jardinagem com a Liderança"
      benefits={benefits}
      ctaTitle="Valorize seu espaço com áreas verdes"
      ctaSubtitle="Solicite um orçamento para serviços de jardinagem."
      serviceName="Jardinagem"
      serviceType="jardinagem"
    />
  );
};

export default JardinagemPage;
