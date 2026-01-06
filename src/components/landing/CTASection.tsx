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
    <section className="py-16 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">
            {title}
          </h2>
          <p className="text-primary/80 text-lg mb-8">
            {subtitle}
          </p>
          <Button
            onClick={scrollToForm}
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold px-8 py-6 text-lg rounded shadow-lg"
          >
            {ctaText}
            <ChevronRight className="h-5 w-5 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
