import { motion } from "framer-motion";
import {
  FaCode,
  FaPalette,
  FaMobile,
  FaServer,
  FaDatabase,
  FaRocket,
} from "react-icons/fa";

const services = [
  {
    icon: <FaCode />,
    title: "Frontend Development",
    description:
      "Modern, responsive web applications using React, Next.js, and cutting-edge frameworks.",
    features: [
      "React & Next.js",
      "Responsive Design",
      "Performance Optimization",
    ],
  },
  {
    icon: <FaServer />,
    title: "Backend Development",
    description:
      "Scalable server-side solutions with Node.js, Express, and RESTful APIs.",
    features: ["Node.js & Express", "RESTful APIs", "Authentication"],
  },
  {
    icon: <FaDatabase />,
    title: "Database Design",
    description:
      "Efficient database architecture and optimization for web applications.",
    features: ["MongoDB", "MySQL", "Database Optimization"],
  },
  {
    icon: <FaPalette />,
    title: "UI/UX Design",
    description:
      "Beautiful, intuitive user interfaces that provide exceptional user experiences.",
    features: ["Modern Design", "User Research", "Prototyping"],
  },
  {
    icon: <FaMobile />,
    title: "Mobile Development",
    description:
      "Cross-platform mobile applications with React Native and modern tools.",
    features: ["React Native", "Cross-platform", "App Store Deployment"],
  },
  {
    icon: <FaRocket />,
    title: "Web Optimization",
    description:
      "Performance optimization, SEO, and deployment strategies for web applications.",
    features: ["Performance Tuning", "SEO Optimization", "Cloud Deployment"],
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Services</h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto mb-4"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            I offer a wide range of development services to help bring your
            ideas to life
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="bg-gray-800/30 backdrop-blur-lg rounded-xl p-8 hover:bg-gray-800/50 transition-all duration-300 hover:scale-105 border border-gray-700/30 group"
            >
              <div className="text-4xl text-blue-500 mb-6 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-4">
                {service.title}
              </h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                {service.description}
              </p>
              <ul className="space-y-2">
                {service.features.map((feature, index) => (
                  <li
                    key={index}
                    className="text-gray-400 text-sm flex items-center"
                  >
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
