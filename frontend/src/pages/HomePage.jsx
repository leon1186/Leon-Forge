import "./HomePage.css";

function HomePage() {
  return (
    <div className="home-page">
      <div className="hero-section">
        <h1>Welcome to Leon Forge Design</h1>
        <p>Creating unforgettable events and experiences</p>
      </div>
      <div className="content-section">
        <h2>Our Services</h2>

        <ul className="services-list">
          <li>Event Planning</li>
          <li>Design Services</li>
          <li>Production Management</li>
        </ul>


        <ul className="services-links">
            <li>
                <a href="/event-planning">Event Planning</a>
            </li>
            <li>
                <a href="/design-services">Design Services</a>
            </li>
            <li>
                <a href="/production-management">Production Management</a>
            </li>
        </ul>

        <hr className="sep"/>
        <p>We specialize in event planning, design, and production.</p>
      </div>
    </div>
  );
}

export default HomePage;
