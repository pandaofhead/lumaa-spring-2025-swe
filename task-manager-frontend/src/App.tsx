import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import TaskList from "./components/tasks/TaskList";
import "./App.css";

function App() {
  const isAuthenticated = !!localStorage.getItem("token");

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/tasks"
            element={isAuthenticated ? <TaskList /> : <Navigate to="/login" />}
          />
          <Route path="/" element={<Navigate to="/tasks" />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
