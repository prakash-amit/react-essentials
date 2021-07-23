import React, {useReducer} from 'react';
import './App.css';

//a component using method
function App({authorized}) {

  //here (checked)=> !checked is a reducer
  //a reducer takes current state and returns new state
  const [checked, toggle] = useReducer((checked)=> !checked, false);

  return (
    <>
    <input type="checkbox" value={checked} onChange={toggle} />
    <p>{ checked ? "checked" : "not checked" }</p>
    </>
  );
}

export default App;
