import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="min-h-screen flex flex-col justify-center items-center px-6 py-24">
      <motion.div
        initial={{ opacity: 0, x: -80 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="w-9/12 bg-gray-800 rounded-2xl shadow-xl p-10"
      >
        <h2 className="text-4xl font-bold mb-4 text-blue-400">About Me</h2>
        <div className="text-lg text-gray-200 flex flex-col gap-y-6">
          <p>
            I’m Bhavik Pahuja — a passionate full-stack developer,3x hackathon finalist, and a relentless problem solver. I believe technology should not just impress — it should empower.
          </p>
          <p>
            Currently diving deep into the MERN stack, I’ve built platforms that tackle real-world issues like data privacy, spam detection, and herbal education. My project "Data Access Monitor" aims to give users full control over their digital footprints, while "AYUSH Herbal Garden" blends tech with tradition to promote natural wellness.
          </p>
          <p>
            From crafting beautiful UIs with Tailwind and Framer Motion to architecting solid backends with Node.js and MongoDB, I love the thrill of building something meaningful from scratch. I’m also well-versed in C++, Java, and Python — blending logic with creativity is my favorite part of coding.
          </p>
          <p>
            Finalist at Zinnovatio 2.0, Code Fusion 2.0, Code Rush, I’ve always pushed myself beyond the classroom. Whether it’s building, learning, or collaborating — my goal is to keep evolving and to build tech that inspires change.
          </p>
          <p>
            Let’s create something awesome together!
          </p>
        </div>
      </motion.div>
    </section>
  );
}