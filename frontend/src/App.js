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
import axios from "axios";

function App() {
  const [token, setToken] = useState(localStorage.getItem("token") || null);
  const [refreshToken, setRefreshToken] = useState(
    localStorage.getItem("refreshToken") || null
  );
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null
  );
  const [questions, setQuestions] = useState([]);

  const refreshAccessToken = async (refreshToken) => {
    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/api/token/refresh/",
        {
          refresh: refreshToken,
        }
      );
      const newToken = response.data.access;
      setToken(newToken);
      localStorage.setItem("token", newToken);
      return newToken;
    } catch (error) {
      console.error("Error refreshing access token:", error);
      return null;
    }
  };

  const fetchQuestions = async () => {
    try {
      let currentToken = token;
      const response = await axios.get("http://127.0.0.1:8000/api/questions/", {
        headers: {
          Authorization: `Bearer ${currentToken}`,
        },
      });
      setQuestions(response.data);
    } catch (error) {
      if (error.response && error.response.status === 401) {
        // Token expired, try to refresh it
        const newToken = await refreshAccessToken(refreshToken);
        if (newToken) {
          try {
            const response = await axios.get(
              "http://127.0.0.1:8000/api/questions/",
              {
                headers: {
                  Authorization: `Bearer ${newToken}`,
                },
              }
            );
            setQuestions(response.data);
          } catch (error) {
            console.error(
              "Error fetching questions after token refresh:",
              error
            );
          }
        } else {
          // Redirect to login if refresh token is also invalid
          setToken(null);
          setRefreshToken(null);
          setUser(null);
          localStorage.removeItem("token");
          localStorage.removeItem("refreshToken");
          localStorage.removeItem("user");
        }
      } else {
        console.error("Error fetching questions:", error);
      }
    }
  };

  useEffect(() => {
    if (token) {
      fetchQuestions();
    }
  }, [token]);

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
              <LoginForm
                setToken={setToken}
                setUser={setUser}
                setRefreshToken={setRefreshToken}
              />
            ) : (
              <Navigate to="/questions" replace />
            )
          }
        />
        <Route
          path="/questions"
          element={
            token ? (
              <QuestionList
                token={token}
                user={user}
                fetchQuestions={fetchQuestions}
                questions={questions}
              />
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
