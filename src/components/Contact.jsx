import React from "react";
import { FaPaperPlane } from "react-icons/fa";
import { MdContactPhone } from "react-icons/md";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaSquareGithub } from "react-icons/fa6";
import { FaFreeCodeCamp } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io5";
import resume from "../assets/resume.pdf";
import Form from "./Form";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);
const Contact = () => {
  useGSAP(() => {
    gsap.from(".left", {
      scrollTrigger: {
        trigger: ".container1",
        start: "top 80%",
        end: "bottom 100px",
        toggleActions: "restart reverse restart reverse",
      },
      opacity: 0,
      x: -400,
      duration: 2,
      ease: "back.inOut(1.7)",
    });

    gsap.from(".right", {
      scrollTrigger: {
        trigger: ".container1",
        start: "top 80%",
        end: "bottom 100px",
        toggleActions: "restart reverse restart reverse",
      },
      opacity: 0,
      x: 400,
      duration: 2,
      delay: 0.5,
      ease: "back.inOut(1.7)",
    });
  });
  return (
    <div
      id="contact"
      className="container1 relative z-10 flex flex-col items-center lg:flex-row gap-10 lg:gap-40 py-20 justify-center "
    >
      <div className="left flex flex-col">
        <h1 className="text-5xl font-bold mb-6">Contact Me</h1>
        <div className="flex gap-2 items-center  mb-2">
          <div className="text-xl">
            <FaPaperPlane />
          </div>
          estacioaldous@gmail.com
        </div>
        <div className="flex gap-2 items-center mb-6">
          <div className="text-xl">
            <MdContactPhone />
          </div>
          +639212698196
        </div>
        <div className="flex gap-4 text-3xl mb-4">
          <a
            href="https://www.facebook.com/aldous.estacio.5/"
            target="_blank"
            className="hover:scale-125 duration-500 hover:text-[burlywood]"
          >
            <FaSquareFacebook />
          </a>
          <a
            href="https://github.com/nijicode"
            target="_blank"
            className="hover:scale-125 duration-500 hover:text-[burlywood]"
          >
            <FaSquareGithub />
          </a>
          <a
            href="https://www.freecodecamp.org/certification/Programmer_Aldous/responsive-web-design"
            target="_blank"
            className="hover:scale-125 duration-500 hover:text-[burlywood]"
          >
            <FaFreeCodeCamp />
          </a>
          <a
            href="www.linkedin.com/in/john-aldous-estacio-9917952a8"
            target="_blank"
            className="hover:scale-125 duration-500 hover:text-[burlywood]"
          >
            <IoLogoLinkedin />
          </a>
        </div>
        <a
          href={resume}
          download="Estacio,Aldous-resume.pdf"
          className=" select-none cursor-pointer hover:bg-opacity-80 font-bold py-2 px-4 duration-200 active:scale-90 text-md rounded-xl bg-[burlywood] w-fit"
        >
          Download CV
        </a>
      </div>
      <div className="right lg:self-end">
        <Form />
      </div>
    </div>
  );
};

export default Contact;
