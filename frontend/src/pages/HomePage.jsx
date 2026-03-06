import Hero from "../components/Hero";
import "./HomePage.css";

function HomePage() {
  const services = [
  {
    title: "Event Planning",
    img: "https://images.pexels.com/photos/2306281/pexels-photo-2306281.jpeg",
    description: "Planificación integral de eventos de principio a fin.",
  },
  {
    title: "Design Services",
    img: "https://images.pexels.com/photos/10751439/pexels-photo-10751439.jpeg",
    description: "Concepto visual, branding y diseño de experiencias.",
  },
  {
    title: "Production Management",
    img: "https://images.pexels.com/photos/19368581/pexels-photo-19368581.jpeg",
    description: "Coordinación técnica, logística y ejecución en sitio.",
  },
];

  return (
    <div className="home-page">
      <Hero />
      <div className="content-section">
        <section className="content-section" aria-labelledby="services-title">
        <h2 id="services-title">Our Services</h2>

        <ul className="services-list">
          {services.map((service) => (
            <li
              key={service.title}
              className="service-card"
              style={{ "--card-bg": `url(${service.img})` }}
            >
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </li>
          ))}
        </ul>
      </section>

        
        
      </div>
    </div>
  );
}

export default HomePage;
