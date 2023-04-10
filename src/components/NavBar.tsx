import React, { useEffect, useState, useCallback } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";

import Logo from '../assets/logo-white.png';

const NavBar = () => {
  const [nav, setNav] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [show, setShow] = useState(true);

  const navLinks = [
    { label: "Home", link: "home", id: "1" },
    { label: "About", link: "about", id: "2" },
    { label: "Portfolio", link: "portfolio", id: "3" },
    { label: "Experience", link: "experience", id: "4" },
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
    <nav className={`z-50 flex flex-wrap items-center justify-between w-full px-4 py-3 bg-black transition-all duration-500 ease-in-out ${show ? "top-0" : "-top-20"} ${nav ? "md:h-auto" : "md:h-16"} `}>
      <div className="flex items-center flex-shrink-0 mr-6">
        <img src={Logo} alt="logo" className="h-auto w-12" />
      </div>
      <button onClick={() => setNav(!nav)} className={`block md:hidden py-2 px-3 text-yellow-200 transform transition duration-500 ease-in-out ${nav ? 'rotate-90' : ''}`}>
        {nav ? <FaTimes size={28} /> : <FaBars size={28} />}
      </button>
      <div className={`md:flex flex-grow items-center w-full md:w-auto ${nav ? 'block' : 'hidden'}`}>
        <ul className="md:flex items-center justify-between text-base text-gray-400 pt-4 md:pt-0 ml-auto">
          {navLinks.map((navLink) => (
            <li key={navLink.id} className="block mt-4 md:inline-block md:mt-0 px-4 cursor-pointer font-medium duration-200 hover:text-yellow-200">
              <Link to={navLink.link} smooth duration={500}>
                {navLink.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;