import { useParams } from "react-router-dom";
import { servicesData } from "../components/services/data/servicesData";

import { ServiceHero } from "../components/services/ServiceHero";
import { ServiceSubNav } from "../components/services/ui/ServiceSubNav";
import { ServiceTopStrip } from "../components/services/ui/ServiceTopStrip";
import ServiceProcess from "../components/services/ServiceProcess";
import { ServiceBenefits } from "../components/services/ServiceBenefits";
import {WhyUs} from "../components/services/WhyUs";
import { ServiceFAQ } from "../components/services/ServiceFAQ";
import { Contact } from "../components/home/Contact";
import { useEffect } from "react";


export function ServicePage() {
  const { serviceSlug } = useParams();
  const service = servicesData[serviceSlug];

   useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [serviceSlug]); // runs when service changes

  if (!service) return <div>Service not found</div>;

  return (
    <>
      <ServiceTopStrip service={service} />

      <div className="subnav-wrapper">
        <ServiceSubNav />
      </div>

      {/* OVERVIEW */}
      <section id="overview">
        <ServiceHero service={service} />
      </section>

      {/* PROCESS */}
      <section id="process">
        <ServiceProcess process={service.process} />
      </section>

      {/* BENEFITS */}
      <section id="benefits">
        <ServiceBenefits />
      </section>

      {/* WHY US */}
      <section id="why-us">
        <WhyUs />
      </section>

      {/* FAQ */}
      <section id="faq">
        <ServiceFAQ faqs={service.faqs} />
      </section>

      <Contact />
    </>
  );
}
