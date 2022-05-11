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
        <Route path="/" element={<Landing />} />
        <Route path="/main" element={<Main />} />
      </Routes>
    </Router>
  );
}
