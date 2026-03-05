import React from 'react'
import './EventCard.css'        

function EventCard({ image, title, date }) {
  return (
    <div className="event-card">
        <img  src={image} alt={title} />
        <h3>{title}</h3>
        <p>{date}</p>
    </div>
  )
}

export default EventCard