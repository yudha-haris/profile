import ExperienceItem from "./ExperienceItem";

export default function ExperienceSection() {
  return (
    <section id="experience" className="pt-24 pb-16 bg-slate-950">
      <div className="container">
        <div className="w-full px-4">
          <div className="max-w-full mx-auto text-center mb-16">
            <h2 className="font-bold text-white text-4xl mb-4">Experiences</h2>
            <h4 className="font-normal text-lg text-slate-300">
              I have writing codes for these companies
            </h4>
            <div className="w-full mt-16 lg:flex lg:flex-wrap">
              <ExperienceItem
                img="/bbg.jpg"
                title="Android Developer Intern"
                company="Blue Bird Group"
                companyUrl="https://www.bluebirdgroup.com/"
                date="Feb 2024 -- Now"
              />
              <ExperienceItem
                img="/nbs.jpg"
                title="Flutter Developer Intern"
                company="Nusantara Beta Studio"
                companyUrl="https://nbs.co.id/"
                date="Aug 2023 -- Dec 2023"
              />
              <ExperienceItem
                img="/toko-dizital.jpeg"
                title="Android Developer"
                company="Toko Dizital"
                companyUrl="https://www.linkedin.com/company/toko-dizital/"
                date="May 2023 -- Jun 2023"
              />
              <ExperienceItem
                img="/sirka.jpeg"
                title="Mobile Developer Intern"
                company="Sirka"
                companyUrl="https://www.linkedin.com/company/sirkaio/"
                date="Nov 2022 -- Mar 2023"
              />
              <ExperienceItem
                img="/clade.jpeg"
                title="Software Engineer"
                company="CLADE"
                companyUrl="https://www.linkedin.com/company/cladetechnology/"
                date="May 2022 -- Oct 2022"
              />
              <ExperienceItem
                img="/fisiomotion.jpeg"
                title="Mobile Application Developer"
                company="FisioMotion"
                companyUrl="https://www.linkedin.com/company/fisiomotion/"
                date="Mar 2022 -- Jun 2022"
              />
              <ExperienceItem
                img="/petanee-edited.png"
                title="Mobile Application Developer"
                company="Petanee (PT Ekosistem Agro Sejahtera)"
                companyUrl="http://petanee.id/"
                date="Nov 2021 -- May 2022"
              />
              <ExperienceItem
                img="/tlq.png"
                title="Mobile Application Developer"
                company="The Living Quran Indonesia Foundation"
                companyUrl="https://play.google.com/store/apps/details?id=com.main.tlquran"
                date="Jul 2021 -- Aug 2021"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
