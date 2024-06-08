import experiences from "../../data/Experience";
import ExperienceItem from "./ExperienceItem";

export default function ExperienceSection() {
  return (
    <section id="experience" className="pt-24 pb-16 bg-slate-100 dark:bg-slate-900">
      <div className="container">
        <div className="w-full px-4">
          <div className="max-w-full mx-auto text-center mb-16">
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
