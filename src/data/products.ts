export interface Product {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  category: "curso" | "ebook";
  price: string;
  originalPrice?: string;
  image: string;
  benefits: string[];
  featured?: boolean;
}

export const products: Product[] = [
  {
    id: "curso-abertura-cnpj",
    title: "Curso Completo: Abertura de CNPJ Médico",
    shortDescription: "Aprenda passo a passo como abrir sua empresa médica da forma correta e economize milhares em impostos.",
    fullDescription: "Um guia completo e prático para médicos que desejam formalizar sua carreira. Aprenda desde a escolha do tipo societário ideal até a emissão das primeiras notas fiscais, passando por planejamento tributário estratégico.",
    category: "curso",
    price: "R$ 497,00",
    originalPrice: "R$ 997,00",
    image: "/placeholder.svg",
    benefits: [
      "Mais de 20 aulas em vídeo HD",
      "Material de apoio completo em PDF",
      "Planilhas de controle financeiro",
      "Acesso vitalício às atualizações",
      "Certificado de conclusão",
      "Suporte por 90 dias"
    ],
    featured: true
  },
  {
    id: "ebook-planejamento-tributario",
    title: "E-book: Planejamento Tributário para Médicos",
    shortDescription: "Descubra como reduzir legalmente sua carga tributária e aumentar seus rendimentos líquidos.",
    fullDescription: "Este e-book revela as estratégias que os grandes escritórios de contabilidade utilizam para otimizar a tributação de profissionais da saúde. Conteúdo atualizado com as últimas mudanças na legislação.",
    category: "ebook",
    price: "R$ 97,00",
    originalPrice: "R$ 197,00",
    image: "/placeholder.svg",
    benefits: [
      "Mais de 80 páginas de conteúdo",
      "Casos práticos reais",
      "Checklist de otimização tributária",
      "Atualizações gratuitas por 1 ano",
      "Bônus: Modelo de declaração"
    ]
  },
  {
    id: "curso-gestao-financeira",
    title: "Curso: Gestão Financeira para Clínicas",
    shortDescription: "Domine as finanças da sua clínica e maximize seus resultados com gestão profissional.",
    fullDescription: "Aprenda a gerenciar as finanças da sua clínica como um verdadeiro empresário. Do fluxo de caixa à análise de indicadores, passando por precificação de consultas e procedimentos.",
    category: "curso",
    price: "R$ 697,00",
    originalPrice: "R$ 1.297,00",
    image: "/placeholder.svg",
    benefits: [
      "30+ aulas práticas",
      "Planilhas de gestão financeira",
      "Modelos de contratos",
      "Mentoria em grupo mensal",
      "Acesso à comunidade exclusiva",
      "Certificado de conclusão"
    ],
    featured: true
  },
  {
    id: "ebook-holding-familiar",
    title: "E-book: Holding Familiar para Médicos",
    shortDescription: "Proteja seu patrimônio e planeje sua sucessão com estruturas inteligentes.",
    fullDescription: "Entenda como uma holding familiar pode proteger seu patrimônio, reduzir impostos e facilitar a sucessão. Guia completo com exemplos práticos para profissionais da saúde.",
    category: "ebook",
    price: "R$ 147,00",
    originalPrice: "R$ 297,00",
    image: "/placeholder.svg",
    benefits: [
      "Conceitos fundamentais explicados",
      "Modelos de estruturação",
      "Análise de custos e benefícios",
      "Casos de sucesso reais",
      "Checklist de implementação"
    ]
  },
  {
    id: "curso-pessoa-juridica",
    title: "Curso: De PF para PJ - Transição Segura",
    shortDescription: "Faça a transição de pessoa física para jurídica sem erros e maximize seus ganhos.",
    fullDescription: "O guia definitivo para médicos que atuam como pessoa física e querem migrar para pessoa jurídica. Evite os erros mais comuns e faça uma transição suave e lucrativa.",
    category: "curso",
    price: "R$ 397,00",
    originalPrice: "R$ 697,00",
    image: "/placeholder.svg",
    benefits: [
      "15 aulas objetivas",
      "Simulador de economia tributária",
      "Modelos de contrato social",
      "Guia de obrigações acessórias",
      "Suporte por 60 dias"
    ]
  },
  {
    id: "ebook-impostos-2024",
    title: "E-book: Guia de Impostos 2024 para Médicos",
    shortDescription: "Todas as novidades fiscais de 2024 que impactam profissionais da saúde.",
    fullDescription: "Mantenha-se atualizado com todas as mudanças tributárias de 2024 que afetam médicos e clínicas. Inclui análise da reforma tributária e seus impactos no setor de saúde.",
    category: "ebook",
    price: "R$ 67,00",
    image: "/placeholder.svg",
    benefits: [
      "Novidades legislativas comentadas",
      "Tabelas de alíquotas atualizadas",
      "Calendário de obrigações fiscais",
      "Dicas de economia imediata",
      "Formato PDF otimizado"
    ]
  }
];

export const getProductById = (id: string): Product | undefined => {
  return products.find(product => product.id === id);
};

export const getProductsByCategory = (category: "curso" | "ebook"): Product[] => {
  return products.filter(product => product.category === category);
};

export const getFeaturedProducts = (): Product[] => {
  return products.filter(product => product.featured);
};