import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Check, MessageCircle, ShieldCheck, Clock, Award } from "lucide-react";
import { getProductById, products } from "@/data/products";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const product = getProductById(id || "");

  if (!product) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Produto não encontrado</h1>
          <Button asChild>
            <Link to="/">Voltar para a Home</Link>
          </Button>
        </div>
      </div>
    );
  }

  const relatedProducts = products
    .filter((p) => p.id !== product.id && p.category === product.category)
    .slice(0, 3);

  const categoryLabel = product.category === "curso" ? "Curso" : "E-book";

  const whatsappMessage = encodeURIComponent(
    `Olá! Tenho interesse no produto: ${product.title}. Gostaria de mais informações sobre como adquirir.`
  );

  const guarantees = [
    { icon: <ShieldCheck className="w-5 h-5" />, text: "Garantia de 7 dias" },
    { icon: <Clock className="w-5 h-5" />, text: "Acesso imediato" },
    { icon: <Award className="w-5 h-5" />, text: "Certificado incluso" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-24 pb-16">
        {/* Breadcrumb */}
        <div className="container-custom px-4 sm:px-6 lg:px-8 mb-8">
          <Link
            to="/#produtos"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Voltar para Produtos
          </Link>
        </div>

        {/* Product Content */}
        <div className="container-custom px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Image */}
            <div className="relative">
              <div className="sticky top-24">
                <div className="relative aspect-[4/3] rounded-2xl bg-card border border-border/50 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover"
                  />
                  {product.featured && (
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-premium-gold text-background font-semibold">
                        Destaque
                      </Badge>
                    </div>
                  )}
                </div>

                {/* Guarantees */}
                <div className="grid grid-cols-3 gap-4 mt-6">
                  {guarantees.map((item, index) => (
                    <div
                      key={index}
                      className="flex flex-col items-center text-center p-4 rounded-xl bg-card border border-border/50"
                    >
                      <div className="text-primary mb-2">{item.icon}</div>
                      <span className="text-xs text-muted-foreground">
                        {item.text}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Details */}
            <div>
              {/* Category */}
              <Badge variant="secondary" className="mb-4">
                {categoryLabel}
              </Badge>

              {/* Title */}
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
                {product.title}
              </h1>

              {/* Description */}
              <p className="text-lg text-muted-foreground mb-8">
                {product.fullDescription}
              </p>

              {/* Price */}
              <div className="flex items-baseline gap-4 mb-8">
                <span className="text-4xl sm:text-5xl font-bold text-primary">
                  {product.price}
                </span>
                {product.originalPrice && (
                  <span className="text-xl text-muted-foreground line-through">
                    {product.originalPrice}
                  </span>
                )}
              </div>

              {/* CTA Button */}
              <Button
                asChild
                size="lg"
                className="w-full sm:w-auto btn-premium text-primary-foreground font-semibold text-lg px-12 h-16 mb-8"
              >
                <a
                  href={`https://wa.me/5500000000000?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3"
                >
                  <MessageCircle className="w-5 h-5" />
                  Comprar Agora
                </a>
              </Button>

              {/* Benefits */}
              <div className="bg-card rounded-2xl border border-border/50 p-6 sm:p-8">
                <h3 className="text-xl font-bold mb-6">O que está incluso:</h3>
                <ul className="space-y-4">
                  {product.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center">
                        <Check className="w-4 h-4 text-primary" />
                      </div>
                      <span className="text-muted-foreground">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="container-custom mt-20 px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-bold mb-8">
              Produtos Relacionados
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default ProductDetail;