import { motion } from "framer-motion";

const images = [
  "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=facearea&w=400&q=80",
  "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=facearea&w=400&q=80",
  "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=facearea&w=400&q=80",
  "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=facearea&w=400&q=80",
  "https://images.unsplash.com/photo-1519985176271-adb1088fa94c?auto=format&fit=facearea&w=400&q=80",
  "https://images.unsplash.com/photo-1502767089025-6572583495b4?auto=format&fit=facearea&w=400&q=80",
];

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
