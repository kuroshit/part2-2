import React from "react";
import Header from "./Header";

const PersonForm = ({
  onSubmit,
  onNameChange,
  onNumberChange,
  newName,
  newNumber,
}) => {
  return (
    <form onSubmit={onSubmit}>
      <Header name="Add a new" hsize="h2" />
      <div>
        name: <input value={newName} onChange={onNameChange} />
      </div>
      <div>
        number: <input value={newNumber} onChange={onNumberChange} />
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  );
};

export default PersonForm;
