import "./Navbar.css";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="logo">Club-Hub</div>

      <div className="nav-container">
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/club">Clubs</Link></li>
            <li><Link to="/events">Events</Link></li>
            <li><Link to="/dashboard">Dashboard</Link></li>
          </ul>
        </nav>
      </div>

      <div className="auth">
        <Link to="/login">Login</Link>
           <Link to="/signup" className="join-btn">Join Now</Link>
      </div>
    </div>
  );
}