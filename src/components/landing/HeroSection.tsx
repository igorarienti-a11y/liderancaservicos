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
    <section className="relative min-h-[60vh] md:min-h-[80vh] lg:min-h-[90vh] flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt=""
          className="w-full h-full object-cover object-left md:object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/95 to-primary/60 md:to-primary/70" />
      </div>

      <div className="container mx-auto px-4 relative z-10 py-8 md:py-12">
        <div className="max-w-3xl">
          <p className="text-secondary font-medium text-sm md:text-base lg:text-lg mb-2 md:mb-4">
            O full service que dá certo
          </p>

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-primary-foreground mb-3 md:mb-6 leading-tight">
            {title}{" "}
            <span className="text-secondary italic font-extrabold">{highlight}</span>
          </h1>

          <p className="text-sm md:text-base lg:text-xl text-primary-foreground/90 mb-6 md:mb-10 max-w-2xl leading-relaxed">
            {subtitle}
          </p>

          {/* Buttons hidden on mobile */}
          <div className="hidden md:flex flex-col sm:flex-row gap-3 md:gap-4">
            <Button
              onClick={scrollToForm}
              className="bg-secondary hover:bg-secondary/90 text-primary font-bold px-6 md:px-8 py-5 md:py-6 text-base md:text-lg rounded shadow-lg hover:shadow-xl transition-all w-full sm:w-auto"
            >
              {ctaText}
              <ChevronRight className="h-5 w-5 ml-2" />
            </Button>
            <Button 
              variant="outline" 
              className="border-2 border-secondary bg-transparent text-secondary hover:bg-secondary hover:text-primary px-6 md:px-8 py-5 md:py-6 text-base md:text-lg rounded w-full sm:w-auto"
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
