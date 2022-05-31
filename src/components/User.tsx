import React, { FC } from "react";
import UserModel from "../types/models";

// interface Props {
//   name: string;
//   age?: number;
//   addUser: () => void;
// }

interface Props {
  user: UserModel;
  addUser: () => void;
}

const User: FC<Props> = ({ user, addUser }) => {
  return (
    <div>
      <h2>Hello from {user?.name}</h2>
    </div>
  );
};

export default User;
