import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

interface CTASectionProps {
  title: string;
  subtitle: string;
  ctaText?: string;
}

const CTASection = ({
  title,
  subtitle,
  ctaText = "Solicitar Orçamento Gratuito",
}: CTASectionProps) => {
  const scrollToForm = () => {
    const formElement = document.getElementById("lead-form");
    if (formElement) {
      formElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="py-10 md:py-16 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-primary mb-3 md:mb-4">
            {title}
          </h2>
          <p className="text-primary/80 text-sm md:text-lg mb-6 md:mb-8">
            {subtitle}
          </p>
          <Button
            onClick={scrollToForm}
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold px-6 md:px-8 py-4 md:py-6 text-base md:text-lg rounded shadow-lg w-full sm:w-auto"
          >
            <span className="hidden sm:inline">{ctaText}</span>
            <span className="sm:hidden">Solicitar Orçamento</span>
            <ChevronRight className="h-5 w-5 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
