import "./Login.css";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Login() {

  // ✅ State for inputs
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // ✅ Login function
  const handleLogin = async (e) => {
    e.preventDefault();
    console.log("Login clicked");

    try {
      const res = await fetch("http://localhost:5000/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();
      console.log("Response:", data);

      if (res.ok) {
        // ✅ Store user
        localStorage.setItem("user", JSON.stringify(data.user));

        alert("Login successful ✅");

        // ✅ Redirect
        window.location.href = "/dashboard";
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.log("Error:", error);
      alert("Login failed ❌");
    }
  };

  return (
    <div className="login-page">
      <div className="login-card">
        <h2>Club Portal Login</h2>

        {/* ✅ FORM ADDED */}
        <form onSubmit={handleLogin}>

          <div className="input-group">
            <label>Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="input-group">
            <label>Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          {/* ✅ FIXED BUTTON */}
          <button type="submit" className="login-btn">
            Sign In to Dashboard →
          </button>

        </form>

        <p className="signup">
          Don’t have an account?{" "}
          <span><Link to="/register">Sign Up</Link></span>
        </p>
      </div>
    </div>
  );
}