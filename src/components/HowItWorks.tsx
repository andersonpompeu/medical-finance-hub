import { MessageCircle, Calendar, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const steps = [
  {
    number: "01",
    icon: <MessageCircle className="w-8 h-8" />,
    title: "Entre em Contato",
    description: "Envie uma mensagem pelo WhatsApp ou ligue para agendar. Você pode tirar suas dúvidas antes mesmo da primeira consulta.",
  },
  {
    number: "02",
    icon: <Calendar className="w-8 h-8" />,
    title: "Agende sua Consulta",
    description: "Escolha o melhor dia e horário para você. Oferecemos opções flexíveis para se adequar à sua rotina.",
  },
  {
    number: "03",
    icon: <Sparkles className="w-8 h-8" />,
    title: "Inicie sua Transformação",
    description: "Na primeira sessão, conheceremos sua história e definiremos juntos o melhor caminho para seu desenvolvimento.",
  },
];

const HowItWorks = () => {
  return (
    <section id="como-funciona" className="section-padding">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 px-4">
          <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-4">
            Como Funciona
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Três passos simples para começar sua{" "}
            <span className="font-display italic text-primary">jornada</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            O processo é simples e descomplicado. Estou aqui para 
            te acolher desde o primeiro contato.
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-8 px-4 sm:px-6 lg:px-8 mb-12">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Connection Line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-16 left-1/2 w-full h-0.5 bg-gradient-to-r from-primary/50 to-primary/10" />
              )}
              
              <div className="relative text-center p-8 rounded-2xl bg-secondary/50 border border-border/50 hover-lift">
                {/* Step Number */}
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-primary text-primary-foreground text-sm font-bold">
                  {step.number}
                </div>
                
                {/* Icon */}
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 text-primary mb-6 mt-4">
                  {step.icon}
                </div>
                
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-muted-foreground text-sm">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center px-4">
          <Button
            asChild
            size="lg"
            className="btn-premium text-primary-foreground font-semibold text-base px-10 h-14"
          >
            <a
              href="https://wa.me/5500000000000?text=Olá! Gostaria de agendar minha primeira consulta."
              target="_blank"
              rel="noopener noreferrer"
            >
              Agendar Primeira Consulta
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
