import PortfolioProjectItem from "./PortfolioProjectItem";

function PortfolioSection() {
  return (
    <section id="portfolio" className="pt-24 pb-16 bg-slate-100">
      <div className="container">
        <div className="w-full px-4">
          <div className="max-w-full mx-auto text-center mb-16">
            <h2 className="font-bold text-dark text-4xl mb-4">Portfolio</h2>
            <h4 className="font-normal text-lg text-slate-500">
              Sorotan proyek non-profit yang saya kerjakan sebagai latihan,
              tugas kursus, dan keperluan lainnya
            </h4>
          </div>
        </div>
        <div className="w-full px-4 flex flex-wrap justify-center">
          <PortfolioProjectItem
            imgUrl="/github-thread.png"
            title="Github Thread"
            desc="Aplikasi sederhana untuk menelusuri pengguna Github. Aplikasi ini
              dibuat untuk latihan pengembangan aplikasi Android dengan Clean Architecture dan Security."
            url="https://github.com/yudha-haris/github-thread"
          />
          <PortfolioProjectItem
            imgUrl="/flutter-boilerplate.png"
            title="Flutter Boilerplate"
            desc="Repository yang disiapkan sebagai template pembuatan proyek
              aplikasi Flutter. Pada boilerplate ini sudah disiapkan arsitektur
              dan berbagai package umum yang dibutuhkan."
            url="#home"
          />
          <PortfolioProjectItem
            imgUrl="/react-forum.png"
            title="React Forum"
            desc={
              <p>
                Website sederhana untuk melakukan posting dan berbalas komentar.
                Website ini dikembangkan dengan NextJs dan ditujukkan sebagai
                submisi kursus{" "}
                <a
                  href="https://www.dicoding.com/certificates/0LZ09NE43Z65"
                  className="font-semibold hover:text-primary"
                >
                  Menjadi React Developer Expert
                </a>{" "}
                oleh <span className="font-semibold">Dicoding.</span>
              </p>
            }
            url="https://react-thread-rose.vercel.app/"
          />
        </div>
      </div>
    </section>
  );
}

export default PortfolioSection;
