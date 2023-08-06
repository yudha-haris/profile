import Image from "next/image";

function HeroSection() {
  return (
    <section id="home" className="pt-36">
      <div className="container">
        <div className="flex flex-wrap">
          <div className="w-full self-center px-4 lg:w-1/2">
            <h1 className="text-base font-semibold text-primary md:text-xl lg:text-2xl">
              Perkenalkan, saya
              <span className="block font-bold text-dark text-4xl mt-1 lg:text-5xl">
                Yudha Haris Purnama
              </span>
            </h1>
            <h2 className="font-medium text-slate-500 text-lg mb-5 mt-2 lg:text-2xl">
              Software Engineer
            </h2>
            <p className="font-medium text-slate-400 mb-10 leading-relaxed">
              Seorang dengan antusiasme dan minat dalam bidang pengembangan
              aplikasi berbasis{" "}
              <span className="text-dark font-bold">mobile dan web</span>
            </p>

            <a
              href="#"
              className="text-base font-semibold text-white bg-primary py-3 px-8 rounded-full 
            hover:shadow-lg hover:opacity-80 transition duration-300 ease-in-out"
            >
              Mari Terhubung!
            </a>
          </div>
          <div className="w-full self-end px-4 lg:w-1/2 hidden lg:block">
            <div className="relative mt-10 lg:mt-9 lg:right-0">
              <Image
                src="/profil-modified.png"
                width={300}
                height={300}
                alt="Profile Image"
                className="max-w-full mx-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
