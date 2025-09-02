import { Link } from "react-scroll";

import { RefObject, useEffect, useMemo, useRef, useState } from "react";
import Writer from "./Writer";
import { useDarkMode } from "../hooks/useDarkMode";

export function useOnScreen(ref: RefObject<HTMLElement>) {
  const [isIntersecting, setIntersecting] = useState(false);

  const observer = useMemo(
    () =>
      new IntersectionObserver(([entry]) =>
        setIntersecting(entry.isIntersecting)
      ),
    [ref]
  );

  useEffect(() => {
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return isIntersecting;
}

const MovingCircle = () => {
  const numberOfCircles = 20; // Number of circles to generate

  const circles = Array.from({ length: numberOfCircles }, (_, index) => {
    const randomTranslateX = Math.random() * 100; // Generate random value between 0 and 100
    const randomTranslateY = Math.random() * 100; // Generate random value between 0 and 100
    const animationDelay = Math.random() * 2; // Generate random animation delay between 0 and 2 seconds

    const animationStyle = {
      animationDelay: `${animationDelay}s`,
    };

    return (
      <div
        key={index}
        className="-z-0 absolute w-24 h-24 rounded-full bg-white border-colorPurple border-2 animate-move-up"
        style={{
          left: `${randomTranslateX}%`,
          top: `${randomTranslateY}%`,
          ...animationStyle,
        }}
      ></div>
    );
  });

  return <>{circles}</>;
};

const Home = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isVisible = useOnScreen(ref);
  const darkMode = useDarkMode();

  return (
    <div ref={ref} id="home" className=" h-fit sm:h-screen w-full z-10">
      {/* <MovingCircle />
			<style>
				{`
          @keyframes move-up {
            0% {
              transform: translateY(100vh) translateX(${Math.random() * 100}%);
            }
            100% {
              transform: translateY(-50%) translateX(${Math.random() * 100}%);
            }	
          }

          .animate-move-up {
            animation-name: move-up;
            animation-duration: 10s;
            animation-timing-function: linear;
            animation-iteration-count: infinite;
          }
        `}
			</style> */}
      <div className="max-w-screen-lg mx-auto flex flex-col items-center h-full px-4 md:flex-row">
        <div className="flex flex-col py-20 sm:py-0 justify-center items-center w-full h-full">
          <h1
            className={`text-6xl flex flex-col gap-2 sm:gap-6 sm:flex-row items-center md:text-8xl font-bold pb-2 transition duration-[1500ms] ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-5 sm:translate-x-20"
            }`}
          >
            <span>Julius Mari</span>
            <span>Chan</span>
          </h1>
          <h2
            className={`flex text-2xl md:text-3xl font-light pb-2  dark:italic dark:text-[#FFD369] transition duration-[500ms] ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-5 sm:translate-x-20"
            }`}
          >
            <Writer />
          </h2>
          <a
            href="https://drive.google.com/file/d/1cSpH7-hPIO1SItk0lw_zBzzAsOumy9HH/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className={`group rounded-md mt-10 w-fit px-6 py-3 my-2 flex items-center font-extrabold cursor-pointer transition duration-[300ms] hover:text-[#FFD369] ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-y-5 sm:translate-y-20"
            }`}
            style={{
              background: darkMode ? "#222831" : "#eeeeee",
              boxShadow: darkMode
                ? "4px 4px 8px #1d222a, -4px -4px 8px #272e38"
                : "4px 4px 8px #cacaca, -4px -4px 8px #ffffff",
            }}
          >
            RESUME
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
