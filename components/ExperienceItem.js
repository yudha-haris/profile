import Image from "next/image";

export default function ExperienceItem({
  img,
  title,
  company,
  date,
  companyUrl,
}) {
  return (
    <div className="flex items-start mt-12 lg:w-1/2">
      <Image
        src={img}
        width={64}
        height={64}
        alt={company}
        className="mt-2 rounded-md hover:scale-110 hover:brightness-100 bg-white w-[64px] h-[64px] object-cover brightness-90"
      />
      <div className="text-left mx-4">
        <p className="text-slate-100 font-semibold text-2xl">{title}</p>
        <div className="mt-1">
          <a
            href={companyUrl}
            className="text-slate-200 text-xl hover:text-slate-400"
          >
            {company}
          </a>
        </div>

        <p className="text-slate-300 text-lg mt-1">{date}</p>
      </div>
    </div>
  );
}
