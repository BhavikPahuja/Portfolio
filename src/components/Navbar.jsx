import { motion } from "framer-motion";
import { FiMenu } from "react-icons/fi";
import { useState } from "react";

const navLinks = [
  { label: "Home", id: "hero" },
  { label: "About", id: "about" },
  { label: "Skills", id: "skills" },
  { label: "Projects", id: "projects" },
  { label: "Contact", id: "contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const handleScroll = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, type: "spring" }}
      className="fixed top-0 right-0 w-full z-50 bg-gradient-to-r from-gray-900/80 to-gray-800/80 backdrop-blur-lg shadow-lg"
    >
      <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-3">
        <span className="text-xl lg:text-2xl font-bold text-white flex gap-x-2 items-center tracking-widest">
          <span
            className={`transition-transform duration-300 lg:hidden ${isOpen ? "rotate-90" : ""} cursor-pointer`}
            onClick={toggleMenu}
          >
            <FiMenu size={28} />
          </span>
          Bhavik
        </span>
        <div className="hidden lg:flex gap-x-8 text-lg text-white font-medium">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleScroll(link.id)}
              className="hover:text-blue-300 transition bg-transparent border-none outline-none cursor-pointer"
            >
              {link.label}
            </button>
          ))}
        </div>
        <div
          className={`${
            isOpen ? "flex" : "hidden"
          } flex-col absolute top-full left-0 w-full bg-gradient-to-r from-gray-900/95 to-gray-800/95 shadow-lg py-4 lg:hidden transition-all`}
        >
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleScroll(link.id)}
              className="py-2 text-base text-white hover:text-blue-300 transition bg-transparent border-none outline-none cursor-pointer"
            >
              {link.label}
            </button>
          ))}
        </div>
      </div>
    </motion.nav>
  );
} 