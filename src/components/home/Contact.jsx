import { motion } from "motion/react";
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";
import { useState } from "react";
import "./Contact.css";
import OfficeMap from "../map/OfficeMap";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for your inquiry! We will contact you within 24 hours.");
    setFormData({
      name: "",
      email: "",
      phone: "",
      service: "",
      message: "",
    });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      content: "1-800-TAX-HELP",
      subContent: "Mon-Fri 8AM-6PM EST",
    },
    {
      icon: Mail,
      title: "Email",
      content: "info@taxsolutions.com",
      subContent: "We respond within 24 hours",
    },
    {
      icon: Clock,
      title: "Hours",
      content: "Monday - Friday",
      subContent: "8:00 AM - 6:00 PM EST",
    },
  ];

  return (
    <section id="contact" className="contact">
      <div className="contact-container">

        {/* Header */}
        <div className="contact-header">
          <motion.span className="contact-label">Get In Touch</motion.span>
          <motion.h2>Schedule Your Free Consultation</motion.h2>
          <motion.p>
            Ready to optimize your tax strategy? Contact us today for a
            complimentary consultation with one of our expert advisors.
          </motion.p>
        </div>

        <div className="contact-grid">
          {/* Left */}
          <motion.div className="contact-info">
            <h3>Contact Information</h3>
            <p>
              Our team is ready to help you navigate your tax challenges. Reach
              out through any of these channels.
            </p>

            <div className="info-list">
              {contactInfo.map((info, index) => (
                <motion.div key={info.title} className="info-item">
                  <div className="info-icon">
                    <info.icon />
                  </div>
                  <div>
                    <div className="info-title">{info.title}</div>
                    <div className="info-main">{info.content}</div>
                    <div className="info-sub">{info.subContent}</div>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="map-box">
              <OfficeMap/>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div className="contact-form-wrap">
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-grid">
                <Input label="Full Name *" name="name" value={formData.name} onChange={handleChange} />
                <Input label="Email Address *" name="email" value={formData.email} onChange={handleChange} />
              </div>

              <div className="form-grid">
                <Input label="Phone Number *" name="phone" value={formData.phone} onChange={handleChange} />
                <Select label="Service Needed *" name="service" value={formData.service} onChange={handleChange} />
              </div>

              <Textarea label="Message *" name="message" value={formData.message} onChange={handleChange} />

              <button type="submit" className="submit-btn">
                <span>Send Message</span>
                <Send />
              </button>

              <p className="form-note">
                By submitting this form, you agree to our privacy policy and terms
                of service.
              </p>
            </form>
          </motion.div>
        </div>

        {/* Bottom CTA */}
        <div className="contact-cta">
          <h3>Need Immediate Assistance?</h3>
          <p>
            Call us now for urgent tax matters or speak directly with one of our
            certified tax professionals.
          </p>
          <a href="tel:1-800-TAX-HELP" className="cta-btn">
            <Phone />
            <span>1-800-TAX-HELP</span>
          </a>
        </div>

      </div>
    </section>
  );
}

/* Helpers */
function Input({ label, ...props }) {
  return (
    <div>
      <label>{label}</label>
      <input {...props} required />
    </div>
  );
}

function Select({ label, ...props }) {
  return (
    <div>
      <label>{label}</label>
      <select {...props} required>
        <option value="">Select a service</option>
        <option value="tax-planning">Tax Planning & Strategy</option>
        <option value="tax-preparation">Tax Preparation & Filing</option>
        <option value="corporate-tax">Corporate Taxation</option>
        <option value="consulting">Financial Consulting</option>
        <option value="audit-support">IRS Audit Support</option>
        <option value="bookkeeping">Bookkeeping Services</option>
      </select>
    </div>
  );
}

function Textarea({ label, ...props }) {
  return (
    <div>
      <label>{label}</label>
      <textarea rows="6" {...props} required />
    </div>
  );
}
