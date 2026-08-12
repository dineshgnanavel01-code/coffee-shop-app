/*
 * Roast & Ritual — CategoryTabs
 * Horizontal scrolling category chips with a sliding caramel underline.
 */
import { Coffee, Cake, Snowflake, CupSoda } from "lucide-react";

const ICONS = { Coffee, Tea: CupSoda, Snowflake, Cake };

export default function CategoryTabs({ categories, active, onChange }) {
  return (
    <div className="no-scrollbar flex gap-2.5 overflow-x-auto px-5 pb-1 pt-1">
      {categories.map((cat) => {
        const Icon = ICONS[cat.icon] ?? Coffee;
        const isActive = active === cat.id;
        return (
          <button
            key={cat.id}
            type="button"
            onClick={() => onChange(cat.id)}
            className={`press flex shrink-0 items-center gap-2 rounded-full px-4 py-2.5 text-sm font-medium transition-all duration-200 ${
              isActive
                ? "bg-caramel text-primary-foreground shadow-md shadow-caramel/30"
                : "bg-card text-muted-foreground warm-shadow hover:text-foreground"
            }`}
          >
            <Icon className="h-4 w-4" strokeWidth={isActive ? 2.4 : 2} />
            {cat.label}
          </button>
        );
      })}
    </div>
  );
}
