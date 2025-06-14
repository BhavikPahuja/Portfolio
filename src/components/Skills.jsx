import { motion } from "framer-motion";

const skills = [
  { name: "React", level: 95, color: "bg-blue-400" },
  { name: "Java", level: 95, color: "bg-red-400" },
  { name: "JavaScript", level: 90, color: "bg-yellow-400" },
  { name: "Tailwind CSS", level: 90, color: "bg-teal-400" },
  { name: "Node.js", level: 80, color: "bg-green-400" },
  { name: "C / C++", level: 75, color: "bg-indigo-400" },
  { name: "UI/UX", level: 85, color: "bg-pink-400" },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="min-h-screen flex flex-col justify-center items-center px-6 py-24"
    >
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-4xl font-bold mb-10 text-center text-white"
      >
        Skills
      </motion.h2>
      <div className="w-full md:w-7/12 space-y-8">
        {skills.map((skill, i) => (
          <div
            key={skill.name}
            className="flex justify-center items-center flex-col sm:flex-row bg-white/10 rounded-full p-4 shadow-lg hover:shadow-xl transition-shadow duration-300 hover:bg-white/20 group text-gray-200 justify-between hover:text-white hover:shadow-2xl w-full"
          >
            <span className="w-32 text-lg text-center font-semibold text-white mb-2 sm:mb-0">
              {skill.name}
            </span>
            <div className="flex-1 h-6 bg-white/20 rounded-full ml-0 sm:ml-4 w-full mb-2 sm:mb-0">
              <motion.div
                className={`h-6 ${skill.color} rounded-full shadow-lg`}
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.level}%` }}
                transition={{ duration: 1 + i * 0.2 }}
                viewport={{ once: false, amount: 0.2 }}
                style={{ maxWidth: "100%" }}
              />
            </div>
            <span className="ml-0 sm:ml-4 text-white font-bold">
              {skill.level}%
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
