import { motion } from "framer-motion";

const posts = [
  {
    title: "How I Built My Portfolio",
    excerpt:
      "A step-by-step guide to building a modern, animated portfolio with React and Tailwind.",
    link: "#",
  },
  {
    title: "Top 10 Frontend Tricks",
    excerpt:
      "My favorite frontend hacks for speed, accessibility, and wow factor.",
    link: "#",
  },
  {
    title: "Why I Love Open Source",
    excerpt:
      "Giving back, learning, and growing through open source contributions.",
    link: "#",
  },
];

export default function Blog() {
  return (
    <section id="blog" className="py-24 px-4 bg-transparent animate-fadeIn">
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-4xl font-bold mb-10 text-center text-green-300 animate-bounce"
      >
        Blog
      </motion.h2>
      <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-8">
        {posts.map((post, i) => (
          <motion.div
            key={post.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 + i * 0.2 }}
            className="bg-white/10 rounded-2xl shadow-xl p-8 flex flex-col hover:scale-105 transition-transform duration-300 animate-slideInUp"
          >
            <h3 className="text-xl font-bold text-white mb-2 animate-fadeIn">
              {post.title}
            </h3>
            <p className="text-gray-200 mb-4">{post.excerpt}</p>
            <a
              href={post.link}
              className="text-blue-400 hover:underline animate-pulse"
            >
              Read More
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
