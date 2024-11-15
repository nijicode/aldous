import React from "react";
import artCafe from "../assets/art-cafe-website.png";
import tailwind from "../assets/tailwind.svg";
import reactLogo from "../assets/react.svg";
import daisyui from "../assets/daisyui.svg";
import nodejs from "../assets/nodejs.svg";
import mongodb from "../assets/mongodb.svg";
import firebase from "../assets/firebase.svg";
import socketio from "../assets/socketio.svg";
import chatApp from "../assets/chat-app-website.png";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);
const Works = () => {
  let work = [
    {
      name: "art-cafe",
      repoLink: "https://github.com/nijicode/The-Art-Cafe-",
      webLink: "https://the-art-cafe.onrender.com/",
      details:
        "I developed a modern, functional website for the coffee shop where my dad manages in Saudi Arabia using the MERN stack. I integrated Firebase for file storage, MongoDB for text data, and Socket.io for real-time updates. The design features a clean, user-friendly interface created with DaisyUI and Tailwind CSS.",
      img: artCafe,
      technologies: [
        { name: "react", src: reactLogo, link: "https://react.dev/" },
        { name: "tailwind", src: tailwind, link: "https://tailwindcss.com/" },
        { name: "daisyui", src: daisyui, link: "https://daisyui.com/" },
        { name: "nodejs", src: nodejs, link: "https://daisyui.com/" },
        { name: "mongodb", src: mongodb, link: "https://daisyui.com/" },
        { name: "firebase", src: firebase, link: "https://daisyui.com/" },
        { name: "socketio", src: socketio, link: "https://daisyui.com/" },
      ],
      stack: "MERN",
    },
    {
      name: "chat-app",
      repoLink: "https://github.com/nijicode/chat-app",
      webLink: "https://chat-app-3amu.onrender.com/",
      details:
        "This chat application is my first MERN stack project (MongoDB, Express, React, Node.js), inspired by a YouTube tutorial. I learned to use Socket.IO for real-time chat, implemented authentication with JWT tokens, and gained experience deploying on Render. This project marks a key milestone in my development journey, combining new skills to build a functional web app.",
      img: chatApp,
      technologies: [
        { name: "react", src: reactLogo, link: "https://react.dev/" },
        { name: "tailwind", src: tailwind, link: "https://tailwindcss.com/" },
        { name: "daisyui", src: daisyui, link: "https://daisyui.com/" },
        { name: "nodejs", src: nodejs, link: "https://daisyui.com/" },
        { name: "mongodb", src: mongodb, link: "https://daisyui.com/" },
        { name: "socketio", src: socketio, link: "https://daisyui.com/" },
      ],
      stack: "MERN",
    },
  ];

  useGSAP(() => {
    gsap.utils.toArray(".work").forEach((div) => {
      gsap.from(div, {
        scrollTrigger: {
          trigger: div,
          start: "top 80%",
          end: "bottom 100px",
          toggleActions: "restart reverse restart reverse",
        },
        opacity: 0,
        y: 100,
        duration: 1,
        delay: 0.5,
        ease: "back",
      });
    });
  });

  return (
    <div
      id="work"
      className="relative z-10 w-full flex flex-col gap-4 justify-center items-center py-[50px] "
    >
      <h1 className="font-bold text-2xl mb-[50px]">Check out my works 🖌️</h1>
      <div className="flex flex-col gap-10 ">
        {work.map((web, index) => (
          <div
            className={`flex w-full work flex-col ${
              index % 2 !== 0 ? "lg:flex-row-reverse" : " lg:flex-row"
            } gap-12 justify-center items-center lg:items-start `}
            key={index}
          >
            <div className="flex-col flex flex-shrink-0 ">
              <a href={web.webLink} target="_blank">
                <img
                  className="w-[400px] object-cover duration-[10s] object-top overflow-hidden hover:object-bottom h-[220px] rounded-3xl cursor-pointer shadow-[10px_10px_5px_5px_rgba(0,0,0,.6)]"
                  src={web.img}
                  alt=""
                />
              </a>
              <h1 className="text-center uppercase mt-5 font-bold text-[burlywood]">
                {web.name}
              </h1>
              <div className="flex justify-around mt-4">
                <a
                  href={web.webLink}
                  target="_blank"
                  title="link to website"
                  className=" hover:text-[burlywood] hover:scale-110 cursor-pointer duration-500 text-4xl "
                >
                  <ion-icon name="tv"></ion-icon>
                </a>
                <a
                  href={web.repoLink}
                  target="_blank"
                  title="link to git repository"
                  className="hover:text-[burlywood] hover:scale-110 cursor-pointer duration-500 text-4xl"
                >
                  <ion-icon name="logo-github"></ion-icon>
                </a>
              </div>
            </div>
            <div className="max-w-[400px] lg:max-w-[600px] text-justify text-sm lg:mt-[50px] ">
              <div>{web.details}</div>
              <div className="flex justify-start items-center mt-4">
                <h1 className="mr-4">Tech used:</h1>
                {web.technologies.map((tech, index) => (
                  <a
                    href={tech.link}
                    target="_blank"
                    key={index}
                    className="text-2xl text-black mr-2 hover:scale-110 duration-500"
                    title={tech.name}
                  >
                    <ion-icon src={tech.src}></ion-icon>
                  </a>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Works;
