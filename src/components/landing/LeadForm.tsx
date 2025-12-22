import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { z } from "zod";

declare global {
  interface Window {
    dataLayer: Record<string, unknown>[];
  }
}

const leadSchema = z.object({
  nome: z.string().trim().min(2, "Nome deve ter pelo menos 2 caracteres").max(100, "Nome muito longo"),
  empresa: z.string().trim().min(2, "Nome da empresa deve ter pelo menos 2 caracteres").max(100, "Nome da empresa muito longo"),
  email: z.string().trim().email("E-mail inválido").max(255, "E-mail muito longo"),
  telefone: z.string().trim().min(10, "Telefone deve ter pelo menos 10 dígitos").max(20, "Telefone muito longo"),
  mensagem: z.string().trim().max(1000, "Mensagem muito longa").optional(),
});

interface LeadFormProps {
  serviceName: string;
  serviceType: "facilities" | "limpeza" | "seguranca";
}

const LeadForm = ({ serviceName, serviceType }: LeadFormProps) => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    nome: "",
    empresa: "",
    email: "",
    telefone: "",
    mensagem: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrors({});

    try {
      const validatedData = leadSchema.parse(formData);
      
      // Save lead to database
      const { error } = await supabase.from("leads").insert({
        nome: validatedData.nome,
        empresa: validatedData.empresa,
        email: validatedData.email,
        telefone: validatedData.telefone,
        mensagem: validatedData.mensagem || null,
        service_type: serviceType,
        service_name: serviceName,
      });

      if (error) {
        throw new Error("Erro ao salvar lead");
      }
      
      // Dispara evento para o Google Tag Manager
      if (typeof window !== 'undefined' && window.dataLayer) {
        window.dataLayer.push({
          event: 'send_form',
          form_name: serviceName,
          form_type: serviceType,
        });
      }
      
      toast({
        title: "Solicitação enviada com sucesso!",
        description: "Nossa equipe entrará em contato em breve.",
      });
      
      setFormData({
        nome: "",
        empresa: "",
        email: "",
        telefone: "",
        mensagem: "",
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        const newErrors: Record<string, string> = {};
        error.errors.forEach((err) => {
          if (err.path[0]) {
            newErrors[err.path[0] as string] = err.message;
          }
        });
        setErrors(newErrors);
      } else {
        toast({
          title: "Erro ao enviar",
          description: "Tente novamente mais tarde.",
          variant: "destructive",
        });
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const gradientColors = {
    facilities: "from-primary to-lideranca-navy-dark",
    limpeza: "from-primary to-lideranca-navy-dark",
    seguranca: "from-primary to-lideranca-navy-dark",
  };

  return (
    <section id="lead-form" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className={`bg-gradient-to-br ${gradientColors[serviceType]} rounded-3xl p-8 md:p-12 shadow-2xl`}>
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
                Solicite um Orçamento Gratuito
              </h2>
              <p className="text-primary-foreground/90 text-lg max-w-2xl mx-auto">
                Preencha o formulário abaixo e nossa equipe especializada em{" "}
                <span className="font-semibold text-secondary">{serviceName}</span> entrará em contato em até 24 horas.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="nome" className="text-primary-foreground font-medium">
                    Nome Completo *
                  </label>
                  <Input
                    id="nome"
                    name="nome"
                    value={formData.nome}
                    onChange={handleChange}
                    placeholder="Seu nome completo"
                    className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50 h-12"
                  />
                  {errors.nome && <p className="text-secondary text-sm">{errors.nome}</p>}
                </div>

                <div className="space-y-2">
                  <label htmlFor="empresa" className="text-primary-foreground font-medium">
                    Empresa *
                  </label>
                  <Input
                    id="empresa"
                    name="empresa"
                    value={formData.empresa}
                    onChange={handleChange}
                    placeholder="Nome da sua empresa"
                    className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50 h-12"
                  />
                  {errors.empresa && <p className="text-secondary text-sm">{errors.empresa}</p>}
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-primary-foreground font-medium">
                    E-mail Corporativo *
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="seu@email.com.br"
                    className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50 h-12"
                  />
                  {errors.email && <p className="text-secondary text-sm">{errors.email}</p>}
                </div>

                <div className="space-y-2">
                  <label htmlFor="telefone" className="text-primary-foreground font-medium">
                    Telefone/WhatsApp *
                  </label>
                  <Input
                    id="telefone"
                    name="telefone"
                    value={formData.telefone}
                    onChange={handleChange}
                    placeholder="(00) 00000-0000"
                    className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50 h-12"
                  />
                  {errors.telefone && <p className="text-secondary text-sm">{errors.telefone}</p>}
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="mensagem" className="text-primary-foreground font-medium">
                  Mensagem (opcional)
                </label>
                <Textarea
                  id="mensagem"
                  name="mensagem"
                  value={formData.mensagem}
                  onChange={handleChange}
                  placeholder="Conte-nos mais sobre sua necessidade..."
                  className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50 min-h-[120px]"
                />
                {errors.mensagem && <p className="text-secondary text-sm">{errors.mensagem}</p>}
              </div>

              <div className="pt-4">
                <Button
                  type="submit"
                  variant="cta"
                  size="xl"
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin h-5 w-5 mr-2" viewBox="0 0 24 24">
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                          fill="none"
                        />
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        />
                      </svg>
                      Enviando...
                    </>
                  ) : (
                    <>
                      Solicitar Orçamento Gratuito
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <line x1="5" y1="12" x2="19" y2="12" />
                        <polyline points="12 5 19 12 12 19" />
                      </svg>
                    </>
                  )}
                </Button>
              </div>

              <p className="text-center text-primary-foreground/70 text-sm">
                Ao enviar, você concorda com nossa política de privacidade. Seus dados estão protegidos.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeadForm;
