import React, {useState, useEffect} from 'react';
import './App.css';

//a component using method
function App({authorized}) {
  const [mood, setMood] = useState("happy");
  const [secondary, setSecondary] = useState("tired");

  //watches change in value of mood
  useEffect(()=>{
    console.log(`I am feeling ${mood}`)
  },[mood]);

  //watches change in value of secondary
  useEffect(()=>{
    console.log(`I am feeling ${secondary}`)
  },[secondary]);
  return (
    <>
    <h1>I am feeling {mood} and {secondary}</h1>
    <button onClick = {()=>setMood("frustrated")}>Frustrate</button>
    <button onClick = {()=>setMood("happy")}>Make happy</button>
    <button onClick = {()=>setSecondary("tired")}>Make tired</button>
    <button onClick = {()=>setSecondary("crabby")}>Make crabby</button>
    </>
  );
}

export default App;
