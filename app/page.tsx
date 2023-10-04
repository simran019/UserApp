"use client";

import UserInput from "./UserInput/page";
import UserDetails from "./UserDetails/page";

import { useState } from "react";

export default function Home() {
  const [inputData, setInputData] = useState([]);

  const saveDataHandler = (inputDetails: never) => {
    setInputData((prevState) => {
      return [inputDetails, ...inputData];
    });
  };

  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center gap-4">
      <div className="flex flex-col items-center justify-start w-screen">
        <div className="text-fuchsia-800 font-bold text-3xl">USER DETAILS</div>
        <UserInput onSaveData={saveDataHandler} />
      </div>
      {inputData.length > 0 && <UserDetails userDetails={inputData} />}
    </div>
  );
}
