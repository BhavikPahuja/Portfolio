import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";

export default function Hero() {
  return (
    <section
      className="h-screen bg-gradient-to-br from-black via-gray-900 to-black flex flex-col items-center justify-center text-center px-4 animate-fadeIn"
    >
      <motion.h1 className="text-4xl md:text-6xl font-extrabold mb-4 text-gray-200">
        Bhavik Pahuja
      </motion.h1>
      <motion.p
        className="text-lg md:text-2xl text-gray-400 mb-8 animate-fadeIn"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        <Typewriter
          words={[
            "Full Stack Developer",
            "Innovator",
            "Problem Solver",
            "UI/UX Enthusiast",
            "Tech Explorer",
          ]}
          loop
          cursor
        />
      </motion.p>
      <motion.a
        href="#about"
        className="inline-block px-8 py-3 bg-blue-600 text-white rounded-full shadow hover:bg-blue-700 transition font-semibold text-base md:text-lg animate-pulse"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.8 }}
      >
        Learn More About Me
      </motion.a>
      <motion.div
        className="mt-12 text-gray-400 text-sm animate-bounce"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.7 }}
        transition={{ delay: 2, duration: 1 }}
      >
        ▼ Scroll Down
      </motion.div>
    </section>
  );
}