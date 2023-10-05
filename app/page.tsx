"use client";

import UserInput from "./UserInput/page";
import UserDetails from "./UserDetails/page";

import { useState } from "react";
import Wrapper from "./Helpers/page";

export default function Home() {
  const [inputData, setInputData] = useState([]);

  const saveDataHandler = (inputDetails: never) => {
    setInputData((prevState) => {
      return [inputDetails, ...inputData];
    });
  };

  return (
    <Wrapper>
      <UserInput onSaveData={saveDataHandler} />
      <UserDetails userDetails={inputData} />
    </Wrapper>
  );
}
