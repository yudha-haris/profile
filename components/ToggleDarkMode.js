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
    if (theme === "dark") {
      setIsDarkMode(false);
      setTheme("light");
    } else {
      setIsDarkMode(true);
      setTheme("dark");
    }
  };

  return (
    <button
      onClick={handleToggle}
      className={`${className} ${
        isDarkMode ? "bg-blue-950 justify-start" : "bg-blue-400 justify-end"
      } w-12 rounded-2xl py-1 px-1 mx-6 my-4 lg:my-0 lg:mx-0 transition ease-in-out duration-300`}
    >
      {isDarkMode && <MdDarkMode color="white" size={"24px"} />}
      {!isDarkMode && <MdLightMode color="yellow" size={"24px"} />}
    </button>
  );
}
