import PortfolioProjectItem from "./PortfolioProjectItem";

function PortfolioSection() {
  return (
    <section id="portfolio" className="pt-16 pb-16 md:pt-24 bg-slate-100">
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
            badges={
              <>
                <div className="w-9 h-9 mr-2 rounded-full border border-slate-400 text-slate-400 hover:text-white hover:border-primary hover:bg-primary flex items-center justify-center">
                  <svg
                    role="img"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    className="fill-current h-6 p-0.5"
                  >
                    <title>Android</title>
                    <path d="M17.523 15.3414c-.5511 0-.9993-.4486-.9993-.9997s.4483-.9993.9993-.9993c.5511 0 .9993.4483.9993.9993.0001.5511-.4482.9997-.9993.9997m-11.046 0c-.5511 0-.9993-.4486-.9993-.9997s.4482-.9993.9993-.9993c.5511 0 .9993.4483.9993.9993 0 .5511-.4483.9997-.9993.9997m11.4045-6.02l1.9973-3.4592a.416.416 0 00-.1521-.5676.416.416 0 00-.5676.1521l-2.0223 3.503C15.5902 8.2439 13.8533 7.8508 12 7.8508s-3.5902.3931-5.1367 1.0989L4.841 5.4467a.4161.4161 0 00-.5677-.1521.4157.4157 0 00-.1521.5676l1.9973 3.4592C2.6889 11.1867.3432 14.6589 0 18.761h24c-.3435-4.1021-2.6892-7.5743-6.1185-9.4396" />
                  </svg>
                </div>
                <div className="w-9 h-9 mr-2 rounded-full border border-slate-400 text-slate-400 hover:text-white hover:border-blue-400 hover:bg-blue-400 flex items-center justify-center">
                  <svg
                    role="img"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    className="fill-current h-6 p-0.5"
                  >
                    <title>Jetpack Compose</title>
                    <path d="M12.135.003a2.577 2.577 0 0 0-1.42.344L2.55 5.06a2.577 2.577 0 0 0-.953.967l3.957 2.17a1.765 1.765 0 0 1 .603-.588l4.951-2.86a1.761 1.761 0 0 1 1.76 0l4.951 2.86a1.753 1.753 0 0 1 .526.46l3.921-2.265a2.577 2.577 0 0 0-.816-.744L13.291.347a2.577 2.577 0 0 0-1.152-.34Zm-.145 4.912a1.36 1.36 0 0 0-.68.182L6.36 7.953a1.345 1.345 0 0 0-.454.435l1.92 1.055a1.05 1.05 0 0 1 .31-.275l3.34-1.928a1.054 1.054 0 0 1 1.051 0l3.336 1.928a1.066 1.066 0 0 1 .238.199l.018-.01-.002-.002 1.877-1.08a1.353 1.353 0 0 0-.373-.322l-4.95-2.86a1.357 1.357 0 0 0-.68-.178Zm10.432 1.149-3.92 2.26a1.757 1.757 0 0 1 .2.812v5.715c0 .627-.332 1.21-.88 1.528l-4.95 2.86a1.761 1.761 0 0 1-.64.214v4.524a2.577 2.577 0 0 0 1.059-.313l8.162-4.713a2.577 2.577 0 0 0 1.289-2.23V7.297a2.577 2.577 0 0 0-.318-1.228Zm-20.937.238a2.577 2.577 0 0 0-.227.99v9.43c0 .918.491 1.767 1.293 2.229l8.162 4.713a2.57 2.57 0 0 0 1.225.336v-4.531a1.761 1.761 0 0 1-.833-.235L6.156 16.38a1.765 1.765 0 0 1-.877-1.528V9.136a1.776 1.776 0 0 1 .131-.676Zm16.67 2.223-1.89 1.092a1.058 1.058 0 0 1 .124.46v3.856c0 .378-.2.72-.526.907l-3.336 1.93a1.04 1.04 0 0 1-.295.107v2.17c.152-.027.304-.078.44-.157l4.949-2.859a1.36 1.36 0 0 0 .68-1.18V9.136a1.36 1.36 0 0 0-.147-.607Zm-12.387.13a1.36 1.36 0 0 0-.088.481v5.715a1.36 1.36 0 0 0 .68 1.18l4.95 2.86c.194.112.412.166.627.177v-2.174a1.054 1.054 0 0 1-.46-.123L8.14 14.843a1.054 1.054 0 0 1-.532-.908v-3.853a.99.99 0 0 1 .077-.38l-.034-.013z" />
                  </svg>
                </div>
                <div className="w-9 h-9 mr-2 rounded-full border border-slate-400 text-slate-400 hover:text-white hover:border-purple-500 hover:bg-purple-500 flex items-center justify-center">
                  <svg
                    role="img"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    className="fill-current h-6 p-1"
                  >
                    <title>Kotlin</title>
                    <path d="M24 24H0V0h24L12 12Z" />
                  </svg>
                </div>
              </>
            }
          />
          <PortfolioProjectItem
            imgUrl="/flutter-boilerplate.png"
            title="Flutter Boilerplate"
            desc="Repository yang disiapkan sebagai template pembuatan proyek
              aplikasi Flutter. Pada boilerplate ini sudah disiapkan arsitektur
              dan berbagai package umum yang dibutuhkan."
            url="https://github.com/yudha-haris/flutter-boilerplate"
            badges={
              <>
                <div className="w-9 h-9 mr-2 rounded-full border border-slate-400 text-slate-400 hover:text-white hover:border-blue-400 hover:bg-blue-400 flex items-center justify-center">
                  <svg
                    role="img"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    className="fill-current h-6 p-0.5"
                  >
                    <title>Flutter</title>
                    <path d="M14.314 0L2.3 12 6 15.7 21.684.013h-7.357zm.014 11.072L7.857 17.53l6.47 6.47H21.7l-6.46-6.468 6.46-6.46h-7.37z" />
                  </svg>
                </div>
                <div className="w-9 h-9 mr-2 rounded-full border border-slate-400 text-slate-400 hover:text-white hover:border-blue-400 hover:bg-blue-400 flex items-center justify-center">
                  <svg
                    role="img"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    className="fill-current h-6 p-0.5"
                  >
                    <title>Dart</title>
                    <path d="M4.105 4.105S9.158 1.58 11.684.316a3.079 3.079 0 0 1 1.481-.315c.766.047 1.677.788 1.677.788L24 9.948v9.789h-4.263V24H9.789l-9-9C.303 14.5 0 13.795 0 13.105c0-.319.18-.818.316-1.105l3.789-7.895zm.679.679v11.787c.002.543.021 1.024.498 1.508L10.204 23h8.533v-4.263L4.784 4.784zm12.055-.678c-.899-.896-1.809-1.78-2.74-2.643-.302-.267-.567-.468-1.07-.462-.37.014-.87.195-.87.195L6.341 4.105l10.498.001z" />
                  </svg>
                </div>
                <div className="w-9 h-9 mr-2 rounded-full border border-slate-400 text-slate-400 hover:text-white hover:border-cyan-500 hover:bg-cyan-500 flex items-center justify-center">
                  <svg
                    role="img"
                    viewBox="0 0 1024 1024"
                    xmlns="http://www.w3.org/2000/svg"
                    className="fill-current h-6 p-0.5"
                  >
                    <title>BLoC</title>
                    <path d="M70.6 267.1c11.3-19.6 36.4-26.3 55.9-15l372.8 215.3 369.1-213.1c19.6-11.3 44.6-4.6 55.9 15 0.2 0.3 0.3 0.5 0.4 0.8-3.5-7-8.9-13-16.2-17.2L521.7 29.5c-7.5-6.1-16.9-9.3-26.4-9.2-9.5-0.1-18.9 3.1-26.4 9.2l-383 221.1c-10.1 5.8-16.8 15.4-19.3 25.9 0.9-3.1 2.2-6.3 4-9.4z" />
                    <path d="M925.5 271.5c9.6 19.2 2.7 42.9-16.2 53.8L543.4 536.5v429c0 22.6-18.3 41-41 41-22.6 0-41-18.3-41-41V540.1l-375.9-217c-11.9-6.9-19.1-18.8-20.3-31.6v446.1c-1.5 15.5 5.9 31.1 20.3 39.4l387.4 223.7c7.5 6.1 16.9 9.3 26.4 9.2 9.5 0.1 18.9-3.1 26.4-9.2l376-217.1c16.6-5.2 28.7-20.7 28.7-39.1V290.9c0-7.1-1.8-13.7-4.9-19.4z" />
                  </svg>
                </div>
              </>
            }
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
            badges={
              <>
                <div className="w-9 h-9 mr-2 rounded-full border border-slate-400 text-slate-400 hover:text-white hover:border-slate-700 hover:bg-slate-700 flex items-center justify-center">
                  <svg
                    role="img"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    className="fill-current h-6 p-0.5"
                  >
                    <title>Next.js</title>
                    <path d="M11.5725 0c-.1763 0-.3098.0013-.3584.0067-.0516.0053-.2159.021-.3636.0328-3.4088.3073-6.6017 2.1463-8.624 4.9728C1.1004 6.584.3802 8.3666.1082 10.255c-.0962.659-.108.8537-.108 1.7474s.012 1.0884.108 1.7476c.652 4.506 3.8591 8.2919 8.2087 9.6945.7789.2511 1.6.4223 2.5337.5255.3636.04 1.9354.04 2.299 0 1.6117-.1783 2.9772-.577 4.3237-1.2643.2065-.1056.2464-.1337.2183-.1573-.0188-.0139-.8987-1.1938-1.9543-2.62l-1.919-2.592-2.4047-3.5583c-1.3231-1.9564-2.4117-3.556-2.4211-3.556-.0094-.0026-.0187 1.5787-.0235 3.509-.0067 3.3802-.0093 3.5162-.0516 3.596-.061.115-.108.1618-.2064.2134-.075.0374-.1408.0445-.495.0445h-.406l-.1078-.068a.4383.4383 0 01-.1572-.1712l-.0493-.1056.0053-4.703.0067-4.7054.0726-.0915c.0376-.0493.1174-.1125.1736-.143.0962-.047.1338-.0517.5396-.0517.4787 0 .5584.0187.6827.1547.0353.0377 1.3373 1.9987 2.895 4.3608a10760.433 10760.433 0 004.7344 7.1706l1.9002 2.8782.096-.0633c.8518-.5536 1.7525-1.3418 2.4657-2.1627 1.5179-1.7429 2.4963-3.868 2.8247-6.134.0961-.6591.1078-.854.1078-1.7475 0-.8937-.012-1.0884-.1078-1.7476-.6522-4.506-3.8592-8.2919-8.2087-9.6945-.7672-.2487-1.5836-.42-2.4985-.5232-.169-.0176-1.0835-.0366-1.6123-.037zm4.0685 7.217c.3473 0 .4082.0053.4857.047.1127.0562.204.1642.237.2767.0186.061.0234 1.3653.0186 4.3044l-.0067 4.2175-.7436-1.14-.7461-1.14v-3.066c0-1.982.0093-3.0963.0234-3.1502.0375-.1313.1196-.2346.2323-.2955.0961-.0494.1313-.054.4997-.054z" />
                  </svg>
                </div>
                <div className="w-9 h-9 mr-2 rounded-full border border-slate-400 text-slate-400 hover:text-white hover:border-yellow-500 hover:bg-yellow-500 flex items-center justify-center">
                  <svg
                    role="img"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    className="fill-current h-6 p-0.5"
                  >
                    <title>JavaScript</title>
                    <path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z" />
                  </svg>
                </div>
                <div className="w-9 h-9 mr-2 rounded-full border border-slate-400 text-slate-400 hover:text-white hover:border-purple-500 hover:bg-purple-500 flex items-center justify-center">
                  <svg
                    role="img"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    className="fill-current h-6 p-0.5"
                  >
                    <title>Redux</title>
                    <path d="M16.634 16.504c.87-.075 1.543-.84 1.5-1.754-.047-.914-.796-1.648-1.709-1.648h-.061a1.71 1.71 0 00-1.648 1.769c.03.479.226.869.494 1.153-1.048 2.038-2.621 3.536-5.005 4.795-1.603.838-3.296 1.154-4.944.93-1.378-.195-2.456-.81-3.116-1.799-.988-1.499-1.078-3.116-.255-4.734.6-1.17 1.499-2.023 2.099-2.443a9.96 9.96 0 01-.42-1.543C-.868 14.408-.416 18.752.932 20.805c1.004 1.498 3.057 2.456 5.304 2.456.6 0 1.23-.044 1.843-.194 3.897-.749 6.848-3.086 8.541-6.532zm5.348-3.746c-2.32-2.728-5.738-4.226-9.634-4.226h-.51c-.253-.554-.837-.899-1.498-.899h-.045c-.943 0-1.678.81-1.647 1.753.03.898.794 1.648 1.708 1.648h.074a1.69 1.69 0 001.499-1.049h.555c2.309 0 4.495.674 6.488 1.992 1.527 1.005 2.622 2.323 3.237 3.897.538 1.288.509 2.547-.045 3.597-.855 1.647-2.294 2.517-4.196 2.517-1.199 0-2.367-.375-2.967-.644-.36.298-.96.793-1.394 1.093 1.318.598 2.652.943 3.94.943 2.922 0 5.094-1.647 5.919-3.236.898-1.798.824-4.824-1.47-7.416zM6.49 17.042c.03.899.793 1.648 1.708 1.648h.06a1.688 1.688 0 001.648-1.768c0-.9-.779-1.647-1.693-1.647h-.06c-.06 0-.15 0-.226.029-1.243-2.098-1.768-4.347-1.572-6.772.12-1.828.72-3.417 1.797-4.735.9-1.124 2.593-1.68 3.747-1.708 3.236-.061 4.585 3.971 4.689 5.574l1.498.45C17.741 3.197 14.686.62 11.764.62 9.02.62 6.49 2.613 5.47 5.535 4.077 9.43 4.991 13.177 6.7 16.174c-.15.195-.24.539-.21.868z" />
                  </svg>
                </div>
                <div className="w-9 h-9 mr-2 rounded-full border border-slate-400 text-slate-400 hover:text-white hover:border-cyan-400 hover:bg-cyan-400 flex items-center justify-center">
                  <svg
                    role="img"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    className="fill-current h-6 p-0.5"
                  >
                    <title>Tailwind CSS</title>
                    <path d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z" />
                  </svg>
                </div>
              </>
            }
          />
        </div>
      </div>
    </section>
  );
}

export default PortfolioSection;
