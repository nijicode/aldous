import React from "react";
import "./Hero.css";
import gsap from "gsap";
import TextPlugin from "gsap/TextPlugin";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP, TextPlugin);

const Hero = () => {
  const words = [
    "Aldous.",
    "a Gamer",
    "a Designer",
    "a Developer",
    "an Engineer",
  ];
  useGSAP(() => {
    let masterTl = gsap.timeline({ repeat: -1 }).pause();
    let boxTl = gsap.timeline();

    boxTl
      .to(".box", {
        duration: 1,
        width: "100%",
        delay: 0.5,
        ease: "power4.inOut",
      })
      .from(".hi", {
        duration: 1,
        y: "100px",
        ease: "power3.out",
        onComplete: () => {
          masterTl.play();
          cursor.play();
        },
      })
      .to(".box", { duration: 1, height: "100%", ease: "elastic.out" });

    const cursor = gsap
      .from(".cursor", {
        opacity: 0,
        ease: "power2.inOut",
        repeat: -1,
      })
      .pause();

    gsap.from(".subtitle", {
      duration: 1,
      y: "100px",
      ease: "power3.out",
    });

    words.forEach((word) => {
      let tl = gsap.timeline({ repeat: 1, yoyo: true, delay: 0.5 });
      tl.to(".profession", { duration: 1, text: word });
      masterTl.add(tl);
    });
  });

  return (
    <div
      id="home"
      className="w-full z-10 h-screen overflow-x-clip overflow-y-visible flex justify-center items-center relative"
    >
      <div className=" text-center relative z-10 pointer-events-none">
        <h1 className="text-4xl md:text-5xl justify-center lg:text-6xl flex font-bold leading-tight ">
          <div className="relative overflow-clip px-4">
            <div className="box absolute left-0 bottom-0 rounded-2xl -z-10 bg-gradient-to-r from-[#606c88] to-[#3f4c6b] h-1"></div>
            <span className="hi inline-block">Hi, I’m</span>
          </div>
          <span className="profession"></span>
          <span className="cursor">_</span>
        </h1>
        <p className="mt-4 subtitle">
          Turning Ideas into Real-World Applications
        </p>
      </div>
      <div className="one z-0 z blob cursor-pointer duration-500 hover:opacity-50 hover:scale-125"></div>
      <div className="two z-0 blob cursor-pointer duration-500 hover:opacity-50 hover:scale-125"></div>
    </div>
  );
};

export default Hero;
