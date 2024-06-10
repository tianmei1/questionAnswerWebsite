import "./App.css";
import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import LoginForm from "./components/Login";
import QuestionList from "./components/QuestionList";

function App() {
  const [token, setToken] = useState(localStorage.getItem("token") || null);
  useEffect(() => {
    if (token) {
      localStorage.setItem("token", token.access);
    } else {
      localStorage.removeItem("token");
    }
  }, [token]);
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null
  );
  useEffect(() => {
    if (user) {
      localStorage.setItem("user", JSON.stringify(user));
    } else {
      localStorage.removeItem("user");
    }
  }, [user]);

  return (
    <Router>
      <Routes>
        <Route
          path="/login"
          element={
            !token ? (
              <LoginForm setToken={setToken} setUser={setUser} />
            ) : (
              <Navigate to="/questions" replace />
            )
          }
        />
        <Route
          path="/questions"
          element={
            token ? (
              <QuestionList token={token} user={user} />
            ) : (
              <Navigate to="/login" replace />
            )
          }
        />
        <Route path="/" element={<Navigate to="/login" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
