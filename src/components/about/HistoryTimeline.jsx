import { useEffect, useRef, useState } from "react";
import "./HistoryTimeline.css";
import officeFront from "../../assets/officeFront.png";

const slides = [
  {
    year: "2012",
    title: "The Foundation",
    text: `Our journey began with a clear purpose — to simplify complex financial and compliance challenges for businesses of all sizes…`,
    image: officeFront,
  },
  {
    year: "2015",
    title: "Strengthening Expertise",
    text: `As our client base grew, so did our commitment to depth and specialization…`,
    image: officeFront,
  },
  {
    year: "2019",
    title: "Expanding Our Reach",
    text: `With a strong foundation in place, we expanded our services and geographic presence…`,
    image: officeFront,
  },
  {
    year: "2023",
    title: "Looking Ahead",
    text: `Today, we continue to evolve with changing regulations, technologies, and business environments…`,
    image: officeFront,
  },
];

export default function HistoryTimeline() {
  const sectionRef = useRef(null);
  const [stickyHeight, setStickyHeight] = useState(0);

  useEffect(() => {
    // measure once – avoids hard-coding 620px
    const height = sectionRef.current?.querySelector(".history-sticky")?.clientHeight;
    if (height) setStickyHeight(height);
  }, []);

  return (
    <section ref={sectionRef} className="history-section">
      <h2 className="history-title">Our History</h2>

      {/* every slide lives in its own sticky wrapper */}
      {slides.map((s, i) => (
        <div
          key={i}
          className="history-sticky"
          style={{ height: stickyHeight || 620 }}
        >
          <div className="history-slide">
            <div className="history-inner">
              <div className="history-image">
                <img src={s.image} alt={s.title} />
              </div>
              <div className="history-content">
                <span>{s.year}</span>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}