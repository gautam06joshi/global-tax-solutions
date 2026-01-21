import React, { useEffect, useState } from "react";
import { motion } from "motion/react";
import { ArrowRight, Shield, TrendingUp, Users } from "lucide-react";
import "./Hero.css";

import heroMobile from "../../assets/hero-mobile.webp";

export function Hero() {
  const [isMobile, setIsMobile] = useState(true);
  const [heroVideo, setHeroVideo] = useState(null);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const mobile = window.innerWidth < 768;
    setIsMobile(mobile);

    // ✅ Let LCP paint first
    requestAnimationFrame(() => setAnimate(true));

    // ✅ Load video AFTER initial paint
    if (!mobile) {
      setTimeout(() => {
        import("../../assets/hero-bg-compressed.mp4").then((mod) => {
          setHeroVideo(mod.default);
        });
      }, 1500);
    }
  }, []);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: "auto" });
  };

  return (
    <section id="home" className="hero">
      {/* Background */}
      <div className="hero__bg">
        {!isMobile && heroVideo ? (
          <video
            className="hero__bg-video"
            autoPlay
            muted
            loop
            playsInline
            preload="none"
          >
            <source src={heroVideo} type="video/mp4" />
          </video>
        ) : (
          <img
            src={heroMobile}
            className="hero__bg-image"
            width="360"
            height="640"
            alt="Calgary tax advisory background"
            loading="eager"
            decoding="async"
          />
        )}
      </div>

      {/* Content */}
      <div className="hero__content">
        <div className="hero__grid">
          {/* LEFT SIDE */}
          <div className="hero__left">
            {animate && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="badge"
              >
                <Shield className="badge__icon" />
                <span className="badge__text">
                  Trusted Tax Advisory & Consultation Since 2015
                </span>
              </motion.div>
            )}

            <h1 className="hero__title">
              Clear, Reliable Tax Guidance for Confident Decisions
            </h1>

            {/* 🔥 LCP ELEMENT (STATIC FIRST PAINT) */}
            <p className="hero__subtitle lcp-text">
              Global Tax Solutions is a Calgary-based tax consultation firm
              providing clear, practical guidance to individuals, families,
              and businesses across Canada. We help you understand tax rules,
              obligations, and planning strategies — so you can make informed
              decisions with confidence.
            </p>

            {animate && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="hero__actions"
              >
                <button
                  onClick={() => scrollToSection("contact")}
                  className="btn btn--primary"
                >
                  <span>Book a Consultation</span>
                  <ArrowRight className="btn__icon" />
                </button>

                <button
                  onClick={() => scrollToSection("services")}
                  className="btn btn--ghost"
                >
                  Advisory Services
                </button>
              </motion.div>
            )}

            {animate && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="hero__stats"
              >
                <Stat icon={TrendingUp} value="10+" label="Years of Advisory Experience" />
                <Stat icon={Users} value="500+" label="Individuals & Businesses Served" />
                <Stat icon={Shield} value="100%" label="Advice-Only & Transparent" />
              </motion.div>
            )}
          </div>

          {/* ✅ RIGHT SIDE GRAPHIC — UNCHANGED */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={animate ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="hero__right"
          >
            <div className="card--decor">
              <div className="card">
                <div className="card__list">
                  <CardItem icon={Shield} title="Tax Consultation & Guidance" subtitle="Education & Clarity" accent />
                  <CardItem icon={TrendingUp} title="Strategic Tax Advisory" subtitle="Understand Your Options" emerald />
                  <CardItem icon={Users} title="Client-Focused Approach" subtitle="No Filing • No Representation" accent />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* Helpers */
function Stat({ icon: Icon, value, label }) {
  return (
    <div className="stat">
      <div className="stat__top">
        <Icon className="stat__icon" />
        <div className="stat__value">{value}</div>
      </div>
      <div className="stat__label">{label}</div>
    </div>
  );
}

function CardItem({ icon: Icon, title, subtitle, accent, emerald }) {
  return (
    <div className="card__item">
      <div className={`card__icon-wrap ${accent ? "accent" : ""} ${emerald ? "emerald" : ""}`}>
        <Icon className="card__icon" />
      </div>
      <div>
        <div className="card__title">{title}</div>
        <div className="card__subtitle">{subtitle}</div>
      </div>
    </div>
  );
}

export default Hero;
