import { Link } from "react-router-dom";
import { Phone, Mail } from "lucide-react";
import logoLideranca from "@/assets/logo-lideranca.png";

const services = [
  { title: "Limpeza e Conservação", link: "/limpeza-conservacao", image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=400&q=80" },
  { title: "Segurança Patrimonial", link: "/seguranca-patrimonial", image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=400&q=80" },
  { title: "Ascensorista", link: "/ascensorista", image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=400&q=80" },
  { title: "Copa e Café", link: "/copa-cafe", image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400&q=80" },
  { title: "Cozinheira", link: "/cozinheira", image: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=400&q=80" },
  { title: "Digitação", link: "/digitacao", image: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?w=400&q=80" },
  { title: "Garçom", link: "/garcom", image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&q=80" },
  { title: "Jardinagem", link: "/jardinagem", image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&q=80" },
  { title: "Mão de Obra em Geral", link: "/mao-de-obra", image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=400&q=80" },
  { title: "Motorista", link: "/motorista", image: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=400&q=80" },
  { title: "Portaria", link: "/portaria", image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&q=80" },
  { title: "Recepção", link: "/recepcao", image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&q=80" },
  { title: "Telefonia", link: "/telefonia", image: "https://images.unsplash.com/photo-1556745757-8d76bdb6984b?w=400&q=80" },
  { title: "Zeladoria", link: "/zeladoria", image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=400&q=80" },
];

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Top bar */}
      <div className="bg-lideranca-navy-dark text-primary-foreground py-2 text-sm">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center gap-4 md:gap-6">
            <a href="tel:4837333100" className="flex items-center gap-2 hover:text-secondary transition-colors">
              <Phone className="h-4 w-4" />
              <span className="hidden sm:inline">(48) 3733-3100 / 3733-3101</span>
              <span className="sm:hidden text-xs">(48) 3733-3100</span>
            </a>
            <a href="mailto:lideranca@lideranca.com.br" className="hidden md:flex items-center gap-2 hover:text-secondary transition-colors">
              <Mail className="h-4 w-4" />
              lideranca@lideranca.com.br
            </a>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-primary relative overflow-hidden py-12 md:py-20">
        <div className="container mx-auto px-4">
          {/* Logo */}
          <div className="mb-10 md:mb-16">
            <img
              src={logoLideranca}
              alt="Grupo Liderança - Compromisso com seu bem-estar"
              className="h-12 md:h-16 w-auto brightness-0 invert"
            />
          </div>

          {/* Main content */}
          <div className="max-w-3xl mb-10 md:mb-16">
            <h2 className="text-secondary font-semibold text-lg md:text-xl mb-2">
              Terceirizar para crescer
            </h2>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-4 leading-tight">
              BUSQUE A LIDERANÇA E{" "}
              <span className="text-secondary">FOQUE NO SEU CORE</span>
            </h1>
            <p className="text-primary-foreground/80 text-base md:text-lg">
              Há mais de 30 anos oferecendo soluções completas em terceirização para empresas de todo o Brasil.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="bg-primary pb-16 md:pb-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 gap-4">
            {services.map((service) => (
              <Link
                key={service.title}
                to={service.link}
                className="group relative overflow-hidden rounded-lg aspect-square"
              >
                {/* Image */}
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/60 to-transparent" />
                
                {/* Yellow accent corner */}
                <div className="absolute bottom-0 left-0 w-full">
                  <div className="h-1 bg-secondary" />
                  <div className="absolute bottom-0 left-0 w-8 h-8 bg-secondary clip-corner" />
                </div>
                
                {/* Title */}
                <div className="absolute bottom-3 left-3 right-3">
                  <h3 className="text-primary-foreground font-bold text-sm md:text-base leading-tight">
                    {service.title}
                  </h3>
                </div>
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="text-center mt-12">
            <Link
              to="/facilities"
              className="inline-block bg-secondary text-primary font-bold px-8 py-4 rounded hover:bg-secondary/90 transition-colors text-lg"
            >
              Solicite um Orçamento
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-lideranca-navy-dark py-8 mt-auto">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <img
              src={logoLideranca}
              alt="Grupo Liderança"
              className="h-10 w-auto brightness-0 invert"
            />
            <p className="text-primary-foreground/60 text-sm text-center">
              © {new Date().getFullYear()} Grupo Liderança. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>

      <style>{`
        .clip-corner {
          clip-path: polygon(0 100%, 100% 100%, 0 0);
        }
      `}</style>
    </div>
  );
};

export default Index;
