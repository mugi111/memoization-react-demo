import React, { useState } from 'react';
import { TestRender, MemorizedTestRender } from './Components';
import './App.css';

function App() {
  const texts = ["a", "b", "c", "d", "e", "f"];

  const [text, setText] = useState("");
  const [textMoized, setTextMoized] = useState("");


  const sleep = (ms) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  const start = async () => {
    for (let t of texts) {
      setText(t);
      await sleep(1000);
    }
  }

  const startMoized = async () => {
    for (let t of texts) {
      setTextMoized(t);
      await sleep(1000);
    }
  }

  return (
    <div className="App">
      <button onClick={start}>start</button>
      <button onClick={startMoized}>start(moize)</button>
      <TestRender text={text} num={10}></TestRender>
      <MemorizedTestRender text={textMoized} num={10}></MemorizedTestRender>
    </div>
  );
}

export default App;
