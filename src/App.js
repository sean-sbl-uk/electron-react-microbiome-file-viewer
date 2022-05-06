import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { Fragment } from "react";
import { MemoryRouter as Router, Routes, Route, Link } from "react-router-dom";
import Landing from "./pages/landing/index";
import Main from "./pages/main/index";

export default function App() {
  console.log("inside App line 9");
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Landing />} />
        <Route exact path="/main" element={<Main />} />
      </Routes>
    </Router>
  );
}
