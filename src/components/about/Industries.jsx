import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { industries } from "./data/industriesData";
import "./Industries.css";

export default function Industries() {
  const [active, setActive] = useState(null);

  const rowRef = useRef(null);
  const trackRef = useRef(null);
  const thumbRef = useRef(null);

  const updateThumb = () => {
    const row = rowRef.current;
    const track = trackRef.current;
    const thumb = thumbRef.current;

    if (!row || !track || !thumb) return;

    const maxScroll = row.scrollWidth - row.clientWidth;

    // 👉 No scroll possible → hide thumb
    if (maxScroll <= 0) {
      thumb.style.opacity = "0";
      return;
    }

    thumb.style.opacity = "1";

    // Thumb width proportional to visible area
    const thumbWidth =
      (row.clientWidth / row.scrollWidth) * track.offsetWidth;

    thumb.style.width = `${thumbWidth}px`;

    const progress = row.scrollLeft / maxScroll;
    const maxTranslate = track.offsetWidth - thumbWidth;

    thumb.style.transform = `translateX(${progress * maxTranslate}px)`;
  };

  useEffect(() => {
    updateThumb();

    window.addEventListener("resize", updateThumb);

    return () => {
      window.removeEventListener("resize", updateThumb);
    };
  }, []);

  return (
    <section className="industries">
      <div className="industries-header">
  <motion.div
  className="industries-header"
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, ease: "easeOut" }}
  viewport={{ once: true }}
>
  <span className="industries-eyebrow">Our Expertise</span>
  <h2 className="industries-title">Industries We Offer</h2>
  <p className="industries-subtitle">
    Tailored solutions across diverse industries, designed to meet unique
    business, compliance, and growth needs.
  </p>
</motion.div>
</div>


      <div className="industries-scroll-wrapper">
        <div
          className="industries-row"
          ref={rowRef}
          onScroll={updateThumb}
        >
          {industries.map((item) => (
            <motion.div
              key={item.id}
              className={`industry-card ${
                active === item.id ? "active" : ""
              }`}
              onMouseEnter={() => setActive(item.id)}
              onMouseLeave={() => setActive(null)}
              layout
              transition={{ duration: 0.45, ease: "easeInOut" }}
            >
              <div className="industry-inner">
                <span className="icon">{item.icon}</span>
                <span className="label">{item.title}</span>
              </div>

              <AnimatePresence>
                {active === item.id && (
                  <motion.div
                    className="industry-preview"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      onLoad={updateThumb} // 🔥 IMPORTANT
                    />
                    <p>{item.title}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* REAL synced scrollbar */}
        <div className="scroll-indicator">
          <div className="track" ref={trackRef}>
            <div className="thumb" ref={thumbRef} />
          </div>
        </div>
      </div>
    </section>
  );
}
