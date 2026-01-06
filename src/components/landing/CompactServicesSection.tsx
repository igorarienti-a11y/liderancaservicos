import { ReactNode } from "react";

interface Service {
  icon: ReactNode;
  title: string;
  description: string;
}

interface CompactServicesSectionProps {
  title: string;
  services: Service[];
}

const CompactServicesSection = ({ title, services }: CompactServicesSectionProps) => {
  return (
    <section className="py-10 md:py-16 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-primary text-center mb-8 md:mb-12">
          {title}
        </h2>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-muted rounded-lg p-4 md:p-6 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-10 h-10 md:w-14 md:h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3 md:mb-4">
                <div className="scale-75 md:scale-100">
                  {service.icon}
                </div>
              </div>
              <h3 className="text-sm md:text-lg font-bold text-primary mb-1 md:mb-2 leading-tight">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-xs md:text-sm hidden sm:block">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CompactServicesSection;
