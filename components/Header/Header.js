import React, { useState } from "react";
import Image from "next/image";
import ToggleDarkMode from "./ToggleDarkMode";
import MobileNavigation from "./MobileNavigation";
import Navigation from "./Navigation";

function Header() {
  const [isActive, setIsActive] = useState(false);

  const handleToggle = () => {
    setIsActive((prevState) => !prevState);
  };
  return (
    <header className="bg-slate-100 opacity-95 lg:opacity-90 backdrop-blur-lg shadow-md fixed top-0 left-0 w-full flex items-center z-10 dark:bg-slate-950">
      <div className="w-full mx-auto lg:max-w-screen-lg xl:max-w-screen-xl 2xl:max-w-screen-2xl">
        <div className="flex items-center justify-between relative px-4 lg:px-0">
          <div className="flex items-center px-4">
            <Image
              src="/profil-modified.png"
              width={32}
              height={32}
              alt="Profile Image"
              className="lg:hidden"
            />
            <div className="px-4">
              <a
                href="#home"
                className="font-bold text-lg text-primary block py-6 dark:text-cyan-100"
              >
                yudha-haris
              </a>
            </div>
          </div>

          <div className="flex">
            <div>
              <ToggleDarkMode className="md:hidden flex" />
            </div>

            <div className="flex items-center px-4">
              <button
                id="hamburger"
                name="hamburger"
                type="button"
                className="block absolute right-4 md:hidden"
                onClick={handleToggle}
              >
                <span
                  className={`w-[30px] h-[2px] my-2 block bg-dark origin-top-left ${
                    isActive ? "rotate-45" : ""
                  } transition duration-300 ease-in-out dark:bg-white`}
                />
                <span
                  className={`w-[30px] h-[2px] my-2 block bg-dark ${
                    isActive ? "scale-0" : ""
                  } transition duration-300 ease-in-out dark:bg-white`}
                />
                <span
                  className={`w-[30px] h-[2px] my-2 block bg-dark origin-top-left ${
                    isActive ? "-rotate-45" : ""
                  } transition duration-300 ease-in-out dark:bg-white`}
                />
              </button>

              <div>
                <MobileNavigation isActive={isActive} />
                <Navigation />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
