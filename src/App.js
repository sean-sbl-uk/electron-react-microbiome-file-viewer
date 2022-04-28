import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { Fragment } from "react";
import { MemoryRouter as Router, Routes, Route, Link } from "react-router-dom";
import Landing from "./pages/landing/index";
import Main from "./pages/main/index";

const TestPage = () => {
  return (
    <div>
      <h1>TestPage</h1>
    </div>
  );
};

export default function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    // <Route exact path="/" component={Landing} />
    // <Route path="/" element={<TestPage />} />

    <Router>
      <Routes>
        <Route exact path="/" element={<Landing />} />
        <Route exact path="/main" element={<Main />} />
      </Routes>
    </Router>
  );
}

// import React, { Fragment } from "react";
// import { MemoryRouter as Router, Routes, Route } from "react-router-dom";
// import Landing from "./pages/landing/index";
// import "./App.css";

// const App = () => (
// <Router>
//   <Routes>
//     <Route exact path="/" component={Landing} />
//   </Routes>
// </Router>
// );

// export default App;
