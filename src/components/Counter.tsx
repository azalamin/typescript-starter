import React, { ChangeEvent, FormEvent, useState } from "react";

interface User {
  name?: string;
  job?: string;
}

const Counter = () => {
  const [increase, setIncrease] = useState<number>(0);
  const [user, setUser] = useState<User | null>(null);
  const handleIncrease = (): void => {
    setIncrease(increase + 1);
  };
  const handleDecrease = (): void => {
    setIncrease(increase - 1);
  };

  const handleUser = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const userData = {
      name: "Sakib al hasan",
      job: "Dev",
    };

    const handleNameChange = (e: ChangeEvent<HTMLInputElement>): void => {};
  };

  return (
    <div>
      <h1>This is counter {increase}</h1>
      <button onClick={handleIncrease}>Increase</button>
      <button onClick={handleDecrease}>Decrease</button>
    </div>
  );
};

export default Counter;
