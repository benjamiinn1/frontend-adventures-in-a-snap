import React, { useState, createContext, useContext, useEffect } from "react";
import { AlertContext } from "../contexts/AlertContext";
import axios from "axios";

export const AuthContext = createContext();

export const AuthProvider = (props) => {
  const AlertData = useContext(AlertContext);
  const { pushAlert } = AlertData;

  const [user, setUser] = useState({});
  const fetchUser = async () => {
    const data = await axios("/api/current_user");
    if (data.data) {
      logIn(data.data);
    }
    return;
  };

  useEffect(() => {
    fetchUser();
  }, []);

  const logIn = (user) => {
    setUser({
      id: user._id,
      firstName: user.firstName,
      instructor: user.instructor,
    });
    pushAlert("You have logged in.", "bg-success");
    return;
  };
  const logOut = () => {
    setUser({});
    pushAlert("You have logged out.", "bg-success");
    return;
  };
  return (
    <AuthContext.Provider value={{ user, logIn, logOut }}>
      {props.children}
    </AuthContext.Provider>
  );
};
