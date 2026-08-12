/*
 * Roast & Ritual — BottomNav
 * Floating pill navigation with a caramel ink-dot active indicator.
 */
import { Link, useLocation } from "react-router-dom";
import { Home as HomeIcon, Coffee, ShoppingCart, User } from "lucide-react";
import { useCart } from "../context/CartContext";

const LINKS = [
  { href: "/", label: "Home", icon: HomeIcon },
  { href: "/menu", label: "Menu", icon: Coffee },
  { href: "/cart", label: "Cart", icon: ShoppingCart },
  { href: "/profile", label: "Profile", icon: User },
];

export default function BottomNav() {
  const [location] = useLocation();
  const { cartCount } = useCart();

  return (
    <nav
      aria-label="Main navigation"
      className="fixed bottom-4 left-1/2 z-40 w-[calc(100%-2rem)] max-w-[400px] -translate-x-1/2 lg:bottom-6"
    >
      <div className="flex items-center justify-between rounded-full bg-card warm-shadow px-2 py-2">
        {LINKS.map(({ href, label, icon: Icon }) => {
          const active =
            href === "/" ? location === "/" : location.startsWith(href);
          return (
            <Link
              key={href}
              href={href}
              className={`press relative flex flex-1 flex-col items-center gap-0.5 rounded-full py-1.5 text-xs font-medium transition-colors duration-200 ${
                active
                  ? "text-caramel"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <span className="relative">
                <Icon className="h-5 w-5" strokeWidth={active ? 2.4 : 2} />
                {label === "Cart" && cartCount > 0 && (
                  <span className="absolute -right-2.5 -top-1.5 grid h-4 min-w-4 place-items-center rounded-full bg-foreground px-0.5 text-[9px] font-semibold text-background">
                    {cartCount}
                  </span>
                )}
              </span>
              {label}
              {active && (
                <span className="absolute -bottom-0.5 h-1 w-1 rounded-full bg-caramel" />
              )}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
