import React, { useState } from 'react';
import { TestRender, MemorizedTestRender } from './Components';
import './App.css';

function App() {
  let tmpText = "";
  const [text, setText] = useState("");

  const changeText = (e) => {
    tmpText = e.target.value;
  }

  const setNumber = () => {
    setText(tmpText);
  }

  return (
    <div className="App">
      <input onChange={changeText}></input>
      <button onClick={setNumber}>set</button>
      <TestRender text={text} num={10}></TestRender>
      <MemorizedTestRender text={text} num={10}></MemorizedTestRender>
    </div>
  );
}

export default App;
