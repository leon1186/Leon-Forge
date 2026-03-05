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
            <li><a href="/">Home</a></li>
            <li><a href="/events">Events</a></li>
            <li><a href="/get-quote">Get Quote</a></li>
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
