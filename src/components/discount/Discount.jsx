import { useEffect } from "react";
import { motion } from "framer-motion";
import Button from "../button/Button";
import FreshFruits from "../../assets/fresh-fruits.webp";
import AOS from "aos";
import "aos/dist/aos.css";

const Discount = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      mirror: true,
      easing: "ease-out-cubic",
    });
    AOS.refresh();
  }, []);

  return (
    <section className="bg-zinc-100 overflow-hidden relative py-12 sm:py-16 md:py-24">

      <div 
        data-aos="fade-left" 
        data-aos-duration="1200"
        className="absolute right-0 top-1/2 -translate-y-1/2 w-full md:w-1/2 h-full flex justify-end items-center pointer-events-none opacity-40 md:opacity-100 z-0 overflow-hidden"
      >
        <motion.img
          src={FreshFruits}
          alt="Fresh Fruits Discount"
          className="w-full max-w-[650px] object-contain drop-shadow-2xl"
          animate={{
            y: [0, -15, 0],
            rotate: [0, 2, 0, -2, 0],
            scale: [1, 1.02, 1],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            repeatType: "mirror",
            ease: "easeInOut",
          }}
        />
      </div>


      <div className="max-w-[1400px] mx-auto px-5 sm:px-10 relative z-10 flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-12">
        

        <div data-aos="zoom-in" data-aos-delay="200">
          <motion.div
            whileHover={{ scale: 1.1, rotate: -95 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="flex justify-start md:justify-center items-center"
          >
            <span className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl text-orange-500 font-extrabold tracking-tight transform md:-rotate-90 md:whitespace-nowrap select-none drop-shadow-md">
              20%
            </span>
          </motion.div>
        </div>


        <div className="max-w-full md:max-w-[600px] lg:max-w-[700px]">
          
          <h3
            data-aos="fade-right"
            data-aos-delay="300"
            className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl text-zinc-800 font-bold font-heading italic leading-tight"
          >
            First Order Discount!
          </h3>

          <p
            data-aos="fade-up"
            data-aos-delay="450"
            className="text-zinc-600 text-sm sm:text-base md:text-lg my-4 sm:my-6 leading-relaxed"
          >
            Enjoy an exclusive first order discount on our grocery website! Shop
            fresh essentials and save big on your first purchase. Fast delivery
            and quality guaranteed.
          </p>

          <motion.div
            data-aos="zoom-in-up"
            data-aos-delay="600"
            whileTap={{ scale: 0.95 }}
            className="inline-block mt-2"
          >
            <Button content="Get a Discount" />
          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default Discount;