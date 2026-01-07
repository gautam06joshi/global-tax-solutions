// components/contact/ContactInfo.jsx
export function ContactInfo() {
  return (
    <div className="contact-info">
      <span className="contact-eyebrow">Contact Us</span>
      <h1 className="contact-title">
        Let’s Discuss Your <br /> Tax & Compliance Needs
      </h1>
      <p className="contact-description">
        Whether you need advisory support, compliance assistance, or
        long-term tax planning, our team is ready to help you move forward
        with clarity and confidence.
      </p>

      <div className="contact-details">
        <div>
          <strong>Email</strong>
          <p>info@yourfirm.com</p>
        </div>
        <div>
          <strong>Phone</strong>
          <p>+91 98765 43210</p>
        </div>
        <div>
          <strong>Office</strong>
          <p>Jaipur, Rajasthan</p>
        </div>
      </div>
    </div>
  );
}
