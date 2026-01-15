import React from "react";
import { motion } from "motion/react";
import { Award, Target, Users, TrendingUp } from "lucide-react";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import "./About.css";

export function AboutSection() {
  const values = [
    {
      icon: Award,
      title: "Experience",
      description:
        "Providing knowledgeable tax guidance built on years of practical experience across personal and business tax matters.",
    },
    {
      icon: Target,
      title: "Clarity",
      description:
        "Breaking down complex tax rules into clear, easy-to-understand insights you can act on with confidence.",
    },
    {
      icon: Users,
      title: "Client Understanding",
      description:
        "Focused on listening, understanding your situation, and delivering advice that fits your goals.",
    },
    {
      icon: TrendingUp,
      title: "Strategic Insight",
      description:
        "Helping you plan ahead with thoughtful tax strategies designed to support long-term financial decisions.",
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
                alt="Professional tax consultation discussion"
                className="hero-image"
              />
              <div className="image-gradient" />
            </div>

            {/* Floating Info Card */}
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
                  <div className="card-title">Established 2015</div>
                  <div className="card-sub">Calgary-Based Tax Advisors</div>
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
                <span>About Global Tax Solutions</span>
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="heading"
              >
                Trusted Tax Guidance Built on Experience & Clarity
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="lead"
              >
                Global Tax Solutions is a Calgary-based tax consultation firm
                supporting individuals, families, and businesses across Canada.
                We help clients navigate the Canadian tax landscape by providing
                clear explanations, informed guidance, and practical planning
                insights.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="lead"
              >
                Our approach is centered on education and understanding.
                By explaining how tax rules apply to your specific situation,
                we empower you to make confident decisions and move forward
                with greater clarity.
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
                      <Icon className="value-icon-about"  />
                    </div>
                    <div>
                      <h4 className="value-title">{value.title}</h4>
                      <p className="value-desc">{value.description}</p>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
            

            {/* Trust Indicators */}
            
          </motion.div>
        </div>

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
                  <span>Tax Consultation & Advisory</span>
                </div>
                <div className="cert-item">
                  <Award className="cert-icon" />
                  <span>Canada-Wide Client Support</span>
                </div>
                <div className="cert-item">
                  <Award className="cert-icon" />
                  <span>Clear & Transparent Guidance</span>
                </div>
              </div>
            </motion.div>
      </div>
    </section>
  );
}
