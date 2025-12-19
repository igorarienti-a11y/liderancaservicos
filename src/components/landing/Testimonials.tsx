import { useState } from "react";

interface Testimonial {
  quote: string;
  author: string;
  company: string;
}

interface TestimonialsProps {
  testimonials?: Testimonial[];
}

const defaultTestimonials: Testimonial[] = [
  {
    quote: "Simplicidade, proximidade e agilidade têm sido os pilares do relacionamento. Grata surpresa na prestação de serviços.",
    author: "Bruno Laures",
    company: "Kellogg's - Santa Catarina",
  },
  {
    quote: "Acompanho o crescimento do Grupo Liderança durante muitos anos. Sempre nos atenderam com qualidade, profissionalismo e agilidade.",
    author: "Claudio Lopes de Oliveira",
    company: "BRF - Serafina Correa/RS",
  },
  {
    quote: "Presta um atendimento excelente, com profissionais competentes, atenciosos e prestativos. Sempre dispostos a nos ajudar.",
    author: "Ingrid Costa Santos",
    company: "Pernambucanas",
  },
  {
    quote: "A Liderança, juntamente com seus gestores, trabalham diariamente em cima da eficácia e eficiência dos seus serviços prestados.",
    author: "Ebazar Simões Filho",
    company: "Mercado Livre - Salvador",
  },
];

const Testimonials = ({ testimonials = defaultTestimonials }: TestimonialsProps) => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <span className="text-secondary font-semibold text-sm uppercase tracking-wider">
            Depoimentos
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-primary mt-2 mb-4">
            Eles Escolheram a Liderança
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            São mais de 30 anos de história e milhares de clientes satisfeitos em todo o Brasil
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Main testimonial */}
          <div className="relative bg-gradient-to-br from-primary to-lideranca-navy-dark rounded-3xl p-8 md:p-12 shadow-2xl mb-8">
            <svg
              className="absolute top-6 left-6 w-12 h-12 text-secondary/30"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>

            <div className="relative z-10">
              <p className="text-primary-foreground text-lg md:text-xl leading-relaxed mb-8 italic">
                "{testimonials[activeIndex].quote}"
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center text-primary font-bold text-lg">
                  {testimonials[activeIndex].author.charAt(0)}
                </div>
                <div>
                  <p className="text-primary-foreground font-semibold">
                    {testimonials[activeIndex].author}
                  </p>
                  <p className="text-secondary text-sm">
                    {testimonials[activeIndex].company}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation dots */}
          <div className="flex justify-center gap-3">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === activeIndex
                    ? "bg-secondary w-8"
                    : "bg-primary/30 hover:bg-primary/50"
                }`}
                aria-label={`Ver depoimento ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 max-w-4xl mx-auto">
          {[
            { number: "30+", label: "Anos de Mercado" },
            { number: "500+", label: "Clientes Atendidos" },
            { number: "15.000+", label: "Colaboradores" },
            { number: "98%", label: "Satisfação" },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <p className="text-4xl md:text-5xl font-bold text-secondary">
                {stat.number}
              </p>
              <p className="text-muted-foreground mt-2">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
