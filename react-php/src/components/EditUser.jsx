import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function EditUser() {
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    mobile: "",
  });
  const { id } = useParams();

  useEffect(() => {
    getUser(id);
  }, []);

  function getUser(id) {
    axios
      .get(`http://localhost:80/api/user/${id}/edit`)
      .then(function (response) {
        setInputs(response.data);
      });
  }

  function handleChange(e) {
    setInputs((prevInputs) => ({
      ...prevInputs,
      [e.target.name]: e.target.value,
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();

    axios
      .put(`http://localhost:80/api/user/${id}/edit`, inputs)
      .then((response) => {
        navigate("/");
      });
  }

  return (
    <div>
      <h1>Edit User</h1>
      <form onSubmit={handleSubmit}>
        <p>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            name="name"
            id="name"
            required
            value={inputs.name}
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
            value={inputs.email}
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
            value={inputs.mobile}
            onChange={handleChange}
          />
        </p>
        <button>Save</button>
      </form>
    </div>
  );
}
