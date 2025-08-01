import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const projects = [
  {
    title: "Data Access Monitor",
    description:
      "A comprehensive tool that tracks permissions, cookies, and data access patterns. Built to become a browser extension for enhanced digital privacy.",
    image:
      "https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&w=500&q=80",
    tech: ["React", "Node.js", "MongoDB", "Express"],
    liveUrl: "https://concentria.netlify.app",
    githubUrl: "#",
    category: "Web App",
  },
  {
    title: "AYUSH Herbal Garden",
    description:
      "An educational web application showcasing herbal plants with detailed information gathered through Python web scraping and modern UI design.",
    image:
      "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?auto=format&fit=crop&w=500&q=80",
    tech: ["Python", "React", "Tailwind CSS", "Web Scraping"],
    liveUrl: "https://ayushfull.netlify.app",
    githubUrl: "#",
    category: "Educational",
  },
  {
    title: "Spam Detection Platform",
    description:
      "Advanced spam detection system for links, files, and messages. Ensures user privacy with anonymous processing and secure analysis.",
    image:
      "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=500&q=80",
    tech: ["Python", "Machine Learning", "Flask", "React"],
    liveUrl: "#",
    githubUrl: "#",
    category: "ML/AI",
  },
  {
    title: "E-Billing Platform",
    description:
      "A fast, secure digital billing system that handles invoices, payments, and tracking seamlessly, eliminating traditional paperwork hassles.",
    image:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=500&q=80",
    tech: ["React", "Node.js", "PostgreSQL", "Stripe API"],
    liveUrl: "#",
    githubUrl: "#",
    category: "Business",
  },
  {
    title: "User Authentication Platform",
    description:
      "A secure identity management system featuring multi-factor authentication, passwordless logins, and role-based access control.",
    image:
      "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?auto=format&fit=crop&w=500&q=80",
    tech: ["Node.js", "JWT", "OAuth", "MongoDB"],
    liveUrl: "#",
    githubUrl: "#",
    category: "Security",
  },
  {
    title: "Portfolio Website",
    description:
      "A modern, responsive portfolio website built with React and Framer Motion, featuring smooth animations and interactive elements.",
    image:
      "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&w=500&q=80",
    tech: ["React", "Framer Motion", "Tailwind CSS", "Vite"],
    liveUrl: "#",
    githubUrl: "#",
    category: "Portfolio",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-6 bg-gray-900/50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto mb-4"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and
            passion for development
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="bg-gray-800/30 backdrop-blur-lg rounded-xl overflow-hidden hover:bg-gray-800/50 transition-all duration-300 hover:scale-105 border border-gray-700/30 group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent"></div>
                <div className="absolute top-4 right-4">
                  <span className="bg-blue-500 text-white text-xs px-2 py-1 rounded-full">
                    {project.category}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, index) => (
                    <span
                      key={index}
                      className="bg-gray-700/50 text-gray-300 text-xs px-2 py-1 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  <a
                    href={project.liveUrl}
                    className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm transition-colors duration-300"
                  >
                    <FaExternalLinkAlt className="text-xs" />
                    Live Demo
                  </a>
                  <a
                    href={project.githubUrl}
                    className="flex items-center gap-2 border border-gray-600 hover:border-white text-gray-300 hover:text-white px-4 py-2 rounded-lg text-sm transition-all duration-300"
                  >
                    <FaGithub />
                    Code
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
