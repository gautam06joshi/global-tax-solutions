import { useParams } from "react-router-dom";
import { servicesData } from "./data/servicesData";
import officeFront from "../../assets/officeFront.png";   // fallback if you need it
import "./ServiceBenefits.css";

export function ServiceBenefits() {
  const { serviceSlug } = useParams();
  const service = servicesData[serviceSlug];

  if (!service?.longContent) return null;

  /* split the paragraphs in two halves so we can drop the image row in-between */
  const mid = 5;
  const firstHalf = service.longContent.slice(0, mid);
  const secondHalf = service.longContent.slice(mid);

  /* pick 3 images – here we simply reuse the same one; swap for real ones */
  const images = [officeFront, officeFront, officeFront];

        return (
    <section className="service-long-content">
      <div className="service-long-content-container">
        {/* Heading – centred & capped */}
        <div className="service-long-content-header">
          <span className="service-long-eyebrow">Value & Benefits</span>
          <h2 className="service-long-content-title">Why This Service Matters</h2>
        </div>

        {/* Edge-to-edge flow */}
        <div className="service-long-flow">
          {/* numbered points BEFORE image */}
          <div className="service-long-text-block numbered">
            {firstHalf.map((line, i) => (
              <p key={i}>{line}</p>
            ))}
          </div>

          {/* SINGLE SERVICE-SPECIFIC IMAGE */}
          <div className="service-long-single-img">
            <img src={service.benefitImage} alt="Benefit illustration" loading="lazy" />
          </div>

          {/* SHORT PARAGRAPH AFTER IMAGE */}
          <div className="service-long-summary">
            <p>{service.longSummary}</p>
          </div>

          {/* continue numbered points AFTER paragraph */}
          <div className="service-long-text-block numbered">
            {secondHalf.map((line, i) => (
              <p key={i}>{line}</p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}