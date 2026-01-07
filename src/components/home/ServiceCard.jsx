import { motion } from "motion/react";
import "./ServiceCard.css";

export function ServiceCard({ icon: Icon, title, description, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay }}
      className="servicecard"
    >
      <div className="servicecard-icon">
        <Icon />
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
    </motion.div>
  );
}
