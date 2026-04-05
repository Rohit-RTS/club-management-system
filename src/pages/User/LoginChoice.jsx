import { useNavigate } from "react-router-dom";
import "./LoginChoice.css";

export default function LoginChoice() {
  const navigate = useNavigate();

  return (
    <div className="login-choice-container">
      <div className="login-box">
        <h1>Welcome Back</h1>
        <p>Select how you want to login</p>

        <div className="options">

          {/* Student */}
          <div
            className="option-card"
            onClick={() => navigate("/login-user")}
          >
            <h2>👤 Student Login</h2>
            <p>Join clubs, attend events</p>
          </div>

          {/* Club Head */}
          <div
            className="option-card"
            onClick={() => navigate("/login-admin")}
          >
            <h2>🏫 Club Head</h2>
            <p>Manage club and events</p>
          </div>

        </div>
      </div>
    </div>
  );
}