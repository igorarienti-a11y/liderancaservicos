import { useEffect } from "react";
import { Link } from "react-router-dom";
import { CheckCircle, Phone, Mail, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import logoLideranca from "@/assets/logo-lideranca.png";
import Footer from "@/components/landing/Footer";

const ThankYouPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      {/* Header simplificado */}
      <header className="bg-primary py-4">
        <div className="container mx-auto px-4 flex items-center justify-center">
          <a href="https://www.lideranca.com.br" target="_blank" rel="noopener noreferrer">
            <img
              src={logoLideranca}
              alt="Grupo Liderança"
              className="h-12 md:h-14 w-auto"
            />
          </a>
        </div>
      </header>

      {/* Conteúdo principal */}
      <main className="flex-1 flex items-center justify-center py-12 md:py-20 px-4">
        <div className="max-w-2xl w-full text-center animate-fade-in">
          {/* Ícone de sucesso */}
          <div className="mb-6 md:mb-8 flex justify-center">
            <div className="relative">
              <div className="w-20 h-20 md:w-28 md:h-28 rounded-full bg-secondary/20 flex items-center justify-center animate-scale-in">
                <CheckCircle className="w-12 h-12 md:w-16 md:h-16 text-secondary" strokeWidth={1.5} />
              </div>
              <div className="absolute inset-0 w-20 h-20 md:w-28 md:h-28 rounded-full bg-secondary/10 animate-ping" style={{ animationDuration: "2s" }} />
            </div>
          </div>

          {/* Título */}
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Solicitação <span className="text-gradient">Enviada!</span>
          </h1>

          <p className="text-muted-foreground text-base md:text-lg lg:text-xl mb-8 md:mb-10 max-w-lg mx-auto leading-relaxed">
            Obrigado pelo seu interesse! Nossa equipe comercial entrará em contato em breve para elaborar a melhor proposta para sua empresa.
          </p>

          {/* Card de próximos passos */}
          <div className="bg-muted rounded-2xl p-6 md:p-8 mb-8 md:mb-10 text-left max-w-md mx-auto shadow-card">
            <h2 className="text-foreground font-bold text-lg mb-4">Próximos passos:</h2>
            <ul className="space-y-3">
              {[
                "Nosso time analisará sua solicitação",
                "Entraremos em contato em até 24h úteis",
                "Enviaremos uma proposta personalizada",
              ].map((step, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary text-primary-foreground text-xs font-bold flex items-center justify-center mt-0.5">
                    {i + 1}
                  </span>
                  <span className="text-muted-foreground text-sm md:text-base">{step}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contato direto */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-4 mb-8 md:mb-10">
            <a
              href="tel:4837333100"
              className="flex items-center gap-2 text-primary hover:text-secondary transition-colors font-medium text-sm md:text-base"
            >
              <Phone className="h-4 w-4" />
              (48) 3733-3100
            </a>
            <span className="hidden sm:inline text-border">|</span>
            <a
              href="mailto:lideranca@lideranca.com.br"
              className="flex items-center gap-2 text-primary hover:text-secondary transition-colors font-medium text-sm md:text-base"
            >
              <Mail className="h-4 w-4" />
              lideranca@lideranca.com.br
            </a>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ThankYouPage;
