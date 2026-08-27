import { useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { initSmoothScroll } from "./library/SmoothScroll";
import { initDragScroll } from "./library/useSmoothDragScroll";
import { CartProvider } from "./components/cartcontext/CartContext";

// Components & Pages
import Layout from "./components/layout/Layout";
import Home from "./components/home/Home";
import AllProducts from "./components/allproducts/AllProducts";
import CartPage from "./pages/CartPage";
import WishlistPage from "./pages/WishlistPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "allproducts", element: <AllProducts /> },
      { path: "cart", element: <CartPage /> },
      { path: "wishlist", element: <WishlistPage /> },
    ],
  },
]);

const App = () => {
  useEffect(() => {
    const lenis = initSmoothScroll();
    const removeDragEvents = initDragScroll(lenis);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <CartProvider>
      <RouterProvider router={router} />
    </CartProvider>
  );
};

export default App;