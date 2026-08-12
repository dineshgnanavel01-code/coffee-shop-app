/*
 * Roast & Ritual — Home Screen
 * Editorial layout: stacked overline + serif heading, horizontal
 * category row, staggered popular product grid, promo banner.
 */
import { useMemo, useState } from "react";
import { Link } from "wouter";
import { Star, ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import CategoryTabs from "@/components/CategoryTabs";
import ProductCard from "@/components/ProductCard";
import { PRODUCTS } from "@/data/products";
import { CATEGORIES } from "@/data/categories";

export default function Home() {
  const [search, setSearch] = useState("");
  const [activeCat, setActiveCat] = useState("Coffee");

  const visibleProducts = useMemo(() => {
    const q = search.trim().toLowerCase();
    const filtered = q
      ? PRODUCTS.filter((p) => p.name.toLowerCase().includes(q) || p.category.toLowerCase().includes(q))
      : PRODUCTS;
    const popular = q ? filtered : PRODUCTS.filter((p) => p.popular);
    return popular.length ? popular : filtered;
  }, [search]);

  return (
    <div className="screen-in">
      <Navbar search={search} onSearch={setSearch} />

      <section className="mt-2 flex items-end justify-between px-5">
        <div>
          <p className="overline-label">Freshly roasted</p>
          <h2 className="font-display mt-1 text-2xl font-semibold text-foreground">
            Popular now
          </h2>
        </div>
        <Link
          href="/menu"
          className="flex items-center gap-1 text-sm font-medium text-caramel transition-opacity hover:opacity-80"
        >
          See all <ArrowRight className="h-4 w-4" />
        </Link>
      </section>

      <div className="mt-3">
        <CategoryTabs categories={CATEGORIES} active={activeCat} onChange={setActiveCat} />
      </div>

      {search.trim() && (
        <p className="px-5 pt-4 text-sm text-muted-foreground">
          {visibleProducts.length} result{visibleProducts.length === 1 ? "" : "s"} for “{search.trim()}”
        </p>
      )}

      <section className="grid grid-cols-2 gap-4 px-5 pb-32 pt-4">
        {visibleProducts.map((product, i) => (
          <ProductCard
            key={product.id}
            product={product}
            index={i}
            featured={i === 0}
          />
        ))}
        {visibleProducts.length === 0 && (
          <div className="col-span-2 rounded-3xl bg-card p-8 text-center">
            <Star className="mx-auto h-8 w-8 text-muted-foreground/50" />
            <p className="mt-3 font-display text-lg font-semibold text-foreground">
              Nothing found
            </p>
            <p className="mt-1 text-sm text-muted-foreground">
              Try searching for “latte”, “chai”, or “croissant”.
            </p>
          </div>
        )}
      </section>

      <section className="mx-5 mb-28 overflow-hidden rounded-3xl bg-espresso p-6 text-background">
        <div className="max-w-[70%]">
          <p className="overline-label !text-caramel">Ritual reward</p>
          <h3 className="font-display mt-2 text-2xl font-semibold leading-snug">
            Your 5th coffee is on us
          </h3>
          <p className="mt-2 text-sm text-background/70">
            Order four drinks this week and the next one is complimentary.
          </p>
          <Link
            href="/menu"
            className="press mt-4 inline-flex items-center gap-1.5 rounded-full bg-caramel px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-transform hover:bg-caramel/90"
          >
            Start the ritual <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
