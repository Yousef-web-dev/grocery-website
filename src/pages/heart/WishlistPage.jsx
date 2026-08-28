import { useCart } from "../../components/cartcontext/CartContext";
import Cards from "../../components/products/cards/Cards";
import { Link } from "react-router-dom";

const WishlistPage = () => {
  const { favorites } = useCart();

  if (!favorites || favorites.length === 0) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center pt-28 px-4 text-center">
        <h2 className="text-2xl font-bold text-zinc-700 mb-4">
          Your Wishlist is Empty
        </h2>
        <Link
          to="/"
          className="bg-orange-500 text-white px-6 py-2 rounded-lg hover:bg-orange-600 transition-colors"
        >
          Explore Products
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-[1400px] mx-auto pt-32 pb-16 px-6">
      <h1 className="text-3xl font-bold text-zinc-800 mb-8">My Wishlist</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {favorites.map((product) => (
          <Cards key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default WishlistPage;
