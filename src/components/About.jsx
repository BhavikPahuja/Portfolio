import { motion } from "framer-motion";
import { FaCode, FaLaptopCode, FaUsers, FaTrophy } from "react-icons/fa";

export default function About() {
  const stats = [
    { icon: <FaCode />, number: "5+", label: "Projects" },
    { icon: <FaLaptopCode />, number: "1+", label: "Years Experience" },
    { icon: <FaUsers />, number: "3", label: "Hackathon Finals" },
    { icon: <FaTrophy />, number: "10+", label: "Technologies" },
  ];

  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">About Me</h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative">
              <div className="w-80 h-80 mx-auto bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-1">
                <div className="w-full h-full bg-black rounded-2xl flex items-center justify-center">
                  <div className="w-72 h-72 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-xl flex items-center justify-center text-6xl text-blue-500">
                    <FaCode />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-bold text-white">
              I'm Bhavik Pahuja, a passionate{" "}
              <span className="text-blue-500">Full Stack Developer</span>
            </h3>
            <p className="text-gray-300 text-lg leading-relaxed">
              With over 2 years of experience in web development, I specialize
              in creating modern, scalable applications using React, Node.js,
              and cutting-edge technologies. I'm passionate about writing clean
              code and delivering exceptional user experiences.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              I've been a finalist in multiple hackathons including Zinnovatio
              2.0, Code Fusion 2.0, and Code Rush. I love solving complex
              problems and turning ideas into reality.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8">
              {stats.map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="text-center"
                >
                  <div className="text-2xl text-blue-500 mb-2">{stat.icon}</div>
                  <div className="text-2xl font-bold text-white">
                    {stat.number}
                  </div>
                  <div className="text-gray-400 text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
