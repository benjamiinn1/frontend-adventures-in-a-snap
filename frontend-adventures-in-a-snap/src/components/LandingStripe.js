import React from "react";
import "./LandingStripe.css";
import { Link } from "react-router-dom";

const LandingStripe = () => {
  return (
    <div className="landing-stripe">
      <h1 className="landing-stripe-title">Find your shot</h1>
      <div className="landing-stripe-btngroup">
        <Link
          to="/adventures"
          name="DFW"
          className="waves-effect waves-light btn-large landing-stripe-btngroup-btn"
        >
          DFW
        </Link>
      </div>
    </div>
  );
};

export default LandingStripe;
