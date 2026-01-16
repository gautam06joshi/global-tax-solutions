import { Phone, Menu, X, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';
import { useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import './Header.css';
import Logo from '../../assets/logo1.png';

const servicesData = [
  {
    category: "Accounting & Compliance",
    items: [
      {
        title: "Bookkeeping & Financial Statements",
        route: "/services/bookkeeping-financial-statements",
      },
      {
        title: "Payroll Management",
        route: "/services/payroll-management",
      },
      {
        title: "T4 Preparation",
        route: "/services/t4-preparation",
      },
    ],
  },
  {
    category: "Tax Services",
    items: [
      {
        title: "Corporate Tax Returns",
        route: "/services/corporate-tax-returns",
      },
      {
        title: "Personal Tax Returns",
        route: "/services/personal-tax-returns",
      },
      {
        title: "GST & WCB Returns",
        route: "/services/gst-wcb-returns",
      },
    ],
  },
  {
    category: "Business Advisory",
    items: [
      {
        title: "Business Incorporation",
        route: "/services/business-incorporation",
      },
      {
        title: "Tax Planning",
        route: "/services/tax-planning",
      },
    ],
  },
];



export function Header() {
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  const navigate = useNavigate();

  const goTo = (path) => {
    navigate(path);
    setMobileMenuOpen(false);
  };
  
  useEffect(() => {
  if (mobileMenuOpen) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "";
  }

  return () => {
    document.body.style.overflow = "";
  };
}, [mobileMenuOpen]);


  return (
    <>
    
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="site-header"
    >
      
      <div className="site-container">
        <div className="header-row">

          {/* Mobile Logo */}
<div className="mobile-logo" onClick={() => goTo('/')}>
  <img
    src = {Logo}
    alt="Global Tax Solution"
  />
</div>



          {/* Desktop Navigation */}
          <nav className="nav-desktop">
            <img src={Logo} alt="TaxSolutions & Consulting Logo" className="logo-image" />
            <button onClick={() => goTo('/')} className="nav-link">Home</button>
            <button onClick={() => goTo('/about')} className="nav-link">About</button>
            <div
  className="services-mega-wrapper"
  onMouseEnter={() => setServicesOpen(true)}
  onMouseLeave={() => setServicesOpen(false)}
>
  <button
    className="nav-link services-trigger"
    onClick={() => setServicesOpen(!servicesOpen)}
  >
    Services <ChevronDown size={14} />
  </button>

  <AnimatePresence>
    {servicesOpen && (
      <motion.div
  className="services-mega"
  initial={{ y: -20 }}
  animate={{ y: 0 }}
  exit={{ y: -20 }}
  transition={{ duration: 0.35, ease: 'easeOut' }}
>



        <div className="mega-grid">

          {/* COLUMN 1 */}
          <div className="mega-col">
            <h4>Accounting & Compliance</h4>

            <button
  className="mega-item"
  onClick={() => {
    setServicesOpen(false);
    goTo('/services/bookkeeping-financial-statements');
  }}
>
  <strong>Bookkeeping & Financial Statements</strong>
  <p>Accurate records and reports for informed business decisions.</p>
</button>


            <button
  className="mega-item"
  onClick={() => {
    setServicesOpen(false);
    goTo('/services/payroll-management');

  }}
>
              <strong>Payroll Management</strong>
              <p>End-to-end payroll processing with statutory compliance.</p>
            </button>

            <button
  className="mega-item"
  onClick={() => {
    setServicesOpen(false);
    goTo('/services/t4-preparation');
  }}
>
              <strong>T4 Preparation</strong>
              <p>Professional employee tax form preparation and filing.</p>
            </button>
          </div>

          {/* COLUMN 2 */}
          <div className="mega-col">
            <h4>Tax Services</h4>

            <button
  className="mega-item"
  onClick={() => {
    setServicesOpen(false);
    goTo('/services/corporate-tax-returns');

  }}
>
              <strong>Corporate Tax Returns</strong>
              <p>Strategic corporate tax filing to minimize liabilities.</p>
            </button>

            <button
  className="mega-item"
  onClick={() => {
    setServicesOpen(false);
    goTo('/services/personal-tax-returns');

  }}
>
              <strong>Personal Tax Returns</strong>
              <p>Accurate and timely filing tailored to your income profile.</p>
            </button>

            <button
  className="mega-item"
  onClick={() => {
    setServicesOpen(false);
    goTo('/services/gst-wcb-returns');

  }}
>
              <strong>GST & WCB Returns</strong>
              <p>Compliant preparation and submission of statutory returns.</p>
            </button>
          </div>

          {/* COLUMN 3 */}
          <div className="mega-col">
            <h4>Business Advisory</h4>

            <button
  className="mega-item"
  onClick={() => {
    setServicesOpen(false);
    goTo('/services/business-incorporation');

  }}
>
              <strong>Business Incorporation</strong>
              <p>Complete incorporation support from structure to registration.</p>
            </button>

            <button
  className="mega-item"
  onClick={() => {
    setServicesOpen(false);
    goTo('/services/tax-planning');

  }}
>
              <strong>Tax Planning</strong>
              <p>Proactive planning strategies for long-term tax efficiency.</p>
            </button>
          </div>

          {/* COLUMN 4 */}
          <div className="mega-col mega-cta">
            <h4>Need Expert Advice?</h4>
            <p>
              Speak with our tax and compliance experts to understand the
              right solution for your business.
            </p>

            <button
              className="cta-button"
              onClick={() => {
                setServicesOpen(false);
                goTo('/contact');
              }}
            >
              Let’s Talk
            </button>
          </div>

        </div>
      </motion.div>
    )}
  </AnimatePresence>
</div>

            <button onClick={() => goTo('/testimonials')} className="nav-link">Testimonials</button>
            <button onClick={() => goTo('/contact')} className="nav-link">Contact</button>
          </nav>

          {/* Contact Info */}
          <div className="contact-area">
            <button
              onClick={() => goTo('/contact')}
              className="cta-button"
            >
              Book Consultation
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="mobile-toggle"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="mobile-icon" /> : <Menu className="mobile-icon" />}
          </button>
        </div>

        {/* Mobile Menu */}
        
      </div>
    </motion.header>
    <AnimatePresence>
  {mobileMenuOpen && (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      className="mobile-menu"
    >
      <nav className="mobile-nav">
        <button onClick={() => goTo('/')} className="mobile-link">Home</button>
        <button onClick={() => goTo('/about')} className="mobile-link">About</button>

        <button
          className="mobile-link mobile-services-toggle"
          onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
        >
          <span>Services</span>
          <ChevronDown
            size={16}
            style={{
              transform: mobileServicesOpen ? 'rotate(180deg)' : 'rotate(0deg)',
              transition: 'transform 0.2s ease'
            }}
          />
        </button>

        <AnimatePresence>
          {mobileServicesOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              className="mobile-services-dropdown"
            >
              {servicesData.map((group, groupIndex) => (
                <div key={groupIndex} className="mobile-service-group">
                  <span className="mobile-service-heading">{group.category}</span>

                  {group.items.map((service, index) => (
                    <button
                      key={index}
                      className="mobile-sub-link"
                      onClick={() => {
                        setMobileMenuOpen(false);
                        setMobileServicesOpen(false);
                        goTo(service.route);
                      }}
                    >
                      {service.title}
                    </button>
                  ))}
                </div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        <button onClick={() => goTo('/testimonials')} className="mobile-link">
          Testimonials
        </button>

        <button onClick={() => goTo('/contact')} className="mobile-link">
          Contact
        </button>

        <div className="mobile-contact">
          <Phone className="phone-icon" />
          <span className="phone-text">1-800-TAX-HELP</span>
        </div>

        <button onClick={() => goTo('/contact')} className="cta-button mobile-cta">
          Book Consultation
        </button>
      </nav>
    </motion.div>
  )}
</AnimatePresence>

    </>
  );
}
