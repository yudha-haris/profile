import Image from "next/image";

export default function ExperienceItem({
  img,
  company,
  companyUrl,
  description,
}) {
  return (
    <div className="flex items-start mt-12 lg:w-1/2">
      <Image
        src={img}
        width={64}
        height={64}
        alt={company}
        className="mt-2 rounded-md hover:scale-110 hover:brightness-100 bg-slate-100 shadow-md dark:bg-white w-[64px] h-[64px] object-cover dark:brightness-90"
      />
      <div className="text-left mx-4">
        <a
          href={companyUrl}
          className="text-blue-950 dark:text-slate-100 font-semibold text-lg hover:text-slate-400"
        >
          {company}
        </a>
        {description.map((item, index) => {
          return (
            <div>
              <div className="mt-1">
                <p key={index} className="text-slate-900 dark:text-slate-200 font-semibold">
                  {item.position}
                </p>
              </div>

              <p className="text-slate-700 dark:text-slate-300 text-sm">{item.date}</p>
              {item.desc.map((desc, index) => {
                return <p key={index} className="text-dark dark:text-cyan-100 text-sm mt-2">• {desc}</p>;
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
}
