import { useEffect } from "react";
import { motion } from "framer-motion";
import Heading from "../heading/Heading";
import {
  TbCircleNumber1Filled,
  TbCircleNumber2Filled,
  TbCircleNumber3Filled,
  TbCircleNumber4Filled,
} from "react-icons/tb";
import { PiFactory, PiPlant } from "react-icons/pi";
import { SlBadge } from "react-icons/sl";
import { BsTruck } from "react-icons/bs";
import AOS from "aos";
import "aos/dist/aos.css";

const Process = () => {
  useEffect(() => {
    AOS.init({
      duration: 900,
      once: false,
      mirror: true,
      easing: "ease-out-cubic",
    });
    AOS.refresh();
  }, []);

  const steps = [
    {
      id: 1,
      number: <TbCircleNumber1Filled />,
      title: "Sourcing",
      para: "It is a long established fact that a reader",
      icon: <PiPlant />,
      animation: "fade-up",
    },
    {
      id: 2,
      number: <TbCircleNumber2Filled />,
      title: "Manufacturing",
      para: "It is a long established fact that a reader",
      icon: <PiFactory />,
      animation: "fade-down",
    },
    {
      id: 3,
      number: <TbCircleNumber3Filled />,
      title: "Quality Control",
      para: "It is a long established fact that a reader",
      icon: <SlBadge />,
      animation: "fade-up",
    },
    {
      id: 4,
      number: <TbCircleNumber4Filled />,
      title: "Logistics",
      para: "It is a long established fact that a reader",
      icon: <BsTruck />,
      animation: "fade-down",
    },
  ];

  const renderSteps = steps.map((item, index) => (
    <div
      key={item.id}
      data-aos={item.animation}
      data-aos-delay={index * 200}
      data-aos-duration="900"
      className={`w-full md:w-[calc(50%-2rem)] lg:w-[calc(25%-2rem)] flex flex-col items-center ${
        item.id % 2 === 0 ? "md:-translate-y-10" : ""
      }`}
    >
      {/* دائرة الرقم والدوران */}
      <div className="relative flex justify-center items-center w-24 h-24">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 rounded-full border-2 border-dashed border-zinc-600"
        />

        {/* دائرة الرقم الرئيسية */}
        <span className="flex justify-center items-center text-4xl text-zinc-900 w-20 h-20 bg-orange-500 rounded-full shadow-lg shadow-orange-500/20 z-10">
          {item.number}
        </span>
      </div>

      {/* محتوى الأيقونة والوصف */}
      <motion.div
        whileHover={{ scale: 1.03 }}
        transition={{ type: "spring", stiffness: 300 }}
        className="flex items-center gap-x-4 mt-8 bg-zinc-800 p-5 rounded-2xl border border-zinc-700 shadow-sm w-full"
      >
        <span className="flex justify-center items-center text-3xl bg-gradient-to-b from-orange-400 to-orange-500 text-white w-14 h-14 rounded-full shrink-0 shadow-md">
          {item.icon}
        </span>

        <div className="flex-1">
          <h4 className="text-white text-xl font-bold">{item.title}</h4>
          <p className="text-zinc-400 text-sm mt-1 leading-relaxed">{item.para}</p>
        </div>
      </motion.div>
    </div>
  ));

  return (
    <section className="overflow-hidden bg-zinc-900">
      <div className="max-w-[1400px] mx-auto px-5 sm:px-10 py-16 sm:py-24">
        <div data-aos="fade-down" data-aos-duration="800" className="w-fit">
          <Heading highlight="Our" heading="Process" dark />
        </div>

        <div className="flex flex-wrap gap-8 justify-center items-center mt-16 sm:mt-24">
          {renderSteps}
        </div>
      </div>
    </section>
  );
};

export default Process;