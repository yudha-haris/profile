import { useRef } from "react";
import { useIsVisible } from "../../hooks/useVisible";
import { AndroidIcon, AppleIcon, ComputerIcon, FlutterIcon, MobileIcon } from "../Icons";
import ServiceItem from "./item";

const ServiceSection = () => {
  const ref = useRef();
  const isVisible = useIsVisible(ref);

  return (
    <section
      id="service"
      className="pt-24 pb-16 bg-slate-100 dark:bg-slate-800"
    >
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

            <div className="flex flex-wrap justify-evenly">
              <ServiceItem
                title={"Mobile App Development"}
                description={
                  "I'll help you to build smooth and pixel perfect mobile app for any kind of mobile devices. Expertise in building high performance and maintainable native Android, iOS, and cross-platform apps"
                }
                logo={<MobileIcon />}
                tags={["android", "apple", "flutter"]}
              />
              <ServiceItem
                title={"Web Development"}
                description={
                  "Build eye-catching, responsive, and fast front-end website for your business. Expertise in ReactJS and it's frameworks with JS or TS"
                }
                logo={<ComputerIcon />}
                tags={["react", "javascript"]}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
