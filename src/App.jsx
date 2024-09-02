import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Works from "./components/Works";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { Toaster } from "sonner";
import Programming from "./components/Programming";
import { Stars } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

const App = () => {
  return (
    <div className="bg-mud relative z-0 ">
      <Navbar />
      <Hero />
      <div className="relative overflow-clip z-10 px-8 md:px-28 lg:px-36">
        <About />
        <Programming />
        <Works />
        <Contact />
      </div>
      <div className="absolute inset-0 z-0 ">
        <Canvas>
          <Stars
            radius={100}
            depth={50}
            count={15000}
            factor={4}
            speed={2}
            saturation={0}
            fade
          />
        </Canvas>
      </div>
      <Footer />
      <Toaster richColors position="top-center" />
    </div>
  );
};

export default App;
