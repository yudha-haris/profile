import React, { useState } from "react";
import { MdDarkMode, MdLightMode } from "react-icons/md";

export default function ToggleDarkMode() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const handleToggle = () => {
    setIsDarkMode((prevState) => !prevState);
  };

  return (
    <button
      onClick={handleToggle}
      className={`flex ${
        isDarkMode ? "bg-blue-950" : "bg-blue-400"
      }  rounded-2xl py-1 px-1 mx-6 my-4 lg:my-0 lg:mx-0 transition ease-in-out duration-300`}
    >
      {!isDarkMode && <div className="w-6" />}
      {isDarkMode && <MdDarkMode color="white" size={"24px"} />}
      {!isDarkMode && <MdLightMode color="yellow" size={"24px"} />}
      {isDarkMode && <div className="w-6" />}
    </button>
  );
}
