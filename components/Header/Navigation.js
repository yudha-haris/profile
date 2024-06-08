import ToggleDarkMode from "./ToggleDarkMode";

export default function Navigation() {
  return (
    <nav
      className={`hidden right-0 top-full dark:bg-slate-950
      md:block static bg-transparent max-w-full `}
    >
      <ul className="flex items-center">
        <li className="group">
          <ToggleDarkMode className="flex" />
        </li>
        <li className="group">
          <a
            href="#home"
            className="text-lg font-medium text-dark text-center dark:text-white py-4 pr-8 lg:px-8 flex group-hover:text-primary hover:bg-transparent "
          >
            About Me
          </a>
        </li>
        <li className="group">
          <a
            href="#portfolio"
            className="text-lg font-medium text-dark dark:text-white py-4 px-8 flex group-hover:text-primary hover:bg-transparent "
          >
            Projects
          </a>
        </li>
        <li className="group">
          <a
            href="#experience"
            className="text-lg font-medium text-dark dark:text-white py-4 px-8 flex group-hover:text-primary hover:bg-transparent"
          >
            Experiences
          </a>
        </li>
      </ul>
    </nav>
  );
}
