import Heading from "../heading/Heading";
import { useState } from "react";
import { products } from "./productsList";
import Cards from "./cards/Cards";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

const Products = () => {
  const categories = ["All", "Fruits", "Vegetables", "Dairy", "SeaFood"];
  const [activeTab, setActiveTab] = useState("All");

  const filteredProducts =
    activeTab === "All"
      ? products
      : products.filter((item) => item.category === activeTab);

  return (
    <section>
      <div className="max-w-[1400px] mx-auto px-10 py-28">
        <Heading highlight="Our" heading="Products" />

        {/* tabs */}
        <div className="flex gap-3 justify-center mt-10 flex-wrap">
          {categories.map((category) => (
            <button
              onClick={() => setActiveTab(category)}
              key={category}
              className={`rounded-lg px-5 py-2 text-lg cursor-pointer transition-all ${
                activeTab === category
                  ? "bg-gradient-to-b from-orange-400 to-orange-500 text-white shadow-md"
                  : "bg-zinc-100 text-zinc-700 hover:bg-zinc-200"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* product listing with animation */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-12"
          >
            {filteredProducts.map((product) => (
              product && <Cards key={product.id} product={product} />
            ))}
          </motion.div>
        </AnimatePresence>

        <div className="mt-15 mx-auto w-fit">
          <Link
            to="/allproducts"
            className="bg-gradient-to-b from-orange-400 to-orange-500 text-white px-8 py-3 rounded-lg 
            md:text-lg text-md hover:to-orange-600 transition-colors duration-300 cursor-pointer"
          >
            See All
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Products;