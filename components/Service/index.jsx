import { useRef } from "react";
import { useIsVisible } from "../../hooks/useVisible";
import { AndroidIcon, AppleIcon, FlutterIcon, MobileIcon } from "../Icons";

const ServiceSection = () => {
  const ref = useRef();
  const isVisible = useIsVisible(ref);

  return (
    <section id="service" className="pt-24 pb-16 bg-slate-100 dark:bg-slate-800">
      <div className="container">
        <div className="w-full px-4">
          <div
            ref={ref}
            className={`max-w-full mx-auto text-center mb-16 transition-all ease-in duration-700 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-20"
            } `}
          >
            <h2 className="font-bold text-cyan-900 dark:text-white text-4xl mb-16 dark:hover:text-sky-300">
              What I Do?
            </h2>

            {/* Item start here */}
            <div className="max-w-lg">
              <div className="flex justify-center mb-4 hover:scale-110 hover:cursor-pointer text-sky-600 dark:text-white dark:hover:text-sky-600">
                <MobileIcon />
              </div>
              <h1 className="text-2xl font-bold text-sky-800 dark:text-white pb-4 pt-4">
                Mobile App Development
              </h1>
              <p className="dark:text-cyan-100">
                {
                  "I'll help you to build smooth and pixel perfect mobile app for any kind of mobile devices. Expertise in building high performance and maintainable native Android, iOS, and cross-platform apps"
                }
              </p>
              <div className="flex justify-center mt-6">
                <AndroidIcon />
                <AppleIcon />
                <FlutterIcon />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
