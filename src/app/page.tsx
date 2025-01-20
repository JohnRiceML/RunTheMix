import RunTheMixHero from "../components/landing-page/hero";
import Navigation from "@/components/nav/navigation";
// import Hero from "@/components/landing-page/hero2";
import RunTheMixIntro from "@/components/landing-page/run-the-mix-intro";
import WeekliesSection from "@/components/landing-page/weekly/weeklies-section";
import MediaHighlights from "@/components/landing-page/MediaHighlights";
import Faqs from "@/components/landing-page/faq";
import Footer from "@/components/Footer";
import ResponsiveAnnouncementBanner from '@/components/responsive-announcement-banner'
// import FightingGame from '@/components/FightingGame'
import PeteBio from "@/components/pete-bio";


export default function Home() {
  return (
    <section id="#Home">
      <ResponsiveAnnouncementBanner 
        message="🎮 🕹 Weekly Today at the new Location - Sign Up to compete By Clicking the button "
        link="https://www.start.gg/tournament/runthemix"
        linkText="Pre Register"
      />
      <Navigation/>
      
      <RunTheMixHero/>
      {/* <FightingGame /> */}
      <RunTheMixIntro/>
      <WeekliesSection/>
      <PeteBio/>
      <MediaHighlights/>
      <Faqs/>
      <Footer/>
      {/* <Hero/> */}
      </section>

  );
}
