import { FAQ } from "../components/about/FAQ";
import { GallerySection } from "../components/about/GallerySection";
import { Hero } from "../components/about/Hero";
import  HistoryTimeline  from "../components/about/HistoryTimeline";
import Industries from "../components/about/Industries";
import { MissionVision } from "../components/about/MissionVision";
import { OurValues } from "../components/about/OurValues";
import { TeamBanner } from "../components/about/TeamBanner";
import { Contact } from "../components/home/Contact";

export function About() {
  return (
    <main>
      <Hero />
      <MissionVision/>
      <HistoryTimeline/>
      <OurValues/>
      <Industries/>
      <TeamBanner/>
      <GallerySection/>
      <FAQ/>
      <Contact/>
    </main>
  );
}
