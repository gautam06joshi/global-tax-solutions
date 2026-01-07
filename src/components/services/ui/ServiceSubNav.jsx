import { useEffect, useRef, useState } from "react";
import "./ServiceSubNav.css";

const sections = [
  { id: "overview", label: "Overview" },
  { id: "process", label: "Our Process" },
  { id: "benefits", label: "Benefits" },
  { id: "why-us", label: "Why Us" },
  { id: "faq", label: "FAQ" },
];

export function ServiceSubNav() {
  const navRef = useRef(null);
  const [fixed, setFixed] = useState(false);
  const [height, setHeight] = useState(0);
  const [active, setActive] = useState("overview");

  /* Measure height once */
  useEffect(() => {
    if (navRef.current) {
      setHeight(navRef.current.offsetHeight);
    }
  }, []);

  /* Sticky → Fixed switch */
  useEffect(() => {
    const offsetTop = navRef.current.offsetTop;

    const onScroll = () => {
      setFixed(window.scrollY >= offsetTop);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* Active section */
  useEffect(() => {
    const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        setActive(entry.target.id);
      }
    });
  },
  {
    rootMargin: "-120px 0px -50% 0px", // accounts for subnav height
    threshold: 0.1,
  }
);


    sections.forEach(sec => {
      const el = document.getElementById(sec.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

const scrollTo = id => {
  const target = document.getElementById(id);
  if (!target) return;

  const navHeight = navRef.current?.offsetHeight || 0;
  const start = window.pageYOffset;
  const end =
    target.getBoundingClientRect().top +
    window.pageYOffset -
    navHeight+80;

  const duration = 700; // 👈 increase = more visible scroll
  let startTime = null;

  const easeInOut = t =>
    t < 0.5
      ? 2 * t * t
      : 1 - Math.pow(-2 * t + 2, 2) / 2;

  const animate = time => {
    if (!startTime) startTime = time;
    const elapsed = time - startTime;
    const progress = Math.min(elapsed / duration, 1);

    window.scrollTo({
      top: start + (end - start) * easeInOut(progress),
    });

    if (progress < 1) {
      requestAnimationFrame(animate);
    }
  };

  requestAnimationFrame(animate);
};

  return (
    <>
      {/* 🔥 Spacer prevents jump */}
      {fixed && <div style={{ height }} />}

      <div
        ref={navRef}
        className={`service-subnav ${fixed ? "is-fixed" : ""}`}
      >
        {sections.map(sec => (
          <button
            key={sec.id}
            className={active === sec.id ? "active" : ""}
            onClick={() => scrollTo(sec.id)}
          >
            {sec.label}
          </button>
        ))}
      </div>
    </>
  );
}
