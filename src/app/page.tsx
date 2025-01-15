import RunTheMixHero from "../components/landing-page/hero";
import Navigation from "@/components/nav/navigation";
// import Hero from "@/components/landing-page/hero2";
import RunTheMixIntro from "@/components/landing-page/run-the-mix-intro";
import WeekliesSection from "@/components/landing-page/weekly/weeklies-section";
import MediaHighlights from "@/components/landing-page/MediaHighlights";
import Faqs from "@/components/landing-page/faq";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div>

      <Navigation/>
      <RunTheMixHero/>
      <RunTheMixIntro/>
      <WeekliesSection/>
      <MediaHighlights/>
      <Faqs/>
      <Footer/>
      {/* <Hero/> */}
      </div>

  );
}
