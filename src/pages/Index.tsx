import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Users, Building2, Award, ChevronRight, Star } from "lucide-react";
import logoLideranca from "@/assets/logo-lideranca.png";
import heroBanner from "@/assets/hero-banner.png";
import serviceFacilities from "@/assets/service-facilities.png";
import iconSeguranca from "@/assets/icon-seguranca.png";
import BrazilMap from "@/components/BrazilMap";
import { Button } from "@/components/ui/button";

const mainServices = [
  { title: "Segurança", link: "/seguranca-patrimonial", image: iconSeguranca },
  { title: "Limpeza", link: "/limpeza-conservacao", image: "https://www.lideranca.com.br/wp-content/uploads/2024/11/Prancheta-1_7@4x.jpg" },
  { title: "Facilities", link: "/facilities", image: serviceFacilities },
];

const testimonials = [
  {
    text: "Simplicidade, proximidade e agilidade têm sido os pilares do relacionamento. Grata surpresa na prestação de serviços no Oeste de Santa Catarina.",
    name: "Bruno Laures",
    company: "Kellogg's - Santa Catarina",
    logo: "https://www.lideranca.com.br/wp-content/uploads/2023/04/kelloggs-logo-1.png"
  },
  {
    text: "Acompanho o crescimento da LIMGER (Grupo Liderança) durante muitos anos. Sempre nos atenderam com qualidade, profissionalismo e agilidade.",
    name: "Claudio Lopes de Oliveira",
    company: "BRF - Serafina Correa/RS",
    logo: "https://www.lideranca.com.br/wp-content/uploads/2023/04/brf-logo.png"
  },
  {
    text: "Presta um atendimento excelente, com profissionais competentes, atenciosos e prestativos. Sempre dispostos a nos ajudar.",
    name: "Ingrid Costa Santos",
    company: "Pernambucanas",
    logo: "https://www.lideranca.com.br/wp-content/uploads/2023/04/Pernambucanas.png"
  },
  {
    text: "Colaboradoras da limpeza são organizadas, deixam os ambientes limpos, são pontuais e muito caprichosas.",
    name: "Leandro Souza",
    company: "Gol Linhas Aéreas - Florianópolis/SC",
    logo: "https://www.lideranca.com.br/wp-content/uploads/2023/04/gol-1-1.png"
  },
];

