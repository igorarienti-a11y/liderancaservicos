import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

const MobileCTAButton = () => {
  const scrollToForm = () => {
    const formElement = document.getElementById("lead-form");
    if (formElement) {
      formElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="md:hidden bg-primary py-4">
      <div className="container mx-auto px-4">
        <Button 
          onClick={scrollToForm}
          size="lg" 
          className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground font-bold text-base py-5 shadow-button"
        >
          Solicitar Orçamento
          <ChevronRight className="ml-2 h-5 w-5" />
        </Button>
      </div>
    </section>
  );
};

export default MobileCTAButton;
