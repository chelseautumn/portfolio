import Card from "../components/Card.jsx";
import "../styles/Contact.css";
import { useState } from "react";
import { sendEmail } from "../services/email.js";

function Contact() {
  
  const [emailOrPhone, setEmailOrPhone] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!emailOrPhone || !message) {
      alert("please fill out both fields.");
      return;
    }

    sendEmail(emailOrPhone, message)
      .then(() => {
          setSubmitted(true);
          setEmailOrPhone("");
          setMessage("");
          setError("");
        },
        (err) => {
          console.error("FAILED...", err);
          setError("an error occurred while sending your message. please try again.");
        }
      );
  };


    return (
    <Card title="contact me" gridArea="contact" minHeight="240px">
{submitted ? (
  <div>
        <p>thanks for your message!</p>
        <p>i'll get back to you shortly.</p>
  </div>

      ) : (
        <form onSubmit={handleSubmit} className="contact-form">
          {error && <p>{error}</p>}
            <input
              type="text"
              id="emailOrPhone"
              value={emailOrPhone}
              onChange={(e) => setEmailOrPhone(e.target.value)}
              placeholder="email or phone number"
              required
            />
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="message"
              required
            />
          <button
            type="submit"
          >
            send
          </button>
        </form>
      )}
    </Card>
    )
  }
  
  export default Contact;