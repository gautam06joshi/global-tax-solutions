// File: Hero.jsx
// Place this file in your React project (e.g. src/components/Hero.jsx)
// Make sure to also include the companion CSS file Hero.css in the same folder

import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Shield, TrendingUp, Users } from 'lucide-react';
import './Hero.css';

export function Hero() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero">
      {/* Background Image with Overlay */}
      <div className="hero__bg">
      </div>

      {/* Content */}
      <div className="hero__content">
        <div className="hero__grid">
          {/* Left Column - Text Content */}
          <div className="hero__left">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="badge"
            >
              <Shield className="badge__icon" />
              <span className="badge__text">Trusted by 5,000+ Clients Nationwide</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="hero__title"
            >
              Expert Tax Solutions You Can Trust
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="hero__subtitle"
            >
              Navigate complex tax landscapes with confidence. Our certified professionals deliver strategic tax planning, consulting, and compliance solutions tailored to your business needs.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="hero__actions"
            >
              <button onClick={() => scrollToSection('contact')} className="btn btn--primary">
                <span>Book Consultation</span>
                <ArrowRight className="btn__icon" />
              </button>

              <button onClick={() => scrollToSection('services')} className="btn btn--ghost">
                Our Services
              </button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="hero__stats"
            >
              <div className="stat">
                <div className="stat__top">
                  <TrendingUp className="stat__icon" />
                  <div className="stat__value">25+</div>
                </div>
                <div className="stat__label">Years Experience</div>
              </div>

              <div className="stat">
                <div className="stat__top">
                  <Users className="stat__icon" />
                  <div className="stat__value">5K+</div>
                </div>
                <div className="stat__label">Satisfied Clients</div>
              </div>

              <div className="stat">
                <div className="stat__top">
                  <Shield className="stat__icon" />
                  <div className="stat__value">100%</div>
                </div>
                <div className="stat__label">Compliance Rate</div>
              </div>
            </motion.div>
          </div>

          {/* Right Column - Decorative Element */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="hero__right"
          >
            <div className="card--decor">
              <div className="card">
                <div className="card__list">
                  <div className="card__item">
                    <div className="card__icon-wrap accent">
                      <Shield className="card__icon" />
                    </div>
                    <div>
                      <div className="card__title">Certified Professionals</div>
                      <div className="card__subtitle">CPA & Tax Specialists</div>
                    </div>
                  </div>

                  <div className="card__item">
                    <div className="card__icon-wrap emerald">
                      <TrendingUp className="card__icon" />
                    </div>
                    <div>
                      <div className="card__title">Strategic Planning</div>
                      <div className="card__subtitle">Maximize Your Savings</div>
                    </div>
                  </div>

                  <div className="card__item">
                    <div className="card__icon-wrap accent">
                      <Users className="card__icon" />
                    </div>
                    <div>
                      <div className="card__title">Personalized Service</div>
                      <div className="card__subtitle">Tailored Solutions</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="scroll-indicator"
      >
        <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 2, repeat: Infinity }} className="scroll-indicator__outer">
          <motion.div className="scroll-indicator__dot" />
        </motion.div>
      </motion.div>

      
    </section>
    
  );
}

export default Hero;