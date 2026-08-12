/* Roast & Ritual — 404 page (JSX) */
import { Link } from "wouter";

export default function NotFound() {
  return (
    <div className="screen-in flex min-h-[70vh] flex-col items-center justify-center px-8 text-center">
      <p className="overline-label">Spilled cup</p>
      <h1 className="font-display mt-2 text-4xl font-semibold text-foreground">404</h1>
      <p className="mt-3 max-w-xs text-sm text-muted-foreground">
        This page has gone cold. Head back to the home brew.
      </p>
      <Link
        href="/"
        className="press mt-6 rounded-full bg-caramel px-6 py-3 text-sm font-semibold text-primary-foreground"
      >
        Back to home
      </Link>
    </div>
  );
}
