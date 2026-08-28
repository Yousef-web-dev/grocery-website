import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { GoHeartFill } from "react-icons/go";
import { HiShoppingBag } from "react-icons/hi2";
import { IoSearch } from "react-icons/io5";
import { TbMenu2, TbMenu3 } from "react-icons/tb";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../cartcontext/CartContext";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const navigate = useNavigate();
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

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    const query = searchQuery.trim().toLowerCase();

    if (!query) return;

    if (query.includes("seafood") || query.includes("meat")) {
      navigate("/seafood");
    } else if (query.includes("fruit") || query.includes("veggies") || query.includes("vegetables")) {
      navigate("/fruits");
    } else if (query.includes("dairy") || query.includes("milk") || query.includes("cheese")) {
      navigate("/dairy");
    } else {
      navigate(`/allproducts?search=${encodeURIComponent(query)}`);
    }

    setSearchQuery("");
    setShowMenu(false);
  };

  const navLinks = [
    { name: "Home", path: "/", isHash: false },
    { name: "Shop", path: "#shop", isHash: true },
    { name: "Process", path: "#process", isHash: true },
    { name: "Products", path: "#product", isHash: true },
    { name: "Contact Us", path: "#contact", isHash: true },
  ];

  return (
    <motion.header
      animate={{
        boxShadow: isScrolled
          ? "0 4px 25px rgba(0,0,0,0.1)"
          : "0 4px 25px rgba(0,0,0,0)",
        backgroundColor: isScrolled ? "rgba(255,255,255,0.95)" : "rgba(255,255,255,0.75)",
      }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="backdrop-blur-md fixed top-0 right-0 left-0 z-50"
    >
      <nav className="flex justify-between max-w-[1400px] mx-auto h-[80px] items-center px-4 sm:px-10 relative">
        {/* Logo */}
        <motion.div whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 400 }}>
          <Link
            to="/"
            className="text-2xl sm:text-3xl font-bold font-heading italic"
          >
            Gr<span className="text-orange-500 uppercase">O</span>cify
          </Link>
        </motion.div>

        {/* Nav Links */}
        <ul className="md:flex hidden items-center gap-x-8 lg:gap-x-12">
          {navLinks.map((link, index) => (
            <li key={index} className="relative group">
              {link.isHash ? (
                <a
                  href={link.path}
                  className="font-semibold tracking-wider text-zinc-800 group-hover:text-orange-500 transition-colors"
                >
                  {link.name}
                </a>
              ) : (
                <Link
                  to={link.path}
                  className="font-semibold tracking-wider text-zinc-800 group-hover:text-orange-500 transition-colors"
                >
                  {link.name}
                </Link>
              )}
              <span className="absolute -bottom-1.5 left-0 w-0 group-hover:w-full h-0.5 bg-orange-500 rounded-full transition-all duration-300" />
            </li>
          ))}
        </ul>

        {/* Nav Action */}
        <div className="flex items-center gap-x-3 sm:gap-x-5">
          {/* Search Form */}
          <form 
            onSubmit={handleSearchSubmit} 
            className="hidden md:flex p-1 border-2 border-orange-500 rounded-full items-center"
          >
            <input
              className="h-[38px] px-3 focus:outline-none w-36 lg:w-48 text-sm bg-transparent"
              type="text"
              placeholder="Search..."
              autoCapitalize="off"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button
              type="submit"
              className="bg-gradient-to-b from-orange-400 to-orange-500 text-white w-9 h-9 flex justify-center items-center rounded-full text-xl cursor-pointer hover:opacity-90 transition-opacity"
            >
              <IoSearch />
            </button>
          </form>

          {/* Wishlist Link */}
          <motion.div whileHover={{ scale: 1.15 }} whileTap={{ scale: 0.9 }}>
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
          </motion.div>

          {/* Cart Link */}
          <motion.div whileHover={{ scale: 1.15 }} whileTap={{ scale: 0.9 }}>
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
          </motion.div>

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
              {/* Mobile Search Input */}
              <form onSubmit={handleSearchSubmit} className="mb-6 flex p-1 border-2 border-orange-500 rounded-full items-center">
                <input
                  className="h-[36px] px-3 focus:outline-none w-full text-sm bg-transparent"
                  type="text"
                  placeholder="Search..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button type="submit" className="bg-orange-500 text-white w-8 h-8 flex justify-center items-center rounded-full shrink-0">
                  <IoSearch />
                </button>
              </form>

              <ul className="flex flex-col gap-y-5 items-center">
                {navLinks.map((link, index) => (
                  <li key={index}>
                    {link.isHash ? (
                      <a
                        href={link.path}
                        onClick={() => setShowMenu(false)}
                        className="font-semibold tracking-wider text-zinc-800 hover:text-orange-500 text-lg transition-colors"
                      >
                        {link.name}
                      </a>
                    ) : (
                      <Link
                        to={link.path}
                        onClick={() => setShowMenu(false)}
                        className="font-semibold tracking-wider text-zinc-800 hover:text-orange-500 text-lg transition-colors"
                      >
                        {link.name}
                      </Link>
                    )}
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