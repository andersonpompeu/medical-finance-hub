import { useState } from "react";
import { products } from "@/data/products";
import ProductCard from "./ProductCard";
import { Button } from "@/components/ui/button";

type FilterCategory = "todos" | "curso" | "ebook";

const ProductsSection = () => {
  const [activeFilter, setActiveFilter] = useState<FilterCategory>("todos");

  const filteredProducts = products.filter((product) => {
    if (activeFilter === "todos") return true;
    return product.category === activeFilter;
  });

  const filters: { value: FilterCategory; label: string }[] = [
    { value: "todos", label: "Todos" },
    { value: "curso", label: "Cursos" },
    { value: "ebook", label: "E-books" },
  ];

  return (
    <section id="produtos" className="section-padding bg-card/50">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 px-4">
          <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-4">
            Produtos Digitais
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Conhecimento que{" "}
            <span className="font-display italic text-primary">transforma</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Cursos e e-books exclusivos desenvolvidos para médicos que querem 
            dominar suas finanças e crescer profissionalmente.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex justify-center gap-2 mb-10 px-4">
          {filters.map((filter) => (
            <Button
              key={filter.value}
              variant={activeFilter === filter.value ? "default" : "outline"}
              onClick={() => setActiveFilter(filter.value)}
              className={
                activeFilter === filter.value
                  ? "btn-premium text-primary-foreground"
                  : "border-border/50 hover:bg-secondary"
              }
            >
              {filter.label}
            </Button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 sm:px-6 lg:px-8">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;