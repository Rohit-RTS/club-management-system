import "./Eventstrip.css"

export default function Eventstrip({ event }) {
  if (!event) return null; // safety check

  // Format date like "24 Oct"
  const dateObj = new Date(event.event_date);
  const day = dateObj.getDate();
  const month = dateObj.toLocaleString("default", { month: "short" });

  // Optional: format time (HH:MM AM/PM)
  const time = new Date(`1970-01-01T${event.event_time}`)
    .toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });

  return (
    <div className="eventstrip">

      {/* LEFT - DATE */}
      <div className="date">
        <h1>{day}</h1>
        <span>{month}</span>
      </div>

      {/* CENTER - CONTENT */}
      <div className="strip-content">
        <h3>{event.title}</h3>
        <p>{event.description}</p>

        <p className="organizer">Organized by {event.club_name}</p>

        <div className="extra-info">
          <span>📍 {event.venue}</span>
          <span>⏰ {time}</span>
        </div>
      </div>

      {/* RIGHT - BUTTON */}
      <div className="reg-btn">
        <button onClick={() => window.open(event.form_link)}>
          Register
        </button>
      </div>

    </div>
  );
}