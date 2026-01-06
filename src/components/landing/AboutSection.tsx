import { Building2, Users, MapPin, Award } from "lucide-react";

const AboutSection = () => {
  const stats = [
    {
      icon: <Building2 className="h-8 w-8 text-primary" />,
      value: "30+",
      label: "Anos de experiência",
    },
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      value: "32 mil",
      label: "Colaboradores",
    },
    {
      icon: <MapPin className="h-8 w-8 text-primary" />,
      value: "27",
      label: "Estados atendidos",
    },
    {
      icon: <Award className="h-8 w-8 text-primary" />,
      value: "1000+",
      label: "Empresas atendidas",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <span className="inline-block px-4 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            Sobre a Liderança
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Maior empresa de facilities da <span className="text-primary">Região Sul</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Desde <strong>1995</strong>, a Liderança Serviços atua no competitivo segmento de terceirização, 
              oferecendo soluções em limpeza, conservação, segurança patrimonial e facilities. São mais de 
              <strong> 30 anos</strong> em busca de inovação e aprimoramento contínuo, que transformaram 
              nossa marca em referência de excelência no setor.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Somos a <strong>primeira empresa do setor com presença em todos os estados da federação</strong>, 
              atendendo clientes nos setores público e privado em todo o Brasil. Com mais de 32 mil colaboradores, 
              fomos eleitos como <strong>melhor empresa para se trabalhar</strong> em nosso segmento, 
              em escolha direta dos nossos funcionários.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Nosso time se destaca pelo entusiasmo pelo trabalho, todos treinados, preparados e qualificados 
              para atender diferentes atividades e setores, de baixa, média e alta complexidade em todo o Brasil.
            </p>
          </div>

          <div className="bg-background rounded-2xl p-8 shadow-lg border">
            <h3 className="text-xl font-bold mb-6 text-center">Nossos Valores</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold">Comprometimento com resultados</h4>
                  <p className="text-sm text-muted-foreground">Foco em entregar o que foi prometido, superando expectativas</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold">Valorização do ser humano</h4>
                  <p className="text-sm text-muted-foreground">Nossos colaboradores são nosso maior patrimônio</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold">Aprendizagem contínua</h4>
                  <p className="text-sm text-muted-foreground">Investimento constante em capacitação e desenvolvimento</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold">Eficiência e disciplina</h4>
                  <p className="text-sm text-muted-foreground">Processos otimizados para máxima produtividade</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold">Presteza no atendimento</h4>
                  <p className="text-sm text-muted-foreground">Agilidade e prontidão em todas as solicitações</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-background rounded-xl p-6 text-center shadow-sm border hover:shadow-md transition-shadow"
            >
              <div className="flex justify-center mb-3">{stat.icon}</div>
              <div className="text-3xl font-bold text-primary mb-1">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <blockquote className="max-w-3xl mx-auto">
            <p className="text-lg italic text-muted-foreground mb-4">
              "Promover ambientes funcionais, seguros e bem cuidados, contribuindo para a produtividade 
              e bem-estar de nossos clientes, por meio de serviços de facilities executados com 
              comprometimento, disciplina, eficiência e valorização do ser humano."
            </p>
            <footer className="font-semibold">— Propósito da Liderança</footer>
          </blockquote>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
