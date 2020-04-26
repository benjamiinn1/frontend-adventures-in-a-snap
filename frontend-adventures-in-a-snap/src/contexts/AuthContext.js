import React, { useState, createContext, useContext, useEffect } from "react";
import axios from "axios";

export const AuthContext = createContext();

export const AuthProvider = (props) => {
  const [user, setUser] = useState();
  const fetchUser = async () => {
    setUser(1);
    const data = await axios("/api/current_user");
    if (data.data) {
      logIn(data.data._id);
    } else {
      logOut();
    }
    return;
  };

  useEffect(() => {
    fetchUser();
  }, []);

  const logIn = (user) => {
    setUser(user);
    return;
  };
  const logOut = () => {
    setUser();
    return;
  };
  return (
    <AuthContext.Provider value={{ user, logIn, logOut }}>
      {props.children}
    </AuthContext.Provider>
  );
};
