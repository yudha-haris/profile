const MobileNavigation = ({isActive}) => {
  return (
    <nav
      className={`md:hidden ${
        isActive ? "" : "opacity-0 -translate-x-full"
      } absolute bg-white shadow-lg rounded-b-lg w-full right-0 top-full dark:bg-slate-950 ease-in duration-300`}
    >
      <ul className="block items-center">
        <li className="group">
          <a
            href="#home"
            className="text-lg font-medium text-dark dark:text-white py-4 px-8 flex hover:text-white hover:bg-primary"
          >
            About Me
          </a>
        </li>
        <li className="group">
          <a
            href="#portfolio"
            className="text-lg font-medium text-dark dark:text-white py-4 px-8 flex hover:text-white hover:bg-primary"
          >
            Projects
          </a>
        </li>
        <li className="group">
          <a
            href="#experience"
            className="text-lg font-medium text-dark dark:text-white py-4 px-8 flex hover:text-white hover:bg-primary rounded-b-xl"
          >
            Experiences
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default MobileNavigation