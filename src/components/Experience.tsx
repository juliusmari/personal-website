import React, { useRef, useState } from "react";
import { useOnScreen } from "./Home";
import { BsBrush, BsCodeSlash, BsDatabase } from "react-icons/bs";

const Experience = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isVisible = useOnScreen(ref);
  const data = [
    {
      id: 1,
      icon: BsBrush,
      size: 50,
      title: "Front-End",
      technologies: ["Tailwind", "CSS", "Bootstrap", "SASS"],
    },
    {
      id: 2,
      icon: BsCodeSlash,
      size: 50,
      title: "Back-End",
      technologies: [
        "Go Lang",
        "gRPC",
        "Typescript",
        "Java",
        "Javascript",
        "Python",
        "C++",
        "PHP",
      ],
    },
    {
      id: 3,
      icon: BsDatabase,
      size: 50,
      title: "Database",
      technologies: ["Oracle", "MySQL", "PostgreSQL"],
    },
    // Add more objects for additional items in the list
  ];
  return (
    <div ref={ref} id="experience" className="min:h-screen w-full mt-20 py-5 ">
      <div className="max-w-screen-lg mx-auto p-4 b flex flex-col items-center justify-center w-full h-full">
        <div className="items-center flex flex-col">
          <h1
            className={`text-4xl  font-bold inline mb-6 transition duration-[1500ms] ${
              isVisible ? "opacity-100" : "opacity-0"
            }`}
          >
            Experience
          </h1>
          <p
            className={`py-6 transition font-semibold text-xl duration-[1500ms]  ${
              isVisible ? "opacity-100" : "opacity-0 "
            }`}
          >
            These are the technologies I've worked with.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 shadow-xl w-full">
          {data.map((item, index) => (
            <div
              className={`border-[1px] border-gray-200 flex flex-col items-center gap-4 py-10 ${
                index <= 1 ? "border-r-0" : ""
              }`}
              key={item.id}
            >
              <div className="p-4 rounded-full shadow-md">
                {React.createElement(item.icon, {
                  size: item.size,
                  // className: "",
                })}
              </div>
              <div>
                <span className="font-extrabold text-2xl ">{item.title}</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                {item.technologies.sort().map((technology) => (
                  <span className=" font-medium" key={technology}>
                    {technology}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
