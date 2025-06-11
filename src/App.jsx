import './App.css'
import { useEffect, useState } from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills.jsx";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Toast from "./components/Toast";

export default function App() {
  const [showToast, setShowToast] = useState(false);

  useEffect(() => {
    document.title = "Bhavik Pahuja | Portfolio";
    setTimeout(() => setShowToast(true), 1200);
    setTimeout(() => setShowToast(false), 4200);
  }, []);

  return (
    <main className="w-full min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700">
      <Navbar />
      <Toast show={showToast} message="👋 Welcome to my portfolio!" />
      <Parallax pages={5}>
        <ParallaxLayer offset={0} speed={0.5}><Hero /></ParallaxLayer>
        <ParallaxLayer offset={1} speed={0.5}><About /></ParallaxLayer>
        <ParallaxLayer offset={2} speed={0.5}><Skills /></ParallaxLayer>
        <ParallaxLayer offset={3} speed={0.5}><Projects /></ParallaxLayer>
        <ParallaxLayer offset={4} speed={0.5}><Contact /></ParallaxLayer>
      </Parallax>
    </main>
  );
}