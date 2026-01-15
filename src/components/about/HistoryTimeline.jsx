import { useEffect, useRef, useState } from "react";
import "./HistoryTimeline.css";
import officeFront from "../../assets/officeFront.png";
import foundationVideo from "../../assets/foundation.mp4";
import StrengtheningExpertise from "../../assets/strengthening-expertise.mp4";
import ExpandingReach from "../../assets/expanding-reach.mp4";
import FutureGoals from "../../assets/future-goals.mp4";

const slides = [
  {
  year: "2012",
  title: "The Foundation",
  text: `Global Tax Solutions was built on a simple belief — understanding finances should feel empowering, not overwhelming. In our early years, we focused on helping individuals and business owners gain clarity around tax structures, financial responsibilities, and long-term considerations. By translating complex rules into clear, practical insights, we helped clients move forward with confidence and direction.`,
  video: foundationVideo,
},

  {
    year: "2015",
    title: "Strengthening Expertise",
    text: `As client needs evolved, so did our advisory depth. We expanded our focus across personal taxation, small business guidance, and strategic planning conversations. This phase marked a shift from answering questions to shaping understanding — helping clients recognize patterns, anticipate outcomes, and approach financial decisions with greater awareness and preparedness.`,
    video: StrengtheningExpertise,
  },
  {
    year: "2019",
    title: "Expanding Our Reach",
    text: `With a strong advisory framework in place, we began supporting clients across Canada. Digital consultation allowed us to extend our reach while maintaining a personalized experience. During this period, our work increasingly centered on forward-looking guidance — helping individuals and businesses navigate change, growth, and regulatory complexity with calm, informed decision-making.`,
    video: ExpandingReach,
  },
  {
    year: "2023",
    title: "Looking Ahead",
    text: `Today, Global Tax Solutions continues to adapt to evolving regulations, economic shifts, and client expectations. Our focus remains on insight, education, and thoughtful guidance. Looking ahead, we are committed to deepening our advisory approach, refining how we communicate complexity, and supporting confident financial decisions in an increasingly dynamic environment.`,
    video: FutureGoals
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

  useEffect(() => {
  const unlock = () => {
    const videos = document.querySelectorAll("video");
    videos.forEach((v) => {
      v.muted = true;
      v.play().catch(() => {});
    });

    document.removeEventListener("touchstart", unlock);
  };

  document.addEventListener("touchstart", unlock, { once: true });

  return () => {
    document.removeEventListener("touchstart", unlock);
  };
}, []);

useEffect(() => {
  const section = sectionRef.current;
  if (!section) return;

  const unlock = () => {
    section.querySelectorAll('video').forEach(v => {
      v.muted = true;
      v.playsInline = true;
      v.play().catch(() => {});
    });
    // remove listener instantly so we don’t call play() twice
    section.removeEventListener('touchstart', unlock);
  };

  // 1. try immediately (in case user already tapped once)
  unlock();

  // 2. fall-back: unlock on first touch inside the section
  section.addEventListener('touchstart', unlock, { passive: true });

  return () => section.removeEventListener('touchstart', unlock);
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
  {s.video ? (
    <video
  muted          // ← mandatory
  playsInline    // ← mandatory
  autoPlay
  loop
  preload="auto"
  src={s.video}
  ref={(el) => {
    if (!el) return;
    el.playbackRate = 1.15;
    el.play().catch(() => {});
  }}
/>

  ) : (
    <img src={s.image} alt={s.title} />
  )}
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