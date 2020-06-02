import React, { useState, Fragment, useContext } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { AlertContext } from "../contexts/AlertContext";
import Alert from "../components/Alert";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const AdventureForm = () => {
  const [startDate, setStartDate] = useState(new Date());

  const history = useHistory();
  const AlertData = useContext(AlertContext);
  const { pushAlert } = AlertData;
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    dateTime: "",
  });

  const { name, description, dateTime } = formData;

  const handleSubmit = async (e) => {
    e.preventDefault();
    const createAdventure = {
      name: name.toUpperCase(),
      description: description,
      startDate: startDate,
    };
    console.log(createAdventure);
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      const body = JSON.stringify(createAdventure);
      // await axios.post("http://localhost:5000/createaccount", body, config);
      pushAlert("Adventure created successfully.", "bg-success text-white");
      // return history.push("/");
    } catch (err) {
      console.log(err);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="container">
      <form onSubmit={(e) => handleSubmit(e)}>
        <div className="form-group">
          <label for="adventureName">Adventure Name</label>
          <input
            type="text"
            className="form-control"
            id="adventureName"
            placeholder="City Scape Adventure"
            required
            name="name"
            value={name}
            onChange={(e) => handleChange(e)}
          ></input>
        </div>
        <div className="form-group">
          <label for="description">Adventure Description</label>
          <textarea
            className="form-control"
            id="description"
            rows="3"
            required
            name="description"
            value={description}
            onChange={(e) => handleChange(e)}
          ></textarea>
        </div>
        <div className="form-group">
          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            showTimeSelect
            timeFormat="HH:mm"
            timeIntervals={15}
            timeCaption="time"
            dateFormat="MMMM d, yyyy h:mm aa"
          />
        </div>
        <button type="submit" class="btn btn-primary">
          Create Event
        </button>
      </form>
      <Alert />
    </div>
  );
};

export default AdventureForm;
