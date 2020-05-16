import React from "react";
import { Link } from "react-router-dom";
import moment from "moment";

const AdventureCard = (props) => {
  const { item } = props;
  return (
    <div
      className="card blue-grey darken-1"
      key={item.id}
      style={{ width: "500px" }}
    >
      <div className="card-content white-text">
        <span className="card-title">{item.name}</span>
        <p>{moment(item.startTime).format("MMMM Do YYYY, h:mm:ss a")}</p>
      </div>
      <div className="card-action">
        <Link to={`/adventures/${item.id}`}>Click Me</Link>
      </div>
    </div>
  );
};
export default AdventureCard;
