// App.js
import React, { useState,useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Chat from "./pages/Chat";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(true);

  useEffect(() => {
    // Check if JWT is in localStorage
    const token = localStorage.getItem("jwt");
    if (token) {
      setIsAuthenticated(true);
    } else {
      setIsAuthenticated(false);
    }
  }, []);

  return (
    <Router>
      <Routes>
        {/* If not authenticated, redirect to login */}
        <Route path="/" element={!isAuthenticated ? <Login /> : <Navigate to="/dashboard" />} />
        
        {/* Protected Dashboard Route */}
        <Route
          path="/dashboard"
          element={isAuthenticated ? <Chat /> : <Navigate to="/" />}
        />
      </Routes>
    </Router>
  );
}

export default App;
