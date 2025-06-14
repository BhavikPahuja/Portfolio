import { motion } from "framer-motion";
import AyushHome from "../media/AyushHome.png";
import AyushPage from "../media/AyushPage.png";
import Codefusion from "../media/codefusion.jpg";
import Hackwars from "../media/hackwars.jpg";

const images = [AyushHome, AyushPage, Codefusion, Hackwars];

export default function Gallery() {
  return (
    <section id="gallery" className="py-24 px-4 bg-transparent animate-fadeIn">
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-4xl font-bold mb-10 text-center text-indigo-300 animate-bounce"
      >
        Gallery
      </motion.h2>
      <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-3 gap-6">
        {images.map((img, i) => (
          <motion.div
            key={img}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 + i * 0.1 }}
            className="rounded-xl overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300 animate-fadeIn"
          >
            <img src={img} alt="Gallery" className="w-full h-48 object-cover" />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
