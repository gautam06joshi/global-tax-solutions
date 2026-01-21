import { motion } from "motion/react";
import "./Hero.css";
import { WordCycle } from "./animation/WordCycle";
import officeFront from "../../assets/officeFront.webp";

export function Hero() {
  return (
    <section className="about-hero">
      <div className="about-hero-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="about-hero-content"
        >
          <span className="about-eyebrow">
            About the Firm
          </span>

          <h1 className="about-hero-title">
            A Tax Advisory Firm  
            <br />
            Built on Trust, Precision, and <br/>
            <WordCycle/>
          </h1>

          <p className="about-hero-description">
            For more than two decades, we have advised businesses, institutions,
            and individuals on complex tax and regulatory matters. Our work is
            grounded in technical accuracy, discretion, and a deep understanding
            of evolving financial frameworks across jurisdictions.
          </p>

          <div className="about-hero-metadata">
            <div>
              <strong>Established</strong>
              <span>2015</span>
            </div>
            <div>
              <strong>Global Presence</strong>
              <span>30+ Countries</span>
            </div>
            <div>
              <strong>Professionals</strong>
              <span>50+ Advisors</span>
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="about-hero-image"
        >
          <img src={officeFront} alt="Office Exterior" />
        </motion.div>
        
      </div>
      
      
      <div className="section-divider">
  <span />
</div>

    </section>
  );
}
