/*
 * Roast & Ritual — QuantitySelector
 * Tactile minus/plus stepper with a warm ink outline, used on
 * Product Details and Cart screens.
 */
import { Minus, Plus } from "lucide-react";

export default function QuantitySelector({ value, onChange, min = 1, max = 10 }) {
  return (
    <div className="flex items-center gap-1 rounded-full border border-border bg-card p-1">
      <button
        type="button"
        aria-label="Decrease quantity"
        onClick={() => onChange(Math.max(min, value - 1))}
        disabled={value <= min}
        className="press grid h-9 w-9 place-items-center rounded-full transition-colors duration-150 disabled:opacity-30 hover:bg-secondary"
      >
        <Minus className="h-4 w-4 text-foreground" />
      </button>
      <span className="w-8 text-center font-display text-base font-semibold tabular-nums text-foreground">
        {value}
      </span>
      <button
        type="button"
        aria-label="Increase quantity"
        onClick={() => onChange(Math.min(max, value + 1))}
        disabled={value >= max}
        className="press grid h-9 w-9 place-items-center rounded-full transition-colors duration-150 disabled:opacity-30 hover:bg-secondary"
      >
        <Plus className="h-4 w-4 text-foreground" />
      </button>
    </div>
  );
}
