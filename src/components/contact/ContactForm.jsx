// components/contact/ContactForm.jsx
import { useState } from "react";

export function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    company: "",
    jobTitle: "",
    email: "",
    countryCode: "+91",
    phone: "",
    country: "",
    message: "",
  });

  const handleChange = e =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = e => {
    e.preventDefault();

    const payload = {
      ...form,
      createdAt: new Date().toISOString(),
    };

    console.log(payload); // backend later
  };

  return (
    <form className="contact-card" onSubmit={handleSubmit}>
      <Field label="Full Name" required>
        <input name="name" onChange={handleChange} />
      </Field>

      <Field label="Company" required>
        <input name="company" onChange={handleChange} />
      </Field>

      <Field label="Job Title" required>
        <input name="jobTitle" onChange={handleChange} />
      </Field>

      <Field label="Email" required>
        <input type="email" name="email" onChange={handleChange} />
      </Field>

      <div className="phone-row">
        <Field label="Code" required small>
          <select name="countryCode" onChange={handleChange}>
            <option>+91</option>
            <option>+1</option>
            <option>+44</option>
          </select>
        </Field>

        <Field label="Phone Number" required>
          <input name="phone" onChange={handleChange} />
        </Field>
      </div>

      <Field label="Country" required>
        <select name="country" onChange={handleChange}>
          <option value="">Select Country</option>
          <option>India</option>
          <option>Canada</option>
          <option>USA</option>
        </select>
      </Field>

      <Field label="Your Message" required>
        <textarea rows="3" name="message" onChange={handleChange} />
      </Field>

      <button className="submit-btn">Submit</button>
    </form>
  );
}

function Field({ label, required, children, small }) {
  return (
    <div className={`field ${small ? "small" : ""}`}>
      <label>
        {label} {required && <span>*</span>}
      </label>
      {children}
    </div>
  );
}
