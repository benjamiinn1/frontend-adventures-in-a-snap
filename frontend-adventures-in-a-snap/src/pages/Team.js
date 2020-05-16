import React, { useState } from "react";

const Team = () => {
  const [teamList, setTeamList] = useState([
    {
      id: 1,
      name: "Ben",
    },
    {
      id: 2,
      name: "Person 2",
    },
  ]);
  return (
    <div className="team-page">
      {teamList.map((member) => {
        return (
          <div className="team-member">
            <h3>{member.name}</h3>
            <p>This is my about section</p>
            <h2>There will be a big image next to about and name</h2>
          </div>
        );
      })}
    </div>
  );
};

export default Team;
