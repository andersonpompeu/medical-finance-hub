import { Users, User, Heart, Brain, Sparkles, Building2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Service {
  icon: React.ReactNode;
  title: string;
  description: string;
  variant: "dark" | "blue" | "premium";
}

const services: Service[] = [
  {
    icon: <Users className="w-8 h-8" />,
    title: "Terapia para Adolescentes",
    description: "Acompanhamento especializado para os desafios da adolescência, ajudando no desenvolvimento emocional e autoconhecimento.",
    variant: "blue",
  },
  {
    icon: <User className="w-8 h-8" />,
    title: "Psicoterapia para Adultos",
    description: "Tratamento de ansiedade, depressão, estresse e outros transtornos, promovendo qualidade de vida e bem-estar.",
    variant: "dark",
  },
  {
    icon: <Heart className="w-8 h-8" />,
    title: "Atendimento a Idosos",
    description: "Cuidado especializado para a terceira idade, trabalhando questões como luto, solidão e adaptação às mudanças.",
    variant: "premium",
  },
  {
    icon: <Brain className="w-8 h-8" />,
    title: "Psicanálise Estratégica",
    description: "Abordagem profunda que combina técnicas psicanalíticas com estratégias práticas para resultados efetivos.",
    variant: "blue",
  },
  {
    icon: <Sparkles className="w-8 h-8" />,
    title: "Necessidades Especiais",
    description: "Atendimento adaptado e sensível para pessoas com necessidades especiais, respeitando suas particularidades.",
    variant: "dark",
  },
  {
    icon: <Building2 className="w-8 h-8" />,
    title: "Atendimento Presencial",
    description: "Consultas em ambiente confortável e acolhedor, com total privacidade e sigilo profissional garantidos.",
    variant: "premium",
  },
];

const getVariantStyles = (variant: Service["variant"]) => {
  switch (variant) {
    case "blue":
      return "bg-gradient-to-br from-primary/20 to-accent/20 border-primary/30 hover:border-primary/50";
    case "premium":
      return "bg-gradient-to-br from-premium-gold/10 to-premium-gold/5 border-premium-gold/30 hover:border-premium-gold/50";
    case "dark":
    default:
      return "bg-secondary/50 border-border/50 hover:border-border";
  }
};

const getIconStyles = (variant: Service["variant"]) => {
  switch (variant) {
    case "blue":
      return "bg-primary/20 text-primary";
    case "premium":
      return "bg-premium-gold/20 text-premium-gold";
    case "dark":
    default:
      return "bg-muted text-foreground";
  }
};

const Services = () => {
  return (
    <section id="servicos" className="section-padding">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 px-4">
          <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-4">
            Nossos Serviços
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Atendimento{" "}
            <span className="font-display italic text-primary">especializado</span>{" "}
            para todas as idades
          </h2>
          <p className="text-lg text-muted-foreground">
            Oferecemos psicoterapia com abordagem humanizada, respeitando a individualidade 
            de cada paciente e suas necessidades específicas.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 sm:px-6 lg:px-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`group relative p-6 sm:p-8 rounded-2xl border transition-all duration-300 hover-lift ${getVariantStyles(
                service.variant
              )}`}
            >
              {/* Icon */}
              <div
                className={`inline-flex items-center justify-center w-14 h-14 rounded-xl mb-6 ${getIconStyles(
                  service.variant
                )}`}
              >
                {service.icon}
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-muted-foreground text-sm mb-6">
                {service.description}
              </p>

              {/* CTA */}
              <Button
                asChild
                variant="ghost"
                className="group/btn p-0 h-auto font-semibold text-primary hover:bg-transparent"
              >
                <a
                  href="https://wa.me/5500000000000?text=Olá! Gostaria de saber mais sobre o serviço de terapia."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  Saiba mais
                  <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                </a>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
