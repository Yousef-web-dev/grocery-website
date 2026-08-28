import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import { motion } from "framer-motion";

const Footer = () => {

  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  };

  return (
    <motion.footer 
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
      className="bg-zinc-900 py-16 sm:py-20 border-t border-zinc-800"
    >
      <div className="max-w-[1400px] mx-auto px-5 sm:px-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
        

        <motion.div variants={itemVariants} className="flex flex-col justify-between">
          <div>
            <a href="#" className="text-2xl sm:text-3xl font-bold font-heading italic inline-block text-white">
              Gr<span className="text-orange-500 uppercase">O</span>cify
            </a>

            <p className="text-zinc-400 mt-4 text-sm sm:text-base leading-relaxed max-w-[320px]">
              Bred for a high content of beneficial substances. Our products are
              all fresh and healthy.
            </p>
          </div>

          <p className="text-zinc-500 text-sm mt-6 border-t border-zinc-800 pt-6">
            {new Date().getFullYear()} &copy; All rights reserved.
          </p>
        </motion.div>


        <motion.div variants={itemVariants}>
          <h5 className="text-white text-xl sm:text-2xl font-bold mb-4 sm:mb-6">Company</h5>
          <ul className="space-y-3 sm:space-y-4">
            <li>
              <a href="#" className="hover:text-orange-400 text-zinc-400 transition-all duration-200 inline-block hover:translate-x-1.5">
                About
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-orange-400 text-zinc-400 transition-all duration-200 inline-block hover:translate-x-1.5">
                FAQ's
              </a>
            </li>
          </ul>
        </motion.div>


        <motion.div variants={itemVariants}>
          <h5 className="text-white text-xl sm:text-2xl font-bold mb-4 sm:mb-6">Support</h5>
          <ul className="space-y-3 sm:space-y-4">
            <li>
              <a href="#" className="hover:text-orange-400 text-zinc-400 transition-all duration-200 inline-block hover:translate-x-1.5">
                Support Center
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-orange-400 text-zinc-400 transition-all duration-200 inline-block hover:translate-x-1.5">
                Feedback
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-orange-400 text-zinc-400 transition-all duration-200 inline-block hover:translate-x-1.5">
                Contact Us
              </a>
            </li>
          </ul>
        </motion.div>


        <motion.div variants={itemVariants}>
          <h5 className="text-white text-xl sm:text-2xl font-bold mb-4 sm:mb-6">Stay Connected</h5>
          <p className="text-zinc-600 text-sm sm:text-base leading-relaxed">
            Questions or Feedback? <br /> We'd love to hear from you.
          </p>

          <form onSubmit={(e) => e.preventDefault()} className="flex items-center gap-2 bg-zinc-800 p-1.5 rounded-xl shadow-sm border border-zinc-700 mt-6 focus-within:border-orange-500 transition-colors">
            <input 
              className="flex-1 px-3 py-2 text-sm sm:text-base bg-transparent focus:outline-none text-white placeholder:text-zinc-500" 
              type="email" 
              required
              autoComplete="off" 
              placeholder="Email Address"
            />
            <button 
              type="submit"
              className="bg-gradient-to-b from-orange-400 to-orange-500 hover:from-orange-500 hover:to-orange-600 p-2.5 rounded-lg text-white text-xl cursor-pointer transition-all duration-200 active:scale-95 shadow-md hover:shadow-lg shrink-0"
              aria-label="Subscribe"
            >
              <IoIosArrowForward />
            </button>
          </form>
        </motion.div>

      </div>
    </motion.footer>
  );
};

export default Footer;