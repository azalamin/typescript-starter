import React from "react";
import "./App.css";
import Counter from "./components/Counter";
import Users from "./components/Users";

function App() {
  let fName = "Sahleh ahmed";

  interface Person {
    name: string;
    age: number;
    live: string;
    profession: string;
    location?: boolean | string | number;
  }

  const person: Person = {
    name: "Safin ahmed",
    age: 3,
    live: "Dhaka",
    profession: "Web Developer",
    location: 6899,
  };

  const handleUsers = (
    firstName: string,
    lastName: string,
    age: number,
    address: string
  ): number[] => {
    const total: number = 77;
    console.log(firstName, lastName, age, address, total);
    return [total];
  };

  return (
    <div className="App">
      <Counter />
      <Users />
    </div>
  );
}

export default App;
