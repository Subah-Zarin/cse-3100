import { useState } from "react";
import Navbar from "../components/Navbar";
import "../style/Contact.css";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const validate = () => {
    const err = {};
    if (!form.name.trim()) err.name = "Name is required";
    if (!form.email.trim()) {
      err.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      err.email = "Invalid email format";
    }
    if (!form.message.trim()) err.message = "Message is required";
    return err;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setSubmitted(true);
    setForm({ name: "", email: "", message: "" });
    setErrors({});
    setTimeout(() => setSubmitted(false), 3000);
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <>
      <Navbar />
      <div className="contact-container container my-5">
        <h1 className="contact-title text-center mb-4">Get in Touch</h1>

        {submitted && (
          <div className="alert alert-success fade-in mb-4" role="alert">
            ✅ Your message has been sent successfully!
          </div>
        )}

        <form onSubmit={handleSubmit} noValidate className="p-4 shadow rounded bg-white">
          <div className="form-floating mb-3">
            <input
              type="text"
              className={`form-control ${errors.name ? "is-invalid" : ""}`}
              id="name"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Your Name"
            />
            <label htmlFor="name">Name</label>
            {errors.name && <div className="invalid-feedback">{errors.name}</div>}
          </div>

          <div className="form-floating mb-3">
            <input
              type="email"
              className={`form-control ${errors.email ? "is-invalid" : ""}`}
              id="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Your Email"
            />
            <label htmlFor="email">Email</label>
            {errors.email && <div className="invalid-feedback">{errors.email}</div>}
          </div>

          <div className="form-floating mb-4">
            <textarea
              className={`form-control ${errors.message ? "is-invalid" : ""}`}
              id="message"
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Your message here..."
              style={{ height: "150px" }}
            ></textarea>
            <label htmlFor="message">Message</label>
            {errors.message && <div className="invalid-feedback">{errors.message}</div>}
          </div>

          <div className="d-grid">
            <button type="submit" className="btn btn-primary btn-lg">
              ✉️ Send Message
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
