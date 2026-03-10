// import { useRef, useState } from "react";
// import OneClickDesign from "../assets/Portfolio/1clickdesign.png";
// import MyTopArts from "../assets/Portfolio/mytoparts.png";
// import Kalma from "../assets/Portfolio/kalma.png";
// import Room from "../assets/Portfolio/room.png";
// import SnapToApp from "../assets/Portfolio/snaptoapp.png";
// import VirtualMarketCenter from "../assets/Portfolio/virtualmarketcenter.png";

// import { useOnScreen } from "./Home";
// import { useDarkMode } from "../hooks/useDarkMode";

// const Collaboration = () => {
//   const ref = useRef<HTMLDivElement>(null);
//   const isVisible = useOnScreen(ref);
//   const [showAlert, setShowAlert] = useState(true);
//   const darkMode = useDarkMode();

//   const portfolioList = [
//     {
//       id: 1,
//       title: "1ClickDesign",
//       role: "Software Engineer",
//       description:
//         "1ClickDesign is a clean, conversion-focused landing page I created to showcase design services in a simple and engaging way. The page highlights key features, clear visuals, and strong calls to action, making it easy for visitors to explore and connect.",
//       tech: ["Next.js", "Tailwind", "Framer Motion"],
//       src: OneClickDesign,
//       link: "https://1clickdesign.com/",
//       isActive: true,
//       date: "2023", // ✅ added
//     },
//     {
//       id: 2,
//       title: "My Top Arts",
//       role: "Frontend Developer",
//       description:
//         "An online marketplace app for showcasing and selling artworks, helping artists connect with buyers through a simple and engaging platform.",
//       tech: ["Vue", "Tailwind", "Three.js"],
//       src: MyTopArts,
//       link: "https://mytoparts.com/",
//       isActive: true,
//     },
//     {
//       id: 3,
//       title: "Virtual Market Center",
//       role: "Frontend Developer",
//       description:
//         "Virtual Market Center (VMC) is a digital platform offering immersive 3D showroom tours, tools for product and inventory management, analytics, and seamless buyer-seller engagement. It's intended for the residential and commercial furnishings industry.",
//       tech: ["Vue", "Tailwind", "TypeScript"],
//       src: VirtualMarketCenter,
//       link: "https://virtualmarketcenter.com/",
//       isActive: false,
//     },
//     {
//       id: 4,
//       title: "1ClickDesign Sectional Room",
//       role: "Mobile Developer",
//       description:
//         "An interactive platform for showcasing furniture and products inside a virtual room. It allows users to explore items through 3D models, videos, and images, creating a realistic and engaging product viewing experience.",
//       tech: ["HTML", "CSS", "JavaScript", "Model Viewer"],
//       src: Room,
//       link: "https://room.1clickdesign.com/",
//       isActive: false,
//     },
//     {
//       id: 5,
//       title: "Snap to App",
//       role: "Full Stack Developer",
//       description:
//         "A platform that enables users to quickly build and deploy Progressive Web Apps (PWAs), combining a React frontend with a Go backend and PostgreSQL database for speed, reliability, and scalability.",
//       tech: ["React", "PostgreSQL", "Go"],
//       src: SnapToApp,
//       link: "https://www.snaptoapp.com/",
//       isActive: false,
//     },
//     {
//       id: 6,
//       title: "KALMA",
//       role: "Full Stack Developer",
//       description:
//         "KALMA (Kalinga at Agarang Lunas Mobile Application) is a health and wellness app designed to guide users with first aid practices and emergency response information. The app provides easy-to-follow steps for giving immediate care in various accident scenarios while ensuring user privacy and data security.",
//       tech: ["Android Studio"],
//       src: Kalma,
//       link: "",
//       isActive: false,
//     },
//   ];

