import React, { useEffect } from "react";
import axios from "axios";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import { AlertProvider } from "./contexts/AlertContext";
import Landing from "./pages/Landing";
import Adventures from "./pages/Adventures";
import Adventure from "./pages/Adventure";
// import Team from "./pages/Team";
import "./App.css";

import Nav from "./components/Nav";
function App() {
  const fetchUser = async () => {
    const data = await axios("/api/current_user");
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
          <Switch>
            <Route exact path="/" component={Landing} />
            <Route exact path="/adventures" component={Adventures} />
            <Route path="/adventures/:id" component={Adventure} />
            {/* <Route exact path="/team" component={Team} /> */}
          </Switch>
        </AuthProvider>
      </AlertProvider>
    </Router>
  );
}

export default App;
