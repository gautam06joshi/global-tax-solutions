import {
  Facebook,
  X,
  Linkedin,
  Instagram,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import { Link } from "react-router-dom";
import "./Footer.css";
import Logo from "../../assets/brand-logo.png";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    services: [
      {
        name: "Bookkeeping & Financial Statements",
        to: "/services/bookkeeping-financial-statements",
      },
      {
        name: "Payroll Management",
        to: "/services/payroll-management",
      },
      {
        name: "T4 Preparation",
        to: "/services/t4-preparation",
      },
      {
        name: "Corporate Tax Returns",
        to: "/services/corporate-tax-returns",
      },
      {
        name: "Personal Tax Returns",
        to: "/services/personal-tax-returns",
      },
      {
        name: "GST & WCB Returns",
        to: "/services/gst-wcb-returns",
      },
      {
        name: "Business Incorporation",
        to: "/services/business-incorporation",
      },
      {
        name: "Tax Planning",
        to: "/services/tax-planning",
      },
    ],

    company: [
      { name: "About Us", href: "/about" },
      { name: "Our Team", href: "/about" },
      { name: "Careers", href: "#" },
      { name: "News & Insights", href: "#" },
      { name: "Client Portal", href: "#" },
    ],

    resources: [
      { name: "Tax Calendar", href: "#" },
      { name: "Financial Tools", href: "#" },
      { name: "FAQ", href: "#faq" },
      { name: "Blog", href: "#" },
      { name: "Case Studies", href: "#" },
    ],

    legal: [
      { name: "Privacy Policy", href: "#" },
      { name: "Terms of Service", href: "#" },
      { name: "Cookie Policy", href: "#" },
      { name: "Disclaimer", href: "#" },
    ],
  };

  const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook", brand: "#1877F2" },
  { icon: X, href: "#", label: "X", brand: "#000000" },
  { icon: Linkedin, href: "#", label: "LinkedIn", brand: "#0A66C2" },
  { icon: Instagram, href: "#", label: "Instagram", brand: "#E4405F" },
  ];


  return (
    <footer className="footer">
      <div className="footer-container">

        {/* MAIN GRID */}
        <div className="footer-grid">

          {/* BRAND */}
          <div className="footer-brand">
            <div className="brand-header">
              <div className="brand-icon">
                <img src={Logo} alt="Global tax solutions Logo" />
              </div>
              <div className="brand-text">
                <span className="brand-name">Global tax solutions</span>
                <span className="brand-sub">Advisory firm</span>
              </div>
            </div>

            <p className="brand-description">
              Your trusted partner for comprehensive tax solutions and financial
              consulting. Building lasting relationships through expertise,
              integrity, and exceptional service since 1998.
            </p>

            {/* CONTACT */}
            <div className="brand-contact">
              <div>
                <Phone />
                <span>1-800-TAX-HELP</span>
              </div>
              <div>
                <Mail />
                <span>info@taxsolutions.com</span>
              </div>
              <div>
                <MapPin />
                <span>123 Financial District, New York, NY 10004</span>
              </div>
            </div>

            {/* SOCIAL */}
            <div className="social-links">
  {socialLinks.map((social) => (
    <a
      key={social.label}
      href={social.href}
      aria-label={social.label}
      style={{ "--brand": social.brand }}
    >
      <social.icon />
    </a>
  ))}
</div>

          </div>

          {/* COLUMNS */}
          <FooterColumn title="Services" links={footerLinks.services} />
          <FooterColumn title="Company" links={footerLinks.company} />
          <FooterColumn title="Resources" links={footerLinks.resources} />
        </div>

        {/* BOTTOM */}
        <div className="footer-bottom">
          <div className="footer-bottom-row">
            <span>
              © {currentYear} TaxSolutions & Consulting. All rights reserved.
            </span>

            <div className="legal-links">
              {footerLinks.legal.map((link) => (
                <a key={link.name} href={link.href}>
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          <div className="footer-disclaimer">
            Professional Disclaimer: TaxSolutions & Consulting provides general
            tax and financial consulting services. The information provided on
            this website is for informational purposes only and should not be
            construed as legal or financial advice. Please consult with a
            certified professional for advice specific to your situation.
            TaxSolutions is a certified CPA firm and IRS-approved tax preparer.
          </div>
        </div>

      </div>
    </footer>
  );
}

/* ================= HELPER COMPONENT ================= */

function FooterColumn({ title, links }) {
  return (
    <div className="footer-column">
      <h4>{title}</h4>
      <ul>
        {links.map((link) => (
          <li key={link.name}>
            {link.to ? (
              <Link to={link.to}>{link.name}</Link>
            ) : (
              <a href={link.href}>{link.name}</a>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
