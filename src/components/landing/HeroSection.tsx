import { Button } from "@/components/ui/button";
import { Phone, ChevronRight } from "lucide-react";

interface HeroSectionProps {
  title: string;
  highlight: string;
  subtitle: string;
  heroImage: string;
  ctaText?: string;
}

const HeroSection = ({
  title,
  highlight,
  subtitle,
  heroImage,
  ctaText = "Solicitar Orçamento",
}: HeroSectionProps) => {
  const scrollToForm = () => {
    const formElement = document.getElementById("lead-form");
    if (formElement) {
      formElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/95 to-primary/70" />
      </div>

      {/* Decorative "L" shape like official site */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 z-[1]">
        <div className="w-4 h-64 bg-secondary" />
        <div className="w-32 h-4 bg-secondary -mt-4" />
      </div>

      {/* Yellow accent line */}
      <div className="absolute right-20 top-1/3 w-1 h-40 bg-secondary/30 hidden lg:block" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          <p className="text-secondary font-medium text-lg mb-4 animate-slide-up">
            O full service que dá certo
          </p>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 animate-slide-up leading-tight" style={{ animationDelay: "0.1s" }}>
            {title}{" "}
            <span className="text-secondary italic font-extrabold">{highlight}</span>
          </h1>

          <p className="text-lg md:text-xl text-primary-foreground/90 mb-10 max-w-2xl animate-slide-up leading-relaxed" style={{ animationDelay: "0.2s" }}>
            {subtitle}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 animate-slide-up" style={{ animationDelay: "0.3s" }}>
            <Button
              onClick={scrollToForm}
              className="bg-secondary hover:bg-secondary/90 text-primary font-bold px-8 py-6 text-lg rounded shadow-lg hover:shadow-xl transition-all"
            >
              {ctaText}
              <ChevronRight className="h-5 w-5 ml-2" />
            </Button>
            <Button 
              variant="outline" 
              className="border-2 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 px-8 py-6 text-lg rounded"
              asChild
            >
              <a href="tel:4837333100">
                <Phone className="h-5 w-5 mr-2" />
                Ligar Agora
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
