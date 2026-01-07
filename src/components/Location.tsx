import { MapPin, Phone, Mail, Clock, Navigation } from "lucide-react";
import { Button } from "@/components/ui/button";
const contactInfo = [{
  icon: <MapPin className="w-5 h-5" />,
  label: "Endereço",
  value: "Rua Exemplo, 123 - Centro",
  subvalue: "São Paulo - SP, 01234-567"
}, {
  icon: <Phone className="w-5 h-5" />,
  label: "Telefone / WhatsApp",
  value: "(00) 00000-0000"
}, {
  icon: <Mail className="w-5 h-5" />,
  label: "E-mail",
  value: "contato@psicologa.com.br"
}, {
  icon: <Clock className="w-5 h-5" />,
  label: "Horário de Atendimento",
  value: "Segunda a Sexta: 8h às 20h",
  subvalue: "Sábado: 8h às 14h"
}];
const Location = () => {
  return <section id="localizacao" className="section-padding bg-card">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 px-4">
          <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-4">
            Localização
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Venha nos{" "}
            <span className="font-display italic text-primary">visitar</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Consultório localizado em região de fácil acesso, com ambiente 
            confortável e acolhedor para suas sessões.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 px-4 sm:px-6 lg:px-8">
          {/* Map */}
          <div className="rounded-2xl overflow-hidden border border-border/50 h-[400px] lg:h-full min-h-[400px]">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.1975877813745!2d-46.65414!3d-23.5617!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDMzJzQyLjEiUyA0NsKwMzknMTQuOSJX!5e0!3m2!1spt-BR!2sbr!4v1234567890" width="100%" height="100%" style={{
            border: 0
          }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Localização do consultório" />
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            {contactInfo.map((item, index) => <div key={index} className="flex items-start gap-4 p-6 rounded-2xl bg-background border border-border/50 hover:border-primary/30 transition-colors">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                  {item.icon}
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">{item.label}</p>
                  <p className="font-semibold">{item.value}</p>
                  {item.subvalue && <p className="text-sm text-muted-foreground mt-1">{item.subvalue}</p>}
                </div>
              </div>)}

            {/* Navigation Button */}
            <Button asChild size="lg" className="w-full btn-premium text-primary-foreground font-semibold h-14">
              <a href="https://maps.google.com/?q=Rua+Exemplo+123+Centro+Sao+Paulo" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 bg-[#8faafa]">
                <Navigation className="w-5 h-5" />
                Abrir no Google Maps
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>;
};
export default Location;