import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import moment from "moment";
import AdventuresList from "../components/AdventuresList";

const Adventures = () => {
  const [adventureList, setAdventureList] = useState([]);

  const getEvents = async () => {
    const data = await axios.get("/api/dfwevents");
    setAdventureList(data.data);
  };

  useEffect(() => {
    getEvents();
  }, []);

  return (
    <div>
      <h1>Upcoming Adventures in DFW</h1>
      <AdventuresList />
    </div>
  );
};

export default Adventures;
