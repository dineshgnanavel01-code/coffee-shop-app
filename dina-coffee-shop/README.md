# Dina Coffee Shop

A modern, responsive coffee ordering mobile app UI built with React, Vite, and Tailwind CSS.

## Project Structure

```
dina-coffee-shop/
├── public/
│   └── assets/        (coffee images, logos, icons)
├── src/
│   ├── components/    Navbar, BottomNav, ProductCard, CategoryTabs, QuantitySelector, ProfileCard
│   ├── screens/       Home, ProductDetails, Menu, Cart, Profile, Login
│   ├── context/       CartContext (cart, favorites, and login/logout state)
│   ├── data/          products.js, categories.js
│   ├── App.jsx        routes, auth guard, phone-frame layout
│   ├── main.jsx       React entry point
│   └── index.css      global Cream & Craft theme
├── index.html
├── package.json
├── vite.config.js
├── netlify.toml
└── README.md
```

All source files are plain JavaScript/JSX (no TypeScript).

## Getting Started

Install dependencies and start the development server:

```bash
pnpm install
pnpm dev
```

The app opens at http://localhost:3000. It renders inside a mobile phone frame on desktop and full-width on mobile devices.

## Features

The Home screen has a brand header, greeting, search, category filter tabs (All, Coffee, Tea, Cold Drinks, Desserts), and popular product cards with ratings, prices, favorite hearts, and add-to-cart buttons. The Product Details screen shows a large image, rating, description, size selection, quantity selector, live price, and a favorite heart. The Menu screen provides category tabs with search and filter. The Cart screen lists selected products with quantity steppers, remove options, subtotal, delivery and service charges, total, and checkout. The Profile screen shows user info, order history, favorites, settings, and a logout button that navigates to the Login screen. The Login screen gates the app until the user signs in.

## Build

```bash
pnpm build
```

The static site is produced in the `dist` folder.

## Deploying to Netlify

The repository includes `netlify.toml`, so Netlify auto-detects the build command and publish directory. Import this repository at https://app.netlify.com (Add new site → Import an existing project → GitHub → select the repo → Deploy site). No manual settings are required. Routes such as `/menu` and `/product/1` resolve correctly thanks to the SPA redirect rule in `netlify.toml`.

## Notes

All images are stored locally in `public/assets/` and referenced with relative paths (`/assets/...`), so they work on any host (Netlify, Vercel, or local).
