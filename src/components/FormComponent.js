import React, { useState } from "react";
import Card from "./UI/Card";
import styles from "./FormComponent.module.css";
import Button from "./UI/Button";

const FormComponent = (props) => {
  const [username, setUsername] = useState("");
  const [age, setAge] = useState("");
  const addUserHandler = (e) => {
    e.preventDefault();
    if (username.trim().length !== 0 && +age > 0) {
      console.log(username, age);
      setUsername("");
      setAge("");
    } else {
      console.log("Age is not less than 0 and Name can't be empty");
    }
  };

  const userChangeHandler = (e) => setUsername(e.target.value);
  const ageChangeHandler = (e) => setAge(e.target.value);
  return (
    <Card className={styles.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="user">Username</label>
        <input
          id="user"
          type="text"
          value={username}
          onChange={userChangeHandler}
        />
        <label htmlFor="age">Age(Years)</label>
        <input id="age" type="number" value={age} onChange={ageChangeHandler} />

        <Button type="submit">Add user</Button>
      </form>
    </Card>
  );
};

export default FormComponent;
