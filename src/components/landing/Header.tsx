import { Phone, Mail } from "lucide-react";
import logoLideranca from "@/assets/logo-lideranca.png";

interface HeaderProps {
  ctaText?: string;
  onCtaClick?: () => void;
}

const Header = ({ ctaText = "Solicitar Orçamento", onCtaClick }: HeaderProps) => {
  const scrollToForm = () => {
    const formElement = document.getElementById("lead-form");
    if (formElement) {
      formElement.scrollIntoView({ behavior: "smooth" });
    }
    onCtaClick?.();
  };

  return (
    <div className="hidden md:block">
      {/* Top bar with contact info */}
      <div className="bg-lideranca-navy-dark text-primary-foreground py-2 text-sm">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center gap-6">
            <a
              href="tel:4837333100"
              className="flex items-center gap-2 hover:text-secondary transition-colors"
            >
              <Phone className="h-4 w-4" />
              <span className="hidden sm:inline">(48) 3733-3100 / 3733-3101</span>
              <span className="sm:hidden">(48) 3733-3100</span>
            </a>
            <a
              href="mailto:lideranca@lideranca.com.br"
              className="hidden md:flex items-center gap-2 hover:text-secondary transition-colors"
            >
              <Mail className="h-4 w-4" />
              lideranca@lideranca.com.br
            </a>
          </div>
          <div className="hidden sm:flex items-center gap-4 text-primary-foreground/80">
            <a href="https://www.lideranca.com.br/lideranca/" target="_blank" rel="noopener noreferrer" className="hover:text-secondary transition-colors">
              Quem somos
            </a>
            <span>•</span>
            <span>Vagas</span>
            <span>•</span>
            <span>Portal do Colaborador</span>
          </div>
        </div>
      </div>

      {/* Main header */}
      <header className="bg-primary py-4 sticky top-0 z-50">
        <div className="container mx-auto px-4 flex items-center justify-between">
          <a href="https://www.lideranca.com.br" target="_blank" rel="noopener noreferrer" className="flex items-center">
            <img
              src={logoLideranca}
              alt="Grupo Liderança - Compromisso com seu bem-estar"
              className="h-12 md:h-14 w-auto"
            />
          </a>
          
          <button
            onClick={scrollToForm}
            className="bg-secondary text-primary font-bold px-4 py-2 md:px-6 md:py-3 text-sm md:text-base rounded hover:bg-secondary/90 hover:shadow-lg transition-all duration-300"
          >
            <span className="hidden sm:inline">{ctaText}</span>
            <span className="sm:hidden">Orçamento</span>
          </button>
        </div>
      </header>
    </div>
  );
};

export default Header;
