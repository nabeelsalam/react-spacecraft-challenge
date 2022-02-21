import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function ControlPanel({
  upClick,
  leftClick,
  rightClick,
  downClick,
  fasterClick,
}) {
  return (
    <div>
      <button className="upBtn" onClick={upClick}>
        Up
      </button>
      <button className="leftBtn" onClick={leftClick}>
        Left
      </button>
      <button className="rightBtn" onClick={rightClick}>
        Right
      </button>
      <button className="downBtn" onClick={downClick}>
        Down
      </button>
      <button className="fasterBtn" onClick={fasterClick}>
        Faster
      </button>
    </div>
  );
}
function SpaceShip({ left, bottom }) {
  return (
    <div style={{ left, bottom }} className="spaceship">
      <img className="spaceship-logo" src={logo} alt="spaceship" />
    </div>
  );
}
function Space({ left, bottom }) {
  return (
    <div className="space">
      <SpaceShip left={left} bottom={bottom}></SpaceShip>
    </div>
  );
}

function App() {
  const [speed, setSpeed] = useState(10);
  const [bottom, setBottom] = useState(0);
  const [left, setLeft] = useState(0);

  function upClick() {
    setBottom(bottom + speed);
  }
  function downClick() {
    setBottom(bottom - speed);
  }
  function leftClick() {
    setLeft(left - speed);
  }
  function rightClick() {
    setLeft(left + speed);
  }
  function fasterClick() {
    setSpeed(speed + 10);
  }
  return (
    <div className="App">
      <ControlPanel
        upClick={upClick}
        leftClick={leftClick}
        rightClick={rightClick}
        downClick={downClick}
        fasterClick={fasterClick}
      ></ControlPanel>
      <Space left={left} bottom={bottom}></Space>
    </div>
  );
}

export default App;
