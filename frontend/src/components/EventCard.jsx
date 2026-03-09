import React from "react";
import "./EventCard.css";

function EventCard({ image, title, date }) {
  const formattedDate = new Intl.DateTimeFormat("es-ES", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  }).format(new Date(`${date}T00:00:00`));

  return (
    <article className="event-card">
      <img src={image} alt={title} loading="lazy" />
      <div className="event-card__content">
        <h3>{title}</h3>
        <time dateTime={date}>{formattedDate}</time>
      </div>
    </article>
  );
}

export default EventCard;
