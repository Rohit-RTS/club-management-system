import { Link } from "react-router-dom";
import "./Dashboard.css";
import Clubcard from "../components/Clubcard";
import Eventstrip from "../components/Eventstrip";
import { useEffect, useState } from "react";

export default function Dashboard() {

  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    setUser(storedUser);
  }, []);

  // ✅ FIX: prevent crash
  if (!user) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <div className="dash-banner">
        <div className="user-info">

          {/* ✅ Safe now */}
          <h2>Welcome Back, {user.username}</h2>

          <p>Here is what happening in your community</p>

          <div className="btns">
            <Link to="" className="btn1">Join</Link>
            <Link to="" className="btn2">Look Events</Link>
          </div>

        </div>
      </div>

      <div className="joined-club">
        <div className="txt-joined">Joined Clubs</div>
        <div className="clubs">
          <Clubcard />
        </div>
      </div>

      <div className="user-events">
        <div className="event-txt">
          You at Events
        </div>
        <div className="events">
          <Eventstrip />
        </div>
      </div>
    </>
  );
}