import { useState } from "react";
import "./ServiceFAQ.css";

export function ServiceFAQ({ faqs }) {
  const [active, setActive] = useState(null);

  if (!faqs || !faqs.length) return null;

  return (
    <section className="service-faq">
      <div className="service-faq-container">
        <div className="service-faq-header">
          <span className="service-faq-eyebrow">FAQs</span>
          <h2>Frequently Asked Questions</h2>
        </div>

        <div className="service-faq-list">
          {faqs.map((item, index) => (
            <div
              key={index}
              className={`faq-item ${active === index ? "active" : ""}`}
              onClick={() =>
                setActive(active === index ? null : index)
              }
            >
              <div className="faq-question">
                <h4>{item.q}</h4>
                <span>{active === index ? "−" : "+"}</span>
              </div>

              <div className="faq-answer">
                <p>{item.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
