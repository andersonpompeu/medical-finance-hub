import { GraduationCap, Star, MapPin, Shield, Clock, Heart } from "lucide-react";

const features = [
  {
    icon: <GraduationCap className="w-8 h-8" />,
    title: "Qualificação Profissional",
    description: "Psicóloga formada com especialização em Psicanálise Estratégica e mais de 10 anos de experiência clínica.",
  },
  {
    icon: <Star className="w-8 h-8" />,
    title: "Avaliação 5.0 Estrelas",
    description: "Reconhecimento dos pacientes pela qualidade do atendimento, com 29 avaliações positivas no Google.",
  },
  {
    icon: <MapPin className="w-8 h-8" />,
    title: "Localização Conveniente",
    description: "Consultório em região de fácil acesso, com estacionamento próximo e transporte público disponível.",
  },
  {
    icon: <Shield className="w-8 h-8" />,
    title: "Sigilo Garantido",
    description: "Total confidencialidade em todos os atendimentos, seguindo rigorosamente o código de ética profissional.",
  },
  {
    icon: <Clock className="w-8 h-8" />,
    title: "Horários Flexíveis",
    description: "Atendimento em horários variados, incluindo finais de semana, para se adequar à sua rotina.",
  },
  {
    icon: <Heart className="w-8 h-8" />,
    title: "Abordagem Humanizada",
    description: "Tratamento personalizado com escuta ativa e empatia, respeitando o tempo e ritmo de cada paciente.",
  },
];

const WhyChoose = () => {
  return (
    <section id="por-que-escolher" className="section-padding bg-card">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 px-4">
          <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-4">
            Por Que Me Escolher
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Compromisso com seu{" "}
            <span className="font-display italic text-primary">bem-estar</span>{" "}
            emocional
          </h2>
          <p className="text-lg text-muted-foreground">
            Cada detalhe do atendimento é pensado para proporcionar a você 
            uma experiência acolhedora e transformadora.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 sm:px-6 lg:px-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-6 sm:p-8 rounded-2xl bg-background border border-border/50 hover:border-primary/30 transition-all duration-300 hover-lift"
            >
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-primary/10 text-primary mb-6 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
