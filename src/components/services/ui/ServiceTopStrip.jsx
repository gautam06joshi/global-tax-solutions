import { useParams, useNavigate } from "react-router-dom";
import { servicesData } from "../data/servicesData";
import "./ServiceTopStrip.css";

export function ServiceTopStrip() {
  const { serviceSlug } = useParams();
  const navigate = useNavigate();

  const service = servicesData[serviceSlug];

  if (!service) return null;

  return (
    <div className="service-top-strip">
      <div className="service-top-inner">
        {/* LEFT */}
        <span className="service-name">
          {service.highlight || service.title}
        </span>

        {/* RIGHT */}
        <button
          className="service-contact-btn"
          onClick={() => navigate("/contact")}
        >
          Contact Us →
        </button>
      </div>
    </div>
  );
}