//   return (
//     <div id="collaboration" className="w-full py-16">
//       <div
//         ref={ref}
//         className="max-w-screen-xl mx-auto flex flex-col justify-center w-full px-6"
//       >
//         {/* Section Header */}
//         <div className="flex flex-col items-center text-center pb-8">
//           <h1
//             className={`text-4xl md:text-5xl font-extrabold mb-4 transition duration-[1500ms] ${
//               isVisible ? "opacity-100" : "opacity-0"
//             }`}
//           >
//             Highlights
//           </h1>
//           <p
//             className={`transition font-light text-xl duration-[1500ms] italic  ${
//               isVisible ? "opacity-100" : "opacity-0 "
//             }`}
//           >
//             Proud to team up with amazing people and brands to build impactful
//             digital experiences.
//           </p>
//         </div>

//         {/* Alert Message */}
//         {showAlert && (
//           <div className=" flex justify-center items-center gap-4 mb-8 text-sm p-4 rounded-lg ">
//             <p className="text-center max-w-2xl">
//               ⚠️ Some external project links might not be available anymore
//             </p>
//             <button
//               onClick={() => setShowAlert(false)}
//               className=" top-2 right-3 text-xl font-bold"
//             >
//               ×
//             </button>
//           </div>
//         )}
//         {/* Portfolio List */}
//         <div
//           className={`grid md:grid-cols-2 gap-8 transition duration-[2500ms] ${
//             isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
//           }`}
//         >
//           {portfolioList.map(
//             ({
//               id,
//               title,
//               role,
//               description,
//               tech,
//               src,
//               link,
//               isActive,
//               date,
//             }) => (
//               <div
//                 key={id}
//                 className=" rounded-2xl overflow-hidden transform hover:-translate-y-2 transition flex flex-col duration-300"
//                 style={{
//                   background: darkMode ? "#222831" : "#eeeeee",
//                   boxShadow: darkMode
//                     ? "4px 4px 8px #1d222a, -4px -4px 8px #272e38"
//                     : "4px 4px 8px #cacaca, -4px -4px 8px #ffffff",
//                 }}
//               >
//                 {/* Image */}
//                 <a href={link} target="_blank" rel="noreferrer">
//                   <img
//                     src={src}
//                     alt={title}
//                     className="w-full h-72 object-contain "
//                   />
//                 </a>
//                 {/* Content */}
//                 <div className="p-6 flex flex-col justify-around h-full ">
//                   <div className="h-full ">
//                     <div className="flex justify-between items-center">
//                       <h2 className="text-2xl font-bold mb-2">{title}</h2>
//                     </div>
//                     <p className="text-sm dark:text-[#FFD369] font-medium mb-3">
//                       Role: {role}
//                     </p>
//                     <p className=" mb-4 text-justify">{description}</p>

//                     {/* Tech stack */}
//                     <div className="flex flex-wrap gap-2 mb-4">
//                       {tech.map((t, idx) => (
//                         <span
//                           key={idx}
//                           className="text-xs px-3 py-1 rounded-full font-medium"
//                           style={{
//                             background: darkMode ? "#222831" : "#eeeeee",
//                             boxShadow: darkMode
//                               ? "4px 4px 8px #1d222a, -4px -4px 8px #272e38"
//                               : "4px 4px 8px #cacaca, -4px -4px 8px #ffffff",
//                           }}
//                         >
//                           {t}
//                         </span>
//                       ))}
//                     </div>
//                   </div>

//                   {/* Visit Website Button */}
//                   <div>
//                     {isActive && (
//                       <a href={link} target="_blank" rel="noreferrer">
//                         <button
//                           className="px-5 py-2 w-full font-semibold rounded-xl transition duration-200"
//                           style={{
//                             background: darkMode ? "#222831" : "#eeeeee",
//                             boxShadow: darkMode
//                               ? "4px 4px 8px #1d222a, -4px -4px 8px #272e38"
//                               : "4px 4px 8px #cacaca, -4px -4px 8px #ffffff",
//                           }}
//                         >
//                           Visit Project
//                         </button>
//                       </a>
//                     )}
//                   </div>
//                 </div>
//               </div>
//             )
//           )}
//         </div>

//         {/* Empty State */}
//         {portfolioList.length === 0 && (
//           <div className="text-center py-12 text-gray-500 dark:text-gray-400">
//             🚧 No collaborations yet. Stay tuned for upcoming projects!
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Collaboration;

