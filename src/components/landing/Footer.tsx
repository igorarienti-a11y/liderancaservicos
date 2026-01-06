import { Phone, Mail, MapPin } from "lucide-react";
import logoLideranca from "@/assets/logo-lideranca.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 items-start">
          {/* Logo and description */}
          <div>
            <img
              src={logoLideranca}
              alt="Grupo Liderança"
              className="h-12 w-auto brightness-0 invert mb-4"
            />
            <p className="text-primary-foreground/80 text-sm leading-relaxed">
              Há mais de 30 anos oferecendo soluções em terceirização com qualidade, 
              comprometimento e inovação para empresas de todo o Brasil.
            </p>
          </div>

          {/* Contact info */}
          <div>
            <h4 className="text-primary-foreground font-bold mb-4">Contato</h4>
            <div className="space-y-3">
              <a
                href="tel:4837333100"
                className="flex items-center gap-2 text-primary-foreground/80 hover:text-secondary transition-colors text-sm"
              >
                <Phone className="h-4 w-4" />
                (48) 3733-3100 / 3733-3101
              </a>
              <a
                href="mailto:lideranca@lideranca.com.br"
                className="flex items-center gap-2 text-primary-foreground/80 hover:text-secondary transition-colors text-sm"
              >
                <Mail className="h-4 w-4" />
                lideranca@lideranca.com.br
              </a>
              <div className="flex items-start gap-2 text-primary-foreground/80 text-sm">
                <MapPin className="h-4 w-4 mt-0.5" />
                <span>Tubarão/SC - Atendimento em todo Brasil</span>
              </div>
            </div>
          </div>

          {/* Quick info */}
          <div>
            <h4 className="text-primary-foreground font-bold mb-4">Empresas do Grupo</h4>
            <ul className="space-y-2 text-primary-foreground/80 text-sm">
              <li>• Liderança Serviços</li>
              <li>• Limger</li>
              <li>• Lince Patrimonial</li>
              <li>• Work Líder</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
          <p className="text-primary-foreground/60 text-sm">
            © {currentYear} Grupo Liderança. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
