import React, { createContext, useState } from "react";

export const AlertContext = createContext();

export const AlertProvider = (props) => {
  const [msg, setMsg] = useState("");
  const [type, setType] = useState("");

  const pushAlert = (msg, type) => {
    clearAlert();
    setMsg(msg);
    setType(type);
    setTimeout(() => {
      clearAlert();
    }, 5000);
  };
  const clearAlert = () => {
    setMsg("");
    setType("");
    return;
  };

  return (
    <AlertContext.Provider
      value={{
        msg,
        type,
        pushAlert,
        clearAlert,
      }}
    >
      {props.children}
    </AlertContext.Provider>
  );
};
