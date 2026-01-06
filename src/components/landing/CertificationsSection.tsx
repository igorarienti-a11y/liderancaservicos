import { Award, Shield, Star, Trophy, Medal, Sparkles } from "lucide-react";

const CertificationsSection = () => {
  const certifications = [
    {
      icon: <Shield className="h-10 w-10" />,
      title: "ISO 9001",
      description: "Certificação que garante a qualidade e confiabilidade dos nossos serviços",
    },
    {
      icon: <Trophy className="h-10 w-10" />,
      title: "Great Place to Work",
      description: "Entre as melhores empresas para se trabalhar no setor de facilities",
    },
    {
      icon: <Award className="h-10 w-10" />,
      title: "500 Maiores do Sul",
      description: "Entre as maiores empresas do Sul e com maior receita líquida do setor",
    },
    {
      icon: <Star className="h-10 w-10" />,
      title: "Melhor em Satisfação",
      description: "Reconhecida pelos serviços de qualidade prestados aos clientes",
    },
    {
      icon: <Medal className="h-10 w-10" />,
      title: "300 Melhores - Época",
      description: "Entre as 300 melhores empresas do país pela Revista Época Negócios",
    },
    {
      icon: <Sparkles className="h-10 w-10" />,
      title: "Responsabilidade Social",
      description: "Prêmio ALESC de Responsabilidade Socioambiental",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <span className="inline-block px-4 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            Reconhecimentos
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Certificações e <span className="text-primary">Prêmios</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Nosso compromisso com a excelência é reconhecido pelas principais instituições do país
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {certifications.map((cert, index) => (
            <div 
              key={index}
              className="bg-background rounded-xl p-6 border shadow-sm hover:shadow-md transition-shadow group"
            >
              <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                {cert.icon}
              </div>
              <h3 className="text-lg font-bold mb-2">{cert.title}</h3>
              <p className="text-muted-foreground text-sm">{cert.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-primary/5 rounded-2xl p-8 border border-primary/20">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-xl font-bold mb-2">Compromisso com a Sustentabilidade</h3>
              <p className="text-muted-foreground max-w-2xl">
                A Liderança publica anualmente seu Balanço Socioambiental, demonstrando transparência 
                e compromisso com práticas sustentáveis. Acreditamos que uma empresa deve fazer 
                diferença positiva para o mundo e para a sociedade.
              </p>
            </div>
            <a 
              href="https://www.lideranca.com.br/lideranca/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors whitespace-nowrap"
            >
              Saiba Mais
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                <polyline points="15 3 21 3 21 9" />
                <line x1="10" y1="14" x2="21" y2="3" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