const awards = [
  {
    image: "https://www.lideranca.com.br/wp-content/uploads/2024/10/image-6.png",
    title: "Great Place to Work",
    description: "Entre as melhores empresas para se trabalhar no setor."
  },
  {
    image: "https://www.lideranca.com.br/wp-content/uploads/2024/10/respsocial_alesc-1.png",
    title: "Responsabilidade Social Alesc",
    description: "Uma empresa preocupada com a responsabilidade socioambiental."
  },
  {
    image: "https://www.lideranca.com.br/wp-content/uploads/2024/10/image-7.png",
    title: "500 Maiores do Sul",
    description: "Entre as maiores empresas do Sul e a com maior receita líquida do setor."
  },
  {
    image: "https://www.lideranca.com.br/wp-content/uploads/2024/10/image-8.png",
    title: "Melhor em Satisfação",
    description: "Reconhecida pelos serviços de qualidade prestados nos clientes."
  },
];

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      {/* Top bar */}
      <div className="bg-lideranca-navy-dark text-primary-foreground py-2 text-sm">
        <div className="container mx-auto px-4 flex flex-col sm:flex-row justify-between items-center gap-2">
          <div className="flex items-center gap-4 md:gap-6">
            <a href="tel:4837333100" translate="no" className="flex items-center gap-2 hover:text-secondary transition-colors">
              <Phone className="h-4 w-4" />
              <span className="hidden sm:inline">(48) 3733-3100 / 3733-3101</span>
              <span className="sm:hidden text-xs">(48) 3733-3100</span>
            </a>
            <a href="mailto:lideranca@lideranca.com.br" translate="no" className="hidden md:flex items-center gap-2 hover:text-secondary transition-colors">
              <Mail className="h-4 w-4" />
              lideranca@lideranca.com.br
            </a>
          </div>
          <div className="flex items-center gap-4 text-xs">
            <a href="https://www.lideranca.com.br/lideranca/" target="_blank" rel="noopener noreferrer" className="hover:text-secondary transition-colors">
              Quem somos
            </a>
            <a href="https://www.lideranca.com.br/vaga/" target="_blank" rel="noopener noreferrer" className="hover:text-secondary transition-colors">
              Vagas
            </a>
            <a href="https://curriculos.lideranca.com.br:8084/" target="_blank" rel="noopener noreferrer" className="hover:text-secondary transition-colors">
              Cadastre seu currículo
            </a>
            <a href="http://colaborador.lideranca.com.br/" target="_blank" rel="noopener noreferrer" className="border border-primary-foreground/50 px-3 py-1 rounded hover:bg-primary-foreground/10 transition-colors">
              Portal do Colaborador
            </a>
          </div>
        </div>
      </div>

      {/* Header */}
      <header className="bg-primary py-4">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
          <a href="https://www.lideranca.com.br" target="_blank" rel="noopener noreferrer">
            <img
              src={logoLideranca}
              alt="Grupo Liderança - Compromisso com seu bem-estar"
              className="h-12 md:h-16 w-auto"
            />
          </a>
          <nav className="hidden lg:flex items-center gap-6">
            <Link to="/" className="text-primary-foreground hover:text-secondary transition-colors font-medium">Início</Link>
            <a href="#servicos" className="text-primary-foreground hover:text-secondary transition-colors font-medium">Nossos Serviços</a>
            <a href="#depoimentos" className="text-primary-foreground hover:text-secondary transition-colors font-medium">Depoimentos</a>
            <a href="#contato" className="text-primary-foreground hover:text-secondary transition-colors font-medium">Contato</a>
          </nav>
        </div>
      </header>

      {/* Hero Section with Banner Image */}
      <section className="relative w-full bg-primary">
        <img 
          src={heroBanner}
          alt="O full service que dá certo - Grupo Liderança"
          className="w-full h-auto object-cover object-left md:object-center min-h-[300px] md:min-h-[500px] lg:min-h-[600px]"
        />
        {/* Blue shadow fade for mobile - blends with section below */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-primary via-primary/80 to-transparent md:hidden z-[5]" />
        {/* Overlay with buttons - hidden on mobile */}
        <div className="hidden md:block absolute bottom-0 left-0 right-0 bg-gradient-to-t from-primary/90 to-transparent py-8">
          <div className="container mx-auto px-4">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-8">
              <div className="flex flex-col sm:flex-row gap-4 md:gap-8">
                <Link to="/facilities">
                  <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-bold text-lg px-8 py-6 shadow-button">
                    Solicite um Orçamento
                    <ChevronRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <a href="tel:4837333100">
                  <Button size="lg" className="bg-transparent border-2 border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground font-bold text-lg px-8 py-6">
                    <Phone className="mr-2 h-5 w-5" />
                    Ligar Agora
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section - Hidden on mobile */}
      <section className="hidden md:block bg-primary py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <MapPin className="h-6 w-6 text-secondary mx-auto mb-2" />
              <p className="text-2xl md:text-3xl font-bold text-secondary">27</p>
              <p className="text-primary-foreground/80 text-sm">Estados atendidos</p>
            </div>
            <div className="text-center">
              <Users className="h-6 w-6 text-secondary mx-auto mb-2" />
              <p className="text-2xl md:text-3xl font-bold text-secondary">+35 mil</p>
              <p className="text-primary-foreground/80 text-sm">Colaboradores</p>
            </div>
            <div className="text-center">
              <Building2 className="h-6 w-6 text-secondary mx-auto mb-2" />
              <p className="text-2xl md:text-3xl font-bold text-secondary">+1000</p>
              <p className="text-primary-foreground/80 text-sm">Empresas atendidas</p>
            </div>
            <div className="text-center">
              <Award className="h-6 w-6 text-secondary mx-auto mb-2" />
              <p className="text-2xl md:text-3xl font-bold text-secondary">+30</p>
              <p className="text-primary-foreground/80 text-sm">Anos de experiência</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicos" className="relative bg-primary py-16 md:py-20 overflow-hidden">
        <div className="absolute inset-0 bg-primary z-0" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <p className="text-secondary font-semibold uppercase tracking-wide mb-2">Nossos Serviços</p>
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground">
              Soluções completas em terceirização
            </h2>
          </div>
          
          {/* 3 Service Blocks */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {mainServices.map((service) => (
              <Link
                key={service.title}
                to={service.link}
                className="group relative overflow-hidden rounded-2xl aspect-square transition-all duration-500 hover:-translate-y-2"
              >
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
                />
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="text-center mt-12">
            <Link to="/facilities">
              <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-bold text-lg px-10 py-6 shadow-button">
                Solicite um Orçamento
                <ChevronRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="depoimentos" className="bg-background py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-secondary font-semibold uppercase tracking-wide mb-2">
              Veja a opinião de quem conhece
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Eles escolheram a Liderança
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className="bg-card p-6 rounded-lg shadow-card hover:shadow-hover transition-shadow border border-border"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-secondary text-secondary" />
                  ))}
                </div>
                <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
                  "{testimonial.text}"
                </p>
                <div className="border-t border-border pt-4">
                  <p className="font-semibold text-foreground text-sm">{testimonial.name}</p>
                  <p className="text-muted-foreground text-xs">{testimonial.company}</p>
                  <img 
                    src={testimonial.logo} 
                    alt={testimonial.company}
                    className="h-8 mt-3 object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
              Simule seu orçamento!
            </h2>
            <p className="text-primary-foreground/80 text-lg mb-8">
              Solicite um orçamento e nossa equipe comercial irá montar a melhor proposta adequada para as suas necessidades.
            </p>
            <Link to="/facilities">
              <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-bold text-lg px-10 py-6 shadow-button">
                Solicite um Orçamento
                <ChevronRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="bg-background py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1">
              <p className="text-secondary font-semibold uppercase tracking-wide mb-2">
                Conheça a Liderança
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                +30 anos de excelência em terceirização
              </h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Atuamos desde 1995 no competitivo segmento da terceirização. São mais de 30 anos em busca de inovação e aprimoramento das nossas entregas, que transformaram a marca Liderança em referência de excelência no setor.
              </p>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Com mais de 35 mil colaboradores e presença em 27 estados, oferecemos soluções completas em mão de obra terceirizada para empresas de todos os portes e segmentos.
              </p>
            </div>
            <div className="flex-1">
              {/* Awards Grid */}
              <div className="grid grid-cols-2 gap-4">
                {awards.map((award, index) => (
                  <div 
                    key={index}
                    className="bg-card p-4 rounded-lg text-center shadow-card border border-border"
                  >
                    <img 
                      src={award.image} 
                      alt={award.title}
                      className="h-16 mx-auto mb-3 object-contain"
                    />
                    <h3 className="font-semibold text-foreground text-sm mb-1">{award.title}</h3>
                    <p className="text-muted-foreground text-xs">{award.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section with Brazil Map */}
      <section className="bg-muted py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1 text-center lg:text-left">
              <p className="text-secondary font-semibold uppercase tracking-wide mb-2">
                Onde estamos
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Presença em todo o Brasil
              </h2>
              <p className="text-muted-foreground mb-8 max-w-xl">
                Com filiais e escritórios estrategicamente localizados, oferecemos atendimento de qualidade em todos os 27 estados brasileiros.
              </p>
              
              <div className="flex flex-wrap justify-center lg:justify-start gap-2 md:gap-3" translate="no">
                {["AC", "AL", "AP", "AM", "BA", "CE", "DF", "ES", "GO", "MA", "MT", "MS", "MG", "PA", "PB", "PR", "PE", "PI", "RJ", "RN", "RS", "RO", "RR", "SC", "SP", "SE", "TO"].map((state) => (
                  <span 
                    key={state}
                    className="bg-primary text-primary-foreground px-3 py-1 rounded text-sm font-medium"
                  >
                    {state}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="flex-1 flex justify-center">
              <BrazilMap className="w-64 h-64 md:w-80 md:h-80 text-primary" />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section - Clean version without diagonal */}
      <section id="contato" className="relative bg-primary py-16 md:py-20 overflow-hidden">
        {/* Solid background overlay to cover any decorative lines */}
        <div className="absolute inset-0 bg-primary z-0" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
                Entre em contato
              </h2>
              <p className="text-primary-foreground/80 text-lg">
                Nossa equipe está pronta para atender sua empresa
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <a 
                href="tel:4837333100"
                className="bg-primary-foreground/10 backdrop-blur-sm p-6 rounded-lg text-center hover:bg-primary-foreground/20 transition-colors"
              >
                <Phone className="h-8 w-8 text-secondary mx-auto mb-3" />
                <p className="text-primary-foreground font-semibold">(48) 3733-3100</p>
                <p className="text-primary-foreground/70 text-sm">Ligue agora</p>
              </a>
              
              <a 
                href="mailto:lideranca@lideranca.com.br"
                className="bg-primary-foreground/10 backdrop-blur-sm p-6 rounded-lg text-center hover:bg-primary-foreground/20 transition-colors"
              >
                <Mail className="h-8 w-8 text-secondary mx-auto mb-3" />
                <p className="text-primary-foreground font-semibold text-sm">lideranca@lideranca.com.br</p>
                <p className="text-primary-foreground/70 text-sm">Envie um e-mail</p>
              </a>
              
              <Link 
                to="/facilities"
                className="bg-secondary p-6 rounded-lg text-center hover:bg-secondary/90 transition-colors"
              >
                <ChevronRight className="h-8 w-8 text-secondary-foreground mx-auto mb-3" />
                <p className="text-secondary-foreground font-semibold">Solicite um Orçamento</p>
                <p className="text-secondary-foreground/70 text-sm">Preencha o formulário</p>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative bg-lideranca-navy-dark py-12 overflow-hidden">
        {/* Solid background overlay to cover any decorative lines */}
        <div className="absolute inset-0 bg-lideranca-navy-dark z-0" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            {/* Logo and Info */}
            <div>
              <img
                src={logoLideranca}
                alt="Grupo Liderança"
                className="h-12 w-auto brightness-0 invert mb-4"
              />
              <p className="text-primary-foreground/60 text-sm">
                Compromisso com seu bem-estar há mais de 30 anos.
              </p>
            </div>
            
            {/* Quick Links */}
            <div>
              <h4 className="text-primary-foreground font-semibold mb-4">Links Rápidos</h4>
              <ul className="space-y-2">
                <li><Link to="/" className="text-primary-foreground/60 hover:text-secondary text-sm transition-colors">Início</Link></li>
                <li><Link to="/facilities" className="text-primary-foreground/60 hover:text-secondary text-sm transition-colors">A Liderança</Link></li>
                <li><a href="#servicos" className="text-primary-foreground/60 hover:text-secondary text-sm transition-colors">Nossos Serviços</a></li>
                <li><a href="#contato" className="text-primary-foreground/60 hover:text-secondary text-sm transition-colors">Contato</a></li>
              </ul>
            </div>
            
            {/* Services */}
            <div>
              <h4 className="text-primary-foreground font-semibold mb-4">Serviços</h4>
              <ul className="space-y-2">
                <li><Link to="/limpeza-conservacao" className="text-primary-foreground/60 hover:text-secondary text-sm transition-colors">Limpeza e Conservação</Link></li>
                <li><Link to="/seguranca-patrimonial" className="text-primary-foreground/60 hover:text-secondary text-sm transition-colors">Segurança Patrimonial</Link></li>
                <li><Link to="/portaria" className="text-primary-foreground/60 hover:text-secondary text-sm transition-colors">Portaria</Link></li>
                <li><Link to="/recepcao" className="text-primary-foreground/60 hover:text-secondary text-sm transition-colors">Recepção</Link></li>
              </ul>
            </div>
            
            {/* Contact */}
            <div>
              <h4 className="text-primary-foreground font-semibold mb-4">Contato</h4>
              <ul className="space-y-2">
                <li>
                  <a href="tel:4837333100" className="text-primary-foreground/60 hover:text-secondary text-sm transition-colors flex items-center gap-2">
                    <Phone className="h-4 w-4" /> (48) 3733-3100
                  </a>
                </li>
                <li>
                  <a href="mailto:lideranca@lideranca.com.br" className="text-primary-foreground/60 hover:text-secondary text-sm transition-colors flex items-center gap-2">
                    <Mail className="h-4 w-4" /> lideranca@lideranca.com.br
                  </a>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-primary-foreground/20 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-primary-foreground/60 text-sm text-center">
              © {new Date().getFullYear()} Grupo Liderança. Todos os direitos reservados.
            </p>
            <div className="flex gap-4">
              <a href="https://www.facebook.com/grupolideranca" target="_blank" rel="noopener noreferrer" className="text-primary-foreground/60 hover:text-secondary transition-colors">
                Facebook
              </a>
              <a href="https://www.instagram.com/lideranca_servicos/" target="_blank" rel="noopener noreferrer" className="text-primary-foreground/60 hover:text-secondary transition-colors">
                Instagram
              </a>
              <a href="https://www.linkedin.com/company/lideranca-servicos/" target="_blank" rel="noopener noreferrer" className="text-primary-foreground/60 hover:text-secondary transition-colors">
                LinkedIn
              </a>
              <a href="https://www.youtube.com/user/lideraservicos" target="_blank" rel="noopener noreferrer" className="text-primary-foreground/60 hover:text-secondary transition-colors">
                YouTube
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
