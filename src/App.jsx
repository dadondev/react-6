import { useState } from "react";
import "./App.css";
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
  "*",
];
function App() {
  const [clickedBtns, setCLickedBtns] = useState([]);
  const [knowOper, setKnowOper] = useState(null);
  const btnClicked = (e) => {
    if (typeof e === "string" && clickedBtns.at(-1)) {
      const el = clickedBtns.at(-1) !== e ? e : null;
      if (el != null && el !== "DEL") setCLickedBtns([...clickedBtns, el]);
    } else {
      setCLickedBtns([...clickedBtns, e]);
    }
  };

  const solveProblem = () => {
    let newArr = [];
    newArr.push(eval(clickedBtns.join("")));
    setCLickedBtns(newArr);
    console.log(newArr);
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
      <div className={clickedBtns.length > 10 ? "display small" : "display"}>
        {clickedBtns}
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
          <button className="primary red" onClick={solveProblem}>
            =
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
