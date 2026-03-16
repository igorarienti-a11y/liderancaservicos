import { Link } from "react-router-dom";
import Header from "@/components/landing/Header";
import HeroSection from "@/components/landing/HeroSection";
import StatsSection from "@/components/landing/StatsSection";
import CompactBenefits from "@/components/landing/CompactBenefits";
import CTASection from "@/components/landing/CTASection";
import LeadForm from "@/components/landing/LeadForm";
import Footer from "@/components/landing/Footer";
import MobileCTAButton from "@/components/landing/MobileCTAButton";
import heroFacilities from "@/assets/hero-facilities-new.png";

import cardPortaria from "@/assets/card-portaria.png";
import cardRecepcao from "@/assets/card-recepcao.png";
import cardCopeira from "@/assets/card-copeira.png";
import cardCozinheira from "@/assets/card-cozinheira.png";
import cardGarcom from "@/assets/card-garcom.png";
import cardJardinagem from "@/assets/card-jardinagem.png";
import cardMotorista from "@/assets/card-motorista.png";
import cardMaoDeObra from "@/assets/card-mao-de-obra.png";
import cardLimpeza from "@/assets/card-limpeza.png";
import iconSeguranca from "@/assets/icon-seguranca.png";

const FacilitiesPage = () => {
  const allServices = [
    { title: "Portaria", link: "/portaria", image: cardPortaria },
    { title: "Recepção", link: "/recepcao", image: cardRecepcao },
    { title: "Segurança", link: "/seguranca-patrimonial", image: iconSeguranca },
    { title: "Limpeza", link: "/limpeza-conservacao", image: cardLimpeza },
    { title: "Copa e Café", link: "/copa-cafe", image: cardCopeira },
    { title: "Cozinheira", link: "/cozinheira", image: cardCozinheira },
    { title: "Garçom", link: "/garcom", image: cardGarcom },
    { title: "Jardinagem", link: "/jardinagem", image: cardJardinagem },
    { title: "Motorista", link: "/motorista", image: cardMotorista },
    { title: "Mão de Obra", link: "/mao-de-obra", image: cardMaoDeObra },
  ];

  const stats = [
    { value: "+30", label: "Anos de experiência" },
    { value: "35 mil", label: "Colaboradores" },
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
        subtitle="Chega de preocupações com facilities! Confie a gestão da sua empresa ou condomínio com quem tem 31 anos de experiência. Terceirize agora!"
        heroImage={heroFacilities}
        ctaText="Quero um Orçamento"
      />

      <MobileCTAButton />

      <StatsSection stats={stats} />

      {/* All Services Section */}
      <section className="py-10 md:py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-primary text-center mb-8 md:mb-12">
            Soluções Integradas para seu Empreendimento
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-6 max-w-6xl mx-auto">
            {allServices.map((service, index) => {
              const cardContent = (
                <>
                  <div className="w-10 h-10 md:w-14 md:h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3 md:mb-4 group-hover:bg-primary/20 transition-colors">
                    <div className="scale-75 md:scale-100">
                      {service.icon}
                    </div>
                  </div>
                  <h3 className="text-sm md:text-lg font-bold text-primary mb-1 md:mb-2 leading-tight group-hover:text-primary/80 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground text-xs md:text-sm hidden sm:block">
                    {service.description}
                  </p>
                </>
              );
              const className = "bg-muted rounded-lg p-4 md:p-6 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group";
              
              return service.external ? (
                <a key={index} href={service.link} target="_blank" rel="noopener noreferrer" className={className}>
                  {cardContent}
                </a>
              ) : (
                <Link key={index} to={service.link} className={className}>
                  {cardContent}
                </Link>
              );
            })}
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
