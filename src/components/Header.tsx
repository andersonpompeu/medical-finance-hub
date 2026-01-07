import { useState, useEffect } from "react";
import { Menu, X, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const navLinks = [{
    href: "#servicos",
    label: "Serviços"
  }, {
    href: "#por-que-escolher",
    label: "Por Que Escolher"
  }, {
    href: "#como-funciona",
    label: "Como Funciona"
  }, {
    href: "#localizacao",
    label: "Localização"
  }];
  return <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-background/80 backdrop-blur-xl border-b border-border/50" : "bg-transparent"}`}>
      <div className="container-custom">
        <div className="flex items-center justify-between h-16 sm:h-20 px-4 sm:px-6 lg:px-8 text-primary-foreground">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2">
            <span className="text-xl sm:text-2xl font-bold tracking-tight text-primary-foreground">
              Psicóloga <span className="text-primary">Clínica</span>
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map(link => <a key={link.href} href={link.href} className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                {link.label}
              </a>)}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-4">
            <div className="flex items-center gap-1 text-sm">
              <Star className="w-4 h-4 text-premium-gold fill-premium-gold" />
              <span className="font-semibold">5.0</span>
              <span className="text-muted-foreground">(29 avaliações)</span>
            </div>
            <Button asChild className="btn-premium text-primary-foreground font-semibold px-6">
              <a href="https://wa.me/5500000000000?text=Olá! Gostaria de agendar uma consulta." target="_blank" rel="noopener noreferrer">
                Agendar Consulta
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2 text-foreground" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} aria-label="Toggle menu">
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && <div className="md:hidden bg-background/95 backdrop-blur-xl border-t border-border/50">
            <nav className="flex flex-col py-4 px-4">
              {navLinks.map(link => <a key={link.href} href={link.href} className="py-3 text-base font-medium text-muted-foreground hover:text-foreground transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
                  {link.label}
                </a>)}
              <div className="flex items-center gap-1 text-sm py-3">
                <Star className="w-4 h-4 text-premium-gold fill-premium-gold" />
                <span className="font-semibold">5.0</span>
                <span className="text-muted-foreground">(29 avaliações)</span>
              </div>
              <Button asChild className="btn-premium text-primary-foreground font-semibold mt-4">
                <a href="https://wa.me/5500000000000?text=Olá! Gostaria de agendar uma consulta." target="_blank" rel="noopener noreferrer">
                  Agendar Consulta
                </a>
              </Button>
            </nav>
          </div>}
      </div>
    </header>;
};
export default Header;