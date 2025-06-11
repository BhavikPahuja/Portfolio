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
      className="min-h-screen flex justify-evenly items-center gap-y-10 relative"
    >
      <div className="flex flex-col gap-y-10 items-start">
        <a
          href="https://github.com/BhavikPahuja"
          rel="noreferrer"
          target="_blank"
          className="transition text-gray-400 hover:text-gray-100 flex items-center gap-x-5"
        >
          <FaGithub className="text-5xl" />
          <p>Check my GitHub Profile</p>
        </a>
        <a
          href="https://www.linkedin.com/in/bhavik-pahuja-672765239/"
          rel="noreferrer"
          target="_blank"
          className="transition text-gray-400 hover:text-gray-200 flex items-center gap-x-5"
        >
          <FaLinkedin className="text-5xl" />
          <p>Check my LinkedIn Profile</p>
        </a>
        <a
          href="mailto:bhavikpahuja0@gmail.com"
          rel="noreferrer"
          target="_blank"
          className="transition text-gray-400 hover:text-gray-200 flex items-center gap-x-5"
        >
          <IoIosMail className="text-5xl" />
          <p>Contact me via Email</p>
        </a>
        <a
          href="https://discordapp.com/users/881786325257289770"
          rel="noreferrer"
          target="_blank"
          className="transition text-gray-400 hover:text-gray-200 flex items-center gap-x-5"
        >
          <FaDiscord className="text-5xl" />
          <p>Let's talk on Discord</p>
        </a>
      </div>
      <div className="w-3/12 rounded-[50%] border-t-[2rem] border-l-[2rem] border-r-[0.5rem] border-b-[0.5rem] overflow-hidden z-10">
        <img src={image} alt="img"/>
      </div>
    </motion.section>
  );
}
