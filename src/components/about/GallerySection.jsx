import { useEffect, useRef } from "react";
import "./GallerySection.css";
import officeFront from "../../assets/officeFront.webp";

const IMAGES = [
  officeFront,
  officeFront,
  officeFront,
  officeFront,
  officeFront,
];

export function GallerySection() {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const onScroll = () => {
      const section = sectionRef.current;
      const rect = section.getBoundingClientRect();
      const scrollLength = section.offsetHeight - window.innerHeight;

      const progress = Math.min(
        Math.max(-rect.top / scrollLength, 0),
        1
      );

      cardsRef.current.forEach((card, i) => {
        const spread = 330 * progress;

        const offset = (i - 2) * spread;

        card.style.transform = `translateX(${offset}px)`;
      });
    };

    window.addEventListener("scroll", onScroll);
    onScroll();

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section ref={sectionRef} className="sticky-gallery-section">
      <div className="sticky-container">
        <div className="gallery-header">
          <h2>Gallery</h2>
          <p>
            A glimpse into our culture, collaboration, and life inside the firm.
          </p>
        </div>

        <div className="gallery-stage">
          {IMAGES.map((src, i) => (
            <div
              key={i}
              ref={(el) => (cardsRef.current[i] = el)}
              className="gallery-card"
              style={{ zIndex: IMAGES.length - i }}
            >
              <img src={src} alt="Team" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}