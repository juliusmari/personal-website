import React, { useRef } from "react";
import Profile from "../assets/profile.jpeg";
import { useOnScreen } from "./Home";
import { useDarkMode } from "../hooks/useDarkMode";

const About = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isVisible = useOnScreen(ref);
  const sef = useRef<HTMLDivElement>(null);
  const isVisible2 = useOnScreen(sef);
  const darkMode = useDarkMode();

  return (
    <div id="about" className="lg:h-screen w-full flex items-center">
      <div className="max-w-screen-lg mx-auto flex flex-col-reverse md:flex-row items-center justify-center px-4 ">
        <div className="mt-5 md:mr-20  p-10 rounded-xl z-10 w-full">
          <h1
            className={`text-4xl font-bold inline  mb-6 transition duration-[1500ms] ${
              isVisible2
                ? "opacity-100 "
                : "opacity-0 translate-x-5 sm:translate-x-20"
            }`}
          >
            About
          </h1>
          <div className="mt-10">
            <p
              ref={sef}
              className={`text-xl text-justify leading-loose transition duration-[1000ms] ${
                isVisible2
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-5 sm:translate-x-20"
              }`}
            >
              Code, create, repeat — that's been my life as a web developer for
              2 years (and I'm still loving it). I've spent this time crafting{" "}
              <span className="dark:text-[#FFD369] font-bold">
                modern, responsive, and user-friendly
              </span>{" "}
              websites that bring ideas to life.
            </p>
            <br />
            <p
              className={`text-xl text-justify leading-loose transition duration-[1500ms] ${
                isVisible2
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-5 sm:translate-x-20"
              }`}
            >
              I've spent the last 2 years working with{" "}
              <span className="dark:text-[#FFD369] font-bold">
                <a
                  href="https://vuejs.org/"
                  target="_blank"
                  className="hover:underline "
                >
                  Vue
                </a>
                ,{" "}
                <a
                  href="https://nodejs.org/en"
                  target="_blank"
                  className="hover:underline"
                >
                  Node.js
                </a>
                ,{" "}
                <a
                  href="https://www.mongodb.com/"
                  target="_blank"
                  className="hover:underline"
                >
                  MongoDB
                </a>
              </span>{" "}
              and other{" "}
              <span className="dark:text-[#FFD369] font-bold">
                technologies
              </span>{" "}
              to create{" "}
              <span className="dark:text-[#FFD369] font-bold">
                clean, scalable web apps
              </span>
              .
            </p>
          </div>
        </div>
        <div className=" mt-10 md:mt-10 mb-10 md:mb-10 z-10 w-full" ref={ref}>
          <img
            src={Profile}
            alt="My Profile"
            className={`rounded-md mx-auto w-2/3 lg:w-full transition duration-[3000ms] ${
              isVisible ? "opacity-100" : "opacity-0"
            }`}
            style={{
              background: darkMode ? "#222831" : "#eeeeee",
              boxShadow: darkMode
                ? "20px 20px 40px #1d222a, -20px -20px 40px #272e38"
                : "20px 20px 40px #cacaca, -20px -20px 40px #ffffff",
            }}
          />
          <div className="text-center mt-6">
            <h2
              className={`text-2xl text-[#222831] dark:text-[#FFD369] font-bold transition duration-[1500ms] ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-5 sm:translate-y-20"
              }`}
            >
              Julius Mari
            </h2>
            <p
              className={`text-lg text-gray-400 transition duration-[1500ms] ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-5 sm:translate-y-20"
              }`}
            >
              Web Developer
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
