// components/contact/ContactInfo.jsx
export function ContactInfo() {
  return (
    <div className="contact-info">
      <span className="info-eyebrow">Contact Advisory</span>

      <h1 className="info-title">
        Trusted Tax & <br /> Compliance Advisors <br /> in Canada
      </h1>

      <p className="info-description">
        We advise corporations, founders, and professionals on Canadian
        taxation, regulatory compliance, and long-term financial structuring.
        Our approach is discreet, strategic, and advisor-led.
      </p>

      <div className="info-accent">
        Serving clients across Ontario, British Columbia, Alberta,
        and nationwide.
      </div>

      <div className="info-grid">
        <div className="info-box">
          <span>Email</span>
          <p>info@globaltaxsolutions.ca</p>
        </div>

        <div className="info-box">
          <span>Phone</span>
          <p>+1 (403) 450-3582</p>
        </div>

        <div className="info-box">
          <span>Office</span>
          <p>Calgary,<br />Canada</p>
        </div>
      </div>

      <div className="info-footer">
        Confidential • Secure • CRA-Compliant
      </div>
    </div>
  );
}
