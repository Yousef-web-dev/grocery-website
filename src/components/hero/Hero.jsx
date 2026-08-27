import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import Grocery from "../../assets/Grocery.webp";
import Button from "../button/Button";

const Hero = () => {
  // variants لتنسيق ظهور النصوص والزرار بالتتابع
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.18, // الفارق الزمني بين ظهور كل عنصر والتالي
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 100 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section className="overflow-hidden">
      <div className="min-h-screen max-w-[1400px] mx-auto px-4 sm:px-10 flex items-center pt-[100px] pb-12 md:pt-[120px] md:flex-row flex-col justify-between gap-y-10">
        {/* hero content (Animated Left Side) */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex-1 text-center md:text-left"
        >
          <motion.span
            variants={itemVariants}
            className="inline-block bg-orange-100 text-orange-500 text-sm sm:text-base md:text-lg px-4 py-2 rounded-full font-medium"
          >
            Export Best Quality...
          </motion.span>

          <motion.h1
            variants={itemVariants}
            className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mt-4 leading-tight sm:leading-tight md:leading-tight"
          >
            Tasty Organic <span className="text-orange-500">Fruits</span> &{" "}
            <span className="text-orange-500">Veggies</span>
            <br className="hidden sm:block" /> In Your City
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-zinc-600 text-base sm:text-lg max-w-[530px] mt-4 md:mt-8 mb-6 mx-auto md:mx-0"
          >
            Bred for high content of beneficial Our products are all fresh and
            healthy
          </motion.p>

          <motion.div variants={itemVariants}>
            <Button content="Shop Now" />
          </motion.div>
        </motion.div>

        {/* hero img (Animated Right Side with Tilt) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85, x: 40 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="flex-1 flex justify-center items-center w-full"
        >
          <Tilt
            tiltMaxAngleX={8}
            tiltMaxAngleY={8}
            perspective={1000}
            transitionSpeed={1000}
            className="w-full max-w-[600px]"
          >
            <motion.img
              src={Grocery}
              alt="Fresh Vegetables Basket"
              className="w-full drop-shadow-2xl object-contain"
              animate={{ y: [0, -12, 0] }}
              transition={{
                duration: 3.8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </Tilt>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
