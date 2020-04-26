import React, { useContext, Fragment } from "react";
import { AlertContext } from "../contexts/AlertContext";
import "./Alert.css";

const Alert = () => {
  const AlertData = useContext(AlertContext);
  const { msg, type } = AlertData;

  if (msg) {
    return (
      <div className="wrapper">
        <p id="alert" className={type}>
          {msg}
        </p>
      </div>
    );
  }
  return <Fragment></Fragment>;
};

export default Alert;
