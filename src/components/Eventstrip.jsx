import "./Eventstrip.css";

export default function Eventstrip() {
  return (
    <div className="eventstrip">

      {/* LEFT - DATE */}
      <div className="date">
        <h1>24</h1>
        <span>Oct</span>
      </div>

      {/* CENTER - EVENT INFO */}
      <div className="strip-content">
        <h3>Hackathon 2026</h3>
        <p>Join us for 24-hour coding challenge</p>
      </div>

      {/* RIGHT - BUTTON */}
      <div className="reg-btn">
        <button>Register</button>
      </div>

    </div>
  );
}