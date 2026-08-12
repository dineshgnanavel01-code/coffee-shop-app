/*
 * Roast & Ritual — Navbar
 * Cream & Craft: greeting headline in Fraunces, brand logo, and a
 * pill-shaped search bar. Logo routes to Home.
 */
import { Link } from "wouter";
import { Search } from "lucide-react";
import { useCart } from "@/context/CartContext";

export default function Navbar({ search, onSearch }) {
  const { cartCount } = useCart();

  return (
    <header className="px-5 pt-8 pb-4">
      <div className="flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2.5 group">
          <img
            src="/manus-storage/logo-mark_30cba49d.png"
            alt="Roast & Ritual logo"
            className="h-11 w-11 object-contain transition-transform duration-200 group-hover:scale-105"
          />
          <div className="leading-tight">
            <p className="font-display text-lg font-semibold text-foreground">
              Roast <span className="text-caramel">&</span> Ritual
            </p>
            <p className="overline-label !text-[0.6rem] text-muted-foreground">
              specialty coffee bar
            </p>
          </div>
        </Link>
        <Link
          href="/cart"
          aria-label="Open cart"
          className="relative grid h-11 w-11 place-items-center rounded-full bg-card warm-shadow press transition-transform duration-200"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="9" cy="21" r="1" />
            <circle cx="20" cy="21" r="1" />
            <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
          </svg>
          {cartCount > 0 && (
            <span className="absolute -right-0.5 -top-0.5 grid h-5 w-5 place-items-center rounded-full bg-caramel text-[10px] font-semibold text-primary-foreground ring-2 ring-paper">
              {cartCount}
            </span>
          )}
        </Link>
      </div>

      <div className="mt-5">
        <p className="text-sm text-muted-foreground">Good morning,</p>
        <h1 className="font-display text-[2rem] leading-tight font-semibold text-foreground">
          Sarah, your ritual awaits
        </h1>
      </div>

      <div className="relative mt-5">
        <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        <input
          type="text"
          value={search}
          onChange={(e) => onSearch(e.target.value)}
          placeholder="Search coffee, tea, desserts..."
          className="h-12 w-full rounded-full bg-card pl-11 pr-4 text-sm text-foreground placeholder:text-muted-foreground/70 warm-shadow transition-shadow duration-200 focus:ring-2 focus:ring-caramel focus:outline-none"
        />
      </div>
    </header>
  );
}
