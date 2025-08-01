import { motion } from "framer-motion";
import {
  SiReact,
  SiNodedotjs,
  SiJavascript,
  SiTailwindcss,
  SiMongodb,
  SiPython,
  SiGit,
} from "react-icons/si";
import { FaJava } from "react-icons/fa"; // Using FaJava instead

const skills = [
  {
    name: "React",
    level: 95,
    icon: <SiReact />,
    color: "from-blue-400 to-cyan-400",
  },
  {
    name: "Node.js",
    level: 90,
    icon: <SiNodedotjs />,
    color: "from-green-400 to-emerald-400",
  },
  {
    name: "JavaScript",
    level: 95,
    icon: <SiJavascript />,
    color: "from-yellow-400 to-orange-400",
  },
  {
    name: "Tailwind CSS",
    level: 90,
    icon: <SiTailwindcss />,
    color: "from-cyan-400 to-blue-400",
  },
  {
    name: "MongoDB",
    level: 85,
    icon: <SiMongodb />,
    color: "from-green-400 to-green-600",
  },
  {
    name: "Python",
    level: 80,
    icon: <SiPython />,
    color: "from-blue-500 to-yellow-400",
  },
  {
    name: "Java",
    level: 85,
    icon: <FaJava />,
    color: "from-red-400 to-orange-400",
  },
  {
    name: "Git",
    level: 90,
    icon: <SiGit />,
    color: "from-orange-400 to-red-400",
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-6 bg-gray-900/50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Skills & Technologies
          </h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill, i) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="bg-gray-800/50 backdrop-blur-lg rounded-xl p-6 hover:bg-gray-800/80 transition-all duration-300 hover:scale-105 border border-gray-700/50"
            >
              <div className="text-center">
                <div
                  className={`text-4xl mb-4 bg-gradient-to-r ${skill.color} bg-clip-text text-transparent`}
                >
                  {skill.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">
                  {skill.name}
                </h3>
                <div className="w-full bg-gray-700 rounded-full h-2 mb-2">
                  <motion.div
                    className={`h-2 rounded-full bg-gradient-to-r ${skill.color}`}
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ duration: 1.5, delay: i * 0.1 }}
                    viewport={{ once: false, amount: 0.2 }}
                  />
                </div>
                <span className="text-gray-400 text-sm">{skill.level}%</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
