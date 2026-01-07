import { Instagram, Linkedin, Facebook, Mail, Phone, Star } from "lucide-react";
const Footer = () => {
  const currentYear = new Date().getFullYear();
  const quickLinks = [{
    label: "Serviços",
    href: "#servicos"
  }, {
    label: "Por Que Escolher",
    href: "#por-que-escolher"
  }, {
    label: "Como Funciona",
    href: "#como-funciona"
  }, {
    label: "Localização",
    href: "#localizacao"
  }];
  const services = [{
    label: "Terapia para Adolescentes",
    href: "#servicos"
  }, {
    label: "Psicoterapia para Adultos",
    href: "#servicos"
  }, {
    label: "Atendimento a Idosos",
    href: "#servicos"
  }, {
    label: "Psicanálise Estratégica",
    href: "#servicos"
  }];
  const socialLinks = [{
    icon: <Instagram className="w-5 h-5 text-white" />,
    href: "#",
    label: "Instagram"
  }, {
    icon: <Facebook className="w-5 h-5" />,
    href: "#",
    label: "Facebook"
  }, {
    icon: <Linkedin className="w-5 h-5" />,
    href: "#",
    label: "LinkedIn"
  }];
  return <footer className="bg-card border-t border-border/50">
      <div className="container-custom section-padding pb-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 px-4 sm:px-6 lg:px-8">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <a href="/" className="inline-block mb-4">
              <span className="text-2xl font-bold tracking-tight">
                Psicóloga <span className="text-primary">Clínica</span>
              </span>
            </a>
            <p className="text-muted-foreground text-sm mb-4 max-w-xs">
              Psicoterapia especializada com abordagem humanizada. 
              Cuidando da sua saúde mental há mais de 10 anos.
            </p>
            {/* Social Proof */}
            <div className="flex items-center gap-2 mb-6">
              <div className="flex">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 text-premium-gold fill-premium-gold" />)}
              </div>
              <span className="text-sm text-muted-foreground">5.0 (29 avaliações)</span>
            </div>
            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social, index) => <a key={index} href={social.href} className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors" aria-label={social.label}>
                  {social.icon}
                </a>)}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Links Rápidos</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => <li key={index}>
                  <a href={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {link.label}
                  </a>
                </li>)}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Serviços</h4>
            <ul className="space-y-3">
              {services.map((service, index) => <li key={index}>
                  <a href={service.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {service.label}
                  </a>
                </li>)}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Contato</h4>
            <ul className="space-y-3">
              <li>
                <a href="mailto:contato@psicologa.com.br" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
                  <Mail className="w-4 h-4" />
                  contato@psicologa.com.br
                </a>
              </li>
              <li>
                <a href="https://wa.me/5500000000000" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
                  <Phone className="w-4 h-4" />
                  (00) 00000-0000
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border/50 px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
            <p>© {currentYear} Psicóloga Clínica. Todos os direitos reservados.</p>
            <p>CRP: 00/00000</p>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;