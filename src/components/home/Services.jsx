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
      title: "Bookkeeping & Financial Statements",
      description:
        "Accurate bookkeeping and structured financial reporting that give you complete visibility into your business finances.",
      features: [
        "Monthly & annual bookkeeping",
        "Financial statements & reporting",
        "Audit-ready and compliant records",
      ],
    },
    {
      slug: "payroll-management",
      icon: Users,
      title: "Payroll Management",
      description:
        "End-to-end payroll processing designed to ensure accurate payments and full statutory compliance.",
      features: [
        "Employee payroll processing",
        "Statutory deductions & remittances",
        "Payroll compliance management",
      ],
    },
    {
      slug: "t4-preparation",
      icon: Shield,
      title: "T4 Preparation",
      description:
        "Professional preparation and filing of T4 slips to meet regulatory requirements accurately and on time.",
      features: [
        "T4 & T4A preparation",
        "Employee tax form filing",
        "CRA-compliant submissions",
      ],
    },
    {
      slug: "corporate-tax-returns",
      icon: Building2,
      title: "Corporate Tax Returns",
      description:
        "Strategic corporate tax filing services designed to minimize liabilities while ensuring full compliance.",
      features: [
        "Corporate tax return filing",
        "Tax liability optimization",
        "CRA compliance support",
      ],
    },
    {
      slug: "personal-tax-returns",
      icon: Calculator,
      title: "Personal Tax Returns",
      description:
        "Accurate and timely personal tax filing tailored to your income profile and financial goals.",
      features: [
        "Personal income tax filing",
        "Deductions & credits review",
        "Error-free submissions",
      ],
    },
    {
      slug: "gst-wcb-returns",
      icon: FileText,
      title: "GST & WCB Returns",
      description:
        "Compliant preparation and submission of GST and WCB returns to avoid penalties and delays.",
      features: [
        "GST return filing",
        "WCB reporting & compliance",
        "On-time statutory submissions",
      ],
    },
    {
      slug: "business-incorporation",
      icon: Building2,
      title: "Business Incorporation",
      description:
        "Complete incorporation support from business structure selection to registration and compliance.",
      features: [
        "Business structure guidance",
        "Company registration support",
        "Startup compliance assistance",
      ],
    },
    {
      slug: "tax-planning",
      icon: TrendingUp,
      title: "Tax Planning",
      description:
        "Proactive tax planning strategies focused on long-term savings, efficiency, and business growth.",
      features: [
        "Strategic tax planning",
        "Long-term savings strategies",
        "Future-focused advisory",
      ],
    },
  ];

  return (
    <section id="services" className="services-section">
      <div className="services-container">

        <div className="services-header">
          <motion.span className="services-label">Our Services</motion.span>

          <motion.h2 className="services-title">
            Comprehensive Tax Solutions for Every Need
          </motion.h2>

          <motion.p className="services-subtitle">
            From tax planning to audit support, our expert team provides the full spectrum of tax and financial services to keep you compliant and competitive.
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
            <h3>Ready to Optimize Your Tax Strategy?</h3>
            <p>
              Schedule a consultation with our expert team and discover how we can help you achieve your financial goals.
            </p>
            <button>Schedule Free Consultation</button>
          </div>
        </div>

      </div>
    </section>
  );
}
