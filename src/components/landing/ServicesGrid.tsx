interface Service {
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface ServicesGridProps {
  title: string;
  subtitle: string;
  services: Service[];
}

const ServicesGrid = ({ title, subtitle, services }: ServicesGridProps) => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <span className="text-secondary font-semibold text-sm uppercase tracking-wider">
            Nossos Serviços
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-primary mt-2 mb-4">
            {title}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">{subtitle}</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative bg-background border border-border rounded-2xl p-6 text-center hover:border-secondary/50 hover:shadow-lg transition-all duration-300"
            >
              <div className="w-16 h-16 rounded-2xl bg-primary/5 flex items-center justify-center mx-auto mb-4 group-hover:bg-secondary/10 transition-colors duration-300">
                {service.icon}
              </div>
              <h3 className="text-lg font-bold text-primary mb-2">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;
