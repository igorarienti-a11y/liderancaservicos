import { Link } from "react-router-dom";
import Header from "@/components/landing/Header";
import HeroSection from "@/components/landing/HeroSection";
import CompactServicesSection from "@/components/landing/CompactServicesSection";
import StatsSection from "@/components/landing/StatsSection";
import CompactBenefits from "@/components/landing/CompactBenefits";
import CTASection from "@/components/landing/CTASection";
import LeadForm from "@/components/landing/LeadForm";
import Footer from "@/components/landing/Footer";
import MobileCTAButton from "@/components/landing/MobileCTAButton";
import heroFacilities from "@/assets/hero-facilities-new.png";
import { 
  Wrench, Users, Building2, Coffee, Phone, DoorOpen, 
  Flower2, Car, Keyboard, UtensilsCrossed, UserCheck, 
  ArrowUpDown, ConciergeBell, ChevronRight
} from "lucide-react";

const FacilitiesPage = () => {
  const services = [
    {
      icon: <Wrench className="h-7 w-7 text-primary" />,
      title: "Manutenção Predial",
      description: "Elétrica, hidráulica e infraestrutura",
    },
    {
      icon: <Users className="h-7 w-7 text-primary" />,
      title: "Recepção e Portaria",
      description: "Atendimento profissional",
    },
    {
      icon: <Building2 className="h-7 w-7 text-primary" />,
      title: "Zeladoria",
      description: "Cuidado integral do patrimônio",
    },
    {
      icon: <Coffee className="h-7 w-7 text-primary" />,
      title: "Copa e Café",
      description: "Serviços com qualidade",
    },
  ];

  const allServices = [
    { title: "Portaria", link: "/portaria", icon: <DoorOpen className="h-8 w-8" /> },
    { title: "Recepção", link: "/recepcao", icon: <ConciergeBell className="h-8 w-8" /> },
    { title: "Zeladoria", link: "/zeladoria", icon: <Building2 className="h-8 w-8" /> },
    { title: "Copa e Café", link: "/copa-cafe", icon: <Coffee className="h-8 w-8" /> },
    { title: "Telefonia", link: "/telefonia", icon: <Phone className="h-8 w-8" /> },
    { title: "Ascensorista", link: "/ascensorista", icon: <ArrowUpDown className="h-8 w-8" /> },
    { title: "Jardinagem", link: "/jardinagem", icon: <Flower2 className="h-8 w-8" /> },
    { title: "Motorista", link: "/motorista", icon: <Car className="h-8 w-8" /> },
    { title: "Digitação", link: "/digitacao", icon: <Keyboard className="h-8 w-8" /> },
    { title: "Cozinheira", link: "/cozinheira", icon: <UtensilsCrossed className="h-8 w-8" /> },
    { title: "Garçom", link: "/garcom", icon: <UserCheck className="h-8 w-8" /> },
    { title: "Mão de Obra", link: "/mao-de-obra", icon: <Users className="h-8 w-8" /> },
    { title: "Síndico", link: "/sindico", icon: <Building2 className="h-8 w-8" /> },
  ];

  const stats = [
    { value: "30", label: "Anos de experiência" },
    { value: "32 mil", label: "Colaboradores" },
    { value: "27", label: "Estados atendidos" },
    { value: "1000+", label: "Clientes satisfeitos" },
  ];

  const benefits = [
    { title: "Gestão integrada de todos os serviços" },
    { title: "Redução de até 30% nos custos operacionais" },
    { title: "Equipe disponível 24 horas" },
    { title: "Profissionais treinados e certificados" },
    { title: "Manutenção preventiva planejada" },
    { title: "Relatórios e indicadores detalhados" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header ctaText="Solicitar Orçamento" />
      
      <HeroSection
        title="Gestão Completa de"
        highlight="Facilities"
        subtitle="Terceirize a gestão do seu empreendimento com quem tem mais de 30 anos de experiência. Foque no seu negócio enquanto cuidamos de tudo."
        heroImage={heroFacilities}
        ctaText="Quero um Orçamento"
      />

      <MobileCTAButton />

      <StatsSection stats={stats} />

      <CompactServicesSection
        title="Soluções Integradas para seu Empreendimento"
        services={services}
      />

      {/* All Services Section */}
      <section className="py-16 md:py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-secondary font-semibold uppercase tracking-wide mb-2">Nossos Serviços</p>
            <h2 className="text-3xl md:text-4xl font-bold text-primary">
              Todos os serviços que oferecemos
            </h2>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              Conheça nossa linha completa de serviços terceirizados para sua empresa
            </p>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 max-w-6xl mx-auto">
            {allServices.map((service) => (
              <Link
                key={service.title}
                to={service.link}
                className="group flex flex-col items-center p-6 bg-background rounded-xl border border-border hover:border-primary hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div className="text-primary mb-3 transition-transform duration-300 group-hover:scale-110">
                  {service.icon}
                </div>
                <h3 className="text-sm md:text-base font-semibold text-foreground text-center group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <ChevronRight className="h-4 w-4 text-muted-foreground mt-2 opacity-0 group-hover:opacity-100 transition-opacity" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CompactBenefits
        title="Por que terceirizar com a Liderança?"
        subtitle="Vantagens de ter um parceiro único para toda a gestão"
        benefits={benefits}
      />

      <CTASection
        title="Pronto para otimizar sua gestão?"
        subtitle="Solicite um orçamento personalizado e descubra como podemos ajudar sua empresa."
        ctaText="Solicitar Orçamento Gratuito"
      />

      <LeadForm serviceName="Facilities" serviceType="facilities" />

      <Footer />
    </div>
  );
};

export default FacilitiesPage;
