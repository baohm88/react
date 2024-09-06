import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function CreateUser() {
  const [inputs, setInputs] = useState({});
  const navigate = useNavigate();

  function handleChange(e) {
    setInputs((prevInputs) => {
      return { ...prevInputs, [e.target.name]: e.target.value };
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    axios.post("http://localhost:80/api/user/save", inputs).then((response) => {
      console.log(response.data);
      navigate("/");
    });
  }

  return (
    <div>
      <h1>Create User</h1>
      <form onSubmit={handleSubmit}>
        <p>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            name="name"
            id="name"
            required
            onChange={handleChange}
          />
        </p>
        <p>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            name="email"
            id="email"
            required
            onChange={handleChange}
          />
        </p>
        <p>
          <label htmlFor="mobile">Mobile:</label>
          <input
            type="number"
            name="mobile"
            id="mobile"
            required
            onChange={handleChange}
          />
        </p>
        <button>Save</button>
      </form>
    </div>
  );
}
