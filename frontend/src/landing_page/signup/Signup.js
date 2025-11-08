import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Signup.css";
function Signup() {
  const navigate = useNavigate();
  const [isSignup, setIsSignup] = useState(true);

  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
    username: "",
  });

  const { email, password, username } = inputValue;

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setInputValue({
      ...inputValue,
      [name]: value,
    });
  };

  const handleError = (err) => toast.error(err, { position: "bottom-left" });

  const handleSuccess = (msg) =>
    toast.success(msg, { position: "bottom-right" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const endpoint = isSignup
        ? "http://localhost:3002/signup"
        : "http://localhost:3002/login";

      const { data } = await axios.post(
        endpoint,
        { ...inputValue },
        { withCredentials: true }
      );

      const { success, message } = data;
      if (success) {
        handleSuccess(message);
        setTimeout(() => {
          navigate("/dashboard");
        }, 1200);
      } else {
        handleError(message);
      }
    } catch (error) {
      console.log(error);
      handleError("Server error. Try again!");
    }

    setInputValue({
      email: "",
      password: "",
      username: "",
    });
  };

  return (
    <div className="auth_container container mt-5">
      <div className="form_box">
        <h2>{isSignup ? "Create Account" : "Welcome Back"}</h2>
        <form onSubmit={handleSubmit}>
          {isSignup && (
            <div>
              <label>Username</label>
              <input
                type="text"
                name="username"
                value={username}
                placeholder="Enter your username"
                onChange={handleOnChange}
                required
              />
            </div>
          )}
          <div>
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={email}
              placeholder="Enter your email"
              onChange={handleOnChange}
              required
            />
          </div>
          <div>
            <label>Password</label>
            <input
              type="password"
              name="password"
              value={password}
              placeholder="Enter your password"
              onChange={handleOnChange}
              required
            />
          </div>
          <button type="submit">{isSignup ? "Sign Up" : "Login"}</button>
        </form>

        <p className="toggle_text">
          {isSignup ? "Already have an account?" : "Don’t have an account?"}{" "}
          <span onClick={() => setIsSignup(!isSignup)} className="toggle_link">
            {isSignup ? "Login" : "Sign Up"}
          </span>
        </p>
      </div>
      <ToastContainer />
    </div>
  );
}

export default Signup;
