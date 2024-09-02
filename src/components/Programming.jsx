import React from "react";
import Marquee from "react-fast-marquee";
import profile from "../assets/profile.jpg";
import grad from "../assets/grad.jpg";
import barong from "../assets/barong.jpg";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const Programming = () => {
  const languages = [
    "Reactjs",
    "Html",
    "CSS",
    "Tailwind",
    "Nodejs",
    "Express",
    "SocketIo",
    "Git",
    "Github",
    "Firebase",
    "DaisUi",
    "Emailjs",
    "Vite",
    "MongoDb",
    "PHP",
    "MySql",
    "C",
    "GSAP",
    "Framer",
    "Threejs",
  ];

  useGSAP(() => {
    gsap.from(".language", {
      scrollTrigger: {
        trigger: ".language",
        start: "top 80%",
        end: "bottom 100px",
        toggleActions: "restart reverse restart reverse",
      },
      opacity: 0,
      duration: 2.5,
      scale: 1.1,
      ease: "back",
    });
  });

  return (
    <div className="language mb-10">
      <Marquee
        className=" my-5"
        autoFill={true}
        speed={10}
        gradient={true}
        gradientColor="#18181e"
        gradientWidth={20}
      >
        <div className=" w-[200px] mr-4 h-[200px] duration-500 hover:scale-90 rounded-lg overflow-clip">
          <img
            className="object-cover object-center w-full h-full"
            src={profile}
            alt=""
          />
        </div>
        <div className=" w-[200px] mr-4 duration-500 hover:scale-90 h-[200px] rounded-lg overflow-clip">
          <img
            className="object-cover object-center w-full h-full"
            src={grad}
            alt=""
          />
        </div>
        <div className=" w-[200px] mr-4 duration-500 hover:scale-90 h-[200px] rounded-lg overflow-clip">
          <img
            className="object-cover object-center w-full h-full"
            src={barong}
            alt=""
          />
        </div>
      </Marquee>
      <Marquee
        className=" flex flex-col h-fit overflow-clip py-2 "
        pauseOnHover={true}
        gradient={true}
        gradientColor="#18181e"
        direction="left"
        gradientWidth={100}
      >
        {languages.map((language, index) => (
          <div
            className="a px-4 select-none py-2 mr-2 lg:mr-6 shadow-md shadow-black rounded-lg text-mud font-semibold bg-[burlywood]"
            key={index}
          >
            {language}
          </div>
        ))}
      </Marquee>
      <Marquee
        className="flex flex-col h-fit overflow-clip py-2 "
        pauseOnHover={true}
        gradient={true}
        gradientColor="#18181e"
        direction="right"
        gradientWidth={100}
      >
        {languages.map((language, index) => (
          <div
            className="c px-4 select-none py-2 mr-2 lg:mr-6 shadow-md shadow-black rounded-lg text-mud font-semibold bg-[burlywood]"
            key={index}
          >
            {language}
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default Programming;
