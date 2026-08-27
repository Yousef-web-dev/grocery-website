import React from "react";
import { motion } from "framer-motion";
import Heading from "../heading/Heading";
import { FaHeart, FaLeaf, FaSeedling, FaShieldAlt } from "react-icons/fa";
import Basket from "../../assets/basket-full-vegetables.webp";

const Values = () => {
  const value = [
    {
      id: 1,
      title: "Trust",
      para: "Building lasting relationships by consistently delivering premium quality and complete transparency.",
      icon: <FaHeart />,
    },
    {
      id: 2,
      title: "Always Fresh",
      para: "Handpicked daily from trusted local farms to guarantee maximum crispness and peak taste.",
      icon: <FaLeaf />,
    },
    {
      id: 3,
      title: "Food Safety",
      para: "Strict quality checks and hygienic standards to ensure every item reaches your table safely.",
      icon: <FaShieldAlt />,
    },
    {
      id: 4,
      title: "100% Organic",
      para: "Pure, naturally grown produce without any harmful chemicals, pesticides, or artificial additives.",
      icon: <FaSeedling />,
    },
  ];

  // اليسار: يدخل من الشمال مع غباشة خفيفة وحركة Hover للأيقونة
  const leftValues = value.slice(0, 2).map((item, index) => (
    <motion.div
      key={item.id}
      initial={{ opacity: 0, x: -60, filter: "blur(6px)" }}
      whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
      transition={{ duration: 0.7, delay: index * 0.2, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.3 }}
      whileHover={{ x: -6 }}
      className="flex md:flex-row-reverse items-center gap-7 group cursor-pointer"
    >
      <div>
        <motion.span
          whileHover={{ scale: 1.15, rotate: 10 }}
          transition={{ type: "spring", stiffness: 400 }}
          className="flex w-15 h-15 rounded-full justify-center items-center text-3xl text-white bg-gradient-to-b from-orange-400 to-orange-500 shadow-md group-hover:shadow-orange-400/50 transition-shadow"
        >
          {item.icon}
        </motion.span>
      </div>

      <div className="md:text-right">
        <h3 className="text-zinc-800 text-3xl font-bold group-hover:text-orange-500 transition-colors">
          {item.title}
        </h3>
        <p className="text-zinc-600 mt-2">{item.para}</p>
      </div>
    </motion.div>
  ));

  // اليمين: يدخل من اليمين مع غباشة خفيفة وحركة Hover للأيقونة
  const rightValues = value.slice(2).map((item, index) => (
    <motion.div
      key={item.id}
      initial={{ opacity: 0, x: 60, filter: "blur(6px)" }}
      whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
      transition={{ duration: 0.7, delay: index * 0.2, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.3 }}
      whileHover={{ x: 6 }}
      className="flex items-center gap-7 group cursor-pointer"
    >
      <div>
        <motion.span
          whileHover={{ scale: 1.15, rotate: -10 }}
          transition={{ type: "spring", stiffness: 400 }}
          className="flex w-15 h-15 rounded-full justify-center items-center text-3xl text-white bg-gradient-to-b from-orange-400 to-orange-500 shadow-md group-hover:shadow-orange-400/50 transition-shadow"
        >
          {item.icon}
        </motion.span>
      </div>

      <div>
        <h3 className="text-zinc-800 text-3xl font-bold group-hover:text-orange-500 transition-colors">
          {item.title}
        </h3>
        <p className="text-zinc-600 mt-2">{item.para}</p>
      </div>
    </motion.div>
  ));

  return (
    <section className="overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-10 py-20">
        <Heading highlight="Our" heading="values" />

        <div className="flex md:flex-row flex-col gap-15 md:gap-5 mt-15 items-center">
          {/* left values */}
          <div className="md:min-h-100 gap-15 flex flex-col justify-between flex-1">
            {leftValues}
          </div>

          {/* center animated image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.7 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="w-1/2 hidden md:flex justify-center items-center relative"
          >
            {/* Glow effect behind basket */}
            <div className="absolute w-[70%] h-[70%] bg-orange-300/30 blur-3xl rounded-full -z-10 animate-pulse" />

            <motion.img
              src={Basket}
              alt="Fresh Vegetables Basket"
              className="object-contain drop-shadow-xl"
              animate={{ y: [0, -12, 0] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </motion.div>

          {/* right values */}
          <div className="md:min-h-100 gap-15 flex flex-col justify-between flex-1">
            {rightValues}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Values;