import { useRef, useState } from "react";
// import OneClickDesign from "../assets/Portfolio/1clickdesign.png";
// import MyTopArts from "../assets/Portfolio/mytoparts.png";
// import Kalma from "../assets/Portfolio/kalma.png";
// import Room from "../assets/Portfolio/room.png";
// import SnapToApp from "../assets/Portfolio/snaptoapp.png";
// import VirtualMarketCenter from "../assets/Portfolio/virtualmarketcenter.png";
import VirtualMarketCenterLanding from "../assets/Portfolio/new/virtualmarketcenterlanding.png";
import Akings from "../assets/Portfolio/new/akings.png";
import VirtualMarketCenterPlatform from "../assets/Portfolio/new/platform.png";
import SnapToApp from "../assets/Portfolio/new/snaptoapp.png";

import { useOnScreen } from "./Home";
import { useDarkMode } from "../hooks/useDarkMode";

const portfolioList = [
  {
    id: "01",
    title: "Akings Industrial Machinery Corp",
    role: "Full-stack Developer",
    type: "Product Catalog Landing Page",
    date: "2026",
    description:
    "Showcases products and company info in a sleek, user-friendly catalog.",
    tech: ["Vue", "Node.js", "MongoDB"],
    src: Akings,
    link: "https://akingsindustrialmachinerycorp.com/",
    isActive: true,
  },
  {
    id: "02",
    title: "Virtual Market Center",
    role: "Front-end Developer",
    type: "Landing Page",
    date: "2025",
    description:
     "Interactive landing page showcasing 3D products and immersive environments.",
    tech: ["React", "Tailwind", "ShadCn"],
    src: VirtualMarketCenterLanding,
    link: "https://virtualmarketcenter.com/",
    isActive: true,
  },
  {
    id: "03",
    title: "Virtual Market Center",
    role: "Full-stack Developer",
    type: "Marketing Platform",
    date: "2026",
    description: "Full-featured platform with 3D walkthroughs, analytics, video conferencing, and email tools for agents and customers.",    
    tech: ["Vue", "Node.js", "MongoDB"],
    src: VirtualMarketCenterPlatform,
    link: "https://platform.virtualmarketcenter.com/",
    isActive: true,
  },
  {
    id: "04",
    title: "Snap to App",
    role: "Full-stack Intern",
    type: "PWA builder platform",
    date: "2023",
    description: "Empowers users to create, customize, and preview their own PWAs instantly.",
    tech: ["React", "Golang", "PostgreSQL"],
    src: SnapToApp,
    link: "https://getstartednow.snaptoapp.com/",
    isActive: true,
  },
];

const filters = ["All", "Full-Stack", "Frontend", "Mobile"];

const typeColors = {
  "Full-Stack": "bg-zinc-900 text-white dark:bg-white dark:text-zinc-900",
  Frontend: "bg-blue-600 text-white",
  Mobile: "bg-emerald-600 text-white",
};

