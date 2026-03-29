import "./Login.css";
import {Link} from "react-router-dom";
export default function Login() {
  return (
    <div className="login-page">

      <div className="login-card">
        <h2>Club Portal Login</h2>

        <div className="input-group">
          <label>Email</label>
          <input type="email" placeholder="Enter your email" />
        </div>

        <div className="input-group">
          <label>Password</label>
          <input type="password" placeholder="Enter your password" />
        </div>

        <div className="row">
          <select>
            <option>Branch</option>
            <option>CSE</option>
            <option>IT</option>
            <option>ECE</option>
            <option>Mechanical</option>
          </select>

          <select>
            <option>Year</option>
            <option>1st Year</option>
            <option>2nd Year</option>
            <option>3rd Year</option>
            <option>4th Year</option>
          </select>
        </div>

        <div className="forgot">
          <span>Forgot Password?</span>
        </div>

        <button className="login-btn">
          Sign In to Dashboard →
        </button>

        <p className="signup">
          Don’t have an account? <span><Link to="/register">Sign Up</Link></span>
        </p>
      </div>

    </div>
  );
}