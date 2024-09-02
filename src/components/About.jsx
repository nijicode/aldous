import React, { useState } from "react";
import profile from "../assets/profile2.jpg";
import "./About.css";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { motion, AnimatePresence } from "framer-motion";
gsap.registerPlugin(useGSAP, ScrollTrigger);

const About = () => {
  const [activeLink, setActiveLink] = useState(0);
  const handleLink = (index) => {
    setActiveLink(index);
  };

  let Skills = [
    { title: "UI/UX", details: "Designing Web/App Interfaces" },
    {
      title: "Web Development",
      details: "Knowledgeable in MERN stack (MongoDb, Express, React, Nodejs)",
    },
    { title: "App Development", details: "Building Android/iOS Applications" },
  ];

  let Experience = [
    {
      title: "BRU DIGITAL TV",
      date: "June - August 2022",
      details: "250hrs On Job Training as a Video Editor and Graphic Designer",
    },
    {
      title: "freeCodeCamp Responsive Web Design Certification",
      date: "Feb 2024",
      details:
        "Approximately 300 hours of work on responsive web design with 5 completed projects",
    },
  ];
  let Education = [
    {
      school: "Bulacan State University",
      date: "2019 - June 23 2023",
      course: "Bachelor of Science in Computer Engineering",
    },
    {
      school: "Immaculate Conception International",
      date: "2017 - 2019",
      course: "Science, Technology, Engineering and Mathematics",
    },
  ];
  const myStyle = {
    backgroundImage: `url(${profile})`,

    backgroundSize: "cover",
    backgroundPosition: "top",
  };
  useGSAP(() => {
    gsap.from(".pic", {
      scrollTrigger: {
        trigger: ".container",
        start: "top 80%",
        end: "bottom 100px",
        toggleActions: "restart reverse restart reverse",
      },
      opacity: 0,
      x: -400,
      duration: 2,
      ease: "back.inOut(1.7)",
    });

    gsap.from(".info", {
      scrollTrigger: {
        trigger: ".container",
        start: "top 80%",
        end: "bottom 100px",
        toggleActions: "restart reverse restart reverse",
      },
      opacity: 0,
      x: 400,
      duration: 2,
      ease: "back.inOut(1.7)",
    });
  });

  return (
    <div
      id="about"
      className="relative  z-10 overflow-clip w-full h-fit pt-36 "
    >
      <div className="container w-full h-fit flex flex-col md:flex-row justify-center gap-16 items-center md:items-start">
        {/* <img
          src={profile}
          alt="me"
          className=" object-cover bg-[#928783] w-[250px] rounded-full md:rounded-none h-[250px] object-mine"
        /> */}
        <div className="pic">
          <div
            className="profile-pic shadow-[10px_10px_5px_5px_rgba(0,0,0,.6)] w-[250px] h-[250px] lg:w-[250px] lg:h-[250px] flex-shrink-0"
            style={myStyle}
          ></div>
        </div>

        <div className="info md:w-[600px] md:flex-shrink">
          <h1 className="text-4xl font-bold pb-6">About Me</h1>
          <p className=" text-sm text-justify pb-6">
            Hi! I'm Aldous, a graduate of Computer Engineering, I always love to
            learn and to explore many things specially in the field of Computer
            Science and Engineering, particularly focused on programming. My
            favorite subject has always been programming because it allows me to
            blend logic and creativity to solve complex problems. <br />
            <br /> What excites me most about this field is the ever-evolving
            nature of technology, and I am enthusiastic about staying up-to-date
            with the latest developments in programming and software
            engineering.
          </p>
          <div className="flex w-full gap-10 pb-8 text-md font-bold">
            <p
              onClick={() => handleLink(0)}
              className={`hover:scale-125 pb-2 relative cursor-pointer tab-link ${
                activeLink == 0 ? "active-link" : ""
              } duration-500 transition-all`}
            >
              Skills
            </p>
            <p
              onClick={() => handleLink(1)}
              className={`hover:scale-125 pb-2 relative cursor-pointer tab-link ${
                activeLink == 1 ? "active-link" : ""
              } duration-500 transition-all`}
            >
              Experience
            </p>
            <p
              onClick={() => handleLink(2)}
              className={`hover:scale-125 pb-2 relative cursor-pointer tab-link ${
                activeLink == 2 ? "active-link" : ""
              } duration-500 transition-all`}
            >
              Education
            </p>
          </div>
          <div className="h-[250px] overflow-clip">
            {activeLink == 0 && (
              <motion.div
                initial={{ opacity: 0, x: -200 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 200 }}
                transition={{ duration: 0.5, ease: "backInOut" }}
              >
                {Skills.map((skill) => (
                  <div key={skill.title} className="pb-4">
                    <h1 className="text-md font-bold text-[burlywood]">
                      {skill.title}
                    </h1>
                    <p className="text-sm">{skill.details}</p>
                  </div>
                ))}
              </motion.div>
            )}

            {activeLink == 1 && (
              <motion.div
                initial={{ opacity: 0, x: -200 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 200 }}
                transition={{ duration: 0.5, ease: "backInOut" }}
              >
                {Experience.map((exp) => (
                  <div key={exp.title} className="pb-4">
                    <h1 className="text-md font-bold text-[burlywood]">
                      {exp.title}
                    </h1>
                    <h2 className="text-md font-bold text-[burlywood]">
                      {exp.date}
                    </h2>
                    <p className="text-sm">{exp.details}</p>
                  </div>
                ))}
              </motion.div>
            )}
            {activeLink == 2 && (
              <motion.div
                initial={{ opacity: 0, x: -200 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 200 }}
                transition={{ duration: 0.5, ease: "backInOut" }}
              >
                {Education.map((edu) => (
                  <div key={edu.school} className="pb-4">
                    <h1 className="text-md font-bold text-[burlywood]">
                      {edu.school}
                    </h1>
                    <h2 className="text-md font-bold text-[burlywood]">
                      {edu.date}
                    </h2>
                    <p className="text-sm">{edu.course}</p>
                  </div>
                ))}
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
