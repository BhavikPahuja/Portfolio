import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Alex Doe",
    role: "Product Manager",
    quote:
      "Bhavik's work is top-notch. He delivers on time and always exceeds expectations!",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Jane Smith",
    role: "Lead Designer",
    quote: "Creative, reliable, and a great team player. Highly recommended!",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
  },
];

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="py-24 px-4 bg-transparent animate-fadeIn"
    >
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-4xl font-bold mb-10 text-center text-yellow-300 animate-bounce"
      >
        Testimonials
      </motion.h2>
      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
        {testimonials.map((t, i) => (
          <motion.div
            key={t.name}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 + i * 0.2 }}
            className="bg-white/10 rounded-2xl shadow-xl p-8 flex flex-col items-center hover:scale-105 transition-transform duration-300 animate-slideInUp"
          >
            <img
              src={t.avatar}
              alt={t.name}
              className="w-20 h-20 rounded-full mb-4 shadow-lg border-4 border-blue-100 animate-fadeIn"
            />
            <blockquote className="italic text-gray-200 mb-4 animate-fadeIn">
              "{t.quote}"
            </blockquote>
            <div className="font-bold text-white">{t.name}</div>
            <div className="text-blue-300 text-sm">{t.role}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
