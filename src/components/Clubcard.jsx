import "./Clubcard.css";

export default function Clubcard() {
  return (
    <div className="clubcard">

      {/* EMPTY IMAGE SPACE */}
      <div className="club-img"></div>

      {/* CONTENT */}
      <div className="club-info">
        <h3>Coding Club</h3>
        <p className="desc">
          Learn programming, build projects and participate in hackathons.
        </p>

        <div className="club-meta">
          <span className="category">Tech</span>
          <span className="members">120 members</span>
        </div>

        <button className="join-btn">View Club</button>
      </div>

    </div>
  );
}