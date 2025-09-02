import { useEffect, useState } from "react";
import { Icon } from "@iconify/react";

const ThemeToggle = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const theme = localStorage.getItem("theme");
    if (theme === "dark") setDarkMode(true);
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className="p-3 text-lg rounded-full hover:text-[#FFD369]"
      style={{
        borderRadius: "50%",
        background: darkMode ? "#222831" : "#eeeeee",
        boxShadow: darkMode
          ? "4px 4px 8px #1d222a, -4px -4px 8px #272e38"
          : "4px 4px 8px #cacaca, -4px -4px 8px #ffffff",
      }}
    >
      {!darkMode ? (
        <Icon icon="material-symbols:light-mode-rounded" />
      ) : (
        <Icon icon="material-symbols:dark-mode-rounded" />
      )}
    </button>
  );
};

export default ThemeToggle;
