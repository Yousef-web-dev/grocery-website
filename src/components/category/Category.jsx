import { motion } from "framer-motion";
import Heading from "../heading/Heading";
import FruitsCat from "../../assets/fruits-and-veggies.webp";
import DairyCat from "../../assets/dairy-and-eggs.webp";
import SeaFoodCat from "../../assets/meat-and-seafood.webp";
import Button from "../button/Button";
import { Link } from "react-router-dom";

const Category = () => {
  const categoryList = [
    {
      id: 1,
      title: "Fruits & Veggies",
      des: "Fresh, organic produce sourced daily from local farms. Explore a wide range of seasonal fruits and crisp vegetables.",
      image: FruitsCat,
      path: "/fruits"
    },
    {
      id: 2,
      title: "Dairy & Eggs",
      des: "Wholesome dairy products and free-range eggs, from creamy milk and yogurt to artisanal cheeses.",
      image: DairyCat,
      path: "/dairy"
    },
    {
      id: 3,
      title: "Meat & SeaFood",
      des: "High-Quality, responsibly sourced meat and seafood. Choose from prime cuts, marinated options, and more.",
      image: SeaFoodCat,
      path: "/seafood"
    },
  ];


  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3, 
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const renderCards = categoryList.map((card) => (
    <motion.div
      key={card.id}
      variants={cardVariants}
      whileHover={{ y: -8 }} // رفع الكارت لأعلى خفيف عند الـ Hover
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="w-full group flex flex-col justify-end"
    >
      {/* card image */}
      <div className="w-full h-48 sm:h-56 md:h-64 relative -mb-10 sm:-mb-12 pointer-events-none z-20 flex justify-center items-end">
        <motion.img
          src={card.image}
          alt={card.title}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
          className="max-h-full max-w-[85%] sm:max-w-full object-contain drop-shadow-md"
        />
      </div>

      {/* card content */}
      <div className="bg-zinc-100 pt-14 sm:pt-16 p-6 sm:p-8 rounded-2xl relative z-10 shadow-sm group-hover:shadow-xl transition-shadow duration-300 flex flex-col justify-between flex-1">
        <div>
          <h3 className="text-zinc-800 text-2xl sm:text-3xl font-bold">
            {card.title}
          </h3>
          <p className="text-zinc-600 text-sm sm:text-base mt-2 sm:mt-3 mb-6 sm:mb-8 leading-relaxed">
            {card.des}
          </p>
        </div>
        <div>
          <Link
            to={card.path}
            className="bg-gradient-to-b from-orange-400 to-orange-500 text-white px-8 py-3 rounded-lg 
            md:text-lg text-md hover:to-orange-600 transition-colors duration-300 cursor-pointer"
          >
            See All
          </Link>
        </div>
      </div>
    </motion.div>
  ));

  return (
    <section className="overflow-hidden">
      <div className="py-12 sm:py-20 max-w-[1400px] mx-auto px-5 sm:px-10">
        <Heading highlight="Shop" heading="by Category" />

        {/* category cards animated wrapper */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 mt-8 sm:mt-12"
        >
          {renderCards}
        </motion.div>
      </div>
    </section>
  );
};

export default Category;
