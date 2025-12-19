import { Button } from "@/components/ui/button";

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
    <section className="py-20 bg-gradient-to-r from-secondary to-lideranca-yellow-light relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            {title}
          </h2>
          <p className="text-primary/80 text-lg mb-8 max-w-2xl mx-auto">
            {subtitle}
          </p>
          <Button
            variant="default"
            size="xl"
            onClick={scrollToForm}
            className="shadow-lg hover:shadow-xl"
          >
            {ctaText}
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
      </div>
    </section>
  );
};

export default CTASection;
