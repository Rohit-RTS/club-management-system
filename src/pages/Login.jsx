import "./Login.css";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Login() {


  const [user,setuser] = useState({
    email:"",
    password:"",
  });


  const handleLogin = async (e) => {
    e.preventDefault();
    console.log("Login clicked");

    try {
      const res = await fetch("http://localhost:5000/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify( user),
      });

      const data = await res.json();
      console.log("Response:", data);

      if (res.ok) {
       
        localStorage.setItem("user", JSON.stringify(data.user));

        alert("Login successful ");

      
        window.location.href = "/dashboard";
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.log("Error:", error);
      alert("Login failed ");
    }
  };

  return (
    <div className="login-page">
      <div className="login-card">
        <h2>Club Portal Login</h2>

    
        <form onSubmit={handleLogin}>

          <div className="input-group">
            <label>Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              value={user.email}
              onChange={(e) => setuser({...user,email:e.target.value})}
              required
            />
          </div>

          <div className="input-group">
            <label>Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              value={user.password}
              onChange={(e) => setuser({...user,password:e.target.value})}
              required
            />
          </div>

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