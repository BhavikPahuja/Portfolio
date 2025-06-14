import { motion } from "framer-motion";
import { FaCode, FaPalette, FaCloud } from "react-icons/fa";

const services = [
  {
    icon: <FaCode className="text-4xl text-blue-400 animate-spin" />,
    title: "Web Development",
    desc: "Modern, scalable, and blazing fast web apps.",
  },
  {
    icon: <FaPalette className="text-4xl text-pink-400 animate-bounce" />,
    title: "UI/UX Design",
    desc: "Pixel-perfect, accessible, and delightful interfaces.",
  },
  {
    icon: <FaCloud className="text-4xl text-indigo-400 animate-pulse" />,
    title: "Cloud Solutions",
    desc: "Deploy, scale, and monitor apps in the cloud.",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 px-4 bg-transparent animate-fadeIn">
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-4xl font-bold mb-10 text-center text-pink-300 animate-bounce"
      >
        Services
      </motion.h2>
      <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-8">
        {services.map((service, i) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 + i * 0.2 }}
            className="bg-white/10 rounded-2xl shadow-xl p-8 flex flex-col items-center hover:scale-105 transition-transform duration-300 animate-slideInUp"
          >
            {service.icon}
            <h3 className="text-xl font-bold text-white mt-4 mb-2 animate-fadeIn">{service.title}</h3>
            <p className="text-gray-200 text-center">{service.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}