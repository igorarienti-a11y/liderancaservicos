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
import heroImage from "@/assets/hero-sindico.jpg";
import { ClipboardCheck, FileText, Rocket, RefreshCcw } from "lucide-react";

const SindicoPage = () => {
  const benefits = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
          <polyline points="9 22 9 12 15 12 15 22" />
        </svg>
      ),
      title: "Gestão Completa do Condomínio",
      description: "Administração profissional de todas as áreas do seu condomínio, desde manutenção até relacionamento com moradores.",
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
        </svg>
      ),
      title: "Redução de Custos",
      description: "Otimização de contratos e fornecedores, resultando em economia significativa para o condomínio.",
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
          <polyline points="14 2 14 8 20 8" />
          <line x1="16" y1="13" x2="8" y2="13" />
          <line x1="16" y1="17" x2="8" y2="17" />
          <polyline points="10 9 9 9 8 9" />
        </svg>
      ),
      title: "Transparência Total",
      description: "Relatórios detalhados e prestação de contas clara para todos os condôminos.",
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <polyline points="12 6 12 12 16 14" />
        </svg>
      ),
      title: "Disponibilidade 24h",
      description: "Suporte integral para emergências e demandas urgentes do condomínio.",
    },
  ];

  const services = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      ),
      title: "Síndico Profissional",
      description: "Gestão especializada com profissionais capacitados para administrar seu condomínio com excelência.",
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
          <line x1="16" y1="2" x2="16" y2="6" />
          <line x1="8" y1="2" x2="8" y2="6" />
          <line x1="3" y1="10" x2="21" y2="10" />
        </svg>
      ),
      title: "Gestão de Assembleias",
      description: "Organização e condução de assembleias, garantindo participação e deliberações eficientes.",
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
        </svg>
      ),
      title: "Manutenção Predial",
      description: "Gerenciamento completo de manutenções preventivas e corretivas em todas as áreas comuns.",
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="12" y1="1" x2="12" y2="23" />
          <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
        </svg>
      ),
      title: "Gestão Financeira",
      description: "Controle rigoroso de contas, orçamentos e investimentos do condomínio.",
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
          <circle cx="8.5" cy="7" r="4" />
          <line x1="20" y1="8" x2="20" y2="14" />
          <line x1="23" y1="11" x2="17" y2="11" />
        </svg>
      ),
      title: "Gestão de Colaboradores",
      description: "Administração de porteiros, zeladores e equipe de limpeza com treinamento contínuo.",
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
        </svg>
      ),
      title: "Atendimento aos Moradores",
      description: "Canal de comunicação eficiente para solicitações, reclamações e sugestões dos condôminos.",
    },
  ];

  const processSteps = [
    {
      icon: <ClipboardCheck className="h-8 w-8" />,
      number: "01",
      title: "Diagnóstico do Condomínio",
      description: "Analisamos a situação atual do condomínio: documentação, contratos, finanças, manutenções pendentes e relacionamento com moradores.",
    },
    {
      icon: <FileText className="h-8 w-8" />,
      number: "02",
      title: "Plano de Gestão",
      description: "Elaboramos um plano de ação com metas, cronograma de manutenções, previsão orçamentária e estratégias para otimização de custos.",
    },
    {
      icon: <Rocket className="h-8 w-8" />,
      number: "03",
      title: "Transição Organizada",
      description: "Realizamos a transição de forma planejada, assumindo a gestão com todas as informações documentadas e comunicação clara aos moradores.",
    },
    {
      icon: <RefreshCcw className="h-8 w-8" />,
      number: "04",
      title: "Gestão Contínua",
      description: "Administramos o dia a dia com reuniões periódicas, relatórios de transparência, assembleias organizadas e atendimento aos condôminos.",
    },
  ];

  const faqs = [
    {
      question: "O que é um síndico profissional e qual a diferença para o síndico morador?",
      answer: "O síndico profissional é um gestor especializado contratado para administrar o condomínio, diferente do síndico morador que é um condômino eleito. O profissional traz expertise em gestão, imparcialidade nas decisões, dedicação exclusiva e conhecimento técnico em legislação condominial, contratos e manutenção predial.",
    },
    {
      question: "Quanto custa contratar um síndico profissional?",
      answer: "O valor varia conforme o porte do condomínio, número de unidades, complexidade da gestão e serviços inclusos. Geralmente o custo é absorvido pela otimização de contratos e redução de desperdícios que o profissional proporciona. Solicite um orçamento para uma proposta personalizada.",
    },
    {
      question: "O síndico profissional substitui a administradora?",
      answer: "São funções complementares. O síndico profissional é o representante legal do condomínio e toma as decisões de gestão. A administradora cuida da parte burocrática como folha de pagamento, boletos e contabilidade. Trabalhamos em parceria com a administradora escolhida pelo condomínio.",
    },
    {
      question: "Como funciona a transição de um síndico morador para profissional?",
      answer: "Realizamos um processo organizado de transição que inclui: levantamento de toda documentação, análise de contratos vigentes, verificação de pendências, reunião com o corpo diretivo e comunicado aos moradores. A transição leva de 30 a 60 dias para que tudo seja devidamente documentado.",
    },
    {
      question: "O síndico profissional participa das assembleias?",
      answer: "Sim, o síndico profissional organiza, convoca e preside as assembleias ordinárias e extraordinárias. Ele prepara a pauta, apresenta a prestação de contas, conduz as votações e elabora as atas. Nossa experiência em assembleias garante reuniões mais produtivas e organizadas.",
    },
    {
      question: "Como é feito o atendimento aos moradores?",
      answer: "Mantemos canais de comunicação ativos como WhatsApp, e-mail e telefone para atendimento aos moradores. Estabelecemos horários de atendimento presencial quando necessário e utilizamos sistemas de gestão para registro e acompanhamento de todas as solicitações.",
    },
  ];

  const cases = [
    {
      icon: <TrendingUp className="h-6 w-6" />,
      metric: "Até 25%",
      description: "Redução média nas despesas condominiais com gestão profissional",
    },
    {
      icon: <Clock className="h-6 w-6" />,
      metric: "< 24h",
      description: "Tempo de resposta para solicitações dos moradores",
    },
    {
      icon: <Users className="h-6 w-6" />,
      metric: "95%",
      description: "Índice de aprovação em assembleias de prestação de contas",
    },
    {
      icon: <Building className="h-6 w-6" />,
      metric: "200+",
      description: "Condomínios administrados em todo o Brasil",
    },
  ];

  const testimonials = [
    {
      quote: "Desde que contratamos o síndico profissional, a gestão do condomínio melhorou em todos os aspectos. Transparência e organização exemplares.",
      author: "Conselho Fiscal",
      company: "Edifício Residencial Aurora - Curitiba/PR",
    },
    {
      quote: "A economia que o síndico profissional trouxe com a renegociação de contratos já pagou o investimento. Recomendo para todos os condomínios.",
      author: "Dr. Marcos",
      company: "Condomínio Empresarial Centro - São Paulo/SP",
    },
    {
      quote: "Finalmente temos assembleias organizadas e prestação de contas clara. O síndico profissional trouxe paz para nosso condomínio.",
      author: "Maria das Graças",
      company: "Residencial das Palmeiras - Florianópolis/SC",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header ctaText="Solicitar Orçamento" />
      
      <HeroSection
        title="Gestão Profissional para seu"
        highlight="Condomínio"
        subtitle="Síndico profissional com experiência comprovada. Deixe a administração do seu condomínio nas mãos de especialistas e tenha mais tranquilidade no dia a dia."
        heroImage={heroImage}
        ctaText="Falar com Especialista"
      />

      <AboutSection />

      <BenefitsSection
        title="Por que escolher um Síndico Profissional?"
        subtitle="Benefícios de uma gestão especializada para seu condomínio"
        benefits={benefits}
      />

      <ProcessSection 
        title="Como assumimos a gestão"
        subtitle="Nossa metodologia para uma transição tranquila e gestão eficiente"
        steps={processSteps}
      />

      <ServicesGrid
        title="Nossos Serviços para Condomínios"
        subtitle="Soluções completas para uma administração eficiente"
        services={services}
      />

      <FAQSection 
        title="Dúvidas sobre Síndico Profissional"
        subtitle="Entenda como funciona a gestão profissional de condomínios"
        faqs={faqs}
      />

      <CasesSection 
        title="Resultados em Gestão Condominial"
        subtitle="O que nossos síndicos profissionais entregam para os condomínios"
        cases={cases}
      />

      <Testimonials testimonials={testimonials} />

      <CertificationsSection />

      <CTASection
        title="Transforme a gestão do seu condomínio"
        subtitle="Solicite uma proposta personalizada e descubra como podemos ajudar"
        ctaText="Quero uma Proposta"
      />

      <LeadForm 
        serviceName="Síndico Profissional" 
        serviceType="sindico"
      />

      <Footer />
    </div>
  );
};

export default SindicoPage;
