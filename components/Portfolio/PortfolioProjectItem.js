import Image from "next/image";

export default function PortfolioProjectItem({
  imgUrl,
  title,
  desc,
  url,
  badges,
}) {
  return (
    <div className="mb-12 p-4 md:w-1/2">
      <div className="rounded-md shadow-md overflow-hidden hover:shadow-lg hover:scale-105 transition">
        <Image
          src={imgUrl}
          width={600}
          height={300}
          alt="bangkit"
          className="w-full object-cover lg:h-[300px] md:h-[200px]"
        />
      </div>
      <div className="mt-5 mb-3">
        <a
          href={url}
          className="font-semibold text-xl mt-5 mb-3 hover:text-primary text-cyan-100"
        >
          {title}
        </a>
      </div>
      <p className="text-white">{desc}</p>
      <div className="flex mt-4">{badges}</div>
    </div>
  );
}
