/*
 * Roast & Ritual — Product Details Screen
 * Large hero image, serif name + rating, size pills, quantity
 * stepper, live price, caramel Add-to-Cart CTA, and heart favorite.
 */
import { useMemo, useState } from "react";
import { Link, useParams } from "wouter";
import { ArrowLeft, Star } from "lucide-react";
import { toast } from "sonner";
import QuantitySelector from "@/components/QuantitySelector";
import { PRODUCTS, SIZE_PRICES } from "@/data/products";
import { useCart } from "@/context/CartContext";

const SIZES = ["S", "M", "L"];

export default function ProductDetails() {
  const { id } = useParams();
  const product = useMemo(
    () => PRODUCTS.find((p) => p.id === Number(id)) ?? PRODUCTS[0],
    [id],
  );
  const { addToCart, toggleFavorite, favorites } = useCart();

  const [size, setSize] = useState("M");
  const [qty, setQty] = useState(1);

  const isFav = favorites.includes(product.id);
  const unitPrice = product.price + SIZE_PRICES[size];
  const total = unitPrice * qty;

  return (
    <div className="screen-in">
      {/* Hero image */}
      <div className="relative">
        <img
          src={product.image}
          alt={product.name}
          className="aspect-[4/3] w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[oklch(0.26_0.028_55/0.35)] via-transparent to-transparent" />
        <div className="absolute left-4 top-6 flex items-center justify-between">
          <Link
            href="/"
            aria-label="Go back"
            className="press grid h-11 w-11 place-items-center rounded-full bg-card/90 text-foreground backdrop-blur-sm transition-transform hover:scale-105"
          >
            <ArrowLeft className="h-5 w-5" />
          </Link>
          <button
            type="button"
            aria-label={isFav ? "Remove from favorites" : "Add to favorites"}
            onClick={() => toggleFavorite(product.id)}
            className="press grid h-11 w-11 place-items-center rounded-full bg-card/90 backdrop-blur-sm transition-transform hover:scale-105"
          >
            <svg
              width="20"
              height="20"
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
        </div>
      </div>

      <main className="rounded-b-[2.5rem] bg-card px-6 pb-36 pt-5">
        <div className="flex items-start justify-between gap-3">
          <div>
            <p className="overline-label">{product.category}</p>
            <h1 className="font-display mt-1.5 text-[1.75rem] font-semibold leading-tight text-foreground">
              {product.name}
            </h1>
            <div className="mt-2 flex items-center gap-1.5">
              <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
              <span className="text-sm font-semibold text-foreground">{product.rating}</span>
              <span className="text-sm text-muted-foreground">
                ({product.reviews} reviews)
              </span>
            </div>
          </div>
          <span className="font-display mt-1 text-2xl font-semibold text-caramel">
            ${product.price.toFixed(2)}
          </span>
        </div>

        <p className="mt-4 leading-relaxed text-[15px] text-muted-foreground">
          {product.description}
        </p>

        {/* Size selection */}
        <section className="mt-6">
          <p className="overline-label">Choose size</p>
          <div className="mt-3 flex gap-3">
            {SIZES.map((s) => (
              <button
                key={s}
                type="button"
                onClick={() => setSize(s)}
                className={`press flex-1 rounded-2xl border px-4 py-3.5 text-center transition-all duration-200 ${
                  size === s
                    ? "border-caramel bg-caramel text-primary-foreground"
                    : "border-border bg-background text-foreground hover:border-caramel/60"
                }`}
              >
                <span className="block font-display text-lg font-semibold">{s}</span>
                <span className="mt-0.5 block text-[11px] opacity-80">
                  {s === "S" ? "250 ml" : s === "M" ? "350 ml" : "450 ml"}
                  {SIZE_PRICES[s] > 0 ? ` · +$${SIZE_PRICES[s].toFixed(2)}` : ""}
                </span>
              </button>
            ))}
          </div>
        </section>

        {/* Quantity selector */}
        <section className="mt-6 flex items-center justify-between">
          <p className="overline-label">Quantity</p>
          <QuantitySelector value={qty} onChange={setQty} />
        </section>

        {/* Add to cart */}
        <div className="mt-8 flex items-center gap-4">
          <div className="hidden sm:block">
            <p className="text-xs text-muted-foreground">Total</p>
            <p className="font-display text-2xl font-semibold text-caramel">
              ${total.toFixed(2)}
            </p>
          </div>
          <button
            type="button"
            onClick={() => {
              addToCart(product, size, qty);
            }}
            className="press flex-1 rounded-full bg-caramel px-6 py-4 text-center font-display text-base font-semibold text-primary-foreground shadow-lg shadow-caramel/30 transition-all duration-200 hover:bg-caramel/90 active:scale-[0.98]"
          >
            Add to Cart · ${total.toFixed(2)}
          </button>
        </div>
        <p className="mt-3 text-center text-xs text-muted-foreground sm:hidden">
          Press and enjoy — total shown on the button above.
        </p>
      </main>
    </div>
  );
}
