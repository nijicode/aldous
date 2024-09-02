import React, { useState } from "react";
import { Link } from "react-scroll";

const Navbar = () => {
  let Links = [
    { name: "home", link: "home", offset: 0 },
    { name: "about", link: "about", offset: 0 },
    { name: "works", link: "work", offset: -55 },
    { name: "contact", link: "contact", offset: 0 },
  ];

  let Socials = [
    {
      icon: "logo-instagram",
      link: "https://instagram.com/artcafe_ksa?igshid=zv6jgtvq08t4",
    },
    { icon: "logo-twitter", link: "https://twitter.com/@Artcafe123456" },
    {
      icon: "logo-tiktok",
      link: "https://www.tiktok.com/@artcafe6?_t=8ZjZrarR8wU&_r=1",
    },
    { icon: "mail", link: "mailto:artcafe-ksa@outlook.com" },
  ];

  let [open, setOpen] = useState(false);

  return (
    <>
      <div
        className="fixed z-[100] backdrop-blur-md bg-gradient-to-br from-[rgba(255, 255, 255, 0.1)] to-[rgba(255, 255, 255, 0)
] justify-between px-8 md:px-28 lg:px-36 items-center flex w-full h-fit p-5 font-SpaceGrotesk border-b-[1px] border-glass"
      >
        <div className=" font-bold text-2xl font-Rubik">
          <span className="text-[burlywood] font-bold font-Rubik">A</span>ldous
        </div>
        <div
          onClick={() => setOpen(!open)}
          className="text-3xl text-white md:hidden cursor-pointer "
        >
          <ion-icon name={open ? "close" : "menu"}></ion-icon>
        </div>
        <ul className="gap-12 hidden md:flex">
          {Links.map((link) => (
            <li
              key={link.name}
              className="cursor-pointer font-semibold hover:scale-110 duration-500"
            >
              <Link
                to={link.link}
                spy={true}
                smooth={true}
                offset={link.offset}
                duration={500}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
        <ul
          className={` -z-10 bg-black border-b-[1px] overflow-clip left-0 top-[79px] border-glass bg-opacity-90  flex md:hidden flex-col absolute w-full  ${
            open ? "h-fit opacity-100 " : "h-0 py-0 opacity-0 "
          } duration-500 transition-all`}
        >
          {Links.map((link) => (
            <li
              key={link.name}
              className="cursor-pointer w-full font-semibold hover:bg-mud "
            >
              <Link
                to={link.link}
                spy={true}
                smooth={true}
                offset={link.offset}
                duration={500}
                className="w-full px-8 py-3 block"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Navbar;
