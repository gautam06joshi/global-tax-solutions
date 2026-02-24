import React, { Suspense, lazy } from "react";
import { Hero } from "../components/home/Hero";

const ServicesStrip = lazy(() => import("../components/home/ui/ServicesStrip"));
const AboutSection = lazy(() => import("../components/home/AboutSection"));
const Services = lazy(() => import("../components/home/Services"));
const WhyChooseUs = lazy(() => import("../components/home/WhyChooseUs"));
const Testimonials = lazy(() => import("../components/home/Testimonials"));
const Contact = lazy(() => import("../components/home/Contact"));

export function Home() {
  return (
    <main>
      <Hero />

      <Suspense fallback={<div style={{height: "200px"}} />} >
        <ServicesStrip />
      </Suspense>

      <Suspense fallback={<div style={{height: "400px"}} />} >
        <AboutSection />
      </Suspense>

      <Suspense fallback={<div style={{height: "400px"}} />} >
        <Services />
      </Suspense>

      <Suspense fallback={<div style={{height: "400px"}} />} >
        <WhyChooseUs />
      </Suspense>

      <Suspense fallback={<div style={{height: "400px"}} />} >
        <Testimonials />
      </Suspense>

      <Suspense fallback={<div style={{height: "400px"}} />} >
        <Contact />
      </Suspense>

    </main>
  );
}