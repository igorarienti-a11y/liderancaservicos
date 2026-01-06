import { ReactNode } from "react";
import { CheckCircle2 } from "lucide-react";

interface Benefit {
  title: string;
  description?: string;
}

interface CompactBenefitsProps {
  title: string;
  subtitle?: string;
  benefits: Benefit[];
  icon?: ReactNode;
}

const CompactBenefits = ({ title, subtitle, benefits, icon }: CompactBenefitsProps) => {
  return (
    <section className="py-10 md:py-16 bg-muted">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-primary text-center mb-3 md:mb-4">
            {title}
          </h2>
          {subtitle && (
            <p className="text-muted-foreground text-sm md:text-base text-center mb-6 md:mb-10 max-w-2xl mx-auto">
              {subtitle}
            </p>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="flex items-start gap-2 md:gap-3 bg-background rounded-lg p-3 md:p-4"
              >
                <div className="flex-shrink-0 mt-0.5">
                  {icon || <CheckCircle2 className="h-4 w-4 md:h-5 md:w-5 text-secondary" />}
                </div>
                <div>
                  <h3 className="font-semibold text-primary text-sm md:text-base">
                    {benefit.title}
                  </h3>
                  {benefit.description && (
                    <p className="text-muted-foreground text-xs md:text-sm mt-1">
                      {benefit.description}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompactBenefits;
