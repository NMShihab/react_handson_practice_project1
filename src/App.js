import React, { useState } from "react";
import FormComponent from "./components/FormComponent";
import UserListComponent from "./components/UserListComponent";

function App() {
  const [userList, setUserList] = useState([]);
  const userHandler = (user, uage) => {
    setUserList((prevUserelist) => {
      return [
        ...prevUserelist,
        { uName: user, uAge: uage, id: Math.random().toString() },
      ];
    });
  };

  return (
    <React.Fragment>
      <FormComponent onAddUser={userHandler} />
      <UserListComponent users={userList} />
    </React.Fragment>
  );
}

export default App;
