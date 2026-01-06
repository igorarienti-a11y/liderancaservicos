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
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-primary text-center mb-12">
          {title}
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-muted rounded-lg p-6 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                {service.icon}
              </div>
              <h3 className="text-lg font-bold text-primary mb-2">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm">
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
