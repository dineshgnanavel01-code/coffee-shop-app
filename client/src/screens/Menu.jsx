/*
 * Roast & Ritual — Menu Screen
 * Full catalog with category tabs, live search/filter, and a
 * responsive two-column product grid with staggered entrance.
 */
import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import Navbar from "@/components/Navbar";
import CategoryTabs from "@/components/CategoryTabs";
import ProductCard from "@/components/ProductCard";
import { PRODUCTS } from "@/data/products";
import { CATEGORIES } from "@/data/categories";

export default function Menu() {
  const [search, setSearch] = useState("");
  const [activeCat, setActiveCat] = useState("Coffee");

  const results = useMemo(() => {
    const q = search.trim().toLowerCase();
    return PRODUCTS.filter((p) => {
      const matchesCat = activeCat === "All" || p.category === activeCat;
      const matchesSearch =
        !q ||
        p.name.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q);
      return matchesCat && matchesSearch;
    });
  }, [search, activeCat]);

  const tabs = [{ id: "All", label: "All", icon: "Coffee" }, ...CATEGORIES];

  return (
    <div className="screen-in">
      <Navbar search={search} onSearch={setSearch} />

      <section className="mt-3 px-5">
        <div className="flex items-end justify-between">
          <div>
            <p className="overline-label">The full pour list</p>
            <h1 className="font-display mt-1 text-2xl font-semibold text-foreground">
              Our menu
            </h1>
          </div>
          <p className="text-sm text-muted-foreground">
            {results.length} item{results.length === 1 ? "" : "s"}
          </p>
        </div>
      </section>

      <div className="mt-3">
        <CategoryTabs categories={tabs} active={activeCat} onChange={setActiveCat} />
      </div>

      {search.trim() && (
        <div className="mx-5 mt-4 flex items-center gap-2 rounded-2xl bg-accent/60 px-4 py-2.5">
          <Search className="h-4 w-4 text-muted-foreground" />
          <p className="text-sm text-foreground">
            Searching for <span className="font-semibold">“{search.trim()}”</span>
            {activeCat !== "All" && <> in {activeCat}</>}
          </p>
        </div>
      )}

      <section className="grid grid-cols-2 gap-4 px-5 pb-32 pt-4">
        {results.map((product, i) => (
          <ProductCard key={product.id} product={product} index={i} />
        ))}
        {results.length === 0 && (
          <div className="col-span-2 rounded-3xl bg-card p-8 text-center">
            <p className="font-display text-lg font-semibold text-foreground">
              No matches on the menu
            </p>
            <p className="mt-1 text-sm text-muted-foreground">
              Try another keyword or switch category.
            </p>
          </div>
        )}
      </section>
    </div>
  );
}
