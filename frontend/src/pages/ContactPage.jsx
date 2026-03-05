import "./ContactPage.css";
import {useState} from 'react'  

function ContactPage() {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });

  return (
    <div className="contact-page">
      <h1>Contact Us</h1>
      <p>
        Have questions or want to get in touch? Fill out the form below and
        we'll get back to you as soon as possible.
      </p>
      <div className="form-container">
        <form className="contact-form">
          <div className="form-field">
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div className="form-field">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="form-field">
            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message" rows="5" required></textarea>
          </div>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
}

export default ContactPage;
