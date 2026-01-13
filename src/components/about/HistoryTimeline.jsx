import { useEffect, useRef, useState } from "react";
import "./HistoryTimeline.css";
import officeFront from "../../assets/officeFront.png";

const slides = [
  {
    year: "2012",
    title: "The Foundation",
    text: `Global Tax Solutions was built on a simple belief — understanding finances should feel empowering, not overwhelming. In our early years, we focused on helping individuals and business owners gain clarity around tax structures, financial responsibilities, and long-term considerations. By translating complex rules into clear, practical insights, we helped clients move forward with confidence and direction.`,
    image: officeFront,
  },
  {
    year: "2015",
    title: "Strengthening Expertise",
    text: `As client needs evolved, so did our advisory depth. We expanded our focus across personal taxation, small business guidance, and strategic planning conversations. This phase marked a shift from answering questions to shaping understanding — helping clients recognize patterns, anticipate outcomes, and approach financial decisions with greater awareness and preparedness.`,
    image: officeFront,
  },
  {
    year: "2019",
    title: "Expanding Our Reach",
    text: `With a strong advisory framework in place, we began supporting clients across Canada. Digital consultation allowed us to extend our reach while maintaining a personalized experience. During this period, our work increasingly centered on forward-looking guidance — helping individuals and businesses navigate change, growth, and regulatory complexity with calm, informed decision-making.`,
    image: officeFront,
  },
  {
    year: "2023",
    title: "Looking Ahead",
    text: `Today, Global Tax Solutions continues to adapt to evolving regulations, economic shifts, and client expectations. Our focus remains on insight, education, and thoughtful guidance. Looking ahead, we are committed to deepening our advisory approach, refining how we communicate complexity, and supporting confident financial decisions in an increasingly dynamic environment.`,
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
              <div className="history-content" data-year={s.year}>
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