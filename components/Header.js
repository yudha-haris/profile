import React, { useState } from "react";
import Image from "next/image";

function Header() {
  const [isActive, setIsActive] = useState(false);

  const handleToggle = () => {
    setIsActive((prevState) => !prevState);
  };
  return (
    <header className="bg-slate-100 opacity-90 backdrop-blur-lg shadow-md fixed top-0 left-0 w-full flex items-center z-10">
      <div className="container">
        <div className="flex items-center justify-between relative px-4 lg:px-0">
          <div className="flex items-center">
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
                className="font-bold text-lg text-primary block py-6"
              >
                yudha-haris
              </a>
            </div>
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
                } transition duration-300 ease-in-out`}
              />
              <span
                className={`w-[30px] h-[2px] my-2 block bg-dark ${
                  isActive ? "scale-0" : ""
                } transition duration-300 ease-in-out`}
              />
              <span
                className={`w-[30px] h-[2px] my-2 block bg-dark origin-top-left ${
                  isActive ? "-rotate-45" : ""
                } transition duration-300 ease-in-out`}
              />
            </button>
            <nav
              id="nav-menu"
              className={`${
                isActive ? "" : "hidden"
              } absolute py-5 bg-white shadow-lg rounded-lg w-full right-0 top-full 
                md:block md:static md:bg-transparent md:max-w-full md:shadow-none md:rounded-none`}
            >
              <ul className="block md:flex">
                <li className="group">
                  <a
                    href="#home"
                    className="text-lg font-medium text-dark py-2 mx-8 flex group-hover:text-primary"
                  >
                    Tentang Saya
                  </a>
                </li>
                <li className="group">
                  <a
                    href="#portfolio"
                    className="text-lg font-medium text-dark py-2 mx-8 flex group-hover:text-primary"
                  >
                    Portfolio
                  </a>
                </li>
                <li className="group">
                  <a
                    href="#experience"
                    className="text-lg font-medium text-dark py-2 mx-8 flex group-hover:text-primary"
                  >
                    Pengalaman
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
