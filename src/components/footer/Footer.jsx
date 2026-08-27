import React, { useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { motion } from "framer-motion";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle");

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const response = await fetch("https://formspree.io/f/xdeonlay", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        setStatus("success");
        setEmail("");
        setTimeout(() => setStatus("idle"), 5000);
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }
  };

  return (
    <motion.footer
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
      className="bg-zinc-100 py-16 sm:py-20 border-t border-zinc-200"
    >
      <div className="max-w-[1400px] mx-auto px-5 sm:px-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
        {/* العمود الأول */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col justify-between"
        >
          <div>
            <motion.a
              href="#"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400 }}
              className="text-2xl sm:text-3xl font-bold font-heading italic"
            >
              Gr<span className="text-orange-500 uppercase">O</span>cify
            </motion.a>

            <p className="text-zinc-600 mt-4 text-sm sm:text-base leading-relaxed max-w-[320px]">
              Bred for a high content of beneficial substances. Our products are
              all fresh and healthy.
            </p>
          </div>

          <p className="text-zinc-500 text-sm mt-6">
            {new Date().getFullYear()} &copy; All rights reserved.
          </p>
        </motion.div>

        {/* العمود الثاني */}
        <motion.div variants={itemVariants}>
          <h5 className="text-zinc-800 text-xl sm:text-2xl font-bold mb-4 sm:mb-6">
            Company
          </h5>
          <ul className="space-y-3 sm:space-y-4">
            <li>
              <a
                href="#about"
                className="hover:text-orange-500 text-zinc-600 transition-all duration-200 inline-block hover:translate-x-1.5"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-orange-500 text-zinc-600 transition-all duration-200 inline-block hover:translate-x-1.5"
              >
                FAQ's
              </a>
            </li>
          </ul>
        </motion.div>

        {/* العمود الثالث */}
        <motion.div variants={itemVariants}>
          <h5 className="text-zinc-800 text-xl sm:text-2xl font-bold mb-4 sm:mb-6">
            Support
          </h5>
          <ul className="space-y-3 sm:space-y-4">
            <li>
              <a
                href="#"
                className="hover:text-orange-500 text-zinc-600 transition-all duration-200 inline-block hover:translate-x-1.5"
              >
                Support Center
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-orange-500 text-zinc-600 transition-all duration-200 inline-block hover:translate-x-1.5"
              >
                Feedback
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="hover:text-orange-500 text-zinc-600 transition-all duration-200 inline-block hover:translate-x-1.5"
              >
                Contact Us
              </a>
            </li>
          </ul>
        </motion.div>

        {/* العمود الرابع: النيوزليتر */}
        <motion.div variants={itemVariants}>
          <h5 className="text-zinc-800 text-xl sm:text-2xl font-bold mb-4 sm:mb-6">
            Stay Connected
          </h5>
          <p className="text-zinc-600 text-sm sm:text-base leading-relaxed">
            Questions or Feedback? <br /> We'd love to hear from you.
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col gap-2 mt-6">
            <div className="flex items-center gap-2 bg-white p-1.5 rounded-xl shadow-sm border border-zinc-200 focus-within:border-orange-500 transition-colors">
              <input
                className="flex-1 px-3 py-2 text-sm sm:text-base bg-transparent focus:outline-none text-zinc-800 placeholder:text-zinc-400"
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                disabled={status === "loading"}
                autoComplete="off"
                placeholder="Email Address"
              />
              <button
                type="submit"
                disabled={status === "loading"}
                className="bg-gradient-to-b from-orange-400 to-orange-500 hover:from-orange-500 hover:to-orange-600 p-2.5 rounded-lg text-white text-xl cursor-pointer transition-all duration-200 active:scale-95 shadow-md hover:shadow-lg shrink-0 disabled:opacity-50"
                aria-label="Subscribe"
              >
                <IoIosArrowForward />
              </button>
            </div>

            {/* رسائل التنبيه للمستخدم */}
            {status === "success" && (
              <p className="text-emerald-600 text-xs font-medium mt-1">
                Thank you! Your email has been sent successfully.
              </p>
            )}
            {status === "error" && (
              <p className="text-red-500 text-xs font-medium mt-1">
                Something went wrong. Please try again later.
              </p>
            )}
          </form>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;
