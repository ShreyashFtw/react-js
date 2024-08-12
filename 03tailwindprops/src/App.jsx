import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./components/Card";

function App() {
  const [count, setCount] = useState(0);
  let myObj ={
    name :"shreyash",
    age: 18
  }

  let newArray = [ 1, 2 ,3 ,4]
  return (
    <>
      <h1 className="bg-green-400 text-black p-9 rounded-xl mb-4">
        Tailwind ka test
      </h1>
      <Card username ="Laura" btnText= 'click me '/>
      <Card username ="anushka"/>
    </>
  );
}

export default App;
