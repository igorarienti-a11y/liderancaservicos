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
    <section className="py-16 bg-muted">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-primary text-center mb-4">
            {title}
          </h2>
          {subtitle && (
            <p className="text-muted-foreground text-center mb-10 max-w-2xl mx-auto">
              {subtitle}
            </p>
          )}

          <div className="grid sm:grid-cols-2 gap-4">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="flex items-start gap-3 bg-background rounded-lg p-4"
              >
                <div className="flex-shrink-0 mt-0.5">
                  {icon || <CheckCircle2 className="h-5 w-5 text-secondary" />}
                </div>
                <div>
                  <h3 className="font-semibold text-primary">
                    {benefit.title}
                  </h3>
                  {benefit.description && (
                    <p className="text-muted-foreground text-sm mt-1">
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
