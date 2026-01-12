// WhyChooseUs.jsx
import React from "react";
import { motion } from "motion/react";
import { Award, Shield, Clock, TrendingUp, Users, CheckCircle } from "lucide-react";
import "./WhyChooseUs.css";

export function WhyChooseUs() {
  const reasons = [
    {
      icon: Award,
      title: "Experienced Advisors",
      description:
        "Our team brings years of hands-on tax advisory experience across personal and business scenarios.",
      metric: "10+ Years",
    },
    {
      icon: Shield,
      title: "Trusted Guidance",
      description:
        "We focus on clear, reliable insights that help clients feel confident in their tax decisions.",
      metric: "Clear Advice",
    },
    {
      icon: Clock,
      title: "Year-Round Insight",
      description:
        "Tax considerations evolve throughout the year, and we support proactive planning at every stage.",
      metric: "All Year",
    },
    {
      icon: TrendingUp,
      title: "Strategic Perspective",
      description:
        "Our advisory approach emphasizes planning, awareness, and long-term financial clarity.",
      metric: "Forward Focus",
    },
    {
      icon: Users,
      title: "Client Relationships",
      description:
        "We build long-term relationships by understanding each client’s unique financial situation.",
      metric: "Client First",
    },
    {
      icon: CheckCircle,
      title: "Thoughtful Approach",
      description:
        "Every consultation is handled with care, attention to detail, and practical insight.",
      metric: "Quality Focus",
    },
  ];

  const certifications = [
    { name: "Tax Advisory Specialists", icon: Award },
    { name: "Canada-Focused Guidance", icon: Shield },
    { name: "Business & Personal Tax Insight", icon: Award },
    { name: "Consultation-Based Services", icon: CheckCircle },
  ];

  const stats = [
    { value: "2015", label: "Established In" },
    { value: "Canada-Wide", label: "Clients Supported" },
    { value: "Thousands", label: "Advisory Sessions" },
    { value: "Trusted", label: "Client Relationships" },
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
            The Global Tax Solutions Advantage
          </motion.h2>

          <motion.p
            className="why-lead"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Discover the value of working with a tax consultation firm focused on
            clarity, understanding, and informed decision-making.
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

        {/* Trust Indicators */}
        <motion.div
          className="why-certs"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <div className="certs-header">
            <h3 className="certs-title">Built on Trust & Clarity</h3>
            <p className="certs-lead">
              A consultation-first approach designed to support confident decisions
            </p>
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
            <span className="trust-text">
              Clear Guidance. Thoughtful Advice. Confident Decisions.
            </span>
          </div>
        </motion.div>
      </div>

      {/* Bottom Divider */}
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
