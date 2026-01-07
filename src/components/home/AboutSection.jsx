import React from "react";
import { motion } from "motion/react";
import { Award, Target, Users, TrendingUp } from "lucide-react";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import "./About.css";

export function AboutSection() {
  const values = [
    {
      icon: Award,
      title: "Excellence",
      description:
        "Committed to delivering the highest quality tax solutions with precision and expertise.",
    },
    {
      icon: Target,
      title: "Integrity",
      description:
        "Building lasting relationships through honest, transparent, and ethical practices.",
    },
    {
      icon: Users,
      title: "Client-Focused",
      description:
        "Your success is our priority. We provide personalized attention to every client.",
    },
    {
      icon: TrendingUp,
      title: "Innovation",
      description:
        "Leveraging cutting-edge technology and strategies to optimize your tax outcomes.",
    },
  ];

  return (
    <section id="about" className="about-section">
      <div className="container">
        <div className="grid-two-cols">
          {/* Left Column - Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="left-col"
          >
            <div className="image-wrap">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1758519288417-d359ac3c494d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjB0ZWFtJTIwY29uc3VsdGluZ3xlbnwxfHx8fDE3NjQ3NTk4ODl8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Corporate team consulting"
                className="hero-image"
              />
              <div className="image-gradient" />
            </div>

            {/* Floating Stats Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="floating-card"
            >
              <div className="card-row">
                <div className="card-icon-wrap">
                  <Award className="card-icon" />
                </div>
                <div className="card-texts">
                  <div className="card-title">Top Rated</div>
                  <div className="card-sub">Industry Leader Since 1998</div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="right-col"
          >
            <div className="space-vertical">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="eyebrow"
              >
                <span>About TaxSolutions</span>
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="heading"
              >
                Trusted Tax Expertise for Over 25 Years
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="lead"
              >
                Since 1998, TaxSolutions has been the trusted partner for
                businesses and individuals navigating complex tax landscapes.
                Our team of certified professionals combines deep industry
                knowledge with innovative strategies to deliver exceptional
                results.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="lead"
              >
                We pride ourselves on building lasting relationships with our
                clients, providing personalized attention and strategic guidance
                that goes beyond traditional tax preparation. Your financial
                success is our mission.
              </motion.p>
            </div>

            {/* Values Grid */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="values-grid"
            >
              {values.map((value, index) => {
                const Icon = value.icon;
                return (
                  <motion.div
                    key={value.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.7 + index * 0.1 }}
                    className="value-row"
                  >
                    <div className="value-icon-wrap">
                      <Icon className="value-icon" />
                    </div>
                    <div>
                      <h4 className="value-title">{value.title}</h4>
                      <p className="value-desc">{value.description}</p>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>

            {/* Certifications */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 1 }}
              className="certifications"
            >
              <div className="cert-row">
                <div className="cert-item">
                  <Award className="cert-icon" />
                  <span>CPA Certified</span>
                </div>
                <div className="cert-item">
                  <Award className="cert-icon" />
                  <span>IRS Approved</span>
                </div>
                <div className="cert-item">
                  <Award className="cert-icon" />
                  <span>BBB Accredited</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}