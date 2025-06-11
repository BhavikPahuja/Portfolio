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
    <section id="skills" className="min-h-screen flex flex-col justify-center items-center px-6 py-24">
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-4xl font-bold mb-10 text-center text-white"
      >
        Skills
      </motion.h2>
      <div className="w-full max-w-2xl space-y-8">
        {skills.map((skill, i) => (
          <motion.div
            key={skill.name}
            initial={{ width: 0 }}
            whileInView={{ width: `${skill.level}%` }}
            transition={{ duration: 1 + i * 0.2 }}
            className="flex items-center"
          >
            <span className="w-32 text-lg font-semibold text-white">{skill.name}</span>
            <div className="flex-1 h-6 bg-white/20 rounded-full overflow-hidden ml-4">
              <div className={`h-6 ${skill.color} rounded-full shadow-lg`} style={{ width: `${skill.level}%` }} />
            </div>
            <span className="ml-4 text-white font-bold">{skill.level}%</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}