import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import "./Careers.css";

export default function Careers() {
  return (
    <section className="careers-root">

      {/* HERO */}
      <section className="careers-hero">
        <div className="hero-overlay" />
        <div className="hero-content">
          <span className="hero-eyebrow">Careers</span>
          <h1>
            Work That <br /> Actually Matters
          </h1>
          <p>
            We’re building a team of professionals who value integrity,
            precision, and long-term impact over shortcuts.
          </p>
        </div>
      </section>

      {/* VALUES */}
      <section className="careers-values">
        <div className="values-text">
          <h2>How We Work</h2>
          <p>
            Our culture is shaped by accountability, deep expertise,
            and respect for people’s time and growth.
          </p>
        </div>

        <div className="values-grid">
          <span>Integrity First</span>
          <span>Client Accountability</span>
          <span>Long-Term Thinking</span>
          <span>Professional Excellence</span>
          <span>Measured Growth</span>
          <span>Clear Ownership</span>
        </div>
      </section>

      {/* EXPERIENCE STRIP */}
      <section className="careers-strip">
        <div className="strip-item">
          <h3>Real Responsibility</h3>
          <p>You work on meaningful client problems from day one.</p>
        </div>
        <div className="strip-item">
          <h3>Career Clarity</h3>
          <p>No guesswork. Growth paths are transparent and merit-based.</p>
        </div>
        <div className="strip-item">
          <h3>Respect for Time</h3>
          <p>High standards without burnout culture.</p>
        </div>
      </section>

      {/* ROLES */}
      <section className="careers-roles">
        <h2>Open Positions</h2>

        <div className="role-row">
          <div>
            <h4>Tax Consultant</h4>
            <span>Full-Time · Remote / Hybrid</span>
          </div>
          <a href="#" className="role-action">
            View Role <ArrowRight size={16} />
          </a>
        </div>

        <div className="role-row">
          <div>
            <h4>Accounting Associate</h4>
            <span>Full-Time · On-Site</span>
          </div>
          <a href="#" className="role-action">
            View Role <ArrowRight size={16} />
          </a>
        </div>

        <div className="role-row">
          <div>
            <h4>Compliance Analyst</h4>
            <span>Full-Time · Hybrid</span>
          </div>
          <a href="#" className="role-action">
            View Role <ArrowRight size={16} />
          </a>
        </div>
      </section>

      {/* CTA */}
      <section className="careers-final">
        <h3>Don’t See Your Role?</h3>
        <p>
          Exceptional people don’t always fit job descriptions.
          Send us your resume and we’ll start the conversation.
        </p>
        <a href="mailto:careers@taxsolutions.com" className="final-btn">
          Submit Resume
        </a>
      </section>

    </section>
  );
}
