import React, { useState } from "react";

export default function Player({ name, symbol }) {
  const [isEditing, setIsEditing] = useState(false);
  const [enterePlayerName, setEneteredPlayerName] = useState(name);

  function handleEditClick() {
    setIsEditing((editing) => !editing);
  }

  function handleNameChange(e) {
    setEneteredPlayerName(e.target.value);
  }

  let playerName = <span className="player-name">{enterePlayerName}</span>;

  if (isEditing) {
    playerName = (
      <input
        type="text"
        required
        value={enterePlayerName}
        onChange={handleNameChange}
      />
    );
  }

  return (
    <li>
      <span className="player">
        {playerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
}
