import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Adventure = ({ match }) => {
  const [adventure, setAdventure] = useState({});
  useEffect(() => {
    // Get req to backend with the adventure id
    setAdventure({
      id: 4657535,
      name: "City Walk",
      bio: "THIS IS A BIO BLAH BLAH BLAH I NEED A LOT OF INFO HERE",
    });
  }, []);
  // {match.params.id}
  return (
    <div>
      <Link to={`/adventures/`}>Go back to adventures</Link>
      <h2>{adventure.name}</h2>
      <p>{adventure.bio}</p>
      <button>Sign up for Adventure</button>
    </div>
  );
};

export default Adventure;
