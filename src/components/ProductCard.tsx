import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Product } from "@/data/products";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const categoryLabel = product.category === "curso" ? "Curso" : "E-book";
  
  return (
    <div className="group relative bg-card rounded-2xl border border-border/50 overflow-hidden hover-lift">
      {/* Featured Badge */}
      {product.featured && (
        <div className="absolute top-4 left-4 z-10">
          <Badge className="bg-premium-gold text-background font-semibold">
            Destaque
          </Badge>
        </div>
      )}

      {/* Image */}
      <div className="relative aspect-[4/3] bg-secondary/50 overflow-hidden">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Category */}
        <Badge variant="secondary" className="mb-3">
          {categoryLabel}
        </Badge>

        {/* Title */}
        <h3 className="text-lg font-bold mb-2 line-clamp-2 group-hover:text-primary transition-colors">
          {product.title}
        </h3>

        {/* Description */}
        <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
          {product.shortDescription}
        </p>

        {/* Price */}
        <div className="flex items-baseline gap-2 mb-4">
          <span className="text-2xl font-bold text-primary">{product.price}</span>
          {product.originalPrice && (
            <span className="text-sm text-muted-foreground line-through">
              {product.originalPrice}
            </span>
          )}
        </div>

        {/* CTA */}
        <Button asChild className="w-full btn-premium text-primary-foreground font-semibold">
          <Link to={`/produto/${product.id}`} className="flex items-center justify-center gap-2">
            Ver Detalhes
            <ArrowRight className="w-4 h-4" />
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;