const Collaboration = () => {
  const ref = useRef(null);
  const isVisible = useOnScreen(ref);
  const [showAlert, setShowAlert] = useState(true);
  const [activeFilter, setActiveFilter] = useState("All");
  const [hovered, setHovered] = useState(null);
  const darkMode = useDarkMode();

  const filtered =
    activeFilter === "All"
      ? portfolioList
      : portfolioList.filter((p) => p.type === activeFilter);

  return (
    <section
      id="collaboration"

    >
      <div
        ref={ref}
        className="max-w-screen-xl mx-auto px-6 md:px-12 lg:px-16"
      >
        {/* ── Header ── */}
        <div
          className={`mb-14 flex flex-col gap-6 md:flex-row md:items-end md:justify-between transition-all duration-[1200ms] ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <div   className={`text-center w-full `}>

            <h2
              className={`text-5xl md:text-7xl font-black leading-none tracking-tight ${
                darkMode ? "text-white" : "text-zinc-900"
              }`}
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              Highlights
            </h2>
            <p
              className={`mt-3 text-xl  font-light italic ${
                darkMode ? "text-zinc-400" : "text-zinc-500"
              }`}
            >
Creating impactful digital experiences for people and brands through modern web development.
            </p>
          </div>

          {/* Filter Pills */}
          {/* <div className="flex flex-wrap gap-2">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setActiveFilter(f)}
                className={`rounded-full border px-4 py-1.5 text-xs font-semibold uppercase tracking-widest transition-all duration-200 ${
                  activeFilter === f
                    ? darkMode
                      ? "border-white bg-white text-zinc-900"
                      : "border-zinc-900 bg-zinc-900 text-white"
                    : darkMode
                    ? "border-zinc-600 text-zinc-400 hover:border-zinc-300 hover:text-zinc-200"
                    : "border-zinc-300 text-zinc-500 hover:border-zinc-600 hover:text-zinc-800"
                }`}
              >
                {f}
              </button>
            ))}
          </div> */}
        </div>

        {/* ── Alert ── */}
        {/* {showAlert && (
          <div
            className={`flex justify-between items-center mb-10 px-5 py-3 rounded-xl text-sm border ${
              darkMode
                ? "border-zinc-700 bg-zinc-800/60 text-zinc-400"
                : "border-zinc-200 bg-white/70 text-zinc-500"
            }`}
          >
            <p>⚠️ Some external project links might no longer be available.</p>
            <button
              onClick={() => setShowAlert(false)}
              className="ml-4 text-lg font-bold opacity-50 hover:opacity-100 transition"
            >
              ×
            </button>
          </div>
        )} */}

        {/* ── Grid ── */}
        <div
          className={`grid md:grid-cols-2 lg:grid-cols-3 gap-5 transition-all duration-[1500ms] ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {filtered.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              hovered={hovered}
              setHovered={setHovered}
              darkMode={darkMode}
            />
          ))}
        </div>

        {/* ── Empty State ── */}
        {filtered.length === 0 && (
          <div
            className={`text-center py-16 text-sm ${
              darkMode ? "text-zinc-600" : "text-zinc-400"
            }`}
          >
            🚧 No projects in this category yet. Stay tuned!
          </div>
        )}

        {/* ── Count ── */}
        <p
          className={`mt-10 text-center text-xs uppercase tracking-widest ${
            darkMode ? "text-zinc-600" : "text-zinc-400"
          }`}
        >
          {filtered.length} project{filtered.length !== 1 ? "s" : ""} shown
        </p>
      </div>
    </section>
  );
};

