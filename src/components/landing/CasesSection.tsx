import { TrendingUp, Clock, Users, Building } from "lucide-react";

interface CaseResult {
  icon: React.ReactNode;
  metric: string;
  description: string;
}

interface CasesSectionProps {
  title?: string;
  subtitle?: string;
  cases: CaseResult[];
}

const CasesSection = ({ 
  title = "Resultados Comprovados",
  subtitle = "Confira os resultados que entregamos para nossos clientes",
  cases 
}: CasesSectionProps) => {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <span className="inline-block px-4 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            Cases de Sucesso
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
          <p className="text-lg text-muted-foreground">{subtitle}</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {cases.map((item, index) => (
            <div 
              key={index} 
              className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-2xl p-6 border border-primary/20 hover:shadow-lg transition-shadow"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center text-primary mb-4">
                {item.icon}
              </div>
              <div className="text-2xl md:text-3xl font-bold text-primary mb-2">
                {item.metric}
              </div>
              <p className="text-muted-foreground">{item.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-muted/50 rounded-2xl p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">Por que grandes empresas escolhem a Liderança?</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <svg className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                    <polyline points="22 4 12 14.01 9 11.01" />
                  </svg>
                  <span className="text-muted-foreground">Presença nacional com atendimento local em todos os estados</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                    <polyline points="22 4 12 14.01 9 11.01" />
                  </svg>
                  <span className="text-muted-foreground">Certificação ISO 9001 que garante qualidade e confiabilidade</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                    <polyline points="22 4 12 14.01 9 11.01" />
                  </svg>
                  <span className="text-muted-foreground">Pioneiros na implantação de contratos à distância</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                    <polyline points="22 4 12 14.01 9 11.01" />
                  </svg>
                  <span className="text-muted-foreground">Equipe altamente especializada e comprometida com prazos</span>
                </li>
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-background rounded-xl p-4 text-center shadow-sm">
                <img 
                  src="https://www.lideranca.com.br/wp-content/uploads/2023/04/kelloggs-logo-1.png" 
                  alt="Kellogg's" 
                  className="h-12 mx-auto object-contain grayscale hover:grayscale-0 transition-all"
                />
              </div>
              <div className="bg-background rounded-xl p-4 text-center shadow-sm">
                <img 
                  src="https://www.lideranca.com.br/wp-content/uploads/2023/04/brf-logo.png" 
                  alt="BRF" 
                  className="h-12 mx-auto object-contain grayscale hover:grayscale-0 transition-all"
                />
              </div>
              <div className="bg-background rounded-xl p-4 text-center shadow-sm">
                <img 
                  src="https://www.lideranca.com.br/wp-content/uploads/2023/04/gol-1-1.png" 
                  alt="Gol" 
                  className="h-12 mx-auto object-contain grayscale hover:grayscale-0 transition-all"
                />
              </div>
              <div className="bg-background rounded-xl p-4 text-center shadow-sm">
                <img 
                  src="https://www.lideranca.com.br/wp-content/uploads/2023/04/Pernambucanas.png" 
                  alt="Pernambucanas" 
                  className="h-12 mx-auto object-contain grayscale hover:grayscale-0 transition-all"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CasesSection;

export { TrendingUp, Clock, Users, Building };
