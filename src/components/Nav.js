import React, { useContext } from "react";
import axios from "axios";
import { AuthContext } from "../contexts/AuthContext";
import Alert from "./Alert";
import { Link } from "react-router-dom";

import "./Nav.css";

const Nav = () => {
  const AuthData = useContext(AuthContext);
  const { user, logOut } = AuthData;
  console.log(user);

  const signOut = async () => {
    await axios.get("api/logout");
    return logOut();
  };

  if (user.id) {
    return (
      <nav>
        <div className="nav-wrapper">
          {/* <img src={Logo} alt="Logo" className="nav-logo" /> */}
          <Link className="nav-tit" to="/">
            <span>ADVENTURES</span>
            <span> in a </span>
            <span>SNAP </span>
            <span className="fas fa-camera"></span>
          </Link>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            {/* <li>
              <Link to="/team">Meet the team</Link>
            </li> */}
            <li>
              <Link to="/adventures">Adventures</Link>
            </li>
            <li onClick={signOut}>
              <a onClick={signOut}>Log Out</a>
            </li>
          </ul>
        </div>
        <Alert />
      </nav>
    );
  } else {
    return (
      <nav>
        <div className="nav-wrapper">
          <Link className="nav-tit" to="/">
            <span>ADVENTURES</span>
            <span> in a </span>
            <span>SNAP </span>
            <span className="fas fa-camera"></span>
          </Link>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            {/* <li>
              <Link to="/team">Meet the team</Link>
            </li> */}
            <li>
              <Link to="/adventures">Adventures</Link>
            </li>
            <li>
              <a href="/auth/google">Sign in</a>
            </li>
          </ul>
        </div>
        <Alert />
      </nav>
    );
  }
};

export default Nav;
