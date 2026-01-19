// components/shared/WhyUs.jsx
import "./WhyUs.css";

const items = [
  "Regulation-Aligned Tax Advisory",
  "Accurate Financial Review & Planning",
  "Timely Statutory Compliance Filings",
  "Audit-Prepared Documentation Standards",
  "Risk Evaluation & Compliance Support",
  "Clear Reporting & Client Communication",
  "Sector-Specific Tax Advisory Insight",
  "Confidential Handling of Client Data",
  "Scalable Advisory for Growing Enterprises",
  "Ongoing Compliance & Advisory Guidance",
];


export function WhyUs() {
  return (
    <section className="whyus">
      <div className="whyus-container">

        <div className="whyus-header">
          <span className="whyus-eyebrow">Why Choose Us</span>
          <h2 className="whyus-title">Our Delivery Principles</h2>
          <p className="whyus-subtitle">
  A structured advisory framework built on regulatory alignment, financial accuracy,
  and consistent advisory delivery across every engagement.
</p>

        </div>

        <div className="whyus-columns">

          <div className="whyus-col down">
            <Card n="1" text={items[0]} />
            <Card n="6" text={items[5]} />
          </div>

          <div className="whyus-col up">
            <Card n="2" text={items[1]} />
            <Card n="7" text={items[6]} />
          </div>

          <div className="whyus-col center">
            <Card n="3" text={items[2]} />
            <Card n="8" text={items[7]} />
          </div>

          <div className="whyus-col up">
            <Card n="4" text={items[3]} />
            <Card n="9" text={items[8]} />
          </div>

          <div className="whyus-col down">
            <Card n="5" text={items[4]} />
            <Card n="10" text={items[9]} />
          </div>

        </div>
      </div>
    </section>
  );
}

function Card({ n, text }) {
  return (
    <div className="whyus-card">
      <span className="whyus-number">{n}</span>
      <h4>{text}</h4>
    </div>
  );
}
