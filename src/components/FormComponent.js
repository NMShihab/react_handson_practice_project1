import React from "react";

const FormComponent = (props) => {
  return (
    <div>
      <label htmlFor="user">user</label>
      <input id="user" type="text" />
      <label htmlFor="age">Age</label>
      <input id="age" type="number" />

      <button type="submit">Add</button>
    </div>
  );
};

export default FormComponent;
