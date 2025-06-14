import { motion } from "framer-motion";

const jobs = [
  {
    role: "Frontend Developer",
    company: "TechNova",
    period: "2023 - Present",
    desc: "Built interactive UIs and micro-frontends with React and Tailwind.",
  },
  {
    role: "Backend Intern",
    company: "DataForge",
    period: "2022 - 2023",
    desc: "Developed REST APIs and optimized database queries for scale.",
  },
  {
    role: "Open Source Contributor",
    company: "OSS World",
    period: "2021 - 2022",
    desc: "Contributed to open source, reviewed PRs, and mentored newcomers.",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-4 bg-transparent animate-fadeIn">
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-4xl font-bold mb-10 text-center text-blue-300 animate-bounce"
      >
        Experience
      </motion.h2>
      <div className="max-w-3xl mx-auto flex flex-col gap-8">
        {jobs.map((job, i) => (
          <motion.div
            key={job.role}
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 + i * 0.2 }}
            className="bg-white/10 rounded-2xl shadow-xl p-8 hover:scale-105 transition-transform duration-300 animate-slideInUp"
          >
            <div className="flex justify-between items-center mb-2">
              <span className="text-xl font-bold text-blue-200">{job.role}</span>
              <span className="text-sm text-gray-300">{job.period}</span>
            </div>
            <div className="text-blue-400 font-semibold mb-2">{job.company}</div>
            <div className="text-gray-200">{job.desc}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}