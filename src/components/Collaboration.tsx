import { useRef, useState } from "react";
import OneClickDesign from "../assets/Portfolio/1clickdesign.png";
import MyTopArts from "../assets/Portfolio/mytoparts.png";
import Kalma from "../assets/Portfolio/kalma.png";
import Room from "../assets/Portfolio/room.png";
import SnapToApp from "../assets/Portfolio/snaptoapp.png";
import VirtualMarketCenter from "../assets/Portfolio/virtualmarketcenter.png";

import { useOnScreen } from "./Home";
import { useDarkMode } from "../hooks/useDarkMode";

const Collaboration = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isVisible = useOnScreen(ref);
  const [showAlert, setShowAlert] = useState(true);
  const darkMode = useDarkMode();

  const portfolioList = [
    {
      id: 1,
      title: "1ClickDesign",
      role: "Software Engineer",
      description:
        "1ClickDesign is a clean, conversion-focused landing page I created to showcase design services in a simple and engaging way. The page highlights key features, clear visuals, and strong calls to action, making it easy for visitors to explore and connect.",
      tech: ["Next.js", "Tailwind", "Framer Motion"],
      src: OneClickDesign,
      link: "https://1clickdesign.com/",
      isActive: true,
      date: "2023", // ✅ added
    },
    {
      id: 2,
      title: "My Top Arts",
      role: "Frontend Developer",
      description:
        "An online marketplace app for showcasing and selling artworks, helping artists connect with buyers through a simple and engaging platform.",
      tech: ["Vue", "Tailwind", "Three.js"],
      src: MyTopArts,
      link: "https://mytoparts.com/",
      isActive: true,
    },
    {
      id: 3,
      title: "Virtual Market Center",
      role: "Frontend Developer",
      description:
        "Virtual Market Center (VMC) is a digital platform offering immersive 3D showroom tours, tools for product and inventory management, analytics, and seamless buyer-seller engagement. It's intended for the residential and commercial furnishings industry.",
      tech: ["Vue", "Tailwind", "TypeScript"],
      src: VirtualMarketCenter,
      link: "https://virtualmarketcenter.com/",
      isActive: false,
    },
    {
      id: 4,
      title: "1ClickDesign Sectional Room",
      role: "Mobile Developer",
      description:
        "An interactive platform for showcasing furniture and products inside a virtual room. It allows users to explore items through 3D models, videos, and images, creating a realistic and engaging product viewing experience.",
      tech: ["HTML", "CSS", "JavaScript", "Model Viewer"],
      src: Room,
      link: "https://room.1clickdesign.com/",
      isActive: false,
    },
    {
      id: 5,
      title: "Snap to App",
      role: "Full Stack Developer",
      description:
        "A platform that enables users to quickly build and deploy Progressive Web Apps (PWAs), combining a React frontend with a Go backend and PostgreSQL database for speed, reliability, and scalability.",
      tech: ["React", "PostgreSQL", "Go"],
      src: SnapToApp,
      link: "https://www.snaptoapp.com/",
      isActive: false,
    },
    {
      id: 6,
      title: "KALMA",
      role: "Full Stack Developer",
      description:
        "KALMA (Kalinga at Agarang Lunas Mobile Application) is a health and wellness app designed to guide users with first aid practices and emergency response information. The app provides easy-to-follow steps for giving immediate care in various accident scenarios while ensuring user privacy and data security.",
      tech: ["Android Studio"],
      src: Kalma,
      link: "",
      isActive: false,
    },
  ];

  return (
    <div id="collaboration" className="w-full py-16">
      <div
        ref={ref}
        className="max-w-screen-xl mx-auto flex flex-col justify-center w-full px-6"
      >
        {/* Section Header */}
        <div className="flex flex-col items-center text-center pb-8">
          <h1
            className={`text-4xl md:text-5xl font-extrabold mb-4 transition duration-[1500ms] ${
              isVisible ? "opacity-100" : "opacity-0"
            }`}
          >
            Highlights
          </h1>
          <p
            className={`transition font-light text-xl duration-[1500ms] italic  ${
              isVisible ? "opacity-100" : "opacity-0 "
            }`}
          >
            Proud to team up with amazing people and brands to build impactful
            digital experiences.
          </p>
        </div>

        {/* Alert Message */}
        {showAlert && (
          <div className=" flex justify-center items-center gap-4 mb-8 text-sm p-4 rounded-lg ">
            <p className="text-center max-w-2xl">
              ⚠️ Some external project links might not be available anymore
            </p>
            <button
              onClick={() => setShowAlert(false)}
              className=" top-2 right-3 text-xl font-bold"
            >
              ×
            </button>
          </div>
        )}
        {/* Portfolio List */}
        <div
          className={`grid md:grid-cols-2 gap-8 transition duration-[2500ms] ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {portfolioList.map(
            ({
              id,
              title,
              role,
              description,
              tech,
              src,
              link,
              isActive,
              date,
            }) => (
              <div
                key={id}
                className=" rounded-2xl overflow-hidden transform hover:-translate-y-2 transition flex flex-col duration-300"
                style={{
                  background: darkMode ? "#222831" : "#eeeeee",
                  boxShadow: darkMode
                    ? "4px 4px 8px #1d222a, -4px -4px 8px #272e38"
                    : "4px 4px 8px #cacaca, -4px -4px 8px #ffffff",
                }}
              >
                {/* Image */}
                <a href={link} target="_blank" rel="noreferrer">
                  <img
                    src={src}
                    alt={title}
                    className="w-full h-72 object-contain "
                  />
                </a>
                {/* Content */}
                <div className="p-6 flex flex-col justify-around h-full ">
                  <div className="h-full ">
                    <div className="flex justify-between items-center">
                      <h2 className="text-2xl font-bold mb-2">{title}</h2>
                    </div>
                    <p className="text-sm dark:text-[#FFD369] font-medium mb-3">
                      Role: {role}
                    </p>
                    <p className=" mb-4 text-justify">{description}</p>

                    {/* Tech stack */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {tech.map((t, idx) => (
                        <span
                          key={idx}
                          className="text-xs px-3 py-1 rounded-full font-medium"
                          style={{
                            background: darkMode ? "#222831" : "#eeeeee",
                            boxShadow: darkMode
                              ? "4px 4px 8px #1d222a, -4px -4px 8px #272e38"
                              : "4px 4px 8px #cacaca, -4px -4px 8px #ffffff",
                          }}
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Visit Website Button */}
                  <div>
                    {isActive && (
                      <a href={link} target="_blank" rel="noreferrer">
                        <button
                          className="px-5 py-2 w-full font-semibold rounded-xl transition duration-200"
                          style={{
                            background: darkMode ? "#222831" : "#eeeeee",
                            boxShadow: darkMode
                              ? "4px 4px 8px #1d222a, -4px -4px 8px #272e38"
                              : "4px 4px 8px #cacaca, -4px -4px 8px #ffffff",
                          }}
                        >
                          Visit Project
                        </button>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            )
          )}
        </div>

        {/* Empty State */}
        {portfolioList.length === 0 && (
          <div className="text-center py-12 text-gray-500 dark:text-gray-400">
            🚧 No collaborations yet. Stay tuned for upcoming projects!
          </div>
        )}
      </div>
    </div>
  );
};

export default Collaboration;
