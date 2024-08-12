import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  let [counter , setCounter] = useState(0);//variable, its function
  //let counter = 5;

  const addValue = () => {
    // counter = counter + 1;
    setCounter(counter + 1);
    // console.log("Button clicked",counter);
  };
  //UI updation is controlled by react

  const removeValue = () => {
    if(counter > 0){
    setCounter(counter - 1);
    }
  }

  return (
    <>
      <h1>Shreyash learning react</h1>
      <h2>Counter value:{counter}</h2>

      <button onClick={addValue}>Add Value{counter}</button>
      <br />
      <button onClick={removeValue}>Remove Value {counter}</button>
      <p>footer : {counter}</p>
    </>
  );
}

export default App;
