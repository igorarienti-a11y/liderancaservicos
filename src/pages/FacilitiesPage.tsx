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
import heroImage from "@/assets/hero-facilities.jpg";

const FacilitiesPage = () => {
  const benefits = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
          <polyline points="9 22 9 12 15 12 15 22" />
        </svg>
      ),
      title: "Gestão Integrada",
      description: "Gerenciamento completo de todas as operações do seu edifício em uma única solução.",
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <polyline points="12 6 12 12 16 14" />
        </svg>
      ),
      title: "Disponibilidade 24/7",
      description: "Equipe de plantão 24 horas para emergências e suporte operacional contínuo.",
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        </svg>
      ),
      title: "Redução de Custos",
      description: "Otimização de recursos e processos para reduzir custos operacionais em até 30%.",
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
      title: "Equipe Especializada",
      description: "Profissionais treinados e certificados para cada função específica.",
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
          <line x1="16" y1="2" x2="16" y2="6" />
          <line x1="8" y1="2" x2="8" y2="6" />
          <line x1="3" y1="10" x2="21" y2="10" />
        </svg>
      ),
      title: "Gestão Preventiva",
      description: "Manutenção planejada para evitar problemas e prolongar a vida útil dos equipamentos.",
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
        </svg>
      ),
      title: "Relatórios Detalhados",
      description: "Dashboards e relatórios completos para acompanhamento de indicadores.",
    },
  ];

  const services = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
        </svg>
      ),
      title: "Manutenção Predial",
      description: "Elétrica, hidráulica, ar condicionado e infraestrutura geral.",
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
          <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
        </svg>
      ),
      title: "Recepção e Portaria",
      description: "Atendimento profissional e controle de acesso.",
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
          <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
        </svg>
      ),
      title: "Zeladoria",
      description: "Cuidado integral do patrimônio e áreas comuns.",
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M18 8h1a4 4 0 0 1 0 8h-1" />
          <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z" />
          <line x1="6" y1="1" x2="6" y2="4" />
          <line x1="10" y1="1" x2="10" y2="4" />
          <line x1="14" y1="1" x2="14" y2="4" />
        </svg>
      ),
      title: "Copa e Café",
      description: "Serviços de copa com qualidade e higiene.",
    },
  ];

  const faqs = [
    {
      question: "O que é gestão de facilities e como funciona?",
      answer: "Gestão de facilities é a administração integrada de todos os serviços que mantêm um edifício funcionando: manutenção predial, limpeza, recepção, segurança, jardinagem, entre outros. A Liderança atua como parceira única, gerenciando todas essas operações de forma coordenada, permitindo que sua empresa foque no core business enquanto cuidamos da infraestrutura.",
    },
    {
      question: "Quais são as vantagens de terceirizar facilities com a Liderança?",
      answer: "As principais vantagens incluem: redução de custos operacionais através de economia de escala; eliminação de passivos trabalhistas; acesso a profissionais especializados e treinados; flexibilidade para ajustar a equipe conforme demanda; gestão profissional com indicadores e relatórios; e suporte 24 horas para emergências.",
    },
    {
      question: "A Liderança atende empresas de todos os portes?",
      answer: "Sim, atendemos desde pequenos escritórios até grandes indústrias e complexos comerciais. Com presença em todos os 27 estados brasileiros e mais de 32 mil colaboradores, temos estrutura para atender operações de qualquer porte, adaptando nossas soluções às necessidades específicas de cada cliente.",
    },
    {
      question: "Como é feito o processo de transição para a Liderança?",
      answer: "O processo começa com um diagnóstico detalhado do seu empreendimento. Em seguida, elaboramos uma proposta personalizada com escopo, cronograma e investimento. A implementação é feita de forma planejada, com treinamento das equipes e acompanhamento dedicado para garantir uma transição suave, sem interrupção das operações.",
    },
    {
      question: "Vocês possuem certificações de qualidade?",
      answer: "Sim, a Liderança possui certificação ISO 9001, que garante a qualidade e confiabilidade dos nossos serviços. Além disso, somos reconhecidos pelo Great Place to Work como uma das melhores empresas para se trabalhar no setor, e figuramos entre as 500 maiores empresas do Sul do Brasil.",
    },
    {
      question: "Como funciona o suporte e acompanhamento após a contratação?",
      answer: "Oferecemos acompanhamento contínuo com um gestor de conta dedicado, reuniões periódicas de alinhamento, relatórios de indicadores, canal de comunicação 24 horas para emergências e um processo de melhoria contínua que ajusta os serviços conforme o feedback e as necessidades que surgem ao longo do contrato.",
    },
  ];

  const cases = [
    {
      icon: <TrendingUp className="h-6 w-6" />,
      metric: "Até 30%",
      description: "Redução nos custos operacionais com gestão integrada",
    },
    {
      icon: <Clock className="h-6 w-6" />,
      metric: "< 2 horas",
      description: "Tempo médio de resposta para chamados urgentes",
    },
    {
      icon: <Users className="h-6 w-6" />,
      metric: "32 mil",
      description: "Colaboradores treinados em todo o Brasil",
    },
    {
      icon: <Building className="h-6 w-6" />,
      metric: "1000+",
      description: "Empresas atendidas nos setores público e privado",
    },
  ];

  const testimonials = [
    {
      quote: "Simplicidade, proximidade e agilidade têm sido os pilares do relacionamento. Grata surpresa na prestação de serviços no Oeste de Santa Catarina.",
      author: "Bruno Laures",
      company: "Kellogg's - Santa Catarina",
    },
    {
      quote: "Acompanho o crescimento da LIMGER (Grupo Liderança) durante muitos anos. Sempre nos atenderam com qualidade, profissionalismo e agilidade.",
      author: "Claudio Lopes de Oliveira",
      company: "BRF - Serafina Corrêa/RS",
    },
    {
      quote: "A Liderança, juntamente com seus gestores trabalham diariamente em cima da eficácia e eficiência dos seus serviços prestados. Sou grato pela parceria de sempre.",
      author: "Ebazar Simões Filho",
      company: "Mercado Livre - Salvador",
    },
  ];

  return (
    <div className="min-h-screen">
      <Header ctaText="Solicitar Orçamento" />
      
      <HeroSection
        title="Gestão Completa de"
        highlight="Facilities"
        subtitle="Terceirize a gestão do seu empreendimento com quem tem mais de 30 anos de experiência. Reduza custos, aumente a eficiência e tenha tranquilidade."
        heroImage={heroImage}
        ctaText="Quero um Orçamento"
      />

      <AboutSection />

      <BenefitsSection
        title="Por que terceirizar Facilities?"
        subtitle="Descubra as vantagens de ter a Liderança como parceira na gestão do seu empreendimento"
        benefits={benefits}
      />

      <ProcessSection 
        title="Como implementamos Facilities"
        subtitle="Nossa metodologia testada em mais de 1000 empresas garante uma transição segura"
      />

      <ServicesGrid
        title="Soluções Integradas"
        subtitle="Oferecemos todos os serviços que seu empreendimento precisa em um único fornecedor"
        services={services}
      />

      <FAQSection 
        title="Dúvidas sobre Facilities"
        subtitle="Entenda como funciona a terceirização de facilities com a Liderança"
        faqs={faqs}
      />

      <CasesSection 
        title="Resultados em Facilities"
        subtitle="Veja o que entregamos para nossos clientes em gestão de facilities"
        cases={cases}
      />

      <Testimonials testimonials={testimonials} />

      <CertificationsSection />

      <CTASection
        title="Pronto para otimizar sua gestão?"
        subtitle="Solicite um orçamento personalizado e descubra como podemos ajudar sua empresa a economizar e ter mais eficiência."
        ctaText="Solicitar Orçamento Gratuito"
      />

      <LeadForm serviceName="Facilities" serviceType="facilities" />

      <Footer />
    </div>
  );
};

export default FacilitiesPage;
