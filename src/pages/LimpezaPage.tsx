import Header from "@/components/landing/Header";
import HeroSection from "@/components/landing/HeroSection";
import BenefitsSection from "@/components/landing/BenefitsSection";
import ServicesGrid from "@/components/landing/ServicesGrid";
import Testimonials from "@/components/landing/Testimonials";
import CTASection from "@/components/landing/CTASection";
import LeadForm from "@/components/landing/LeadForm";
import Footer from "@/components/landing/Footer";
import heroImage from "@/assets/hero-limpeza.jpg";

const LimpezaPage = () => {
  const benefits = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
          <polyline points="22 4 12 14.01 9 11.01" />
        </svg>
      ),
      title: "Qualidade Garantida",
      description: "Processos padronizados e checklist de qualidade para garantir ambientes impecáveis.",
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <path d="M8 14s1.5 2 4 2 4-2 4-2" />
          <line x1="9" y1="9" x2="9.01" y2="9" />
          <line x1="15" y1="9" x2="15.01" y2="9" />
        </svg>
      ),
      title: "Ambiente Saudável",
      description: "Higienização profissional que promove saúde e bem-estar para colaboradores e visitantes.",
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
          <path d="M12 8v4l3 3" />
        </svg>
      ),
      title: "Flexibilidade de Horários",
      description: "Serviços disponíveis 24/7, adaptados à rotina da sua empresa.",
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
          <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
        </svg>
      ),
      title: "Equipe Treinada",
      description: "Profissionais capacitados com treinamentos contínuos e certificações.",
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21.21 15.89A10 10 0 1 1 8 2.83" />
          <path d="M22 12A10 10 0 0 0 12 2v10z" />
        </svg>
      ),
      title: "Produtos Premium",
      description: "Utilizamos os melhores produtos e equipamentos do mercado.",
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        </svg>
      ),
      title: "Sustentabilidade",
      description: "Práticas sustentáveis e produtos eco-friendly em nossas operações.",
    },
  ];

  const services = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
          <polyline points="9 22 9 12 15 12 15 22" />
        </svg>
      ),
      title: "Limpeza Comercial",
      description: "Escritórios, lojas e espaços corporativos.",
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
          <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
        </svg>
      ),
      title: "Limpeza Industrial",
      description: "Fábricas, galpões e áreas produtivas.",
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
        </svg>
      ),
      title: "Limpeza Hospitalar",
      description: "Clínicas, hospitais e ambientes de saúde.",
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
          <rect x="7" y="7" width="3" height="9" />
          <rect x="14" y="7" width="3" height="5" />
        </svg>
      ),
      title: "Limpeza de Vidros",
      description: "Fachadas e vidraças em altura.",
    },
  ];

  return (
    <div className="min-h-screen">
      <Header ctaText="Solicitar Orçamento" />
      
      <HeroSection
        title="Serviços de"
        highlight="Limpeza Profissional"
        subtitle="Ambientes impecáveis que impressionam. Equipe especializada, produtos de qualidade e processos certificados para manter seu espaço sempre limpo."
        heroImage={heroImage}
        ctaText="Quero um Orçamento"
      />

      <BenefitsSection
        title="Limpeza que faz a diferença"
        subtitle="Descubra por que as maiores empresas do Brasil confiam na Liderança para seus serviços de limpeza"
        benefits={benefits}
      />

      <ServicesGrid
        title="Tipos de Limpeza"
        subtitle="Soluções completas para todos os tipos de ambientes e necessidades"
        services={services}
      />

      <Testimonials />

      <CTASection
        title="Ambiente limpo, negócio saudável"
        subtitle="Solicite um orçamento personalizado e transforme seu ambiente de trabalho em um lugar mais agradável e produtivo."
        ctaText="Solicitar Orçamento Gratuito"
      />

      <LeadForm serviceName="Limpeza" serviceType="limpeza" />

      <Footer />
    </div>
  );
};

export default LimpezaPage;
