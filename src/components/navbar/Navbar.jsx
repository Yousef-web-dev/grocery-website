import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { GoHeartFill } from "react-icons/go";
import { HiShoppingBag } from "react-icons/hi2";
import { IoSearch } from "react-icons/io5";
import { TbMenu2, TbMenu3 } from "react-icons/tb";
import { Link } from "react-router-dom";
import { useCart } from "../cartcontext/CartContext";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const { cart, favorites } = useCart();

  const totalCartItems = cart?.reduce((acc, item) => acc + item.quantity, 0) || 0;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "#about" },
    { name: "Process", href: "#process" },
    { name: "Contact Us", href: "#contact" },
  ];

  return (
    <motion.header
      animate={{
        boxShadow: isScrolled
          ? "0 4px 25px rgba(0,0,0,0.1)"
          : "0 4px 25px rgba(0,0,0,0)",
      }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="bg-white fixed top-0 right-0 left-0 z-50"
    >
      <nav className="flex justify-between max-w-[1400px] mx-auto h-[80px] items-center px-4 sm:px-10 relative">
        {/* Logo */}
        <Link
          to="/"
          className="text-2xl sm:text-3xl font-bold font-heading italic"
        >
          Gr<span className="text-orange-500 uppercase">O</span>cify
        </Link>

        {/* Nav Links */}
        <ul className="md:flex hidden items-center gap-x-8 lg:gap-x-12">
          {navLinks.map((link, index) => (
            <li key={index}>
              <a
                href={link.href}
                className="font-semibold tracking-wider text-zinc-800 hover:text-orange-500 transition-colors"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Nav Action */}
        <div className="flex items-center gap-x-3 sm:gap-x-5">
          {/* Search */}
          <div className="hidden md:flex p-1 border-2 border-orange-500 rounded-full items-center">
            <input
              className="h-[38px] px-3 focus:outline-none w-36 lg:w-48 text-sm"
              type="text"
              placeholder="Search..."
              autoCapitalize="off"
              id="search"
            />
            <label
              htmlFor="search"
              className="bg-gradient-to-b from-orange-400 to-orange-500 text-white w-9 h-9 flex justify-center items-center rounded-full text-xl cursor-pointer"
            >
              <IoSearch />
            </label>
          </div>

          {/* Wishlist Link */}
          <Link
            to="/wishlist"
            className="text-zinc-800 hover:text-orange-500 text-2xl transition-colors relative flex items-center justify-center"
          >
            <GoHeartFill />
            {favorites?.length > 0 && (
              <motion.span
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="absolute -top-2 -right-2 bg-red-500 text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold"
              >
                {favorites.length}
              </motion.span>
            )}
          </Link>

          {/* Cart Link */}
          <Link
            to="/cart"
            className="text-zinc-800 text-2xl hover:text-orange-500 transition-colors relative flex items-center justify-center"
          >
            <HiShoppingBag />
            {totalCartItems > 0 && (
              <motion.span
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="absolute -top-2 -right-2 bg-orange-500 text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold"
              >
                {totalCartItems}
              </motion.span>
            )}
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="text-zinc-800 hover:text-orange-500 text-3xl md:hidden focus:outline-none cursor-pointer"
          >
            {showMenu ? <TbMenu3 /> : <TbMenu2 />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {showMenu && (
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.96 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="fixed md:hidden top-24 inset-x-0 mx-auto w-[85%] max-w-[360px] z-50 bg-white/90 backdrop-blur-lg border border-orange-200/40 shadow-xl px-8 py-8 rounded-2xl"
            >
              <ul className="flex flex-col gap-y-5 items-center">
                {navLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      onClick={() => setShowMenu(false)}
                      className="font-semibold tracking-wider text-zinc-800 hover:text-orange-500 text-lg transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
};

export default Navbar;