import { motion } from "framer-motion";

const navLinks = [
  { label: "Home", id: "hero" },
  { label: "About", id: "about" },
  { label: "Skills", id: "skills" },
  { label: "Projects", id: "projects" },
  { label: "Contact", id: "contact" },
];

export default function Navbar() {
  const handleScroll = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
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
        <span className="text-2xl font-bold text-white tracking-widest">Bhavik</span>
        <div className="space-x-8 text-lg text-white font-medium">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleScroll(link.id)}
              className="hover:text-purple-300 transition bg-transparent border-none outline-none cursor-pointer"
            >
              {link.label}
            </button>
          ))}
        </div>
      </div>
    </motion.nav>
  );
}