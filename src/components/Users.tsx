import React, { useEffect, useState } from "react";
import UserModel from "../types/models";
import User from "./User";

const Users = () => {
  const [users, setUsers] = useState<UserModel[]>([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  const handleAddUser = (): void => {
    console.log("Hello welcome to our place");
  };
  return (
    <div>
      <h1>Hello World</h1>
      {/* <User addUser={handleAddUser} name="Sabbil Huda" /> */}
      {users.map((user) => (
        <User user={user} addUser={handleAddUser}></User>
      ))}
    </div>
  );
};

export default Users;
