import { useState } from "react";
import "./App.css";
import Header from "./component/Header";
import UserInput from "./component/UserInput";
import Log from "./component/Log";

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 1000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  function handleChange(inputIdentifier, newValue) {
    setUserInput((prevUserInput) => {
      return {
        ...prevUserInput,
        [inputIdentifier]: +newValue,
      };
    });
  }
  return (
    <>
      <Header />
      <UserInput handleChange={handleChange} userInput={userInput} />
      <Log results={userInput} />
    </>
  );
}

export default App;
