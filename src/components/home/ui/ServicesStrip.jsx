import "./ServicesStrip.css";

const services = [
  "Tax Planning & Strategy",
  "GST Compliance",
  "Corporate Filings",
  "Bookkeeping & Accounting",
  "Audit & Assurance",
  "Payroll Management",
  "Company Incorporation",
  "Financial Advisory",
];

export default function ServicesStrip() {
  return (
    <section className="premium-strip">
      <div className="fade fade-left" />
      <div className="fade fade-right" />

      <div className="premium-track">
        {[...services, ...services].map((service, index) => (
          <div className="premium-item" key={index}>
            <span className="dot" />
            <span className="text">{service}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
