import React, { useRef, useState } from "react";
import { useOnScreen } from "./Home";
import { BsBrush, BsCodeSlash, BsDatabase } from "react-icons/bs";
import { Icon } from "@iconify/react";
import { useDarkMode } from "../hooks/useDarkMode";

const Techstacks = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isVisible = useOnScreen(ref);
  const darkMode = useDarkMode();

  const data = [
    {
      id: 1,
      icon: "solar:programming-broken",
      title: "Programming Languages",
      technologies: [
        { name: "Java", icon: "hugeicons:java" },
        { name: "JavaScript", icon: "simple-icons:javascript" },
        { name: "TypeScript", icon: "simple-icons:typescript" },
        { name: "PHP", icon: "simple-icons:php" },
      ],
    },
    {
      id: 2,
      icon: "mdi:electron-framework",
      title: "Frameworks & Databases",
      technologies: [
        { name: "Vue.js", icon: "simple-icons:vuedotjs" },
        { name: "React", icon: "simple-icons:react" },
        { name: "Next.js", icon: "simple-icons:nextdotjs" },
        { name: "Express.js", icon: "simple-icons:express" },
        { name: "TailwindCSS", icon: "simple-icons:tailwindcss" },
        { name: "Bootstrap", icon: "simple-icons:bootstrap" },
        { name: "ShadCN/UI", icon: "simple-icons:shadcnui" },
        { name: "Axios", icon: "simple-icons:axios" },
        { name: "MySQL", icon: "simple-icons:mysql" },
        { name: "PostgreSQL", icon: "simple-icons:postgresql" },
        { name: "MongoDB", icon: "simple-icons:mongodb" },
      ],
    },
    {
      id: 3,
      icon: "guidance:tools",
      title: "Tools & Platforms",
      technologies: [
        { name: "Bitbucket", icon: "simple-icons:bitbucket" },
        { name: "Jira", icon: "simple-icons:jira" },
        { name: "GitHub", icon: "simple-icons:github" },
        { name: "Git", icon: "simple-icons:git" },
        { name: "Shapespark", icon: "mdi:cube-scan" }, // no simple-icons, picked fallback
        { name: "AWS", icon: "simple-icons:amazonaws" },
        { name: "ModelViewer", icon: "mdi:cube-outline" }, // fallback
        { name: "Node.js", icon: "simple-icons:nodedotjs" },
        { name: "ChatGPT", icon: "simple-icons:openai" },
        { name: "Claude AI", icon: "mdi:robot-happy-outline" },
        { name: "FireCrawl", icon: "mdi:fire" },
      ],
    },
    // Add more objects for additional items in the list
  ];
  return (
    <div
      ref={ref}
      id="experience"
      className="min-h-fit lg:min-h-screen w-full mt-20 py-5 flex items-center justify-center "
    >
      <div className="max-w-screen-xl mx-auto p-4 b flex flex-col items-center text-center justify-center w-full h-full">
        <div className="items-center flex flex-col gap-3">
          <h1
            className={`text-4xl font-bold inline  transition duration-[1500ms] ${
              isVisible ? "opacity-100" : "opacity-0"
            }`}
          >
            Tech Stack
          </h1>
          <p
            className={`transition font-light text-xl duration-[1500ms] italic  ${
              isVisible ? "opacity-100" : "opacity-0 "
            }`}
          >
            A collection of programming languages, frameworks, and tools I've
            worked with
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 w-full">
          {data.map((item, index) => (
            <div
              className={` flex flex-col items-center gap-4 py-10 `}
              key={item.id}
            >
              {/* <div className="p-4 rounded-full shadow-md">
                <Icon icon={item.icon} className=" text-6xl text-white" />
              </div> */}
              <div>
                <span className=" font-light text-xl ">{item.title}</span>
              </div>
              <div className="grid grid-cols-3 sm:grid-cols-4 gap-6 mt-4 p-4">
                {item.technologies.map((technology, index) => (
                  <div
                    key={`${item.id}-${index}`}
                    className="flex flex-col items-center gap-2  text-center"
                  >
                    <div
                      className="p-2 rounded-full hover:text-[#FFD369]"
                      style={{
                        background: darkMode ? "#222831" : "#eeeeee",
                        boxShadow: darkMode
                          ? "4px 4px 8px #1d222a, -4px -4px 8px #272e38"
                          : "4px 4px 8px #cacaca, -4px -4px 8px #ffffff",
                      }}
                    >
                      <Icon icon={technology.icon} className="text-3xl" />
                    </div>
                    <span className="text-sm font-light">
                      {typeof technology === "string"
                        ? technology
                        : technology.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Techstacks;
