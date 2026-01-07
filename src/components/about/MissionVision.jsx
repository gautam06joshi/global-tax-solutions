import { motion } from "motion/react";
import "./MissionVision.css";

export function MissionVision() {
  return (
    <section className="mission-vision">
      <div className="mission-vision-container">
        <div className="mission-vision-grid">
          
          {/* Mission */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mission-block"
          >
            <span className="mv-eyebrow">Our Mission</span>
            <h3 className="mv-title">
              To Deliver Clarity  
              <br />
              in Complex Tax Environments
            </h3>
            <p className="mv-text">
              Our mission is to provide disciplined, accurate, and forward-looking
              tax advisory services that enable our clients to operate with
              confidence across evolving regulatory frameworks. We are committed
              to precision, discretion, and long-term partnership.
            </p>
          </motion.div>

          {/* Separator */}
          <div className="mv-separator">
            <span />
          </div>

          {/* Vision */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="vision-block"
          >
            <span className="mv-eyebrow">Our Vision</span>
            <h3 className="mv-title">
              To Be a Trusted  
              <br />
              Global Tax Advisory Partner
            </h3>
            <p className="mv-text">
              Our vision is to be recognized as a firm defined by trust,
              consistency, and technical excellence — supporting businesses and
              institutions worldwide through thoughtful advisory and enduring
              professional relationships.
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
