export interface Testimonial {
  id: string;
  name: string;
  role: string;
  specialty: string;
  image: string;
  text: string;
  rating: number;
}

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Dra. Carolina Silva",
    role: "Médica",
    specialty: "Dermatologia",
    image: "/placeholder.svg",
    text: "O Matheus transformou completamente a gestão financeira da minha clínica. Em apenas 6 meses, consegui reduzir minha carga tributária em 40%. Recomendo demais!",
    rating: 5
  },
  {
    id: "2",
    name: "Dr. Ricardo Mendes",
    role: "Médico",
    specialty: "Cardiologia",
    image: "/placeholder.svg",
    text: "Profissional excepcional! Me ajudou na abertura da minha empresa e no planejamento tributário. Hoje economizo mais de R$ 3.000 por mês em impostos.",
    rating: 5
  },
  {
    id: "3",
    name: "Dra. Amanda Costa",
    role: "Médica",
    specialty: "Pediatria",
    image: "/placeholder.svg",
    text: "O curso de gestão financeira foi um divisor de águas. Finalmente entendo as finanças da minha clínica e tomo decisões baseadas em dados concretos.",
    rating: 5
  },
  {
    id: "4",
    name: "Dr. Fernando Oliveira",
    role: "Médico",
    specialty: "Ortopedia",
    image: "/placeholder.svg",
    text: "Migrei de PF para PJ com toda a segurança graças à consultoria do Matheus. Processo tranquilo e resultado financeiro impressionante.",
    rating: 5
  },
  {
    id: "5",
    name: "Dra. Beatriz Santos",
    role: "Médica",
    specialty: "Ginecologia",
    image: "/placeholder.svg",
    text: "Atendimento personalizado e conhecimento técnico impecável. O Matheus entende as particularidades da nossa profissão como ninguém.",
    rating: 5
  }
];