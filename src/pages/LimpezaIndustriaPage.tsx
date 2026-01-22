import ServicePageTemplate from "@/components/landing/ServicePageTemplate";
import { Factory, Cog, Building, Sparkles } from "lucide-react";
import heroLimpezaConservacao from "@/assets/hero-limpeza-conservacao.png";

const LimpezaIndustriaPage = () => {
  const services = [
    {
      icon: <Factory className="h-7 w-7 text-primary" />,
      title: "Limpeza Industrial",
      description: "Galpões e áreas de produção",
    },
    {
      icon: <Cog className="h-7 w-7 text-primary" />,
      title: "Limpeza Técnica",
      description: "Equipamentos e maquinários",
    },
    {
      icon: <Building className="h-7 w-7 text-primary" />,
      title: "Áreas Administrativas",
      description: "Escritórios e salas de reunião",
    },
    {
      icon: <Sparkles className="h-7 w-7 text-primary" />,
      title: "Manutenção Recorrente",
      description: "Conservação contínua e programada",
    },
  ];

  const stats = [
    { value: "+30", label: "Anos de experiência" },
    { value: "35 mil", label: "Colaboradores" },
    { value: "27", label: "Estados atendidos" },
    { value: "1000+", label: "Clientes satisfeitos" },
  ];

  const benefits = [
    { title: "Processos testados e aprovados por grandes indústrias" },
    { title: "Produtos industriais específicos para cada superfície" },
    { title: "Equipe treinada para ambientes de produção" },
    { title: "Atendemos sua operação 24/7, sem paradas" },
    { title: "Compromisso com sustentabilidade e segurança" },
    { title: "Supervisão constante e relatórios de qualidade" },
  ];

  return (
    <ServicePageTemplate
      heroTitle="Limpeza e"
      heroHighlight="Conservação"
      heroSubtitle="Sabemos que na sua indústria, cada minuto conta. Por isso, cuidamos da limpeza enquanto você foca no que realmente importa: a produção. Ambientes limpos, equipe preparada e zero interrupções."
      heroImage={heroLimpezaConservacao}
      mobileImagePosition="100%"
      stats={stats}
      servicesTitle="Soluções em Limpeza"
      services={services}
      benefitsTitle="Por que indústrias confiam na Liderança?"
      benefitsSubtitle="Entendemos as particularidades do seu setor e trazemos soluções que realmente funcionam"
      benefits={benefits}
      ctaTitle="Produção em alta, ambiente impecável"
      ctaSubtitle="Vamos conversar sobre como podemos apoiar a operação da sua indústria?"
      serviceName="Limpeza Industrial"
      serviceType="limpeza-industria"
    />
  );
};

export default LimpezaIndustriaPage;
