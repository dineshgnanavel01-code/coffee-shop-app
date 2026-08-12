/*
 * Roast & Ritual — Cart Screen
 * Item list with quantity steppers + remove, subtotal, delivery and
 * service charges, live total, and caramel checkout CTA.
 */
import { useMemo } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Trash2, ShoppingBag } from "lucide-react";
import { toast } from "react-hot-toast";
import QuantitySelector from "../components/QuantitySelector";
import { PRODUCTS, DELIVERY_FEE, SERVICE_FEE } from "../data/products";
import { useCart } from "../context/CartContext";

export default function Cart() {
  const { cartItems, updateQty, removeItem, clearCart } = useCart();

  const items = useMemo(
    () =>
      cartItems.map((item) => ({
        ...item,
        product: PRODUCTS.find((p) => p.id === item.productId),
        lineTotal: item.unitPrice * item.qty,
      })),
    [cartItems],
  );

  const subtotal = useMemo(
    () => items.reduce((sum, i) => sum + i.lineTotal, 0),
    [items],
  );
  const total = subtotal + DELIVERY_FEE + SERVICE_FEE;

  return (
    <div className="screen-in px-5 pb-36 pt-8">
      <div className="flex items-center gap-3">
        <Link
          to="/"
          aria-label="Go back"
          className="press grid h-11 w-11 place-items-center rounded-full bg-card warm-shadow transition-transform hover:scale-105"
        >
          <ArrowLeft className="h-5 w-5 text-foreground" />
        </Link>
        <div>
          <p className="overline-label">Before checkout</p>
          <h1 className="font-display text-2xl font-semibold text-foreground">Your cart</h1>
        </div>
      </div>

      {items.length === 0 ? (
        <div className="mt-10 flex flex-col items-center rounded-3xl bg-card p-10 text-center">
          <div className="grid h-16 w-16 place-items-center rounded-full bg-accent">
            <ShoppingBag className="h-7 w-7 text-caramel" />
          </div>
          <p className="font-display mt-4 text-lg font-semibold text-foreground">
            The pot is empty
          </p>
          <p className="mt-1 text-sm text-muted-foreground">
            Add something from the menu to begin your ritual.
          </p>
          <Link
            to="/menu"
            className="press mt-5 rounded-full bg-caramel px-6 py-3 text-sm font-semibold text-primary-foreground"
          >
            Browse the menu
          </Link>
        </div>
      ) : (
        <>
          <ul className="mt-6 flex flex-col gap-3">
            {items.map(({ product, size, qty, unitPrice, lineTotal }) => (
              <li key={`${product.id}-${size}`} className="warm-shadow rounded-3xl bg-card p-3">
                <div className="flex gap-3.5">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-20 w-20 shrink-0 rounded-2xl object-cover"
                  />
                  <div className="flex min-w-0 flex-1 flex-col">
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <h3 className="font-display text-base font-semibold leading-snug text-foreground">
                          {product.name}
                        </h3>
                        <p className="mt-0.5 text-xs text-muted-foreground">
                          {product.category} · Size {size}
                        </p>
                      </div>
                      <button
                        type="button"
                        aria-label={`Remove ${product.name}`}
                        onClick={() => removeItem(product.id, size)}
                        className="press grid h-8 w-8 shrink-0 place-items-center rounded-full text-muted-foreground transition-colors hover:bg-destructive/10 hover:text-destructive"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                    <div className="mt-auto flex items-center justify-between pt-2">
                      <QuantitySelector
                        value={qty}
                        onChange={(v) => updateQty(product.id, size, v - qty)}
                      />
                      <span className="font-display text-base font-semibold text-caramel">
                        ${lineTotal.toFixed(2)}
                      </span>
                    </div>
                    <p className="mt-1 text-[11px] text-muted-foreground">
                      ${unitPrice.toFixed(2)} each
                    </p>
                  </div>
                </div>
              </li>
            ))}
          </ul>

          {/* Order summary */}
          <section className="warm-shadow mt-6 rounded-3xl bg-card p-5">
            <h2 className="font-display text-lg font-semibold text-foreground">Order summary</h2>
            <dl className="mt-4 flex flex-col gap-3 text-sm">
              <div className="flex justify-between">
                <dt className="text-muted-foreground">Subtotal</dt>
                <dd className="font-medium text-foreground">${subtotal.toFixed(2)}</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-muted-foreground">Delivery charge</dt>
                <dd className="font-medium text-foreground">${DELIVERY_FEE.toFixed(2)}</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-muted-foreground">Service charge</dt>
                <dd className="font-medium text-foreground">${SERVICE_FEE.toFixed(2)}</dd>
              </div>
              <div className="mt-1 border-t border-border pt-3">
                <div className="flex items-baseline justify-between">
                  <dt className="font-display text-lg font-semibold text-foreground">Total</dt>
                  <dd className="font-display text-2xl font-semibold text-caramel">
                    ${total.toFixed(2)}
                  </dd>
                </div>
              </div>
            </dl>

            <button
              type="button"
              onClick={() => clearCart()}
              className="press mt-5 w-full rounded-full bg-caramel py-4 font-display text-base font-semibold text-primary-foreground shadow-lg shadow-caramel/30 transition-all duration-200 hover:bg-caramel/90 active:scale-[0.98]"
            >
              Checkout · ${total.toFixed(2)}
            </button>
            <p className="mt-2.5 text-center text-xs text-muted-foreground">
              Estimated delivery in 15–25 minutes
            </p>
          </section>
        </>
      )}
    </div>
  );
}
