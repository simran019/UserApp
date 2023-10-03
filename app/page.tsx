"use client";

import Image from "next/image";
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
    <div className="bg-white w-screen flex flex-col items-center h-screen pt-10 gap-6">
      <div className="text-fuchsia-800 font-bold text-3xl">USER DETAILS</div>
      <UserInput onSaveData={saveDataHandler} />
      {inputData.length > 0 && <UserDetails userDetails={inputData} />}
    </div>
  );
}
