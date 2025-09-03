import React, { useEffect, useState, useCallback } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";

import Logo2 from "../assets/logo-black.png";
import Logo3 from "../assets/logo-white.png";

import ThemeToggle from "./ThemeToggle";
import { useDarkMode } from "../hooks/useDarkMode";

const NavBar = () => {
  const [nav, setNav] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [show, setShow] = useState(true);
  const darkMode = useDarkMode();

  const navLinks = [
    { label: "About", link: "about", id: "2" },
    { label: "Collaboration", link: "collaboration", id: "3" },
    { label: "Tech stack", link: "experience", id: "4" },
    { label: "Contact", link: "contact", id: "5" },
  ];

  const handleScroll = useCallback(() => {
    const currentScrollPos = window.pageYOffset;
    if (prevScrollPos > currentScrollPos) {
      setShow(true);
    } else if (prevScrollPos < currentScrollPos) {
      setShow(false);
    }
    setPrevScrollPos(currentScrollPos);
  }, [prevScrollPos]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return (
    <nav
      className={`z-50 flex flex-wrap items-center justify-between w-full px-4 py-3 transition-all duration-500 ease-in-out ${
        show ? "top-0" : "-top-20"
      } ${nav ? "md:h-auto" : "md:h-16"} `}
    >
      <div className="flex items-center flex-shrink-0 mr-6 z-20">
        <Link to="home" smooth duration={500}>
          <img
            src={darkMode ? Logo3 : Logo2}
            alt="logo"
            className="h-auto w-12 cursor-pointer"
          />
        </Link>
      </div>

      <div className="flex md:hidden ">
        <button
          onClick={() => setNav(!nav)}
          className={`block py-2 px-3 transform transition duration-500 ease-in-out ${
            nav ? "rotate-90" : ""
          }`}
        >
          {nav ? <FaTimes size={28} /> : <FaBars size={28} />}
        </button>
        <ThemeToggle></ThemeToggle>
      </div>

      <div
        className={`md:flex flex-grow items-center w-full md:w-auto ${
          nav ? "block" : "hidden"
        }`}
      >
        <ul className="md:flex items-center z-20 justify-between text-base pt-4 md:pt-0 ml-auto">
          {navLinks.map((navLink) => (
            <li
              key={navLink.id}
              className="block mt-4 md:inline-block md:mt-0 px-4 cursor-pointer text-lg font-semibold md:font-medium duration-200 "
            >
              <Link to={navLink.link} smooth duration={500}>
                {navLink.label}
              </Link>
            </li>
          ))}
        </ul>
        {!nav && <ThemeToggle />}
      </div>
    </nav>
  );
};

export default NavBar;
