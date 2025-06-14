import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Toast from "./components/Toast";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
import Gallery from "./components/Gallery";
import Blog from "./components/Blog";
import Footer from "./components/Footer";
import "./App.css";

export default function App() {
  const [showToast, setShowToast] = useState(false);

  useEffect(() => {
    document.title = "Bhavik Pahuja | Portfolio";
    setTimeout(() => setShowToast(true), 1200);
    setTimeout(() => setShowToast(false), 4200);
  }, []);

  return (
    <main className="w-full min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 overflow-x-hidden">
      <Navbar />
      <Toast show={showToast} message="👋 Welcome to my portfolio!" />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Services />
      <Projects />
      <Testimonials />
      <Gallery />
      <Blog />
      <Contact />
      <Footer />
    </main>
  );
}