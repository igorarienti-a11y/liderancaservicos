import { Link } from "react-router-dom";
import { Phone, Mail, Building, Sparkles, Shield, ChevronRight } from "lucide-react";
import logoLideranca from "@/assets/logo-lideranca.png";

const Index = () => {
  const services = [
    {
      title: "Facilities",
      description: "Gestão integrada de facilities para seu empreendimento",
      icon: <Building className="h-10 w-10" />,
      link: "/facilities",
    },
    {
      title: "Limpeza",
      description: "Serviços de limpeza profissional e conservação",
      icon: <Sparkles className="h-10 w-10" />,
      link: "/limpeza",
    },
    {
      title: "Segurança",
      description: "Vigilância patrimonial e segurança corporativa",
      icon: <Shield className="h-10 w-10" />,
      link: "/seguranca",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      {/* Top bar */}
      <div className="bg-lideranca-navy-dark text-primary-foreground py-2 text-sm">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center gap-6">
            <a href="tel:4837333100" className="flex items-center gap-2 hover:text-secondary transition-colors">
              <Phone className="h-4 w-4" />
              <span className="hidden sm:inline">(48) 3733-3100</span>
            </a>
            <a href="mailto:lideranca@lideranca.com.br" className="hidden md:flex items-center gap-2 hover:text-secondary transition-colors">
              <Mail className="h-4 w-4" />
              lideranca@lideranca.com.br
            </a>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <main className="flex-1 bg-primary relative overflow-hidden">
        {/* Background gradient effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-lideranca-navy-dark via-primary to-lideranca-navy-light opacity-90" />
        
        {/* Decorative elements */}
        <div className="absolute left-0 top-1/2 -translate-y-1/2">
          <div className="w-3 h-48 bg-secondary" />
          <div className="w-24 h-3 bg-secondary -mt-3" />
        </div>

        <div className="relative z-10 container mx-auto px-4 py-12">
          {/* Logo */}
          <div className="mb-16">
            <img
              src={logoLideranca}
              alt="Grupo Liderança - Compromisso com seu bem-estar"
              className="h-14 md:h-16 w-auto brightness-0 invert"
            />
          </div>

          {/* Main content */}
          <div className="max-w-4xl mb-16">
            <p className="text-secondary font-medium text-lg mb-4">
              O full service que dá certo
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 leading-tight">
              Compromisso com seu{" "}
              <span className="text-secondary italic font-extrabold">Bem-Estar</span>
            </h1>
            <p className="text-xl text-primary-foreground/90 max-w-2xl">
              Soluções completas em terceirização. Escolha o serviço que sua empresa precisa:
            </p>
          </div>

          {/* Service Cards */}
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl">
            {services.map((service) => (
              <Link
                key={service.title}
                to={service.link}
                className="group"
              >
                <div className="bg-primary-foreground/5 backdrop-blur border border-primary-foreground/10 rounded-lg p-8 text-center hover:bg-primary-foreground/10 transition-all duration-300 hover:-translate-y-1 h-full">
                  <div className="w-20 h-20 rounded-full bg-secondary/20 flex items-center justify-center mx-auto mb-6 text-secondary group-hover:bg-secondary group-hover:text-primary transition-all duration-300">
                    {service.icon}
                  </div>
                  <h2 className="text-2xl font-bold text-primary-foreground mb-3">
                    {service.title}
                  </h2>
                  <p className="text-primary-foreground/70 mb-6">
                    {service.description}
                  </p>
                  <span className="inline-flex items-center text-secondary font-semibold group-hover:gap-2 transition-all">
                    Saiba Mais <ChevronRight className="h-4 w-4 ml-1" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-lideranca-navy-dark py-6">
        <div className="container mx-auto px-4 text-center">
          <p className="text-primary-foreground/60 text-sm">
            © {new Date().getFullYear()} Grupo Liderança. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
