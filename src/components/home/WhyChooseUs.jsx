// WhyChooseUs.jsx
import React from "react";
import { motion } from "motion/react";
import { Award, Shield, Clock, TrendingUp, Users, CheckCircle } from "lucide-react";
import "./WhyChooseUs.css";

export function WhyChooseUs() {
  const reasons = [
    {
      icon: Award,
      title: "Certified Experts",
      description:
        "Our team consists of certified CPAs and tax specialists with decades of combined experience.",
      metric: "50+ CPAs",
    },
    {
      icon: Shield,
      title: "100% Compliance",
      description:
        "We maintain a perfect compliance record, ensuring your taxes are accurate and audit-proof.",
      metric: "0 Penalties",
    },
    {
      icon: Clock,
      title: "Year-Round Support",
      description: "Tax planning doesn't stop in April. We provide continuous support throughout the year.",
      metric: "24/7 Access",
    },
    {
      icon: TrendingUp,
      title: "Proven Results",
      description:
        "Our clients save an average of 30% on their tax liability through strategic planning.",
      metric: "30% Savings",
    },
    {
      icon: Users,
      title: "Client Satisfaction",
      description: "Over 98% of our clients return year after year, trusting us with their financial future.",
      metric: "98% Retention",
    },
    {
      icon: CheckCircle,
      title: "Guaranteed Accuracy",
      description:
        "We stand behind our work with a 100% accuracy guarantee and will cover any penalties.",
      metric: "100% Accuracy",
    },
  ];

  const certifications = [
    { name: "CPA Certified", icon: Award },
    { name: "IRS Approved", icon: Shield },
    { name: "BBB Accredited", icon: Award },
    { name: "QuickBooks ProAdvisor", icon: CheckCircle },
  ];

  const stats = [
    { value: "25+", label: "Years in Business" },
    { value: "5,000+", label: "Clients Served" },
    { value: "$50M+", label: "Tax Savings Generated" },
    { value: "100%", label: "Client Satisfaction" },
  ];

  return (

    <section className="why-section" aria-labelledby="why-heading">

      <div className="why-divider-top" aria-hidden="true">
    <svg
      viewBox="0 0 1920 80"
      preserveAspectRatio="none"
      className="why-divider-svg"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* inverted triangle */}
      <polygon points="960,0 1920,80 0,80" fill="#373737" />
    </svg>
  </div>
      {/* subtle pattern background */}
      <div className="why-pattern" aria-hidden="true" />

      <div className="why-inner">
        {/* Header */}
        <div className="why-header">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="why-eyebrow">Why Choose Us</span>
          </motion.div>

          <motion.h2
            id="why-heading"
            className="why-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.6 }}
          >
            The TaxSolutions Advantage
          </motion.h2>

          <motion.p
            className="why-lead"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Experience the difference of working with a firm that combines expertise,
            integrity, and innovation to deliver exceptional results.
          </motion.p>
        </div>

        {/* Stats Grid */}
        <motion.div
          className="why-stats-grid"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="why-stat"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 + index * 0.1, duration: 0.5 }}
            >
              <div className="why-stat-value">{stat.value}</div>
              <div className="why-stat-label">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Reasons Grid */}
        <div className="why-reasons-grid">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <motion.div
                key={reason.title}
                className="why-reason"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
              >
                <div className="reason-top">
                  <div className="reason-icon-wrap">
                    <Icon className="reason-icon" />
                  </div>
                  <div className="reason-metric">{reason.metric}</div>
                </div>

                <h3 className="reason-title">{reason.title}</h3>
                <p className="reason-desc">{reason.description}</p>
              </motion.div>
            );
          })}
        </div>

        {/* Certifications */}
        <motion.div
          className="why-certs"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <div className="certs-header">
            <h3 className="certs-title">Trusted &amp; Certified</h3>
            <p className="certs-lead">Recognized by leading industry organizations</p>
          </div>

          <div className="certs-grid">
            {certifications.map((cert, index) => {
              const Icon = cert.icon;
              return (
                <motion.div
                  key={cert.name}
                  className="cert-item"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.7 + index * 0.1, duration: 0.5 }}
                >
                  <Icon className="cert-icon" />
                  <span className="cert-name">{cert.name}</span>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Trust Badge */}
        <motion.div
          className="why-trust"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <div className="trust-badge">
            <Shield className="trust-icon" />
            <span className="trust-text">Your Financial Security is Our Top Priority</span>
          </div>
        </motion.div>
      </div>

        {/* Full-width triangle divider (sits at bottom of WhyChooseUs) */}
  <div className="why-divider" aria-hidden="true">
    <svg
      viewBox="0 0 1920 80"
      preserveAspectRatio="none"
      className="why-divider-svg"
      xmlns="http://www.w3.org/2000/svg"
    >
      <polygon points="0,0 1920,0 960,80" fill="#373737" />
    </svg>
  </div>


      
    </section>
  );
}

export default WhyChooseUs;
