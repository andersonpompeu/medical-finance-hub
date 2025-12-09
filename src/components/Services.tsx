import { Building2, Users, FileSearch, GraduationCap, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Service {
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
  variant: "dark" | "blue" | "premium";
  cta: string;
}

const services: Service[] = [
  {
    icon: <Building2 className="w-8 h-8" />,
    title: "Abertura de Empresa",
    description: "Formalize sua carreira médica com a estrutura societária ideal para o seu perfil.",
    features: [
      "Análise do melhor tipo societário",
      "Registro em todos os órgãos",
      "Planejamento tributário inicial",
      "Suporte completo no processo",
    ],
    variant: "blue",
    cta: "Abrir Minha Empresa",
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: "Consultoria Contábil",
    description: "Acompanhamento mensal especializado para otimizar a gestão financeira da sua clínica.",
    features: [
      "Contabilidade mensal completa",
      "Relatórios gerenciais",
      "Gestão de folha de pagamento",
      "Suporte fiscal e tributário",
    ],
    variant: "dark",
    cta: "Contratar Consultoria",
  },
  {
    icon: <FileSearch className="w-8 h-8" />,
    title: "Revisão Tributária",
    description: "Identifique oportunidades de economia e recupere impostos pagos a maior.",
    features: [
      "Análise dos últimos 5 anos",
      "Identificação de créditos",
      "Recuperação de impostos",
      "Novo planejamento fiscal",
    ],
    variant: "premium",
    cta: "Solicitar Revisão",
  },
  {
    icon: <GraduationCap className="w-8 h-8" />,
    title: "Cursos e E-books",
    description: "Aprenda a gerenciar suas finanças e tomar decisões estratégicas para sua carreira.",
    features: [
      "Conteúdo 100% prático",
      "Atualizações constantes",
      "Material de apoio completo",
      "Certificado de conclusão",
    ],
    variant: "blue",
    cta: "Ver Produtos",
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
            Soluções{" "}
            <span className="font-display italic text-primary">completas</span>{" "}
            para sua carreira médica
          </h2>
          <p className="text-lg text-muted-foreground">
            Da abertura da empresa à gestão financeira completa, cuidamos de tudo 
            para você focar no que faz de melhor: cuidar de pacientes.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4 sm:px-6 lg:px-8">
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

              {/* Features */}
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-2 text-sm text-muted-foreground"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <Button
                asChild
                variant="ghost"
                className="group/btn p-0 h-auto font-semibold text-primary hover:bg-transparent"
              >
                <a
                  href={service.title === "Cursos e E-books" ? "#produtos" : "https://wa.me/5500000000000"}
                  target={service.title === "Cursos e E-books" ? "_self" : "_blank"}
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  {service.cta}
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