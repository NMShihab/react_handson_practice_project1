import React from "react";
import Card from "./UI/Card";
import style_classes from "./UserListComponent.module.css";

const UserListComponent = (props) => {
  return (
    <Card className={style_classes.users}>
      <ul>
        {props.users.map((user) => (
          <li key={user.id}>
            {user.uName} ({user.uAge} years old)
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default UserListComponent;
