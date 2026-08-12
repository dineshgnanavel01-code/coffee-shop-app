/*
 * Roast & Ritual — Login Screen
 * Editorial sign-in: centered logo, serif headline, email/password
 * form, and caramel submit CTA. Demo mode — any tap signs in.
 */
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Eye, EyeOff, Mail, Lock } from "lucide-react";
import { useCart } from "../context/CartContext";

export default function Login() {
  const navigate = useNavigate();
  const { login } = useCart();

  const [email, setEmail] = useState("sarah@roastandritual.cafe");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email.trim()) return;
    login();
    navigate("/");
  };

  return (
    <div className="screen-in flex min-h-full flex-col px-7 py-12">
      <div className="flex flex-1 flex-col">
        {/* Brand */}
        <div className="flex flex-col items-center text-center">
          <div className="grid h-20 w-20 place-items-center rounded-3xl bg-card warm-shadow">
            <img
              src="/assets/logo-mark_30cba49d.png"
              alt="Roast & Ritual logo"
              className="h-14 w-14 object-contain"
            />
          </div>
          <h1 className="font-display mt-6 text-3xl font-semibold text-foreground">
            Roast <span className="text-caramel">&</span> Ritual
          </h1>
          <p className="overline-label mt-2">specialty coffee bar</p>
        </div>

        {/* Heading */}
        <div className="mt-10 text-center">
          <p className="overline-label">Welcome back</p>
          <h2 className="font-display mt-2 text-2xl font-semibold leading-snug text-foreground">
            Your morning ritual<br />is waiting
          </h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Sign in to order, save favorites, and track your brews.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="mt-8 flex flex-col gap-4">
          <label htmlFor="email" className="sr-only">
            Email address
          </label>
          <div className="relative">
            <Mail className="pointer-events-none absolute left-4 top-1/2 h-4.5 w-4.5 -translate-y-1/2 text-muted-foreground" />
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email address"
              className="h-13 w-full rounded-2xl border border-border bg-card py-3.5 pl-11 pr-4 text-sm text-foreground placeholder:text-muted-foreground/70 transition-shadow duration-200 focus:ring-2 focus:ring-caramel focus:outline-none"
            />
          </div>

          <div className="relative">
            <Lock className="pointer-events-none absolute left-4 top-1/2 h-4.5 w-4.5 -translate-y-1/2 text-muted-foreground" />
            <input
              id="password"
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              className="h-13 w-full rounded-2xl border border-border bg-card py-3.5 pl-11 pr-11 text-sm text-foreground placeholder:text-muted-foreground/70 transition-shadow duration-200 focus:ring-2 focus:ring-caramel focus:outline-none"
            />
            <button
              type="button"
              aria-label={showPassword ? "Hide password" : "Show password"}
              onClick={() => setShowPassword((v) => !v)}
              className="absolute right-3.5 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
            >
              {showPassword ? <EyeOff className="h-4.5 w-4.5" /> : <Eye className="h-4.5 w-4.5" />}
            </button>
          </div>

          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center gap-2 text-muted-foreground">
              <input
                type="checkbox"
                defaultChecked
                className="h-4 w-4 accent-[oklch(0.58_0.13_50)]"
              />
              Remember me
            </label>
            <button type="button" className="font-medium text-caramel hover:opacity-80">
              Forgot password?
            </button>
          </div>

          <button
            type="submit"
            className="press mt-1 w-full rounded-full bg-caramel py-4 font-display text-base font-semibold text-primary-foreground shadow-lg shadow-caramel/30 transition-all duration-200 hover:bg-caramel/90 active:scale-[0.98]"
          >
            Sign in
          </button>
        </form>

        {/* Divider + demo note */}
        <div className="mt-6 flex items-center gap-3">
          <span className="h-px flex-1 bg-border" />
          <span className="text-xs text-muted-foreground">demo mode — any tap signs in</span>
          <span className="h-px flex-1 bg-border" />
        </div>

        <p className="mt-6 text-center text-sm text-muted-foreground">
          New here?{" "}
          <button
            type="button"
            onClick={() => {
              login();
              navigate("/");
            }}
            className="font-semibold text-caramel hover:opacity-80"
          >
            Create an account
          </button>
        </p>
      </div>
    </div>
  );
}
