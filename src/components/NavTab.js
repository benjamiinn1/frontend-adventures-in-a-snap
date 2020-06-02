import React, { useContext, Fragment } from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import axios from "axios";
import { AuthContext } from "../contexts/AuthContext";
import Alert from "./Alert";
import { Link } from "react-router-dom";

import "./NavTab.css";
import NavbarCollapse from "react-bootstrap/NavbarCollapse";

const NavTab = () => {
  const AuthData = useContext(AuthContext);
  const { user, logOut } = AuthData;
  console.log(user);

  const signOut = async () => {
    await axios.get("api/logout");
    return logOut();
  };

  const isInstructor = () => {
    if (user.instructor) {
      console.log(user);
      return (
        <Link to="/adventureform" className="dropdown-item">
          New Event
        </Link>
      );
    }
  };

  if (user.id) {
    return (
      <Fragment>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <Link to="/" className="navbar-brand">
            <span>ADVENTURES</span>
            <span> in a </span>
            <span>SNAP </span>
            <span className="fas fa-camera"></span>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav ml-auto">
              <li>
                <Link to="/adventures" className="nav-link">
                  Adventures
                </Link>
              </li>
              <li className="nav-item dropdown">
                <span
                  className="nav-link dropdown-toggle"
                  id="navbarDropdownMenuLink"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  {user.firstName}
                </span>
                <div
                  className="dropdown-menu dropdown-menu-right"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  {isInstructor()}
                  <Link to={`/${user.id}`} className="dropdown-item">
                    Profile
                  </Link>

                  <span className="dropdown-item" onClick={signOut}>
                    Sign Out
                  </span>
                </div>
              </li>
            </ul>
          </div>
          <Alert />
        </nav>
        {/* <Navbar bg="dark" expand="lg">
          <Link to="/">
            <Navbar.Brand id="nav-title">
              <span>ADVENTURES</span>
              <span> in a </span>
              <span>SNAP </span>
              <span className="fas fa-camera"></span>
            </Navbar.Brand>
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link>
                <Link to="/adventures" className="nav-color">
                  Adventures
                </Link>
              </Nav.Link>
              <NavDropdown alignRight title={user.firstName} id="nav-dropdown">
                <NavDropdown.Item>View Profile</NavDropdown.Item>
                <NavDropdown.Item onClick={signOut}>Log Out</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
          <Alert />
        </Navbar> */}
        {/* <nav>
          <div className="nav-wrapper">
            <Link className="nav-tit" to="/">
              <span>ADVENTURES</span>
              <span> in a </span>
              <span>SNAP </span>
              <span className="fas fa-camera"></span>
            </Link>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
              <li>
                <Link to="/adventures">Adventures</Link>
              </li>

              <li onClick={signOut}>
                <a onClick={signOut}>Log Out</a>
              </li>
            </ul>
          </div>
          <Alert />
        </nav> */}
      </Fragment>
    );
  } else {
    return (
      <Fragment>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <Link to="/" className="navbar-brand">
            <span>ADVENTURES</span>
            <span> in a </span>
            <span>SNAP </span>
            <span className="fas fa-camera"></span>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav ml-auto">
              <li>
                <Link to="/adventures" className="nav-link">
                  Adventures
                </Link>
              </li>
              <li>
                <a href="/auth/google" className="nav-link">
                  Sign in
                </a>
              </li>
            </ul>
          </div>
          <Alert />
        </nav>
        {/* <Navbar bg="dark" expand="lg">
          <Link to="/">
            <Navbar.Brand id="nav-title">
              <span>ADVENTURES</span>
              <span> in a </span>
              <span>SNAP </span>
              <span className="fas fa-camera"></span>
            </Navbar.Brand>
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link>
                <Link to="/adventures" className="nav-color">
                  Adventures
                </Link>
              </Nav.Link>
              <Nav.Link href="/auth/google" id="nav-color2">
                Sign In
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
          <Alert />
        </Navbar> */}
      </Fragment>
      // <nav>
      //   <div className="nav-wrapper">
      //     <Link className="nav-tit" to="/">
      //       <span>ADVENTURES</span>
      //       <span> in a </span>
      //       <span>SNAP </span>
      //       <span className="fas fa-camera"></span>
      //     </Link>
      //     <ul id="nav-mobile" className="right hide-on-med-and-down">
      //       <li>
      //         <Link to="/adventures">Adventures</Link>
      //       </li>
      //       <li>
      //         <a href="/auth/google">Sign in</a>
      //       </li>
      //     </ul>
      //   </div>
      //   <Alert />
      // </nav>
    );
  }
};

export default NavTab;
