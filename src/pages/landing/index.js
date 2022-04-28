import React from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

const Landing = () => {
  return (
    // <h1>Landing</h1>
    <section className="background">
      <div className="dark-overlay">
        <div className="landing-inner">
          <h1>MicrobioMe File Viewer</h1>
          <p>Compare data from multiple BLAST CSV files</p>
          <Button className="btn-hover" variant="outline-light">
            <Link className="btn-link-outline" to="/main">
              Get Started
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Landing;
