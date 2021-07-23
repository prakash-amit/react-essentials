import React, {useState} from 'react';
import './App.css';

//a component using method
function App({authorized}) {
  const [mood, setMood] = useState("happy");
  return (
    <>
    <h1>I am feeling {mood}</h1>
    <button onClick = {()=>setMood("frustrated")}>Frustrate</button>
    <button onClick = {()=>setMood("happy")}>Happy</button>
    </>
  );
}

export default App;
