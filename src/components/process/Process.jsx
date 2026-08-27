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

const Process = () => {
  const steps = [
    {
      id: 1,
      number: <TbCircleNumber1Filled />,
      title: "Sourcing",
      para: "It is a long established fact that a reader",
      icon: <PiPlant />,
    },
    {
      id: 2,
      number: <TbCircleNumber2Filled />,
      title: "Manufacturing",
      para: "It is a long established fact that a reader",
      icon: <PiFactory />,
    },
    {
      id: 3,
      number: <TbCircleNumber3Filled />,
      title: "Quality Control",
      para: "It is a long established fact that a reader",
      icon: <SlBadge />,
    },
    {
      id: 4,
      number: <TbCircleNumber4Filled />,
      title: "Logistics",
      para: "It is a long established fact that a reader",
      icon: <BsTruck />,
    },
  ];

  // Variants لأنيميشن ظهور الحاوية والخطوات
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.25,
      },
    },
  };

  const stepVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const renderSteps = steps.map((item) => (
    <motion.div
      key={item.id}
      variants={stepVariants}
      className={`w-full md:w-[calc(50%-2rem)] lg:w-[calc(25%-2rem)] flex flex-col items-center ${
        item.id % 2 === 0 ? "md:-translate-y-10" : ""
      }`}
    >
      {/* حاوية الرقم + الـ Dashed Outline المتحرك */}
      <div className="relative flex justify-center items-center w-24 h-24">
        {/* الـ Border المنقط اللي بيلف باستمرار */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 rounded-full border-2 border-dashed border-zinc-800"
        />

        {/* دائرة الرقم الرئيسية */}
        <span className="flex justify-center items-center text-4xl text-white w-20 h-20 bg-zinc-800 rounded-full shadow-lg z-10">
          {item.number}
        </span>
      </div>

      {/* محتوى الأيقونة والوصف */}
      <motion.div 
        whileHover={{ scale: 1.03 }}
        transition={{ type: "spring", stiffness: 300 }}
        className="flex items-center gap-x-4 mt-8 bg-white p-5 rounded-2xl border border-zinc-100 shadow-sm w-full"
      >
        <span className="flex justify-center items-center text-3xl bg-gradient-to-b from-orange-400 to-orange-500 text-white w-14 h-14 rounded-full shrink-0 shadow-md">
          {item.icon}
        </span>

        <div className="flex-1">
          <h4 className="text-zinc-800 text-xl font-bold">{item.title}</h4>
          <p className="text-zinc-500 text-sm mt-1 leading-relaxed">{item.para}</p>
        </div>
      </motion.div>
    </motion.div>
  ));

  return (
    <section className="overflow-hidden bg-zinc-50/50">
      <div className="max-w-[1400px] mx-auto px-5 sm:px-10 py-16 sm:py-24">
        <div className="w-fit">
          <Heading highlight="Our" heading="Process" />
        </div>

        {/* الخطوات المتتابعة */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="flex flex-wrap gap-8 justify-center items-center mt-16 sm:mt-24"
        >
          {renderSteps}
        </motion.div>
      </div>
    </section>
  );
};

export default Process;