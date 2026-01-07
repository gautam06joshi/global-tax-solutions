import { useState } from "react";
import { ChevronDown } from "lucide-react";
import "./FAQ.css";

export function FAQ() {
  const faqs = [
    {
      question: "What services does TaxSolutions & Consulting provide?",
      answer:
        "We offer comprehensive tax planning, compliance, advisory, and consulting services for individuals, startups, and established businesses. Our focus is on accuracy, compliance, and long-term financial efficiency."
    },
    {
      question: "Who can benefit from your consulting services?",
      answer:
        "Our services are designed for individuals, small and medium-sized businesses, startups, and enterprises looking for reliable tax solutions and strategic financial guidance."
    },
    {
      question: "How experienced is your team?",
      answer:
        "Our team consists of qualified tax professionals and consultants with years of industry experience. We stay updated with the latest tax laws and regulatory changes to ensure reliable guidance."
    },
    {
      question: "Do you provide customized tax solutions?",
      answer:
        "Yes, we believe every client’s financial situation is unique. We tailor our strategies based on your specific goals, business structure, and compliance requirements."
    },
    {
      question: "How do you ensure data confidentiality?",
      answer:
        "Client confidentiality is our top priority. We follow strict data protection practices and industry-standard security measures to safeguard all financial and personal information."
    },
    {
      question: "How can I book a consultation?",
      answer:
        "You can book a consultation through our website or contact us directly via phone. Our team will schedule a session at a time convenient for you."
    }
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="faq-section">
      <div className="faq-container">
        <h2 className="faq-title">Frequently Asked Questions</h2>
        <p className="faq-subtitle">
          Find answers to common questions about our services, process, and expertise.
        </p>

        <div className="faq-list">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`faq-item ${activeIndex === index ? "active" : ""}`}
            >
              <button
                className="faq-question"
                onClick={() => toggleFAQ(index)}
              >
                <span>{faq.question}</span>
                <ChevronDown className="faq-icon" />
              </button>

              <div className="faq-answer">
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
