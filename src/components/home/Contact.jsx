import { motion } from "motion/react";
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";
import { useState } from "react";
import "./Contact.css";
import OfficeMap from "../map/OfficeMap";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../../firebase"; // adjust path if needed


export function Contact() {

  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const handleSubmit = async (e) => {
  e.preventDefault();

  if (loading) return;

  setLoading(true);

  try {
    await addDoc(collection(db, "publicContactLeads"), {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      service: formData.service,
      message: formData.message,
      source: "contact_page",
      read: false,
      createdAt: serverTimestamp(),
    });

    alert("Thank you for your inquiry! We will contact you within 24 hours.");

    setFormData({
      name: "",
      email: "",
      phone: "",
      service: "",
      message: "",
    });
  } catch (error) {
    console.error("Contact form error:", error);
    alert("Something went wrong. Please try again.");
  } finally {
    setLoading(false);
  }
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
      content: "+1 (403) 542-0370",
      subContent: "Mon-Fri 10AM-18:30PM EST",
    },
    {
      icon: Mail,
      title: "Email",
      content: "info@globaltaxsolutions.ca",
      subContent: "We respond within 24 hours",
    },
    {
      icon: Clock,
      title: "Hours",
      content: "Monday - Friday",
      subContent: "10:00 AM - 18:30 PM EST",
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
              <div className="form-title">Request a Consultation</div>
              <p className="form-subtitle">
                Fill out the form below and a senior tax advisor will get back
                to you within one business day.
              </p>
              <div className="form-grid">
                <Input label="Full Name *" name="name" value={formData.name} onChange={handleChange} />
                <Input label="Email Address *" name="email" value={formData.email} onChange={handleChange} />
              </div>

              <div className="form-grid">
                <Input label="Phone Number *" name="phone" value={formData.phone} onChange={handleChange} />
                <Select label="Service Needed *" name="service" value={formData.service} onChange={handleChange} />
              </div>

              <Textarea label="Message *" name="message" value={formData.message} onChange={handleChange} />

              <button
  type="submit"
  className="submit-btn"
  disabled={loading}
>
  {loading ? (
    <span className="spinner" />
  ) : (
    <>
      <span>Send Message</span>
      <Send className="send-icon" />
    </>
  )}
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
          <a href="tel:+1(403)542-0370" className="cta-btn">
  <Phone className="cta-icon" />
  <span className="cta-text">+1 (403) 542-0370</span>
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
        <option value="bookkeeping-financial-statements">Bookkeeping and financial statements</option>
        <option value="payroll-management">Payroll Management</option>
        <option value="t4-preparation">T4 Preparation</option>
        <option value="corporate-tax-returns">Corporate Tax Returns</option>
        <option value="personal-tax-returns">Personal Tax Returns</option>
        <option value="gst-wcb-returns">GST and WCB Returns</option>
        <option value="business-incorporation">Business Incorporation</option>
        <option value="tax-planning">Tax Planning</option>
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
