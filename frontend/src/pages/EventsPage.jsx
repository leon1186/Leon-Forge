import EventCard from "../components/EventCard";
import "./EventsPage.css";

function EventsPage() {
  const events = [
    {
      image:
        "https://images.pexels.com/photos/5970905/pexels-photo-5970905.jpeg",
      title: "Happy Birthday",
      date: "2024-06-01",
    },
    {
      image:
        "https://images.pexels.com/photos/3807517/pexels-photo-3807517.jpeg",
      title: "Summer Festival",
      date: "2024-07-15",
    },
    {
      image:
        "https://images.pexels.com/photos/2263618/pexels-photo-2263618.jpeg",
      title: "Concert Night",
      date: "2024-08-20",
    },
    {
      image:
        "https://images.pexels.com/photos/3171837/pexels-photo-3171837.jpeg",
      title: "Wedding Celebration",
      date: "2024-09-10",
    },
    {
      image:
        "https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg",
      title: "Tech Conference",
      date: "2024-10-05",
    },
    {
      image:
        "https://images.pexels.com/photos/3807517/pexels-photo-3807517.jpeg",
      title: "Art Exhibition",
      date: "2024-11-12",
    },
    {
      image:
        "https://images.pexels.com/photos/2263618/pexels-photo-2263618.jpeg",
      title: "Sports Tournament",
      date: "2024-12-01",
    },
    {
      image:
        "https://images.pexels.com/photos/5970905/pexels-photo-5970905.jpeg",
      title: "New Year Party",
      date: "2025-01-01",
    },
    {
      image:
        "https://images.pexels.com/photos/3171837/pexels-photo-3171837.jpeg",
      title: "Valentine's Ball",
      date: "2025-02-14",
    },
    {
      image:
        "https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg",
      title: "Spring Gathering",
      date: "2025-03-21",
    },
  ];

  return (
    <section className="event-page" aria-labelledby="events-heading">
      <header className="events-header">
        <p className="events-eyebrow">Calendario</p>
        <h1 id="events-heading">Proximos Eventos</h1>
        <p className="events-intro">
          Descubre nuestras celebraciones, experiencias y encuentros especiales.
        </p>
      </header>

      <div className="events-container">
        <div className="events-grid">
          {events.map((event) => (
            <EventCard key={event.title} {...event} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default EventsPage;
