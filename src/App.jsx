import { useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { initSmoothScroll } from "./library/SmoothScroll";
import { initDragScroll } from "./library/useSmoothDragScroll";
import { CartProvider } from "./components/cartcontext/CartContext";

// Components & Pages
import Layout from "./components/layout/Layout";
import Home from "./components/home/Home";
import AllProducts from "./components/allproducts/AllProducts";
import CartPage from "./pages/cart/CartPage";
import WishlistPage from "./pages/heart/WishlistPage";
import Fruits from "./components/fruits/Fruits";
import Dairy from "./components/dairy/Dairy";
import SeaFood from "./components/seafood/SeaFood";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Layout />,
      children: [
        { index: true, element: <Home /> },
        { path: "allproducts", element: <AllProducts /> },
        { path: "cart", element: <CartPage /> },
        { path: "wishlist", element: <WishlistPage /> },

        { path: "fruits", element: <Fruits /> },
        { path: "dairy", element: <Dairy /> },
        { path: "seafood", element: <SeaFood /> },
      ],
    },
  ],
  {
    basename: "/grocery-website",
  },
);

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
