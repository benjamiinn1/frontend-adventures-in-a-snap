import React, { useContext } from "react";
import axios from "axios";
import { AuthContext } from "../contexts/AuthContext";

const Nav = () => {
  const AuthData = useContext(AuthContext);
  const { user, logOut } = AuthData;

  const signOut = async () => {
    await axios.get("api/logout");
    return logOut();
  };

  switch (user) {
    case 1:
      return <h1>loading</h1>;
    case undefined:
      return (
        <div>
          <a href="/auth/google">Sign in with Google</a>
        </div>
      );
    default:
      return (
        <div>
          <h2>Hello {user}</h2>
          <h3 onClick={signOut}>Log Out</h3>
        </div>
      );
  }
};

export default Nav;
