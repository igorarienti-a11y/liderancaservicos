import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import logoLideranca from "@/assets/logo-lideranca.png";

const Index = () => {
  return (
    <div className="min-h-screen bg-hero-gradient flex flex-col">
      {/* Header */}
      <header className="container mx-auto px-4 py-6">
        <img
          src={logoLideranca}
          alt="Liderança - Compromisso com seu bem-estar"
          className="h-14 md:h-16 w-auto brightness-0 invert"
        />
      </header>

      {/* Main Content */}
      <main className="flex-1 flex items-center">
        <div className="container mx-auto px-4 py-12">
          <div className="text-center mb-16 animate-slide-up">
            <span className="inline-block px-4 py-2 bg-secondary/20 text-secondary rounded-full text-sm font-semibold mb-6">
              Há mais de 30 anos no mercado
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
              Compromisso com seu{" "}
              <span className="text-secondary">Bem-Estar</span>
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/90 max-w-3xl mx-auto">
              Soluções completas em terceirização para sua empresa. Escolha o serviço que você precisa:
            </p>
          </div>

          {/* Service Cards */}
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                title: "Facilities",
                description: "Gestão integrada de facilities para seu empreendimento",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                    <polyline points="9 22 9 12 15 12 15 22" />
                  </svg>
                ),
                link: "/facilities",
              },
              {
                title: "Limpeza",
                description: "Serviços de limpeza profissional e conservação",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                    <polyline points="22 4 12 14.01 9 11.01" />
                  </svg>
                ),
                link: "/limpeza",
              },
              {
                title: "Segurança",
                description: "Vigilância patrimonial e segurança corporativa",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  </svg>
                ),
                link: "/seguranca",
              },
            ].map((service, index) => (
              <Link
                key={service.title}
                to={service.link}
                className="group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 rounded-2xl p-8 text-center hover:bg-primary-foreground/20 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl h-full">
                  <div className="w-20 h-20 rounded-2xl bg-secondary/20 flex items-center justify-center mx-auto mb-6 text-secondary group-hover:bg-secondary group-hover:text-primary transition-all duration-300">
                    {service.icon}
                  </div>
                  <h2 className="text-2xl font-bold text-primary-foreground mb-3">
                    {service.title}
                  </h2>
                  <p className="text-primary-foreground/80 mb-6">
                    {service.description}
                  </p>
                  <Button variant="cta" className="w-full">
                    Saiba Mais
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <line x1="5" y1="12" x2="19" y2="12" />
                      <polyline points="12 5 19 12 12 19" />
                    </svg>
                  </Button>
                </div>
              </Link>
            ))}
          </div>

          {/* Contact Info */}
          <div className="mt-16 text-center animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <p className="text-primary-foreground/80 mb-4">
              Ou entre em contato diretamente:
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <a
                href="tel:4837333100"
                className="flex items-center justify-center gap-2 text-primary-foreground hover:text-secondary transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                (48) 3733-3100
              </a>
              <a
                href="mailto:lideranca@lideranca.com.br"
                className="flex items-center justify-center gap-2 text-primary-foreground hover:text-secondary transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
                lideranca@lideranca.com.br
              </a>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="container mx-auto px-4 py-6 text-center">
        <p className="text-primary-foreground/60 text-sm">
          © {new Date().getFullYear()} Liderança. Todos os direitos reservados.
        </p>
      </footer>
    </div>
  );
};

export default Index;
