
import { Services } from "../components/home/Services";
import { WhyChooseUs } from "../components/home/WhyChooseUs";
import { Testimonials } from "../components/home/Testimonials";
import { Contact } from "../components/home/Contact";
import { Hero } from "../components/home/Hero";
import { AboutSection } from "../components/home/AboutSection";


export function Home() {
  return (
    <main>
      <Hero/>
      <AboutSection/>
      <Services />
      <WhyChooseUs />
      <Testimonials />
      <Contact />
    </main>
  );
}
