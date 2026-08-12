/*
 * Roast & Ritual — CartContext
 * Global state for cart items, favorites, and toast notifications.
 * Cart items are keyed by productId + size so the same drink in
 * different sizes stays separate.
 */
import { createContext, useCallback, useContext, useMemo, useState } from "react";
import { toast } from "react-hot-toast";

const CartContext = createContext(null);

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(true); // demo: start signed in
  const [favorites, setFavorites] = useState([1, 5]); // demo: pre-selected favorites
  const [orders] = useState([
    {
      id: "RR-2048",
      date: "Aug 8, 2026",
      items: [
        { name: "Classic Cappuccino", size: "M", qty: 1, price: 4.5 },
        { name: "Butter Croissant", qty: 2, price: 3.75 },
      ],
      total: 13.25,
      status: "Delivered",
    },
    {
      id: "RR-1987",
      date: "Aug 2, 2026",
      items: [{ name: "Iced Caramel Latte", size: "L", qty: 1, price: 7.0 }],
      total: 10.5,
      status: "Delivered",
    },
    {
      id: "RR-1902",
      date: "Jul 27, 2026",
      items: [
        { name: "Spiced Chai Latte", size: "S", qty: 2, price: 4.75 },
        { name: "Classic Tiramisu", qty: 1, price: 6.5 },
      ],
      total: 18.5,
      status: "Delivered",
    },
  ]);

  const addToCart = useCallback((product, size = "M", qty = 1) => {
    const unit = product.price + (size === "S" ? 0 : size === "L" ? 1.5 : 0.75);
    setCartItems((prev) => {
      const existing = prev.find((i) => i.productId === product.id && i.size === size);
      if (existing) {
        return prev.map((i) =>
          i.productId === product.id && i.size === size
            ? { ...i, qty: i.qty + qty }
            : i,
        );
      }
      return [...prev, { productId: product.id, size, qty, unitPrice: unit }];
    });
    toast.success(`${product.name} added to cart`, {
      description: size !== "M" ? `Size ${size} • $${unit.toFixed(2)} each` : undefined,
    });
  }, []);

  const updateQty = useCallback((productId, size, delta) => {
    setCartItems((prev) =>
      prev
        .map((i) =>
          i.productId === productId && i.size === size
            ? { ...i, qty: Math.max(0, i.qty + delta) }
            : i,
        )
        .filter((i) => i.qty > 0),
    );
  }, []);

  const removeItem = useCallback((productId, size) => {
    setCartItems((prev) => prev.filter((i) => !(i.productId === productId && i.size === size)));
    toast("Item removed from cart");
  }, []);

  const clearCart = useCallback(() => {
    setCartItems([]);
    toast.success("Order placed!", { description: "Your ritual is being prepared." });
  }, []);

  const login = useCallback(() => {
    setIsLoggedIn(true);
    toast.success("Welcome back!", { description: "Sarah, your ritual awaits." });
  }, []);

  const logout = useCallback(() => {
    setIsLoggedIn(false);
    setCartItems([]);
    toast("Logged out", { description: "Until the next brew, Sarah." });
  }, []);

  const toggleFavorite = useCallback((productId) => {
    setFavorites((prev) =>
      prev.includes(productId)
        ? prev.filter((id) => id !== productId)
        : [...prev, productId],
    );
  }, []);

  const cartCount = useMemo(
    () => cartItems.reduce((sum, i) => sum + i.qty, 0),
    [cartItems],
  );

  const value = useMemo(
    () => ({
      cartItems,
      isLoggedIn,
      favorites,
      orders,
      addToCart,
      updateQty,
      removeItem,
      clearCart,
      toggleFavorite,
      login,
      logout,
      cartCount,
    }),
    [cartItems, isLoggedIn, favorites, orders, addToCart, updateQty, removeItem, clearCart, toggleFavorite, login, logout, cartCount],
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
}
