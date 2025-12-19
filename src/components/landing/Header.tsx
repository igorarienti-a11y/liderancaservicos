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
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        <div className="flex items-center">
          <img
            src={logoLideranca}
            alt="Liderança - Compromisso com seu bem-estar"
            className="h-12 md:h-14 w-auto"
          />
        </div>
        
        <div className="flex items-center gap-4">
          <a
            href="tel:4837333100"
            className="hidden md:flex items-center gap-2 text-primary font-medium hover:text-secondary transition-colors"
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
          <button
            onClick={scrollToForm}
            className="bg-gradient-to-r from-secondary to-lideranca-yellow-light text-lideranca-navy font-bold px-6 py-3 rounded-lg hover:shadow-lg hover:scale-105 transition-all duration-300"
          >
            {ctaText}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
