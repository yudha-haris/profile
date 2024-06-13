import ExperienceSection from "../components/Experience/ExperienceSection";
import FooterSection from "../components/Footer/FooterSection";
import Header from "../components/Header/Header";
import HeroSection from "../components/Hero/HeroSection";
import PortfolioSection from "../components/Portfolio/PortfolioSection";
import ServiceSection from "../components/Service";

export default function Home() {
  return (
    <>
      <Header />
      <HeroSection />
      <ServiceSection/>
      <ExperienceSection />
      <PortfolioSection />
      <FooterSection />
    </>
  );
}
