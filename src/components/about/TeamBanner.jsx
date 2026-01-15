import { useEffect, useRef, useState } from "react";
import "./TeamBanner.css";
import officeFront from '../../assets/officeFront.png';
import TeamIllustrations from "../../assets/team-illustrations.jpg";

export function TeamBanner() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setVisible(true),
      { threshold: 0.4 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className={`team-banner ${visible ? "show" : ""}`}>
      <div className="team-container">

        {/* LEFT */}
        <div className="team-visual">
          <div className="visual-circle">
            <img
              src= {TeamIllustrations}
              alt="Professional collaboration"
            />
          </div>

          <div className="stats-card">
            <div>
              <strong>700+</strong>
              <span>Clients</span>
            </div>
            <div>
              <strong>400+</strong>
              <span>Professionals</span>
            </div>
            <div>
              <strong>900+</strong>
              <span>Engagements</span>
            </div>
          </div>
        </div>

        {/* RIGHT */}
        <div className="team-content">
          <h2>Let’s Work Together</h2>
          <p>
            We partner with organizations and professionals who value precision,
            accountability, and long-term impact. Together, we build trusted
            advisory outcomes.
          </p>

          <a href="/careers" className="team-btn">
            Join Our Team
          </a>
        </div>

      </div>
    </section>
  );
}
