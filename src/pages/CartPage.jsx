import { useCart } from "../components/cartcontext/CartContext";
import { Link } from "react-router-dom";
import { FaTrash, FaPlus, FaMinus } from "react-icons/fa";

const CartPage = () => {
  const { cart, removeFromCart, addToCart, decreaseQuantity } = useCart();

  const total = cart?.reduce((acc, item) => acc + item.price * item.quantity, 0) || 0;

  if (!cart || cart.length === 0) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center pt-28 px-4 text-center">
        <h2 className="text-2xl font-bold text-zinc-700 mb-4">Your Cart is Empty</h2>
        <Link to="/" className="bg-orange-500 text-white px-6 py-2 rounded-lg hover:bg-orange-600 transition-colors">
          Continue Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-[1200px] mx-auto pt-32 pb-16 px-4">
      <h1 className="text-3xl font-bold text-zinc-800 mb-8">Shopping Cart</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 flex flex-col gap-4">
          {cart.map((item) => (
            <div key={item.id} className="flex items-center justify-between bg-white p-4 rounded-xl border border-zinc-100 shadow-sm">
              <div className="flex items-center gap-4">
                <img src={item.image} alt={item.name || item.title} className="w-16 h-16 object-contain" />
                <div>
                  <h3 className="font-bold text-zinc-800">{item.name || item.title}</h3>
                  <p className="text-orange-500 font-semibold">${item.price}</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <button 
                  onClick={() => decreaseQuantity(item.id)} 
                  className="w-7 h-7 rounded bg-zinc-100 hover:bg-zinc-200 text-zinc-600 flex items-center justify-center transition-colors"
                >
                  <FaMinus size={10} />
                </button>
                <span className="font-bold w-4 text-center">{item.quantity}</span>
                <button 
                  onClick={() => addToCart(item)} 
                  className="w-7 h-7 rounded bg-zinc-100 hover:bg-zinc-200 text-zinc-600 flex items-center justify-center transition-colors"
                >
                  <FaPlus size={10} />
                </button>
              </div>

              <button 
                onClick={() => removeFromCart(item.id)} 
                className="text-red-500 hover:text-red-700 p-2 transition-colors"
              >
                <FaTrash />
              </button>
            </div>
          ))}
        </div>

        <div className="bg-white p-6 rounded-2xl border border-zinc-100 shadow-sm h-fit">
          <h2 className="text-xl font-bold mb-4 text-zinc-800">Order Summary</h2>
          <div className="flex justify-between mb-2 text-zinc-600">
            <span>Total Amount:</span>
            <span className="font-bold text-orange-500">${total.toFixed(2)}</span>
          </div>
          <button className="w-full bg-orange-500 text-white py-3 rounded-xl mt-4 font-bold hover:bg-orange-600 transition-colors">
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartPage;