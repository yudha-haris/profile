import { useRef } from "react";
import projects from "../../data/Projects";
import PortfolioProjectItem from "./PortfolioProjectItem";
import { useIsVisible } from "../../hooks/useVisible";

function PortfolioSection() {
  const ref = useRef();
  const isVisible = useIsVisible(ref);

  return (
    <section id="portfolio" className="pt-16 pb-16 md:pt-24 bg-slate-950">
      <div
        ref={ref}
        className={`container transition-all ease-in duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
        } `}
      >
        <div className="w-full px-4">
          <div className="max-w-full mx-auto text-center mb-16">
            <h2 className="font-bold text-4xl mb-4 text-white hover:text-cyan-200 hover:cursor-default">
              Projects
            </h2>
            <h4 className="font-normal text-lg text-blue-200 hover:cursor-default">
              Some notable projects that I have been working on
            </h4>
          </div>
        </div>
        <div className="w-full px-4 flex flex-wrap justify-center">
          {projects.map((item) => {
            return (
              <PortfolioProjectItem
                key={item.title}
                imgUrl={item.image}
                title={item.title}
                desc={item.description}
                url={item.url}
                tags={item.tags}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default PortfolioSection;
