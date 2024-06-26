import { useTheme } from "next-themes";
import React, { useEffect, useState } from "react";
import { MdDarkMode, MdLightMode } from "react-icons/md";

export default function ToggleDarkMode({ className }) {
  const { theme, setTheme } = useTheme();

  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    if (theme === "light") {
      setIsDarkMode(false);
    } else {
      setIsDarkMode(true);
    }
  }, [theme]);

  const handleToggle = () => {
    if (theme === "light") {
      setIsDarkMode(true);
      setTheme("dark");
    } else {
      setIsDarkMode(false);
      setTheme("light");
    }
  };

  return (
    <button
      onClick={handleToggle}
      className={`${className} ${
        isDarkMode ? "bg-blue-950" : "bg-blue-400"
      } w-12 rounded-2xl py-1 px-1 mx-6 my-4 lg:my-0 lg:mx-0 transition ease-in-out duration-300`}
    >
      <div
        className={`${className} ${isDarkMode ? "translate-x-0" : "translate-x-4"} ease-in-out duration-500`}
      >
        {isDarkMode && <MdDarkMode color="white" size={"24px"} />}
        {!isDarkMode && <MdLightMode color="yellow" size={"24px"} />}
      </div>
    </button>
  );
}
