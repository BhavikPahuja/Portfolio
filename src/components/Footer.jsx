import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="py-8 text-center text-gray-400 bg-gray-900/80 animate-fadeIn">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="flex flex-col items-center gap-2"
      >
        <span className="text-lg font-bold animate-bounce">Made with ❤️ by Bhavik Pahuja</span>
        <span className="text-sm animate-pulse">&copy; {new Date().getFullYear()} All rights reserved.</span>
      </motion.div>
    </footer>
  );
}