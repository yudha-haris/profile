import projects from "../../data/Projects";
import {
  AndroidIcon,
  DartIcon,
  FlutterIcon,
  JetpackComposeIcon,
  KotlinIcon,
} from "../Icons";
import PortfolioProjectItem from "./PortfolioProjectItem";

function PortfolioSection() {
  return (
    <section id="portfolio" className="pt-16 pb-16 md:pt-24 bg-slate-950">
      <div className="container">
        <div className="w-full px-4">
          <div className="max-w-full mx-auto text-center mb-16">
            <h2 className="font-bold text-4xl mb-4 text-white hover:text-cyan-200 hover:cursor-default">
              Personal Projects
            </h2>
            <h4 className="font-normal text-lg text-blue-200 hover:cursor-default">
              Some notable projects that I do on my spare time
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
