import { Phone, Mail, MapPin } from "lucide-react";
import logoLideranca from "@/assets/logo-lideranca.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary py-8 md:py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 items-start">
          {/* Logo and description */}
          <div className="text-center md:text-left">
            <img
              src={logoLideranca}
              alt="Grupo Liderança"
              className="h-10 md:h-12 w-auto mb-3 md:mb-4 mx-auto md:mx-0"
            />
            <p className="text-primary-foreground/80 text-xs md:text-sm leading-relaxed">
              Há mais de 30 anos oferecendo soluções em terceirização com qualidade, 
              comprometimento e inovação para empresas de todo o Brasil.
            </p>
          </div>

          {/* Contact info */}
          <div className="text-center md:text-left">
            <h4 className="text-primary-foreground font-bold mb-3 md:mb-4 text-sm md:text-base">Contato</h4>
            <div className="space-y-2 md:space-y-3">
              <a
                href="tel:4837333100"
                className="flex items-center justify-center md:justify-start gap-2 text-primary-foreground/80 hover:text-secondary transition-colors text-xs md:text-sm"
              >
                <Phone className="h-4 w-4" />
                (48) 3733-3100 / 3733-3101
              </a>
              <a
                href="mailto:lideranca@lideranca.com.br"
                className="flex items-center justify-center md:justify-start gap-2 text-primary-foreground/80 hover:text-secondary transition-colors text-xs md:text-sm break-all"
              >
                <Mail className="h-4 w-4 flex-shrink-0" />
                lideranca@lideranca.com.br
              </a>
              <div className="flex items-center justify-center md:justify-start gap-2 text-primary-foreground/80 text-xs md:text-sm">
                <MapPin className="h-4 w-4 flex-shrink-0" />
                <span>Tubarão/SC - Todo Brasil</span>
              </div>
            </div>
          </div>

          {/* Quick info */}
          <div className="text-center md:text-left">
            <h4 className="text-primary-foreground font-bold mb-3 md:mb-4 text-sm md:text-base">Empresas do Grupo</h4>
            <ul className="space-y-1 md:space-y-2 text-primary-foreground/80 text-xs md:text-sm">
              <li>• Liderança Serviços</li>
              <li>• Limger</li>
              <li>• Lince Patrimonial</li>
              <li>• Work Líder</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-6 md:mt-8 pt-6 md:pt-8 text-center">
          <p className="text-primary-foreground/60 text-xs md:text-sm">
            © {currentYear} Grupo Liderança. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
