# Roast & Ritual — Coffee Shop Mobile App

A modern, responsive coffee ordering mobile app UI built with **React + Vite + Tailwind CSS** (ES6+ JSX, no TypeScript).

![Live demo](https://coffeeshop-r6jmxjuv.manus.space)

## Features

- **Home** — branding header, search bar, greeting, category tabs, popular product cards with rating, price, favorite and add-to-cart
- **Product Details** — large image, rating, description, size selection, quantity selector, live total, Add to Cart and favorite heart
- **Menu** — category tabs (Coffee, Tea, Cold Drinks, Desserts), search/filter, responsive product grid
- **Cart** — quantity increase/decrease, remove item, subtotal, delivery charge, total, checkout
- **Profile** — user profile, order history, favorite items, settings, logout
- **Login flow** — logout navigates to the login page; main screens are protected when signed out

## Project Structure

```
client/src/
  components/   Navbar, BottomNav, ProductCard, CategoryTabs, QuantitySelector, ProfileCard
  screens/      Home, ProductDetails, Menu, Cart, Profile, Login
  context/      CartContext.jsx (cart, favorites, auth state)
  data/         products.js, categories.js
  App.jsx       routing + phone-frame layout
  main.jsx      entry
  index.css     theme tokens (Cream & Craft editorial style)
```

## Getting Started

Requires [Node.js 18+](https://nodejs.org) and [pnpm](https://pnpm.io) (`npm i -g pnpm`).

```bash
pnpm install
pnpm run dev       # start dev server at http://localhost:3000
```

Other commands:

| Command | Purpose |
|---|---|
| `pnpm run build` | Production build (outputs to `dist/public`) |
| `pnpm run preview` | Preview the production build |

## Deploying to Netlify

The `netlify.toml` file in this repo configures Netlify automatically:

1. Push this repo to GitHub (it is already connected via `user_github`).
2. On [app.netlify.com](https://app.netlify.com) choose **Add new site → Import an existing project**.
3. Authorize GitHub and select the repository.
4. Click **Deploy site** — no manual settings are needed.

Key settings (already in `netlify.toml`):

- Build command: `pnpm install && pnpm run build`
- Publish directory: `dist/public`
- SPA redirect: all routes fall back to `index.html`

## Deploying to Vercel

On [vercel.com/new](https://vercel.com/new) import the GitHub repository and set:

- Build command: `pnpm install && pnpm run build`
- Output directory: `dist/public`

## Notes

- All images are stored locally in `client/public/images/` and referenced with relative paths (`/images/...`), so they work on any host (Netlify, Vercel, or the built-in Manus hosting). No image configuration is needed.
- The demo starts signed in. Logout is on the Profile screen and navigates to the login page.
- Cart and favorites reset on logout (demo behavior).

## License

MIT