/* ─────────────────────────────────────────── */
/*  Project Card                               */
/* ─────────────────────────────────────────── */
function ProjectCard({ project, hovered, setHovered, darkMode }) {
  const { id, title, role, type, date, description, tech, src, link, isActive } =
    project;

  const isHovered = hovered === id;
  const isDimmed = hovered && hovered !== id;

  return (
    <div
      onMouseEnter={() => setHovered(id)}
      onMouseLeave={() => setHovered(null)}
      className={`relative flex flex-col rounded-2xl overflow-hidden border transition-all duration-300 ${
        darkMode ? "border-zinc-700/60 bg-[#222831]" : "border-zinc-200 bg-white"
      } ${isHovered ? "scale-[1.02] shadow-2xl" : "shadow-sm"} ${
        isDimmed ? "opacity-40" : "opacity-100"
      }`}
       style={{
         transition: "all 0.3s cubic-bezier(0.4,0,0.2,1)",
                            background: darkMode ? "#222831" : "#eeeeee",
                            boxShadow: darkMode
                              ? "4px 4px 8px #1d222a, -4px -4px 8px #272e38"
                              : "4px 4px 8px #cacaca, -4px -4px 8px #ffffff",
                          }}
    >
      {/* ── Image ── */}
      <div className="relative overflow-hidden h-52 bg-zinc-100 dark:bg-zinc-800">
        <img
          src={src}
          alt={title}
          className={`w-full h-full object-cover transition-transform duration-500 ${
            isHovered ? "scale-105" : "scale-100"
          }`}
        />
        {/* Live badge */}
        {isActive && (
          <span className="absolute top-3 left-3 flex items-center gap-1.5 rounded-full bg-emerald-500 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-white shadow">
            <span className="h-1.5 w-1.5 rounded-full bg-white animate-pulse" />
            Live
          </span>
        )}
      </div>

      {/* ── Content ── */}
      <div className="flex flex-col flex-1 p-6 gap-4">
        {/* Top meta row */}
        <div className="flex items-center justify-between">
          <span
            className={`text-[10px] font-bold tracking-[0.25em] uppercase ${
              darkMode ? "text-zinc-600" : "text-zinc-300"
            }`}
          >
            {id}
          </span>
          <div className="flex items-center gap-2">
            <span
              className={`rounded-full px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider ${
                typeColors[type] ?? "bg-zinc-100 text-zinc-600"
              }`}
            >
              {type}
            </span>
            <span
              className={`text-[10px] ${
                darkMode ? "text-zinc-600" : "text-zinc-300"
              }`}
            >
              {date}
            </span>
          </div>
        </div>

        {/* Title + role */}
        <div>
          <h3
            className={`text-xl font-black leading-tight tracking-tight transition-colors ${
              isHovered
                ? "text-blue-500"
                : darkMode
                ? "text-white"
                : "text-zinc-900"
            }`}
            style={{ fontFamily: "'Syne', sans-serif" }}
          >
            {title}
          </h3>
          <p
            className={`mt-0.5 text-xs font-semibold uppercase tracking-wider ${
              darkMode ? "text-[#FFD369]" : "text-blue-600"
            }`}
          >
            {role}
          </p>
        </div>

        {/* Description */}
        <p
          className={`text-sm leading-relaxed flex-1 ${
            darkMode ? "text-zinc-400" : "text-zinc-500"
          }`}
        >
          {description}
        </p>

        {/* Tech tags */}
        <div className="flex flex-wrap gap-1.5">
          {tech.map((t, idx) => (
            <span
              key={idx}
              className={`rounded-md px-2.5 py-0.5 text-[10px] font-medium ${
                darkMode
                  ? "bg-zinc-700/60 text-zinc-400"
                  : "bg-zinc-100 text-zinc-500"
              }`}
            >
              {t}
            </span>
          ))}
        </div>

        {/* CTA */}
        <div className="flex items-center justify-between pt-2 border-t border-dashed border-zinc-200 dark:border-zinc-700">
          {isActive && link ? (
            <a
              href={link}
              target="_blank"
              rel="noreferrer"
              className={`text-xs font-semibold uppercase tracking-widest transition-colors ${
                darkMode
                  ? "text-zinc-400 hover:text-white"
                  : "text-zinc-500 hover:text-zinc-900"
              }`}
            >
              Visit Project →
            </a>
          ) : (
            <span
              className={`text-xs uppercase tracking-widest ${
                darkMode ? "text-zinc-700" : "text-zinc-300"
              }`}
            >
              {link ? "Link unavailable" : "No link"}
            </span>
          )}

          {/* Arrow icon button */}
          {isActive && link && (
            <div
              className={`flex h-7 w-7 items-center justify-center rounded-full border transition-all duration-300 ${
                isHovered
                  ? "border-blue-600 bg-blue-600 text-white"
                  : darkMode
                  ? "border-zinc-600 bg-zinc-700 text-zinc-400"
                  : "border-zinc-200 bg-zinc-50 text-zinc-400"
              }`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="11"
                height="11"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className={`transition-transform duration-300 ${
                  isHovered ? "translate-x-0.5 -translate-y-0.5" : ""
                }`}
              >
                <line x1="7" y1="17" x2="17" y2="7" />
                <polyline points="7 7 17 7 17 17" />
              </svg>
            </div>
          )}
        </div>
      </div>

      {/* Bottom sweep line on hover */}
      <div
        className={`absolute bottom-0 left-0 h-0.5 bg-blue-600 transition-all duration-500 ${
          isHovered ? "w-full" : "w-0"
        }`}
      />
    </div>
  );
}

export default Collaboration;