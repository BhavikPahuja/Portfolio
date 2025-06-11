import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";

export default function Hero() {
  return (
    <section
      className="h-screen bg-cover bg-center text-white flex flex-col items-center justify-center bg-gradient-to-br from-black via-gray-900 to-black text-white"
    >
      <motion.h1
        className="text-6xl font-bold mb-4"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Bhavik Pahuja
      </motion.h1>
      <motion.p
        className="text-2xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        <Typewriter
          words={["Full Stack Developer", "Innovator", "Problem Solver"]}
          loop
          cursor
        />
      </motion.p>
      <motion.div className="mt-10 text-sm opacity-70 animate-bounce">
        ▼ Scroll Down
      </motion.div>
    </section>
  );
}
