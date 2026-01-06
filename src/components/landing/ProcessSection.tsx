import { ClipboardCheck, FileText, Rocket, RefreshCcw } from "lucide-react";

interface ProcessStep {
  icon: React.ReactNode;
  number: string;
  title: string;
  description: string;
}

interface ProcessSectionProps {
  title?: string;
  subtitle?: string;
  steps?: ProcessStep[];
}

const defaultSteps: ProcessStep[] = [
  {
    icon: <ClipboardCheck className="h-8 w-8" />,
    number: "01",
    title: "Diagnóstico Inicial",
    description: "Realizamos uma análise completa das necessidades do seu empreendimento, identificando pontos de melhoria e oportunidades de otimização.",
  },
  {
    icon: <FileText className="h-8 w-8" />,
    number: "02",
    title: "Proposta Personalizada",
    description: "Elaboramos uma solução sob medida, com escopo detalhado, cronograma de implementação e investimento transparente.",
  },
  {
    icon: <Rocket className="h-8 w-8" />,
    number: "03",
    title: "Implementação",
    description: "Executamos a transição de forma planejada, com treinamento das equipes, implantação de processos e acompanhamento dedicado.",
  },
  {
    icon: <RefreshCcw className="h-8 w-8" />,
    number: "04",
    title: "Melhoria Contínua",
    description: "Monitoramos indicadores, realizamos reuniões periódicas e ajustamos processos para garantir a excelência constante.",
  },
];

const ProcessSection = ({ 
  title = "Como Trabalhamos",
  subtitle = "Conheça nossa metodologia de trabalho desenvolvida ao longo de 30 anos de experiência",
  steps = defaultSteps
}: ProcessSectionProps) => {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block px-4 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            Nossa Metodologia
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
          <p className="text-lg text-muted-foreground">{subtitle}</p>
        </div>

        <div className="relative">
          {/* Connection line for desktop */}
          <div className="hidden lg:block absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-muted/30 rounded-2xl p-6 h-full border hover:border-primary/50 transition-colors group">
                  {/* Step number */}
                  <div className="absolute -top-4 left-6 bg-primary text-primary-foreground text-sm font-bold px-3 py-1 rounded-full">
                    {step.number}
                  </div>
                  
                  {/* Icon */}
                  <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-4 mt-2 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    {step.icon}
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 bg-primary/5 rounded-2xl p-8 border border-primary/20">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-xl font-bold mb-3">Política da Qualidade</h3>
            <p className="text-muted-foreground">
              Buscamos a constante satisfação dos nossos clientes através de <strong>profissionais motivados 
              em aperfeiçoamento contínuo</strong>, disciplina e comprometimento com as atividades da rotina, 
              melhoria contínua nas ações e eficiência e desenvolvimento como pensamento.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
