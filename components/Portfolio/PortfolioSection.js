import PortfolioProjectItem from "./PortfolioProjectItem";

function PortfolioSection() {
  return (
    <section
      id="portfolio"
      className="pt-16 pb-16 md:pt-24 bg-slate-100 dark:bg-slate-900"
    >
      <div className="container">
        <div className="w-full px-4">
          <div className="max-w-full mx-auto text-center mb-16">
            <h2 className="font-bold text-dark text-4xl mb-4 dark:text-white">
              Personal Projects
            </h2>
            <h4 className="font-normal text-lg text-slate-500 dark:text-blue-200">
              Some notable projects that I do on my spare time
            </h4>
          </div>
        </div>
        <div className="w-full px-4 flex flex-wrap justify-center">
          <PortfolioProjectItem
            imgUrl="/github-thread.png"
            title="Github Thread"
            desc="Simple app for practicing best practices on Android native development. This project implemented clean architecture, obfuscation, reactive programming, etc"
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
            imgUrl="/flutter-template.png"
            title="Flutter Template"
            desc="Maintain open source flutter template repository. With this template, you can 
            create Flutter project with minimal setup. Using clean architecture so actually you change
            default package to your favorite package (GetX, Riverpod, Retrofit, etc)"
            url="https://github.com/ristekoss/flutter-template"
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
        </div>
      </div>
    </section>
  );
}

export default PortfolioSection;
