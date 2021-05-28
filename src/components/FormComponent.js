import React, { useState } from "react";
import Card from "./UI/Card";
import styles from "./FormComponent.module.css";
import Button from "./UI/Button";
import ErrorModal from "./UI/ErrorModal";

const FormComponent = (props) => {
  const [username, setUsername] = useState("");
  const [age, setAge] = useState("");
  const [error, setError] = useState();
  const addUserHandler = (e) => {
    e.preventDefault();
    if (username.trim().length === 0 || age.length === 0) {
      setError({
        title: "Invalid input",
        message: "Please enter a valid name and age (non empty values)",
      });
      return;
    }
    if (+age < 0) {
      setError({
        title: "Invalid Age",
        message: "Please enter a valid age > 0",
      });
      return;
    }

    props.onAddUser(username, age);
    setUsername("");
    setAge("");
  };

  const userChangeHandler = (e) => setUsername(e.target.value);
  const ageChangeHandler = (e) => setAge(e.target.value);
  const errorHandler = () => setError(null);
  return (
    <React.Fragment>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
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
          <input
            id="age"
            type="number"
            value={age}
            onChange={ageChangeHandler}
          />

          <Button type="submit">Add user</Button>
        </form>
      </Card>
    </React.Fragment>
  );
};

export default FormComponent;
