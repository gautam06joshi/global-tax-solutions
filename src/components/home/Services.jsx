import { motion } from "motion/react";
import {
  Calculator,
  FileText,
  TrendingUp,
  Building2,
  Shield,
  Users,
} from "lucide-react";
import "./Services.css";
import { useNavigate } from "react-router-dom";

export function Services() {
  // ✅ Hook MUST be here
  const navigate = useNavigate();

  const services = [
    {
      slug: "bookkeeping-financial-statements",
      icon: FileText,
      title: "Bookkeeping & Financial Insights",
      description:
        "Guidance and insights that help you understand bookkeeping records and financial statements with clarity.",
      features: [
        "Understanding monthly & annual records",
        "Financial statement interpretation",
        "Record organization best practices",
      ],
    },
    {
      slug: "payroll-management",
      icon: Users,
      title: "Payroll Guidance",
      description:
        "Clear guidance on payroll structures, deductions, and obligations to support informed decision-making.",
      features: [
        "Payroll structure understanding",
        "Deductions & contribution guidance",
        "Payroll process clarity",
      ],
    },
    {
      slug: "t4-preparation",
      icon: Shield,
      title: "T4 & Information Slip Guidance",
      description:
        "Advisory support to help you understand T4 requirements, timelines, and reporting expectations.",
      features: [
        "T4 & T4A requirement guidance",
        "Employee reporting understanding",
        "CRA reporting awareness",
      ],
    },
    {
      slug: "corporate-tax-returns",
      icon: Building2,
      title: "Corporate Tax Advisory",
      description:
        "Strategic guidance to help corporations understand tax obligations and planning considerations.",
      features: [
        "Corporate tax structure guidance",
        "Tax planning considerations",
        "Compliance awareness support",
      ],
    },
    {
      slug: "personal-tax-returns",
      icon: Calculator,
      title: "Personal Tax Advisory",
      description:
        "Personalized guidance to help individuals understand income reporting, deductions, and credits.",
      features: [
        "Personal tax understanding",
        "Deductions & credits overview",
        "Tax planning clarity",
      ],
    },
    {
      slug: "gst-wcb-returns",
      icon: FileText,
      title: "GST & WCB Advisory",
      description:
        "Clear explanations of GST and WCB obligations to help you stay informed and prepared.",
      features: [
        "GST reporting understanding",
        "WCB obligation awareness",
        "Filing timeline guidance",
      ],
    },
    {
      slug: "business-incorporation",
      icon: Building2,
      title: "Business Incorporation Guidance",
      description:
        "Advisory support to help you understand incorporation options and business structure choices.",
      features: [
        "Business structure guidance",
        "Incorporation option clarity",
        "Startup planning insights",
      ],
    },
    {
      slug: "tax-planning",
      icon: TrendingUp,
      title: "Tax Planning Advisory",
      description:
        "Forward-looking tax planning guidance focused on efficiency, preparedness, and long-term goals.",
      features: [
        "Strategic planning discussions",
        "Long-term tax awareness",
        "Future-focused guidance",
      ],
    },
  ];

  return (
    <section id="services" className="services-section">
      <div className="services-container">
        <div className="services-header">
          <motion.span className="services-label">
            Our Services
          </motion.span>

          <motion.h2 className="services-title">
            Practical Tax Guidance for Every Stage
          </motion.h2>

          <motion.p className="services-subtitle">
            From tax planning insights to business guidance, we provide clear advisory support to help you understand your options and move forward with confidence.
          </motion.p>
        </div>

        <div className="services-grid">
          {services.map((service) => (
            <div
              key={service.slug}
              className="service-group"
              onClick={() => navigate(`/services/${service.slug}`)}
              role="button"
              tabIndex={0}
            >
              <div className="service-card">
                <div className="service-icon-wrap">
                  <service.icon className="service-icon" />
                </div>

                <h3>{service.title}</h3>
                <p>{service.description}</p>

                <ul>
                  {service.features.map((feature) => (
                    <li key={feature}>
                      <span className="dot" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="service-learn-more">
                  <span>Learn more</span> →
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="services-cta">
          <div className="cta-box">
            <h3>Ready to Plan with Confidence?</h3>
            <p>
              Book a consultation and gain clarity on tax matters, planning strategies, and next steps tailored to your situation.
            </p>
            <button>Schedule Consultation</button>
          </div>
        </div>
      </div>
    </section>
  );
}
