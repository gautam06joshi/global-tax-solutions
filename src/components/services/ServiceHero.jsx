import { useParams } from "react-router-dom";
import { servicesData } from "./data/servicesData";
import "./ServiceHero.css";

export function ServiceHero() {
  const { serviceSlug } = useParams();
  const service = servicesData[serviceSlug];

  if (!service) return null;

  return (
    <section className="service-hero">
      <div className="service-hero-inner">

        {/* LEFT */}
        <div className="service-hero-content">

          <h1 className="hero-title">
            {service.title}{" "}
            <span>{service.highlight}</span>
          </h1>

          <p className="hero-subtitle">
            {service.subtitle}
          </p>

          <button className="hero-btn">
            {service.cta}
          </button>
        </div>

        {/* RIGHT */}
        <div className="service-hero-visual">
          <img src={service.image} alt={service.highlight} />
        </div>

      </div>
    </section>
  );
}
