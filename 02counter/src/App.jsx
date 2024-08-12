import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [counter , setCounter] = useState(0);//variable, its function
  //let counter = 5;

  const addValue = () => {
    // counter = counter + 1;
    setCounter(counter + 1);
    //for a interview question
    // setCounter(prevCounter => prevCounter + 1)
    // setCounter(prevCounter => prevCounter + 1)
    // setCounter(prevCounter => prevCounter + 1)
    // setCounter(prevCounter => prevCounter + 1)
    //this will update it from 5 to 9 and if we dont use callback,it will
    // just increase by 1 from 5 to 6 ,for setCounter(counter + 1) x 4 ;


    console.log("Button clicked",counter);
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
