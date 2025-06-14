import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { FaDiscord } from "react-icons/fa6";
import image from "../media/1748275220572.jpeg";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <motion.section
      initial={{ opacity: 0, x: -80 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      id="contact"
      className="min-h-screen w-full flex flex-col md:flex-row md:flex-row-reverse justify-center items-center gap-12 px-4 py-24 animate-fadeIn"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="flex flex-col gap-y-8 items-center bg-white/10 rounded-2xl shadow-xl p-8 w-full md:w-6/12 animate-slideInUp"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="w-56 h-56 md:w-80 md:h-80 rounded-full border-8 border-blue-200 overflow-hidden shadow-2xl flex-shrink-0 animate-fadeIn"
        >
          <img
            src={image}
            alt="Contact"
            className="object-cover w-full h-full hover:scale-105 transition-transform duration-500"
          />
        </motion.div>
        <h2 className="text-3xl font-bold text-blue-400 mb-4 animate-bounce">
          Let’s Connect!
        </h2>
        <p className="text-gray-300 mb-6 animate-fadeIn">
          I’m always open to new opportunities, collaborations, or just a
          friendly chat. Reach out through any platform below!
        </p>
        <div className="flex flex-col gap-y-6 w-full">
          <a
            href="https://github.com/BhavikPahuja"
            rel="noreferrer"
            target="_blank"
            className="transition text-gray-400 hover:text-gray-100 flex items-center gap-x-5 group animate-fadeIn"
          >
            <FaGithub className="text-4xl group-hover:scale-110 transition-transform duration-300" />
            <span className="group-hover:underline">
              Check my GitHub Profile
            </span>
          </a>
          <a
            href="https://www.linkedin.com/in/bhavik-pahuja-672765239/"
            rel="noreferrer"
            target="_blank"
            className="transition text-gray-400 hover:text-blue-300 flex items-center gap-x-5 group animate-fadeIn"
          >
            <FaLinkedin className="text-4xl group-hover:scale-110 transition-transform duration-300" />
            <span className="group-hover:underline">
              Check my LinkedIn Profile
            </span>
          </a>
          <a
            href="mailto:bhavikpahuja0@gmail.com"
            rel="noreferrer"
            target="_blank"
            className="transition text-gray-400 hover:text-green-300 flex items-center gap-x-5 group animate-fadeIn"
          >
            <IoIosMail className="text-4xl group-hover:scale-110 transition-transform duration-300" />
            <span className="group-hover:underline">Contact me via Email</span>
          </a>
          <a
            href="https://discordapp.com/users/881786325257289770"
            rel="noreferrer"
            target="_blank"
            className="transition text-gray-400 hover:text-indigo-300 flex items-center gap-x-5 group animate-fadeIn"
          >
            <FaDiscord className="text-4xl group-hover:scale-110 transition-transform duration-300" />
            <span className="group-hover:underline">Let's talk on Discord</span>
          </a>
        </div>
      </motion.div>
    </motion.section>
  );
}
