import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  var [color, setColor] = useState({
    red: 40,
    green: 44,
    blue: 52,
  });
  var { red, green, blue } = color;

  const changeColor = async () => {
    try {
      //fetch color from server
      //set new color
      console.log("fetch color")
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div
      className="App"
      style={{
        backgroundColor: `rgb(${red}, ${green}, ${blue})`,
        transition: "all 300ms ease-in",
      }}
    >
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <button onClick={changeColor}>Change Color</button>
      </header>
    </div>
  );
}

export default App;
