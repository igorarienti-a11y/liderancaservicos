interface Stat {
  value: string;
  label: string;
}

interface StatsSectionProps {
  stats: Stat[];
}

const StatsSection = ({ stats }: StatsSectionProps) => {
  return (
    <section className="hidden md:block py-8 md:py-12 bg-primary">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 max-w-5xl mx-auto">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-secondary mb-1 md:mb-2">
                {stat.value}
              </div>
              <div className="text-primary-foreground/80 text-xs md:text-sm">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
