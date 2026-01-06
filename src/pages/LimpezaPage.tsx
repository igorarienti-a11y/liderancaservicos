import Header from "@/components/landing/Header";
import HeroSection from "@/components/landing/HeroSection";
import AboutSection from "@/components/landing/AboutSection";
import BenefitsSection from "@/components/landing/BenefitsSection";
import ProcessSection from "@/components/landing/ProcessSection";
import ServicesGrid from "@/components/landing/ServicesGrid";
import FAQSection from "@/components/landing/FAQSection";
import CasesSection, { TrendingUp, Clock, Users, Building } from "@/components/landing/CasesSection";
import Testimonials from "@/components/landing/Testimonials";
import CertificationsSection from "@/components/landing/CertificationsSection";
import CTASection from "@/components/landing/CTASection";
import LeadForm from "@/components/landing/LeadForm";
import Footer from "@/components/landing/Footer";
import heroImage from "@/assets/hero-limpeza.jpg";
import { ClipboardCheck, FileText, Rocket, RefreshCcw } from "lucide-react";

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
          <path d="M3 21h18" />
          <path d="M5 21V7l8-4v18" />
          <path d="M19 21V11l-6-4" />
          <path d="M9 9v.01" />
          <path d="M9 12v.01" />
          <path d="M9 15v.01" />
          <path d="M9 18v.01" />
        </svg>
      ),
      title: "Limpeza para Condomínios",
      description: "Áreas comuns, halls, garagens e espaços de lazer.",
    },
  ];

  const processSteps = [
    {
      icon: <ClipboardCheck className="h-8 w-8" />,
      number: "01",
      title: "Visita Técnica",
      description: "Nossa equipe realiza uma visita ao local para avaliar as necessidades específicas de limpeza, metragem, frequência e tipos de superfícies a serem tratadas.",
    },
    {
      icon: <FileText className="h-8 w-8" />,
      number: "02",
      title: "Plano de Limpeza",
      description: "Desenvolvemos um plano personalizado com cronograma, checklist de atividades, produtos adequados e quantidade de profissionais necessários.",
    },
    {
      icon: <Rocket className="h-8 w-8" />,
      number: "03",
      title: "Execução Impecável",
      description: "Equipes treinadas executam o serviço seguindo protocolos rigorosos de qualidade, com supervisão constante e uso de EPIs adequados.",
    },
    {
      icon: <RefreshCcw className="h-8 w-8" />,
      number: "04",
      title: "Controle de Qualidade",
      description: "Realizamos inspeções periódicas, coletamos feedback e ajustamos processos para manter a excelência constante dos serviços.",
    },
  ];

  const faqs = [
    {
      question: "Qual a diferença entre limpeza comum e limpeza profissional?",
      answer: "A limpeza profissional utiliza técnicas especializadas, produtos adequados para cada tipo de superfície, equipamentos profissionais e segue protocolos rigorosos de qualidade. Nossos colaboradores recebem treinamento contínuo e são supervisionados para garantir resultados superiores e consistentes.",
    },
    {
      question: "Vocês fornecem os produtos e equipamentos de limpeza?",
      answer: "Sim, a Liderança fornece todos os produtos e equipamentos necessários. Utilizamos produtos de alta qualidade, adequados para cada tipo de superfície e ambiente. Também oferecemos opções de produtos eco-friendly para empresas que priorizam a sustentabilidade.",
    },
    {
      question: "É possível personalizar a frequência e horários de limpeza?",
      answer: "Absolutamente. Oferecemos total flexibilidade para adaptar nossos serviços à rotina da sua empresa. Podemos realizar a limpeza antes do expediente, durante o horário comercial, à noite ou nos finais de semana, conforme sua necessidade.",
    },
    {
      question: "Como funciona a limpeza em ambientes sensíveis como hospitais?",
      answer: "Para ambientes de saúde, utilizamos protocolos específicos de higienização hospitalar, com produtos desinfetantes de grau hospitalar, técnicas de limpeza terminal e profissionais treinados em biossegurança. Seguimos todas as normas da ANVISA e CCIH.",
    },
    {
      question: "O que fazer em caso de ausência de um profissional de limpeza?",
      answer: "A Liderança possui um sistema de gestão que garante a reposição imediata de profissionais em caso de faltas ou férias. Mantemos uma equipe de reserva treinada e pronta para assumir qualquer posto sem prejuízo à qualidade do serviço.",
    },
    {
      question: "Vocês realizam serviços de limpeza pós-obra?",
      answer: "Sim, oferecemos serviços de limpeza pós-obra que incluem remoção de resíduos de construção, limpeza de vidros, polimento de pisos, higienização completa de ambientes e preparação do espaço para uso. Entre em contato para um orçamento personalizado.",
    },
  ];

  const cases = [
    {
      icon: <TrendingUp className="h-6 w-6" />,
      metric: "98%",
      description: "Índice de satisfação dos clientes em pesquisas de qualidade",
    },
    {
      icon: <Clock className="h-6 w-6" />,
      metric: "24/7",
      description: "Disponibilidade para atender demandas urgentes e emergências",
    },
    {
      icon: <Users className="h-6 w-6" />,
      metric: "15 mil+",
      description: "Profissionais de limpeza atuando em todo o Brasil",
    },
    {
      icon: <Building className="h-6 w-6" />,
      metric: "500+",
      description: "Contratos ativos de limpeza em diversos segmentos",
    },
  ];

  const testimonials = [
    {
      quote: "Colaboradoras da limpeza são organizadas, deixam os ambientes limpos, são pontuais e muito caprichosas.",
      author: "Leandro Souza",
      company: "Gol Linhas Aéreas - Florianópolis/SC",
    },
    {
      quote: "Presta um atendimento excelente, com profissionais competentes, atenciosos e prestativos. Sempre dispostos a nos ajudar.",
      author: "Ingrid Costa Santos",
      company: "Pernambucanas Desenvolvimento de Vendas",
    },
    {
      quote: "A qualidade da limpeza melhorou significativamente após a contratação da Liderança. Os ambientes estão sempre impecáveis.",
      author: "Maria Helena",
      company: "Escritório de Advocacia - São Paulo/SP",
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

      <AboutSection />

      <BenefitsSection
        title="Limpeza que faz a diferença"
        subtitle="Descubra por que as maiores empresas do Brasil confiam na Liderança para seus serviços de limpeza"
        benefits={benefits}
      />

      <ProcessSection 
        title="Como realizamos a limpeza"
        subtitle="Nossa metodologia garante ambientes sempre impecáveis e saudáveis"
        steps={processSteps}
      />

      <ServicesGrid
        title="Tipos de Limpeza"
        subtitle="Soluções completas para todos os tipos de ambientes e necessidades"
        services={services}
      />

      <FAQSection 
        title="Dúvidas sobre Limpeza"
        subtitle="Tire suas dúvidas sobre nossos serviços de limpeza profissional"
        faqs={faqs}
      />

      <CasesSection 
        title="Resultados em Limpeza"
        subtitle="Números que comprovam nossa excelência em serviços de limpeza"
        cases={cases}
      />

      <Testimonials testimonials={testimonials} />

      <CertificationsSection />

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
