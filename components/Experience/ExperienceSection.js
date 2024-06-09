import { useRef } from "react";
import experiences from "../../data/Experience";
import ExperienceItem from "./ExperienceItem";
import { useIsVisible } from "../../hooks/useVisible";

export default function ExperienceSection() {
  const ref = useRef();
  const isVisible = useIsVisible(ref);

  return (
    <section
      id="experience"
      className="pt-24 pb-16 bg-slate-100 dark:bg-slate-900"
    >
      <div className="container">
        <div className="w-full px-4">
          <div
            ref={ref}
            className={`max-w-full mx-auto text-center mb-16 transition-all ease-in duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
            } `}
          >
            <h2 className="font-bold text-cyan-900 dark:text-white text-4xl mb-4">
              Working Experiences
            </h2>
            <h4 className="font-normal text-lg text-dark dark:text-blue-200 hover:cursor-default">
              My professional journey across companies
            </h4>
            <div className="w-full mt-8 lg:flex lg:flex-wrap">
              {experiences.map((item) => {
                return (
                  <ExperienceItem
                    key={item.title}
                    img={item.img}
                    company={item.company}
                    companyUrl={item.companyUrl}
                    description={item.description}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
