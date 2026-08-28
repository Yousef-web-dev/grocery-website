import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { motion } from "framer-motion";
import Heading from "../heading/Heading";
import FruitsCat from "../../assets/fruits-and-veggies.webp";
import DairyCat from "../../assets/dairy-and-eggs.webp";
import SeaFoodCat from "../../assets/meat-and-seafood.webp";
import { Link } from "react-router-dom";

const Category = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false, 
      mirror: true,
      easing: "ease-in-out",
    });
    

    AOS.refresh();
  }, []);

  const categoryList = [
    {
      id: 1,
      title: "Fruits & Veggies",
      des: "Fresh, organic produce sourced daily from local farms. Explore a wide range of seasonal fruits and crisp vegetables.",
      image: FruitsCat,
      path: "/fruits",
      animation: "fade-up",
    },
    {
      id: 2,
      title: "Dairy & Eggs",
      des: "Wholesome dairy products and free-range eggs, from creamy milk and yogurt to artisanal cheeses.",
      image: DairyCat,
      path: "/dairy",
      animation: "fade-up",
    },
    {
      id: 3,
      title: "Meat & SeaFood",
      des: "High-Quality, responsibly sourced meat and seafood. Choose from prime cuts, marinated options, and more.",
      image: SeaFoodCat,
      path: "/seafood",
      animation: "fade-up",
    },
  ];

  return (
    <section className="overflow-hidden">
      <div className="py-12 sm:py-20 max-w-[1400px] mx-auto px-5 sm:px-10">
        <div data-aos="fade-down" data-aos-duration="800">
          <Heading highlight="Shop" heading="by Category" />
        </div>

        {/* category cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 mt-8 sm:mt-12">
          {categoryList.map((card, index) => (
            <div
              key={card.id}
              data-aos={card.animation}
              data-aos-delay={index * 250}
              data-aos-duration="900"
              className="w-full group flex flex-col justify-end"
            >
              <motion.div
                whileHover={{ y: -8 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="h-full flex flex-col justify-end"
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
                      md:text-lg text-md hover:to-orange-600 transition-colors duration-300 cursor-pointer inline-block"
                    >
                      See All
                    </Link>
                  </div>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Category;