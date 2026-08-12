/*
 * Roast & Ritual — ProductCard
 * Editorial product card: warm-shadow, image top, serif name, rating,
 * caramel price and circular add-to-cart button. Staggered entrance.
 */
import { Link } from "wouter";
import { Plus, Star } from "lucide-react";
import { useCart } from "@/context/CartContext";

export default function ProductCard({ product, index = 0, featured = false }) {
  const { addToCart, toggleFavorite, favorites } = useCart();
  const isFav = favorites.includes(product.id);

  return (
    <article
      className="group warm-shadow flex flex-col overflow-hidden rounded-3xl bg-card transition-transform duration-200 hover:-translate-y-1 screen-in"
      style={{ animationDelay: `${index * 50}ms` }}
    >
      <Link href={`/product/${product.id}`} className="relative block">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          className={`w-full object-cover transition-transform duration-300 group-hover:scale-[1.03] ${
            featured ? "aspect-[4/3]" : "aspect-square"
          }`}
        />
        <button
          type="button"
          aria-label={isFav ? "Remove from favorites" : "Add to favorites"}
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            toggleFavorite(product.id);
          }}
          className="absolute right-3 top-3 grid h-8 w-8 place-items-center rounded-full bg-background/85 backdrop-blur-sm press transition-transform duration-200"
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill={isFav ? "#C06A2C" : "none"}
            stroke={isFav ? "#C06A2C" : "currentColor"}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-foreground"
          >
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
          </svg>
        </button>
      </Link>

      <div className="flex flex-1 flex-col gap-2 p-4">
        <Link href={`/product/${product.id}`}>
          <h3 className="font-display text-base font-semibold leading-snug text-foreground">
            {product.name}
          </h3>
          <p className="mt-0.5 text-[11px] text-muted-foreground">{product.category}</p>
          <div className="mt-1.5 flex items-center gap-1">
            <Star className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
            <span className="text-xs font-semibold text-foreground">{product.rating}</span>
            <span className="text-xs text-muted-foreground">({product.reviews})</span>
          </div>
        </Link>

        <div className="mt-auto flex items-center justify-between pt-1">
          <span className="font-display text-lg font-semibold text-caramel">
            ${product.price.toFixed(2)}
          </span>
          <button
            type="button"
            onClick={() => addToCart(product)}
            aria-label={`Add ${product.name} to cart`}
            className="press grid h-9 w-9 place-items-center rounded-full bg-foreground text-background transition-transform duration-150 hover:bg-caramel active:scale-90"
          >
            <Plus className="h-4.5 w-4.5" />
          </button>
        </div>
      </div>
    </article>
  );
}
