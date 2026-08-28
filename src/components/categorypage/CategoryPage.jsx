import Banner from "../banner/Banner";
import Cards from "../products/cards/Cards";
import { products } from "../products/productsList";
import { motion } from "framer-motion";

const CategoryPage = ({ title, bgImage, category = "All" }) => {

  const filteredItems = category === "All"
    ? products
    : products.filter((item) => item.category?.toLowerCase() === category.toLowerCase());

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
      },
    },
  };

  const renderProducts = filteredItems.map((product) =>
    product ? <Cards key={product.id} product={product} /> : null
  );

  return (
    <div className="bg-zinc-50/50 min-h-screen pb-20">
      <Banner title={title} bgImage={bgImage} />

      <div className="max-w-[1400px] mx-auto px-5 sm:px-10 mt-10">
        {filteredItems.length > 0 ? (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8"
          >
            {renderProducts}
          </motion.div>
        ) : (
          <div className="text-center py-20 text-zinc-500 text-xl font-medium">
            No products found in this category.
          </div>
        )}
      </div>
    </div>
  );
};

export default CategoryPage;