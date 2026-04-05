import "./Register.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import {useFormik} from "formik";

const validate = values => {
   const errors = {};
   if (!values.username) {
     errors.username = 'username required';
   } 
 
   return errors;
 };



export default function Register() {

  // const [formData, setFormData] = useState({
    // username: "",
    // email: "",
    // password: "",
    // confirmpasswd: "",
    // branch: "",
    // year: ""
  // });
  const formik = useFormik({
        initialValues:{   username: "",
    email: "",
    password: "",
    confirmpasswd: "",
    branch: "",
    year: ""
  },
  validate,
 onSubmit: async (values, { resetForm }) => {
  try {
    const res = await fetch("http://localhost:5000/api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: values.username,   
        email: values.email,
        password: values.password,
        branch: values.branch,  
        year: values.year,
      }),
    });

    const data = await res.json();
    console.log(data);

    alert("Registered successfully ✅");

    resetForm(); // clear form
  } catch (error) {
    console.log(error);
    alert("Registration failed ❌");
  }
}


});

  // const handleInputChange = (event) => {
  //   const { name, value } = event.target;

  //   setFormData((currData) => ({
  //     ...currData,
  //     [name]: value
  //   }));
  // };

  // const handleSubmit = (event) => {
  //   event.preventDefault();

  //   console.log(formData); 

  //   setFormData({
  //     username: "",
  //     email: "",
  //     password: "",
  //     confirmpasswd: "",
  //     branch: "",
  //     year: ""
  //   });
  // };

  return (
    <div className="register-page">
      <div className="register-card">
        <h2>Create Account</h2>

        <form onSubmit={formik.handleSubmit}>

          <div className="input-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              placeholder="Enter your name"
              name="username"
              id="username"
              value={formik.values.username}
              onChange={formik.handleChange}
            />
              {formik.errors.username ? <div>{formik.errors.username}</div> : null}

          </div>
         
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              name="email"
              id="email"
              value={formik.values.email}
              onChange={formik.handleChange}
            />
          </div>

          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              placeholder="Enter password"
              name="password"
              id="password"
              value={formik.values.password}
              onChange={formik.handleChange}
            />
          </div>

          <div className="input-group">
            <label htmlFor="confirmpasswd">Confirm Password</label>
            <input
              type="password"
              placeholder="Confirm Password"
              name="confirmpasswd"
              id="confirmpasswd"
              value={formik.values.confirmpasswd}
              onChange={formik.handleChange}
            />
          </div>

          <div className="row">
            <select name="branch" value={formik.values.branch} onChange={formik.handleChange}>
              <option value="">Branch</option>
              <option>CSE</option>
              <option>IT</option>
              <option>ECE</option>
              <option>Mechanical</option>
            </select>

            <select name="year" value={formik.values.year} onChange={formik.handleChange}>
              <option value="">Year</option>
              <option>1st Year</option>
              <option>2nd Year</option>
              <option>3rd Year</option>
              <option>4th Year</option>
            </select>
          </div>

          <button className="register-btn">
            Sign Up →
          </button>

          <p className="login-link">
            Already have an account? <span><Link to="/Login">Login</Link></span>
          </p>

        </form>
      </div>
    </div>
  );
}