import { useState } from "react";
import "./ContactPage.css";

function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    eventType: "",
    eventDate: "",
    eventTime: "",
    location: "",
    guests: "",
    indoorsOutdoors: "",
    boothHours: "",
    printsOrDigital: "",
    customDesignsBranding: "",
    props: "",
    backdrop: "",
    boothSpotPower: "",
    contactPerson: "",
    bundlePackages: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((previousData) => ({
      ...previousData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const inquiryPayload = {
      ...formData,
      event_date: formData.eventDate,
    };

    console.log("Inquiry submitted:", inquiryPayload);
  };

  return (
    <section className="contact-page">
      <div className="contact-shell">
        <span className="contact-kicker">Event Inquiry</span>
        <h1>Contact Me</h1>
        <p>
          Tell us about your event and we will reach out with options that fit
          your vision.
        </p>
        <span className="contact-meta">All fields are required.</span>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-field form-field--half">
            <label htmlFor="name">Your name *</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-field form-field--half">
            <label htmlFor="email">Email address *</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-field form-field--full">
            <label htmlFor="eventType">
              What type of event is it? (wedding, birthday, corporate, etc.) *
            </label>
            <input
              type="text"
              id="eventType"
              name="eventType"
              value={formData.eventType}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-field form-field--half">
            <label htmlFor="eventDate">What&apos;s the event date? *</label>
            <input
              type="date"
              id="eventDate"
              name="eventDate"
              value={formData.eventDate}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-field form-field--half">
            <label htmlFor="eventTime">What time does it start? *</label>
            <input
              type="time"
              id="eventTime"
              name="eventTime"
              value={formData.eventTime}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-field form-field--full">
            <label htmlFor="location">Where is the event location? *</label>
            <input
              type="text"
              id="location"
              name="location"
              value={formData.location}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-field form-field--half">
            <label htmlFor="guests">How many guests are you expecting? *</label>
            <input
              type="number"
              min="1"
              id="guests"
              name="guests"
              value={formData.guests}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-field form-field--half">
            <label htmlFor="indoorsOutdoors">
              Is the event indoors, outdoors? *
            </label>
            <input
              type="text"
              id="indoorsOutdoors"
              name="indoorsOutdoors"
              value={formData.indoorsOutdoors}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-field form-field--half">
            <label htmlFor="boothHours">
              How many hours would you like the booth running? *
            </label>
            <input
              type="text"
              id="boothHours"
              name="boothHours"
              value={formData.boothHours}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-field form-field--full">
            <label htmlFor="printsOrDigital">
              Would you like prints or digital sharing (text/email), or both? *
            </label>
            <textarea
              id="printsOrDigital"
              name="printsOrDigital"
              rows="3"
              value={formData.printsOrDigital}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-field form-field--full">
            <label htmlFor="customDesignsBranding">
              Do you want custom photo strip designs or event branding? *
            </label>
            <textarea
              id="customDesignsBranding"
              name="customDesignsBranding"
              rows="3"
              value={formData.customDesignsBranding}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-field form-field--half">
            <label htmlFor="props">
              Do you want props (funny hats, glasses, signs, etc.)? *
            </label>
            <input
              type="text"
              id="props"
              name="props"
              value={formData.props}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-field form-field--half">
            <label htmlFor="backdrop">Would you like a backdrop? *</label>
            <input
              type="text"
              id="backdrop"
              name="backdrop"
              value={formData.backdrop}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-field form-field--full">
            <label htmlFor="boothSpotPower">
              Do you have a designated spot for the booth with power access? *
            </label>
            <textarea
              id="boothSpotPower"
              name="boothSpotPower"
              rows="3"
              value={formData.boothSpotPower}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-field form-field--half">
            <label htmlFor="contactPerson">
              Who&apos;s the point of contact on the event day? *
            </label>
            <input
              type="text"
              id="contactPerson"
              name="contactPerson"
              value={formData.contactPerson}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-field form-field--full">
            <label htmlFor="bundlePackages">
              Would you like bundle packages (booth + photography + video,
              etc.)? *
            </label>
            <textarea
              id="bundlePackages"
              name="bundlePackages"
              rows="3"
              value={formData.bundlePackages}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit">Send inquiry</button>
        </form>
      </div>
    </section>
  );
}

export default ContactPage;
