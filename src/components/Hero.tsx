import { ArrowDown, Star, CheckCircle2, Phone, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const highlights = [
    "Atendimento humanizado e acolhedor",
    "Mais de 10 anos de experiência",
    "Ambiente seguro e confidencial",
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-card" />
      
      {/* Geometric Elements */}
      <div className="absolute top-1/4 left-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      
      {/* Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--primary)) 1px, transparent 1px),
                           linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}
      />

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center px-4 sm:px-6 lg:px-8">
          {/* Text Content */}
          <div className="text-center lg:text-left order-2 lg:order-1">
            {/* Rating Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-premium-gold/10 border border-premium-gold/20 mb-6 animate-fade-in">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-premium-gold fill-premium-gold" />
                ))}
              </div>
              <span className="text-sm font-medium text-premium-gold">
                5.0 • 29 avaliações
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-6 animate-fade-in" style={{ animationDelay: "0.1s" }}>
              Encontre seu{" "}
              <span className="font-display italic text-primary">equilíbrio</span>{" "}
              emocional e viva com mais{" "}
              <span className="font-display italic text-primary">leveza</span>
            </h1>

            <p className="text-lg sm:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0 mb-8 animate-fade-in" style={{ animationDelay: "0.2s" }}>
              Psicoterapia especializada para adolescentes, adultos e idosos. 
              Atendimento presencial e online com abordagem acolhedora e personalizada.
            </p>

            {/* Highlights */}
            <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start mb-8 animate-fade-in" style={{ animationDelay: "0.3s" }}>
              {highlights.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 text-sm text-muted-foreground"
                >
                  <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in" style={{ animationDelay: "0.4s" }}>
              <Button
                asChild
                size="lg"
                className="btn-premium text-primary-foreground font-semibold text-base px-8 h-14"
              >
                <a
                  href="https://wa.me/5500000000000?text=Olá! Gostaria de agendar uma consulta."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <Calendar className="w-5 h-5" />
                  Agendar Consulta
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="font-semibold text-base px-8 h-14 border-border/50 hover:bg-secondary"
              >
                <a
                  href="https://wa.me/5500000000000?text=Olá! Gostaria de mais informações."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <Phone className="w-5 h-5" />
                  Fale Comigo
                </a>
              </Button>
            </div>
          </div>

          {/* Image/Visual */}
          <div className="relative order-1 lg:order-2 flex justify-center lg:justify-end animate-fade-in" style={{ animationDelay: "0.2s" }}>
            {/* Ghost Effect Background */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-72 h-72 sm:w-96 sm:h-96 rounded-full bg-primary/20 blur-3xl" />
            </div>
            
            {/* Placeholder for Photo */}
            <div className="relative w-64 h-80 sm:w-80 sm:h-[400px] lg:w-96 lg:h-[480px] rounded-2xl bg-gradient-to-br from-card to-secondary border border-border/50 overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center p-6">
                  <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-full bg-primary/20 mx-auto mb-4 flex items-center justify-center">
                    <span className="text-3xl sm:text-4xl">👩‍⚕️</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Foto Profissional
                  </p>
                </div>
              </div>
              
              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 border-2 border-primary/30 rounded-full" />
              <div className="absolute -bottom-6 -left-6 w-32 h-32 border-2 border-primary/20 rounded-full" />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-fade-in" style={{ animationDelay: "0.6s" }}>
        <span className="text-xs text-muted-foreground uppercase tracking-widest">
          Conheça os serviços
        </span>
        <ArrowDown className="w-5 h-5 text-primary animate-scroll-indicator" />
      </div>
    </section>
  );
};

export default Hero;
