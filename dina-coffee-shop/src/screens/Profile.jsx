/*
 * Roast & Ritual — Profile Screen
 * Profile card, order history list, favorite items row, settings
 * toggles, and a quiet logout action.
 */
import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  LogOut,
  Bell,
  Moon,
  MapPin,
  ChevronRight,
  Star,
} from "lucide-react";
import { toast } from "react-hot-toast";
import ProfileCard from "../components/ProfileCard";
import { PRODUCTS } from "../data/products";
import { useCart } from "../context/CartContext";

const SETTINGS = [
  { id: "notif", label: "Push notifications", icon: Bell, defaultOn: true },
  { id: "dark", label: "Dark mode", icon: Moon, defaultOn: false, comingSoon: true },
  { id: "address", label: "Delivery addresses", icon: MapPin, defaultOn: true },
];

export default function Profile() {
  const navigate = useNavigate();
  const { favorites, orders, logout } = useCart();
  const [settings, setSettings] = useState(
    SETTINGS.reduce((acc, s) => ({ ...acc, [s.id]: s.defaultOn }), {}),
  );

  const favProducts = useMemo(
    () => PRODUCTS.filter((p) => favorites.includes(p.id)),
    [favorites],
  );

  const toggleSetting = (id, comingSoon) => {
    if (comingSoon) {
      toast("Coming soon", { description: "Dark mode is being brewed." });
      return;
    }
    setSettings((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className="screen-in px-5 pb-32 pt-8">
      <div className="flex items-center gap-3">
        <Link
          to="/"
          aria-label="Go back"
          className="press grid h-11 w-11 place-items-center rounded-full bg-card warm-shadow transition-transform hover:scale-105"
        >
          <ArrowLeft className="h-5 w-5 text-foreground" />
        </Link>
        <div>
          <p className="overline-label">Account</p>
          <h1 className="font-display text-2xl font-semibold text-foreground">Profile</h1>
        </div>
      </div>

      {/* Profile section */}
      <section className="mt-5">
        <ProfileCard />
      </section>

      {/* Order history */}
      <section className="mt-8">
        <div className="flex items-end justify-between">
          <div>
            <p className="overline-label">Previously poured</p>
            <h2 className="font-display mt-1 text-xl font-semibold text-foreground">
              Order history
            </h2>
          </div>
          <Link
            to="/menu"
            className="text-sm font-medium text-caramel hover:opacity-80"
          >
            Order again
          </Link>
        </div>

        <ul className="mt-4 flex flex-col gap-3">
          {orders.map((order) => (
            <li key={order.id} className="warm-shadow rounded-3xl bg-card p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-display text-base font-semibold text-foreground">
                    {order.items.map((i) => i.name).join(" · ")}
                  </p>
                  <p className="mt-0.5 text-xs text-muted-foreground">
                    {order.id} · {order.date} · {order.items.reduce((s, i) => s + (i.qty ?? 1), 0)}{" "}
                    item{order.items.length === 1 ? "" : "s"}
                  </p>
                </div>
                <div className="text-right">
                  <span className="rounded-full bg-accent px-2.5 py-1 text-[11px] font-semibold text-accent-foreground">
                    {order.status}
                  </span>
                  <p className="mt-1.5 font-display text-base font-semibold text-caramel">
                    ${order.total.toFixed(2)}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </section>

      {/* Favorite items */}
      <section className="mt-8">
        <div className="flex items-end justify-between">
          <div>
            <p className="overline-label">Loved drinks</p>
            <h2 className="font-display mt-1 text-xl font-semibold text-foreground">
              Favorites
            </h2>
          </div>
          <Link to="/menu" className="text-sm font-medium text-caramel hover:opacity-80">
            Edit
          </Link>
        </div>

        {favProducts.length === 0 ? (
          <p className="mt-4 rounded-2xl bg-card p-4 text-sm text-muted-foreground">
            Heart an item on the menu to save it here.
          </p>
        ) : (
          <ul className="mt-4 flex gap-3 overflow-x-auto pb-1">
            {favProducts.map((product) => (
              <li key={product.id} className="w-40 shrink-0">
                <Link to={`/product/${product.id}`}>
                  <img
                    src={product.image}
                    alt={product.name}
                    className="aspect-square w-full rounded-2xl object-cover"
                  />
                  <p className="mt-2 flex items-center gap-1 text-sm font-medium text-foreground">
                    <Star className="h-3 w-3 fill-amber-400 text-amber-400" />
                    {product.name}
                  </p>
                  <p className="font-display text-sm font-semibold text-caramel">
                    ${(product.price + 0.75).toFixed(2)}
                  </p>
                </Link>
              </li>
            ))}
          </ul>
        )}
      </section>

      {/* Settings */}
      <section className="mt-8">
        <p className="overline-label">Preferences</p>
        <h2 className="font-display mt-1 text-xl font-semibold text-foreground">Settings</h2>
        <ul className="mt-4 overflow-hidden rounded-3xl bg-card warm-shadow">
          {SETTINGS.map(({ id, label, icon: Icon, comingSoon }) => (
            <li key={id}>
              <button
                type="button"
                onClick={() => toggleSetting(id, comingSoon)}
                className="press flex w-full items-center gap-3.5 px-4 py-3.5 text-left transition-colors hover:bg-accent/50"
              >
                <Icon className="h-4.5 w-4.5 text-caramel" />
                <span className="flex-1 text-sm font-medium text-foreground">{label}</span>
                {comingSoon && (
                  <span className="text-[11px] text-muted-foreground">soon</span>
                )}
                <ChevronRight className="h-4 w-4 text-muted-foreground" />
              </button>
            </li>
          ))}
        </ul>
      </section>

      {/* Logout */}
      <button
        type="button"
        onClick={() => {
          logout();
          navigate("/login");
        }}
        className="press mt-6 flex w-full items-center justify-center gap-2 rounded-full border border-border px-5 py-3.5 text-sm font-semibold text-foreground transition-colors hover:border-destructive/50 hover:text-destructive"
      >
        <LogOut className="h-4 w-4" />
        Log out
      </button>
    </div>
  );
}
