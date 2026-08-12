/*
 * Roast & Ritual — App
 * Cream & Craft editorial theme. Routes the five screens inside a
 * centered phone frame on desktop; bottom nav sits above content.
 */
import { Route, Switch, useLocation } from "wouter";
import { Toaster } from "@/components/ui/sonner";
import BottomNav from "@/components/BottomNav";
import { CartProvider, useCart } from "@/context/CartContext";
import Home from "@/screens/Home";
import Menu from "@/screens/Menu";
import Cart from "@/screens/Cart";
import Profile from "@/screens/Profile";
import ProductDetails from "@/screens/ProductDetails";
import Login from "@/screens/Login";
import NotFound from "@/pages/NotFound";

const PROTECTED = ["/menu", "/cart", "/profile", "/product/"];

function useAuthGuard() {
  const [location, navigate] = useLocation();
  const { isLoggedIn } = useCart();

  if (!isLoggedIn && PROTECTED.some((path) => location.startsWith(path))) {
    navigate("/login");
    return false;
  }
  return true;
}

function GuardedRoutes() {
  const accessible = useAuthGuard();
  if (!accessible) return null;

  return (
    <Switch>
      <Route path="/login" component={Login} />
      <Route path="/" component={Home} />
      <Route path="/menu" component={Menu} />
      <Route path="/cart" component={Cart} />
      <Route path="/profile" component={Profile} />
      <Route path="/product/:id" component={ProductDetails} />
      <Route component={NotFound} />
    </Switch>
  );
}

function Layout({ children }) {
  return (
    <div className="min-h-screen bg-paper">
      <div className="phone-frame">
        <div className="min-h-full pb-6">
          {children}
        </div>
        <BottomNav />
      </div>
    </div>
  );
}

function Router() {
  return (
    <Layout>
      <GuardedRoutes />
    </Layout>
  );
}

export default function App() {
  return (
    <CartProvider>
      <Toaster position="top-center" richColors />
      <Router />
    </CartProvider>
  );
}
