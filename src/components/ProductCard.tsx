import { Link } from "react-router-dom";
import { Product } from "@/data/products";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <Link to={`/product/${product.id}`} className="group cursor-pointer block">
      <div className="image-reveal aspect-[3/4] mb-4 bg-secondary overflow-hidden relative">
        <img
          src={product.images[0]}
          alt={product.name}
          className="w-full h-full object-cover"
        />
        {product.isNew && (
          <span className="absolute top-4 left-4 bg-primary text-primary-foreground px-3 py-1 text-xs font-body tracking-widest uppercase">
            New
          </span>
        )}
        {product.originalPrice && (
          <span className="absolute top-4 right-4 bg-destructive text-destructive-foreground px-3 py-1 text-xs font-body tracking-widest uppercase">
            Sale
          </span>
        )}
      </div>
      <div>
        <p className="font-body text-xs tracking-widest uppercase text-muted-foreground mb-1">
          {product.category}
        </p>
        <h3 className="font-display text-lg text-foreground group-hover:text-primary transition-colors duration-300 mb-2">
          {product.name}
        </h3>
        <div className="flex items-center gap-2">
          <span className="font-body text-foreground">${product.price}</span>
          {product.originalPrice && (
            <span className="font-body text-muted-foreground line-through text-sm">
              ${product.originalPrice}
            </span>
          )}
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
