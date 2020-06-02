import React from "react";
import "./LandingStripe.css";
import { Link } from "react-router-dom";

const LandingStripe = () => {
  return (
    <div className="landing-stripe">
      <h1 className="landing-stripe-title">Find your shot</h1>
      <div className="landing-stripe-btngroup">
        <Link to="/adventures" name="DFW">
          <button type="button" className="btn btn-info">
            DFW
          </button>
        </Link>
      </div>
    </div>
  );
};

export default LandingStripe;
