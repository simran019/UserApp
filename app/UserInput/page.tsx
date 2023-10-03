"use client";

import { useState } from "react";

const UserInput = (props: any) => {
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredAge, setEnteredAge] = useState(0);

  const inputHandler = (identifier: string, value: any) => {
    if (identifier == "username") {
      setEnteredUsername(value);
    } else {
      setEnteredAge(Number(value));
    }
  };
  const submitHandler = (event: any) => {
    event.preventDefault();
    const inputData = {
      username: enteredUsername,
      age: enteredAge,
    };
    props.onSaveData(inputData);
  };
  return (
    <form
      className="flex flex-col w-1/2 h-fit border-2 border-black p-4 gap-4"
      onSubmit={submitHandler}
    >
      <label className="text-white bg-fuchsia-800 p-2 rounded-md">
        Username
      </label>
      <input
        className="border-2 p-2 border-black rounded-md"
        placeholder="username"
        onChange={(event) => inputHandler("username", event.target.value)}
      />
      <label className="text-white bg-fuchsia-800 p-2 rounded-md">Age</label>
      <input
        className="border-2 p-2 border-black rounded-md"
        placeholder="age"
        onChange={(event) => inputHandler("age", event.target.value)}
      />
      <button
        className="text-white bg-fuchsia-800 p-2 rounded-md w-fit self-center"
        type="submit"
      >
        Submit Details
      </button>
    </form>
  );
};

export default UserInput;
