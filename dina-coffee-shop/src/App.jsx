/*
 * Dina Coffee Shop — App
 * Cream & Craft editorial theme. Routes the five screens inside a
 * centered phone frame on desktop; bottom nav sits above content.
 */
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { toast, Toaster } from "react-hot-toast";
import BottomNav from "./components/BottomNav";
import { CartProvider, useCart } from "./context/CartContext";
import Home from "./screens/Home";
import Menu from "./screens/Menu";
import Cart from "./screens/Cart";
import Profile from "./screens/Profile";
import ProductDetails from "./screens/ProductDetails";
import Login from "./screens/Login";

const PROTECTED = ["/menu", "/cart", "/profile", "/product"];

function useAuthGuard() {
  const location = useLocation();
  const { isLoggedIn } = useCart();

  if (
    !isLoggedIn &&
    PROTECTED.some((path) => location.pathname.startsWith(path))
  ) {
    toast.error("Please sign in to continue");
    return <Navigate to="/login" replace />;
  }
  return null;
}

function GuardedRoutes() {
  const guard = useAuthGuard();
  if (guard) return guard;

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/menu" element={<Menu />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/product/:id" element={<ProductDetails />} />
      <Route path="/login" element={<Login />} />
      <Route path="*" element={<Home />} />
    </Routes>
  );
}

export default function App() {
  return (
    <CartProvider>
      <Toaster position="top-center" toastOptions={{ duration: 2000 }} />
      <div className="min-h-screen bg-paper">
        <div className="phone-frame">
          <div className="min-h-full pb-6">
            <GuardedRoutes />
          </div>
          <BottomNav />
        </div>
      </div>
    </CartProvider>
  );
}
