import { useEffect } from "react";
import { FaHeart, FaRegHeart, FaPlus } from "react-icons/fa";
import Button from "../../button/Button";
import { motion } from "framer-motion";
import { useCart } from "../../cartcontext/CartContext";
import AOS from "aos";
import "aos/dist/aos.css";

const Cards = ({ product, index = 0 }) => {

  if (!product) return null;

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
      mirror: true,
      easing: "ease-out-cubic",
    });
    AOS.refresh();
  }, []);

  const { favorites, addToCart, toggleFavorite } = useCart();


  const isFavorite = favorites?.some((item) => item.id === product.id);

  return (
    <div
      data-aos="fade-up"
      data-aos-delay={(index % 4) * 150} 
      data-aos-duration="800"
      className="h-full"
    >
      <motion.div
        whileHover={{ y: -8, transition: { duration: 0.2 } }}
        className="bg-white p-5 rounded-2xl border border-zinc-100 shadow-sm hover:shadow-xl transition-all duration-300 relative flex flex-col justify-between group overflow-hidden h-full"
      >

        <div 
          data-aos="fade-down" 
          data-aos-delay={(index % 4) * 150 + 100}
          className="flex justify-between items-center z-10"
        >
          <button
            onClick={() => toggleFavorite(product)}
            className="cursor-pointer transition-transform active:scale-125 focus:outline-none"
          >
            {isFavorite ? (
              <FaHeart className="text-red-500 text-lg" />
            ) : (
              <FaRegHeart className="text-zinc-400 hover:text-red-500 text-lg transition-colors" />
            )}
          </button>

          <button
            onClick={() => addToCart(product)}
            className="w-8 h-8 rounded-full bg-orange-100 text-orange-500 flex items-center justify-center cursor-pointer hover:bg-orange-500 hover:text-white active:scale-95 transition-all duration-300"
          >
            <FaPlus />
          </button>
        </div>


        <div className="w-full h-44 flex justify-center items-center my-4 relative">
          <motion.img
            src={product.image}
            alt={product.name || product.title}
            loading="lazy"
            animate={{
              y: [0, 8, -8, 0],
              x: [0, 5, -5, 0],
              rotate: [0, 5, -5, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              repeatType: "mirror",
              ease: "easeInOut",
              delay: ((product.id || 1) % 5) * 0.3,
            }}
            whileHover={{ scale: 1.1, rotate: 3 }}
            className="max-h-full max-w-full object-contain filter drop-shadow-md group-hover:drop-shadow-2xl transition-all duration-300"
          />
        </div>


        <div className="z-10">
          <h3 
            data-aos="zoom-in" 
            data-aos-delay={(index % 4) * 150 + 200}
            className="text-xl font-bold text-zinc-800 group-hover:text-orange-500 transition-colors"
          >
            {product.name || product.title}
          </h3>
          
          <p 
            data-aos="fade-up" 
            data-aos-delay={(index % 4) * 150 + 250}
            className="text-orange-500 font-semibold text-lg my-2"
          >
            ${product.price?.toFixed(2)}
          </p>


          <motion.div
            data-aos="fade-up"
            data-aos-delay={(index % 4) * 150 + 300}
            whileTap={{ scale: 0.95 }}
            onClick={() => addToCart(product)}
          >
            <Button content="Shop Now" />
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Cards;