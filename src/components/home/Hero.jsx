// File: Hero.jsx
// Advisory & Consultation focused hero section
// Company: Global Tax Solutions (Calgary, Canada)

import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Shield, TrendingUp, Users } from 'lucide-react';
import './Hero.css';
import heroVideo from "../../assets/hero-bg-compressed.mp4";


export function Hero() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }

    
  };

  return (
    <section id="home" className="hero">
      {/* Background */}
      {/* Background */}
<div className="hero__bg">
  <video
    className="hero__bg-video"
    src={heroVideo}
    autoPlay
    muted
    loop
    playsInline
    preload="metadata"
  />
</div>


      {/* Content */}
      <div className="hero__content">
        <div className="hero__grid">
          {/* Left Column */}
          <div className="hero__left">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="badge"
            >
              <Shield className="badge__icon" />
              <span className="badge__text">
                Trusted Tax Advisory & Consultation Since 2015
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="hero__title"
            >
              Clear, Reliable Tax Guidance for Confident Decisions
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="hero__subtitle"
            >
              Global Tax Solutions is a Calgary-based tax consultation firm
              providing clear, practical guidance to individuals, families,
              and businesses across Canada. We help you understand tax rules,
              obligations, and planning strategies — so you can make informed
              decisions with confidence.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="hero__actions"
            >
              <button
                onClick={() => scrollToSection('contact')}
                className="btn btn--primary"
              >
                <span>Book a Consultation</span>
                <ArrowRight className="btn__icon" />
              </button>

              <button
                onClick={() => scrollToSection('services')}
                className="btn btn--ghost"
              >
                Advisory Services
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
                  <div className="stat__value">10+</div>
                </div>
                <div className="stat__label">
                  Years of Advisory Experience
                </div>
              </div>

              <div className="stat">
                <div className="stat__top">
                  <Users className="stat__icon" />
                  <div className="stat__value">500+</div>
                </div>
                <div className="stat__label">
                  Individuals & Businesses Served
                </div>
              </div>

              <div className="stat">
                <div className="stat__top">
                  <Shield className="stat__icon" />
                  <div className="stat__value">100%</div>
                </div>
                <div className="stat__label">
                  Advice-Only & Transparent
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column */}
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
                      <div className="card__title">
                        Tax Consultation & Guidance
                      </div>
                      <div className="card__subtitle">
                        Education & Clarity
                      </div>
                    </div>
                  </div>

                  <div className="card__item">
                    <div className="card__icon-wrap emerald">
                      <TrendingUp className="card__icon" />
                    </div>
                    <div>
                      <div className="card__title">
                        Strategic Tax Advisory
                      </div>
                      <div className="card__subtitle">
                        Understand Your Options
                      </div>
                    </div>
                  </div>

                  <div className="card__item">
                    <div className="card__icon-wrap accent">
                      <Users className="card__icon" />
                    </div>
                    <div>
                      <div className="card__title">
                        Client-Focused Approach
                      </div>
                      <div className="card__subtitle">
                        No Filing • No Representation
                      </div>
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
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="scroll-indicator__outer"
        >
          <motion.div className="scroll-indicator__dot" />
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Hero;
