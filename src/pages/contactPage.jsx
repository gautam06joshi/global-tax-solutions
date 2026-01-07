// components/contact/ContactPage.jsx
import "../components/contact/ContactForm.css";
import { ContactForm } from "../components/contact/ContactForm";
import { ContactInfo } from "../components/contact/ContactInfo";

export function ContactPage() {
  return (
    <section className="contact-wrapper">
      <div className="contact-layout">
        <div className="contact-copy">
          <h1>
            Trusted Tax Advisory
            <br />
            & Compliance Expertise
          </h1>
          <p>
            We help businesses and individuals navigate complex tax
            regulations, ensure compliance, and implement strategic tax
            planning for long-term financial efficiency and growth.
          </p>
        </div>

        <ContactForm />
      </div>
    </section>
  );
}
