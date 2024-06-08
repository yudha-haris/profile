import experiences from "../../data/Experience";
import ExperienceItem from "./ExperienceItem";

export default function ExperienceSection() {
  return (
    <section id="experience" className="pt-24 pb-16 bg-slate-950">
      <div className="container">
        <div className="w-full px-4">
          <div className="max-w-full mx-auto text-center mb-16">
            <h2 className="font-bold text-white text-4xl mb-4">
              Working Experiences
            </h2>
            <div className="w-full mt-16 lg:flex lg:flex-wrap">
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
