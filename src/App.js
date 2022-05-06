import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { MemoryRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./pages/landing/index";
import Main from "./pages/main/index";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Landing />} />
        <Route exact path="/main" element={<Main />} />
      </Routes>
    </Router>
  );
}
