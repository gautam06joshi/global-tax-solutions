import React from "react";
import "./TopStrip.css";
import { Phone, Mail } from "lucide-react";

export default function TopStrip() {
  return (
    <div className="top-strip">
      <div className="top-strip__container">
        <div className="top-strip__right">
          <div className="top-strip__item">
            <Phone size={14} />
            <span>+1 (403) 542-0370</span>
            
          </div>

          <div className="top-strip__item">
            <Phone size={14}/>
            <span>+1 (403) 450-3582</span>
          </div>

          <div className="top-strip__item">
            <Mail size={14} />
            <span>info@globaltaxsolutions.ca</span>
          </div>

          <div className="top-strip__socials">
            <a href="#">f</a>
            <a href="#">X</a>
            <a href="#">in</a>
          </div>


        </div>

      </div>
    </div>
  );
}
