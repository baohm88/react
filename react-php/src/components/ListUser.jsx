import React, { useState } from "react";

export default function ListUser() {
  const [inputs, setInputs] = useState({});

  function handleChange(e) {
    setInputs((prevInputs) => {
      return { ...prevInputs, [e.target.name]: e.target.value };
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(inputs);
  }

  return (
    <div>
      <h1>Users</h1>
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
