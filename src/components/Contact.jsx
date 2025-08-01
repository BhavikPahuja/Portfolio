import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { FaDiscord } from "react-icons/fa6";

export default function Contact() {
  const contactInfo = [
    {
      icon: <FaEnvelope />,
      label: "Email",
      value: "bhavikpahuja0@gmail.com",
      link: "mailto:bhavikpahuja0@gmail.com",
    },
    {
      icon: <FaMapMarkerAlt />,
      label: "Location",
      value: "Ganganagar, India",
      link: null,
    },
    {
      icon: <FaPhone />,
      label: "Available",
      value: "Mon - Fri, 9AM - 6PM",
      link: null,
    },
  ];

  const socialLinks = [
    {
      icon: <FaGithub />,
      label: "GitHub",
      url: "https://github.com/BhavikPahuja",
      color: "hover:text-gray-300",
    },
    {
      icon: <FaLinkedin />,
      label: "LinkedIn",
      url: "https://www.linkedin.com/in/bhavik-pahuja-672765239/",
      color: "hover:text-blue-500",
    },
    {
      icon: <FaDiscord />,
      label: "Discord",
      url: "https://discordapp.com/users/881786325257289770",
      color: "hover:text-indigo-500",
    },
  ];

  return (
    <section id="contact" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Get In Touch</h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto mb-4"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Let's work together to bring your ideas to life. I'm always open to
            discussing new opportunities.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-gray-800/30 backdrop-blur-lg rounded-xl p-8 border border-gray-700/30"
          >
            <h3 className="text-2xl font-bold text-white mb-6">Send Message</h3>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-300 text-sm mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    className="w-full bg-gray-900/50 border border-gray-600 rounded-lg px-4 py-3 text-white focus:border-blue-500 focus:outline-none transition-colors"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label className="block text-gray-300 text-sm mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full bg-gray-900/50 border border-gray-600 rounded-lg px-4 py-3 text-white focus:border-blue-500 focus:outline-none transition-colors"
                    placeholder="your@email.com"
                  />
                </div>
              </div>
              <div>
                <label className="block text-gray-300 text-sm mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  className="w-full bg-gray-900/50 border border-gray-600 rounded-lg px-4 py-3 text-white focus:border-blue-500 focus:outline-none transition-colors"
                  placeholder="Project Discussion"
                />
              </div>
              <div>
                <label className="block text-gray-300 text-sm mb-2">
                  Message
                </label>
                <textarea
                  rows={5}
                  className="w-full bg-gray-900/50 border border-gray-600 rounded-lg px-4 py-3 text-white focus:border-blue-500 focus:outline-none transition-colors resize-none"
                  placeholder="Tell me about your project..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-medium transition-colors duration-300"
              >
                Send Message
              </button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">
                Contact Information
              </h3>
              <div className="space-y-4">
                {contactInfo.map((info, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: i * 0.1 }}
                    className="flex items-center gap-4"
                  >
                    <div className="w-12 h-12 bg-blue-600/20 rounded-lg flex items-center justify-center text-blue-500">
                      {info.icon}
                    </div>
                    <div>
                      <div className="text-gray-400 text-sm">{info.label}</div>
                      {info.link ? (
                        <a
                          href={info.link}
                          className="text-white hover:text-blue-500 transition-colors"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <div className="text-white">{info.value}</div>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-xl font-bold text-white mb-4">Follow Me</h4>
              <div className="flex gap-4">
                {socialLinks.map((social, i) => (
                  <motion.a
                    key={i}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    className={`w-12 h-12 bg-gray-800/50 rounded-lg flex items-center justify-center text-gray-400 ${social.color} transition-all duration-300 hover:scale-110`}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </div>

            <div className="bg-gray-800/30 backdrop-blur-lg rounded-xl p-6 border border-gray-700/30">
              <h4 className="text-lg font-bold text-white mb-2">
                Let's Build Something Amazing
              </h4>
              <p className="text-gray-300 text-sm leading-relaxed">
                I'm always excited to work on new projects and collaborate with
                talented individuals. Whether you have a project in mind or just
                want to chat about technology, feel free to reach out!
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
