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
import heroImage from "@/assets/hero-seguranca.jpg";
import { ClipboardCheck, FileText, Rocket, RefreshCcw } from "lucide-react";

const SegurancaPage = () => {
  const benefits = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        </svg>
      ),
      title: "Proteção 24 horas",
      description: "Vigilância ininterrupta com equipes treinadas para garantir a segurança do seu patrimônio.",
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
          <circle cx="12" cy="13" r="4" />
        </svg>
      ),
      title: "Monitoramento Eletrônico",
      description: "Sistemas de CFTV e alarmes integrados com central de monitoramento 24h.",
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      ),
      title: "Profissionais Certificados",
      description: "Vigilantes com curso de formação, reciclagem e porte de arma quando necessário.",
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
        </svg>
      ),
      title: "Resposta Rápida",
      description: "Protocolos de emergência e tempo de resposta otimizado para qualquer ocorrência.",
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
          <path d="M7 11V7a5 5 0 0 1 10 0v4" />
        </svg>
      ),
      title: "Controle de Acesso",
      description: "Gestão completa de entrada e saída de pessoas, veículos e materiais.",
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
          <polyline points="14 2 14 8 20 8" />
          <line x1="16" y1="13" x2="8" y2="13" />
          <line x1="16" y1="17" x2="8" y2="17" />
          <polyline points="10 9 9 9 8 9" />
        </svg>
      ),
      title: "Relatórios Detalhados",
      description: "Documentação completa de ocorrências e indicadores de segurança.",
    },
  ];

  const services = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        </svg>
      ),
      title: "Vigilância Patrimonial",
      description: "Proteção completa para empresas, indústrias e comércios.",
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
      title: "Segurança Condominial",
      description: "Portaria, controle de acesso e vigilância para condomínios residenciais e comerciais.",
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
          <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
        </svg>
      ),
      title: "Portaria e Recepção",
      description: "Controle de acesso com atendimento profissional.",
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
          <circle cx="12" cy="13" r="4" />
        </svg>
      ),
      title: "CFTV e Alarmes",
      description: "Sistemas eletrônicos de segurança e monitoramento.",
    },
  ];

  const processSteps = [
    {
      icon: <ClipboardCheck className="h-8 w-8" />,
      number: "01",
      title: "Análise de Riscos",
      description: "Realizamos um estudo completo das vulnerabilidades do seu patrimônio, identificando pontos críticos e definindo as melhores estratégias de proteção.",
    },
    {
      icon: <FileText className="h-8 w-8" />,
      number: "02",
      title: "Plano de Segurança",
      description: "Elaboramos um plano personalizado com definição de postos, escalas, procedimentos operacionais e protocolos de emergência específicos para sua operação.",
    },
    {
      icon: <Rocket className="h-8 w-8" />,
      number: "03",
      title: "Implantação",
      description: "Selecionamos, treinamos e alocamos profissionais qualificados, implementamos tecnologias de segurança e estabelecemos rotinas de vigilância.",
    },
    {
      icon: <RefreshCcw className="h-8 w-8" />,
      number: "04",
      title: "Monitoramento Contínuo",
      description: "Acompanhamos indicadores de segurança, realizamos auditorias periódicas e ajustamos estratégias para manter a proteção sempre atualizada.",
    },
  ];

  const faqs = [
    {
      question: "Qual a diferença entre vigilante armado e desarmado?",
      answer: "O vigilante armado possui autorização legal para portar arma de fogo e é indicado para locais com maior risco, como bancos, transportadoras de valores e grandes indústrias. O vigilante desarmado atua com técnicas de observação, controle de acesso e abordagem preventiva, sendo ideal para escritórios, lojas e condomínios. A Liderança avalia cada caso para indicar a melhor solução.",
    },
    {
      question: "Vocês oferecem monitoramento eletrônico junto com a vigilância?",
      answer: "Sim, oferecemos soluções integradas que combinam vigilância humana com tecnologia: sistemas de CFTV, alarmes, controle de acesso biométrico, sensores de presença e central de monitoramento 24h. Essa combinação potencializa a segurança e reduz custos operacionais.",
    },
    {
      question: "Como é feita a seleção e treinamento dos vigilantes?",
      answer: "Nossos vigilantes passam por rigoroso processo seletivo com verificação de antecedentes, avaliação psicológica e técnica. Todos possuem curso de formação de vigilante credenciado pela Polícia Federal e participam de reciclagens periódicas, além de treinamentos específicos para cada tipo de posto.",
    },
    {
      question: "O que fazer em caso de ocorrência durante o período de vigilância?",
      answer: "Nossos vigilantes são treinados para seguir protocolos específicos para cada tipo de ocorrência. Além disso, mantemos uma central de operações 24h que pode ser acionada imediatamente. Todas as ocorrências são documentadas em relatórios detalhados para análise e tomada de decisões.",
    },
    {
      question: "A Liderança possui autorização da Polícia Federal?",
      answer: "Sim, a Liderança (através da Lince Patrimonial) possui todas as autorizações necessárias da Polícia Federal para prestação de serviços de vigilância patrimonial, incluindo vigilância armada. Cumprimos rigorosamente todas as exigências legais do setor.",
    },
    {
      question: "Vocês atendem eventos e demandas temporárias?",
      answer: "Sim, oferecemos serviços de segurança para eventos, obras, demandas sazonais e contratações temporárias. Nossa estrutura nacional permite mobilizar equipes rapidamente para atender necessidades pontuais em qualquer região do Brasil.",
    },
  ];

  const cases = [
    {
      icon: <TrendingUp className="h-6 w-6" />,
      metric: "Zero",
      description: "Tolerância a falhas de segurança com protocolos rigorosos",
    },
    {
      icon: <Clock className="h-6 w-6" />,
      metric: "< 5 min",
      description: "Tempo médio de resposta para ocorrências críticas",
    },
    {
      icon: <Users className="h-6 w-6" />,
      metric: "8 mil+",
      description: "Profissionais de segurança certificados em todo o Brasil",
    },
    {
      icon: <Building className="h-6 w-6" />,
      metric: "300+",
      description: "Contratos ativos de vigilância patrimonial",
    },
  ];

  const testimonials = [
    {
      quote: "A segurança do nosso centro de distribuição melhorou significativamente. Os vigilantes são profissionais e bem treinados.",
      author: "Carlos Eduardo",
      company: "Centro Logístico ABC - Curitiba/PR",
    },
    {
      quote: "A Liderança trouxe tranquilidade para nosso condomínio. O controle de acesso é rigoroso e os moradores se sentem seguros.",
      author: "Síndico Roberto",
      company: "Condomínio Jardins - Florianópolis/SC",
    },
    {
      quote: "Parceria sólida há mais de 10 anos. A qualidade do serviço e a gestão profissional fazem toda a diferença.",
      author: "Ana Paula",
      company: "Rede de Supermercados - Porto Alegre/RS",
    },
  ];

  return (
    <div className="min-h-screen">
      <Header ctaText="Solicitar Orçamento" />
      
      <HeroSection
        title="Segurança Patrimonial"
        highlight="de Excelência"
        subtitle="Proteja seu patrimônio com quem entende. Vigilantes treinados, tecnologia de ponta e protocolos rigorosos para sua total tranquilidade."
        heroImage={heroImage}
        ctaText="Quero um Orçamento"
      />

      <AboutSection />

      <BenefitsSection
        title="Segurança que você pode confiar"
        subtitle="Descubra por que somos referência em segurança patrimonial há mais de 30 anos"
        benefits={benefits}
      />

      <ProcessSection 
        title="Como protegemos seu patrimônio"
        subtitle="Nossa metodologia de segurança desenvolvida com base em 30 anos de experiência"
        steps={processSteps}
      />

      <ServicesGrid
        title="Soluções em Segurança"
        subtitle="Serviços completos para proteger seu patrimônio de forma integrada"
        services={services}
      />

      <FAQSection 
        title="Dúvidas sobre Segurança"
        subtitle="Entenda como funcionam nossos serviços de segurança patrimonial"
        faqs={faqs}
      />

      <CasesSection 
        title="Resultados em Segurança"
        subtitle="Indicadores que demonstram nosso compromisso com a proteção"
        cases={cases}
      />

      <Testimonials testimonials={testimonials} />

      <CertificationsSection />

      <CTASection
        title="Seu patrimônio merece proteção profissional"
        subtitle="Solicite um orçamento personalizado e descubra como podemos proteger sua empresa com máxima eficiência."
        ctaText="Solicitar Orçamento Gratuito"
      />

      <LeadForm serviceName="Segurança" serviceType="seguranca" />

      <Footer />
    </div>
  );
};

export default SegurancaPage;
