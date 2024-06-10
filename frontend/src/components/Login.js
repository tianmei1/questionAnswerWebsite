import React, { useState } from "react";
import "../LoginForm.css"; // Make sure to create this CSS file
import axios from "axios";

const LoginForm = ({ setToken, setUser }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("Logging in with", email, password);
    // Here you can integrate your authentication logic
    try {
      const response = await axios.post("http://127.0.0.1:8000/api/token/", {
        email,
        password,
      });
      console.log(response.data);
      setToken(response.data);
      setUser(response.data.user);
    } catch (error) {
      console.error("Login error:", error);
    }
  };

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit} className="login-form">
        <h3>Login</h3>
        <input
          type="email"
          id="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          id="password"
          placeholder="******"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginForm;
