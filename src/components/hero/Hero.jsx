import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import Grocery from "../../assets/Grocery.webp";
import Button from "../button/Button";

const Hero = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      mirror: true,
      easing: "ease-out-back",
    });

    AOS.refresh();
  }, []);

  return (
    <section className="overflow-hidden relative bg-gradient-to-br from-zinc-200 via-zinc-100 to-orange-50">
      {/* Background Glows */}
      <div className="absolute -top-32 -right-32 w-[550px] h-[550px] bg-orange-300/50 blur-[110px] rounded-full -z-10" />
      <div className="absolute bottom-0 -left-32 w-[450px] h-[450px] bg-orange-200/60 blur-[110px] rounded-full -z-10" />
      <div className="absolute inset-0 bg-gradient-to-t from-zinc-300/30 to-transparent -z-10" />

      <div className="min-h-screen max-w-[1400px] mx-auto px-4 sm:px-10 flex items-center pt-[100px] pb-12 md:pt-[120px] md:flex-row flex-col justify-between gap-y-10">
        {/* Left Content Side */}
        <div className="flex-1 text-center md:text-left">
          {/* Badge */}
          <div data-aos="zoom-in-down" data-aos-delay="100">
            <span className="inline-block bg-orange-100 text-orange-500 text-sm sm:text-base md:text-lg px-4 py-2 rounded-full font-medium">
              Export Best Quality...
            </span>
          </div>

          {/* Title */}
          <h1
            data-aos="fade-down-right"
            data-aos-delay="300"
            data-aos-duration="1100"
            className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mt-4 leading-tight sm:leading-tight md:leading-tight"
          >
            Tasty Organic <span className="text-orange-500">Fruits</span> &{" "}
            <span className="text-orange-500">Veggies</span>
            <br className="hidden sm:block" /> In Your City
          </h1>

          {/* Paragraph */}
          <p
            data-aos="fade-up-right"
            data-aos-delay="500"
            data-aos-duration="1000"
            className="text-zinc-600 text-base sm:text-lg max-w-[530px] mt-4 md:mt-8 mb-6 mx-auto md:mx-0"
          >
            Bred for high content of beneficial Our products are all fresh and
            healthy
          </p>

          {/* Button (تم تعديل الأنيميشن لـ fade-up لضمان الظهور) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button content="Shop Now" />
          </motion.div>
        </div>

        {/* Right Image Side */}
        <div
          data-aos="zoom-in-left"
          data-aos-delay="400"
          data-aos-duration="1200"
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
        </div>
      </div>
    </section>
  );
};

export default Hero;
