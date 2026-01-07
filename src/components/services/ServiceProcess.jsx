import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import "./ServiceProcess.css";

/* 1️⃣  SSR-safe media-query hook */
const useMediaQuery = (query) => {
  const [matches, setMatches] = useState(false);
  useEffect(() => {
    const mql = window.matchMedia(query);
    setMatches(mql.matches);
    const handler = () => setMatches(mql.matches);
    mql.addEventListener("change", handler);
    return () => mql.removeEventListener("change", handler);
  }, [query]);
  return matches;
};

export default function ServiceProcess({ process }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const duration = 5000;

  /* 2️⃣  reactive mobile flag */
  const isMobile = useMediaQuery("(max-width: 768px)");

  /* auto-play still works on mobile if you want it */
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((p) => (p + 1) % process.length);
    }, duration);
    return () => clearInterval(timer);
  }, [process.length]);

  const active = process[activeIndex];

  /* 3️⃣  mobile gets a single-column accordion; desktop keeps side-by-side */
  return (
    <section className="process-showcase">
      <div className="process-heading">
        <span className="process-eyebrow">How We Work</span>
        <h2>Our Process</h2>
        <p>
          A clear, structured approach designed to deliver accuracy, compliance,
          and confidence at every stage.
        </p>
      </div>

      <div className="process-showcase__container">
        {/* LEFT – steps */}
        <aside className="process-left">
          <div className="process-left__header">
            <span className="eyebrow">Our Process</span>
            <h2>How We Deliver This Service</h2>
            <p>A structured, compliance-driven workflow.</p>
          </div>

          <div className="process-steps">
            {process.map((item, idx) => (
              <div
                key={idx}
                className={`process-step ${idx === activeIndex ? "active" : ""}`}
                onClick={() => setActiveIndex(idx)}
              >
                <div className="step-index">{item.step}</div>
                <div className="step-content">
                  <h4>{item.title}</h4>
                  <span className="step-sub">Certified professionals</span>
                  {idx === activeIndex && (
                    <motion.div
                      className="step-progress"
                      initial={{ width: 0 }}
                      animate={{ width: "100%" }}
                      transition={{ duration: duration / 1000, ease: "linear" }}
                    />
                  )}
                </div>
              </div>
            ))}
          </div>
        </aside>

        {/* RIGHT – card */}
        <section className="process-right">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="process-card"
            >
              <div className="process-top">
                <div className="process-media">
                  <img src={active.image} alt={active.title} loading="lazy" />
                </div>
                <div className="process-intro">
                  <span className="process-step-meta">STEP {active.step}</span>
                  <h3>{active.title}</h3>
                  <p className="process-short">
                    Reviewed by senior compliance professionals.
                  </p>
                </div>
              </div>

              <div className="process-detail">
                {active.desc.split("\n").map((line, i) => {
                  if (line.trim().startsWith("-")) {
                    return (
                      <div key={i} className="process-point">
                        <span className="dot" />
                        <span>{line.replace("-", "").trim()}</span>
                      </div>
                    );
                  }
                  return line.trim() ? <p key={i}>{line}</p> : null;
                })}
              </div>

              <button className="process-cta">Discuss This Step</button>
            </motion.div>
          </AnimatePresence>
        </section>
      </div>
    </section>
  );
}