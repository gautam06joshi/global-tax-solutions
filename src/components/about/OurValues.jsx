import { useState } from "react";
import "./OurValues.css";
import {
  Briefcase,
  ShieldCheck,
  BarChart3,
  Users,
  BookOpen,
  Clock,
  Scale,
  MessageCircle,
  Eye,
} from "lucide-react";
import { ValueModal } from "./animation/ValueModal";

const VALUES = [
  {
    icon: Briefcase,
    title: "Client Success",
    description:
      "We align our expertise with client objectives, ensuring measurable outcomes and long-term value creation.",
  },
  {
    icon: BarChart3,
    title: "Strategic Thinking",
    description:
      "Every recommendation is grounded in foresight, data-driven analysis, and regulatory awareness.",
  },
  {
    icon: ShieldCheck,
    title: "Compliance First",
    description:
      "We prioritize adherence to tax laws and regulatory frameworks across all jurisdictions.",
  },
  {
    icon: Scale,
    title: "Integrity & Ethics",
    description:
      "Our advice is independent, transparent, and guided by the highest ethical standards.",
  },
  {
    icon: Users,
    title: "Team Collaboration",
    description:
      "Our multidisciplinary teams work seamlessly to deliver holistic tax solutions.",
  },
  {
    icon: Clock,
    title: "Responsiveness",
    description:
      "We act with urgency and clarity, respecting the time-sensitive nature of tax matters.",
  },
  {
    icon: BookOpen,
    title: "Continuous Learning",
    description:
      "We stay ahead of evolving regulations through ongoing education and research.",
  },
  {
    icon: MessageCircle,
    title: "Clear Communication",
    description:
      "We translate complex tax concepts into clear, actionable guidance.",
  },
  {
    icon: Eye,
    title: "Transparency & Trust",
    description:
      "We build trust through open dialogue, accurate reporting, and accountability.",
  },
];

export function OurValues() {
  const [activeValue, setActiveValue] = useState(null);

  return (
    <section className="values-section">
      <div className="values-container">
        {/* HEADER */}
        <div className="values-header center">
          <h2>Our Values</h2>
          <p>
            These principles define how we serve our clients, engage with
            regulators, and uphold professional responsibility.
          </p>
        </div>

        {/* GRID */}
        <div className="values-grid">
          {VALUES.map((item, index) => {
            const Icon = item.icon;
            return (
              <button
                key={index}
                type="button"   // 🔴 IMPORTANT
                className="value-card"
                onClick={() => setActiveValue(item)}
                aria-haspopup="dialog"
              >
                <Icon className="value-icon" />
                <h4 className="value-title">{item.title}</h4>
                <span className="value-cta">View details →</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* MODAL */}
      {activeValue && (
        <ValueModal
          value={activeValue}
          onClose={() => setActiveValue(null)}
        />
      )}
    </section>
  );
}
