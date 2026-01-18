import { ContactInfo } from "../components/contact/ContactInfo";
import { ContactForm } from "../components/contact/ContactForm";
import "../components/contact/Contact.css";

export function ContactPage() {
  return (
    <section className="contact-page">
      <div className="contact-shell">
        <ContactInfo />
        <ContactForm />
      </div>
    </section>
  );
}

