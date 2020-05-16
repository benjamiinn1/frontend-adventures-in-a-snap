import React from "react";
import "./Landing.css";
import LandingStripe from "../components/LandingStripe";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <div>
      <div className="parallax"></div>

      <LandingStripe />

      <div className="landing-grid">
        <h3 className="landing-stripe2-title">What is Adventures in a Snap</h3>
        <span className="landing-stripe2-txt">
          Adventures in a Snap aims to provide people with exciting interactive
          photography experiences. Our adventures are for everyone, whether you
          are looking to explore your city, grow your photography skills, meet
          new friends, find a new hobby, or take that special someone on a fun
          date. Each adventure is a unique experience led by one of our expert
          photographers who understand the art of photography. They are there to
          help guide you through finding the perfect shots and helping you
          capture an unforgettable experience in your city.
        </span>
        {/* <Link
          to="/team"
          className="waves-effect waves-light btn-large landing-stripe2-btn"
        >
          Meet the experts
        </Link> */}
      </div>

      <div className="parallax2"></div>
    </div>
  );
};

export default Landing;
