import { motion } from "framer-motion";
import Button from "../button/Button";
import FreshFruits from "../../assets/fresh-fruits.webp";

const Discount = () => {
  return (
    <section 
      className="bg-zinc-100 bg-no-repeat bg-right bg-cover md:bg-contain overflow-hidden relative"
      style={{ backgroundImage: `url(${FreshFruits})` }}
    >
      {/* الطبقة الشفافة للموبايل لتوضيح النص فوق الخلفية */}
      <div className="bg-zinc-100/90 md:bg-transparent w-full h-full py-12 sm:py-16 md:py-20">
        <div className="max-w-[1400px] mx-auto px-5 sm:px-10 flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-12">
          
          {/* نسبة الخصم 20% */}
          <motion.div
            initial={{ opacity: 0, scale: 0.6, rotate: -15 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.4 }}
            className="flex justify-start md:justify-center items-center"
          >
            <span className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl text-orange-500 font-extrabold tracking-tight transform md:-rotate-90 md:whitespace-nowrap select-none">
              20%
            </span>
          </motion.div>

          {/* محتوى النص والأزرار */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
            viewport={{ once: true, amount: 0.3 }}
            className="max-w-full md:max-w-[600px] lg:max-w-[700px] z-10"
          >
            <h3 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl text-zinc-800 font-bold font-heading italic leading-tight">
              First Order Discount!
            </h3>
            <p className="text-zinc-600 text-sm sm:text-base md:text-lg my-4 sm:my-6 leading-relaxed">
              Enjoy an exclusive first order discount on our grocery website! Shop
              fresh essentials and save big on your first purchase. Fast delivery
              and quality guaranteed.
            </p>
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="mt-2"
            >
              <Button content="Get a Discount" />
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Discount;