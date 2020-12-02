import React, { useState } from 'react';
import { MemorizedTestAdd } from './Components';
import './App.css';

function App() {
  let tmpFirst = 0;
  let tmpSecond = 0;
  const [first, setFirst] = useState(0);
  const [second, setSecond] = useState(0);

  const changeFirst = (e) => {
    tmpFirst = e.target.value;
  }

  const changeSecond = (e) => {
    tmpSecond = e.target.value;
  }

  const setNumber = () => {
    setFirst(tmpFirst);
    setSecond(tmpSecond);
  }

  return (
    <div className="App">
      <input onChange={changeFirst}></input>
      <input onChange={changeSecond}></input>
      <button onClick={setNumber}>set</button>
      <MemorizedTestAdd first={first} second={second}></MemorizedTestAdd>
    </div>
  );
}

export default App;
