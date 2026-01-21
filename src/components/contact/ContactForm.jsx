import { useState } from "react";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../../firebase";
import { logFirestoreError } from "../../firestoreDebug.js";


export function ContactForm() {

  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    province: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  if (loading) return;
  setLoading(true);

  console.group("📝 Contact Form Submit");
  console.log("Form payload:", form);
  console.log("Target collection:", "formSubmissions");
  console.log("Timestamp:", new Date().toISOString());

  try {
    await addDoc(collection(db, "formSubmissions"), {
      ...form,
      createdAt: serverTimestamp(),
      source: "website",
    });

    console.log("✅ Firestore write SUCCESS");

    alert("Thank you! Your request has been submitted.");

    setForm({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      company: "",
      service: "",
      province: "",
      message: "",
    });

  } catch (error) {
    console.error("❌ Firestore write FAILED");
    logFirestoreError(error, "ContactForm submission");

    alert("Submission failed. Please check console.");
  } finally {
    setLoading(false);
    console.groupEnd();
  }
};

window.addEventListener("unhandledrejection", (event) => {
  console.group("🚨 Unhandled Promise Rejection");
  console.error(event.reason);
  console.groupEnd();
});



  return (
    <form className="contactpage-form" onSubmit={handleSubmit}>
      <h2>Request a Consultation</h2>
      <p className="form-note">
        Submit your details and a senior tax advisor will contact you
        within one business day.
      </p>

      {/* Personal Information */}
      <div className="form-section">
        <h4>Personal Information</h4>

        <div className="two-col">
          <Field label="First Name" required>
            <input
              name="firstName"
              value={form.firstName}
              onChange={handleChange}
              required
            />
          </Field>

          <Field label="Last Name" required>
            <input
              name="lastName"
              value={form.lastName}
              onChange={handleChange}
              required
            />
          </Field>
        </div>

        <div className="two-col">
          <Field label="Email Address" required>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
            />
          </Field>

          <Field label="Phone Number" required>
            <input
              name="phone"
              placeholder="+1 416 555 1234"
              value={form.phone}
              onChange={handleChange}
              required
            />
          </Field>
        </div>
      </div>

      {/* Engagement Details */}
      <div className="form-section">
        <h4>Engagement Details</h4>

        <div className="two-col">
          <Field label="Company / Individual Name">
            <input
              name="company"
              value={form.company}
              onChange={handleChange}
            />
          </Field>

          <Field label="Service Required" required>
            <select
              name="service"
              value={form.service}
              onChange={handleChange}
              required
            >
              <option value="">Select Service</option>
              <option>Bookkeeping and financial statements</option>
              <option>Payroll Management</option>
              <option>T4 Preparation</option>
              <option>Corporate Tax Returns</option>
              <option>Personal Tax Returns</option>
              <option>GST and WCB Returns</option>
              <option>Business Incorporation</option>
              <option>Tax Planning</option>
            </select>
          </Field>
        </div>

        <Field label="Province / Territory" required>
          <select
            name="province"
            value={form.province}
            onChange={handleChange}
            required
          >
            <option value="">Select Province</option>
            <option>Ontario</option>
            <option>British Columbia</option>
            <option>Alberta</option>
            <option>Quebec</option>
            <option>Other</option>
          </select>
        </Field>
      </div>

      {/* Message */}
      <div className="form-section">
        <h4>Message</h4>

        <Field label="How can we assist you?" required>
          <textarea
            rows="4"
            name="message"
            value={form.message}
            onChange={handleChange}
            required
          />
        </Field>
      </div>

      <button className="submit-btn" disabled={loading}>
  {loading ? (
    <span className="spinner" aria-label="Loading" />
  ) : (
    "Submit Request"
  )}
</button>

    </form>
  );
}

function Field({ label, required, children }) {
  return (
    <div className="field">
      <label>
        {label} {required && <span>*</span>}
      </label>
      {children}
    </div>
  );
}
