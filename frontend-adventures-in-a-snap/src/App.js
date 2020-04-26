import React, { useEffect } from "react";
import axios from "axios";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import { AlertProvider } from "./contexts/AlertContext";

import Nav from "./components/Nav";

function App() {
  const fetchUser = async () => {
    const data = await axios("/api/current_user");
    if (data.data) {
      console.log("user logged in");
    }
    return data.data;
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <Router>
      <AlertProvider>
        <AuthProvider>
          <Nav />
        </AuthProvider>
      </AlertProvider>
    </Router>
  );
}

export default App;
