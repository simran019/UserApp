"use client";

import { useState } from "react";

const UserInput = (props: any) => {
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredAge, setEnteredAge] = useState(0);
  const [errorMessage, setErrorMessage] = useState("");

  const inputHandler = (identifier: string, value: any) => {
    
    if (identifier == "username") {
      setEnteredUsername(value);
    } else {
      setEnteredAge(Number(value));
    }
  };
  const submitHandler = (event: any) => {
    event.preventDefault();
    if(enteredUsername=="" && enteredAge==0){
      setErrorMessage("* Enter Details");
    }else if(enteredAge==0){
      setErrorMessage("* Enter Age");
    }else if(enteredUsername==""){
      setErrorMessage("* Enter Username");
    }else{
      setErrorMessage("");
      const inputData = {
        username: enteredUsername,
        age: enteredAge,
      };
      
      props.onSaveData(inputData);
      setEnteredUsername("");
      setEnteredAge(0);
    }
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
        value={enteredUsername}
      />
      <label className="text-white bg-fuchsia-800 p-2 rounded-md">Age</label>
      <input
        className="border-2 p-2 border-black rounded-md"
        placeholder="age"
        onChange={(event) => inputHandler("age", event.target.value)}
        value={enteredAge||""}
      />
      <p className="text-red-600 text-center font-bold">{errorMessage}</p>
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
