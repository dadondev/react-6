import { useState } from "react";
import "./App.css";
const clickedNumbers = [];
const buttonsNames = [
  7,
  8,
  9,
  "DEL",
  4,
  5,
  6,
  "+",
  1,
  2,
  3,
  "-",
  ".",
  0,
  "/",
  "x",
];
function App() {
  const [btnValue, setValue] = useState(1);
  const [howMany, setMany] = useState(0);
  const btnClicked = (e) => {
    if (typeof e != "string") {
      console.log(typeof e);
      setValue(btnValue + 1);
      clickedNumbers.push(e);
    }
    if (clickedNumbers.length > 0) {
      if (e == "DEL") {
        clickedNumbers.pop();
        setValue(btnValue + 1);
      } else if (e == "+") {
        setMany(clickedNumbers.length);
        console.log(howMany);
      }
    }
  };
  return (
    <div className="App">
      <div className="navbar">
        <a href="#">
          <img src="./logo.png" alt="logo" />
        </a>
        <div className="flex items-center gap-6">
          <span className="theme">Theme</span>
          <div>
            <img src="./switcher.png" alt="switcher" />
          </div>
        </div>
      </div>
      <div className={clickedNumbers.length > 10 ? "display small" : "display"}>
        {clickedNumbers}
      </div>
      <div className="buttons">
        <div className="numberBtn">
          {buttonsNames.map((e, i) => (
            <button
              key={i}
              className={e == "DEL" ? "btnGray" : "btn"}
              onClick={() => {
                btnClicked(e);
              }}
            >
              {e}
            </button>
          ))}
        </div>
        <div className="btnPrimary">
          <button className="primary gray">RESET</button>
          <button className="primary red">=</button>
        </div>
      </div>
    </div>
  );
}

export default App;
