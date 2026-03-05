import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="follow-us-section">
          <h3>Follow Us</h3>
          <p>Facebook: facebook.com/leonforge</p>
          <p>Twitter: twitter.com/leonforge</p>
          <p>Instagram: instagram.com/leonforge</p>
        </div>

        <div className="links-section">
          <h4>Links</h4>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/events">Events</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>

        <div className="contact-section">
          <h3>Contact Us</h3>
          <p>Email: info@leonforge.com</p>
          <p>Phone: +1 (555) 123-4567</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
