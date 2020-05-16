import React, { useState, useEffect } from "react";
import "./Adventures.css";
import axios from "axios";
import AdventureCard from "./AdventureCard";

const AdventuresList = () => {
  const [adventureList, setAdventureList] = useState([]);

  const getEvents = async () => {
    const data = await axios.get("/api/dfwevents");
    setAdventureList(data.data);
  };

  useEffect(() => {
    getEvents();
  }, []);

  return (
    <div className="adventures-cardlist">
      {adventureList.map((item) => (
        <AdventureCard item={item} />
      ))}
    </div>
  );
};
export default AdventuresList;
