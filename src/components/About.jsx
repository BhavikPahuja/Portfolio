import { motion } from "framer-motion";
import logo from "../media/logo.png";

export default function About() {
  return (
    <section
      id="about"
      className="w-full flex flex-col justify-center items-center px-4 py-24 bg-transparent animate-fadeIn"
    >
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full md:w-11/12 bg-white/10 rounded-3xl shadow-2xl p-8 md:p-14 flex flex-col gap-10 items-center animate-slideInUp"
      >
        <div className="flex flex-col items-center">
          <img
            src={logo}
            alt="Avatar"
            className="w-36 h-36 rounded-full shadow-lg border-4 border-blue-100 mb-4 transition-transform duration-300 hover:scale-105"
          />
          <div className="flex flex-wrap gap-2 mt-2">
            <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-semibold animate-fadeIn">Full Stack Dev</span>
            <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-semibold animate-fadeIn">Hackathon Finalist</span>
            <span className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-xs font-semibold animate-fadeIn">Problem Solver</span>
          </div>
        </div>
        <div className="flex-1 flex flex-col gap-8">
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold mb-2 mt-4 text-indigo-700">About Me</h2>
            <p className="text-base md:text-lg text-gray-200">
              Hi! I’m <span className="font-bold text-indigo-700">Bhavik Pahuja</span>, a passionate developer who loves building things that empower people. I thrive on solving real-world problems and blending creativity with code.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div>
              <h3 className="font-semibold mb-2 text-indigo-600">Quick Facts</h3>
              <ul className="space-y-1 text-gray-300 text-sm md:text-base">
                <li><span className="font-semibold">📍 Location:</span> Ganganagar, India</li>
                <li><span className="font-semibold">🎓 Degree:</span> BE-CSE(AI-ML)</li>
                <li><span className="font-semibold">💼 Experience:</span> 1+ years</li>
                <li><span className="font-semibold">🌐 Languages:</span> English, Hindi</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2 text-indigo-600">Interests</h3>
              <div className="flex flex-wrap gap-2">
                <span className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-xs font-medium">Web Development</span>
                <span className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-xs font-medium">UI/UX Design</span>
                <span className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-xs font-medium">Open Source</span>
                <span className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-xs font-medium">Problem Solving</span>
                <span className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-xs font-medium">Photography</span>
              </div>
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-semibold mb-2 text-indigo-600">What I Do</h3>
              <ul className="list-disc list-inside text-gray-200 text-sm md:text-base space-y-1">
                <li>Build full-stack web apps with React, Node.js, MongoDB</li>
                <li>Design beautiful, accessible UIs with Tailwind & Framer Motion</li>
                <li>Automate and analyze with Python, C++, Java</li>
                <li>Contribute to open source and hackathons</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2 text-indigo-600">Achievements</h3>
              <ul className="list-disc list-inside text-gray-200 text-sm md:text-base space-y-1">
                <li>Finalist at Zinnovatio 2.0, Code Fusion 2.0, Code Rush</li>
                <li>Built "Data Access Monitor" for digital privacy</li>
                <li>Created "AYUSH Herbal Garden" for herbal education</li>
              </ul>
            </div>
          </div>
          <div>
            <p className="text-base md:text-lg text-gray-300">
              I’m always learning, building, and collaborating. My goal: keep evolving and create tech that inspires change. <span className="font-semibold text-indigo-700">Let’s create something awesome together!</span>
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}