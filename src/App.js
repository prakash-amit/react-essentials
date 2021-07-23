import React from 'react';
import './App.css';
import {Routes, Route} from "react-router-dom";
import {Home, About, Events, Contact, Whoops404} from "./pages";

//a component using method
function App() {

    return (
      <div>
      <Routes>
        <Route  path = "/" element = {<Home />}></Route>
        <Route path = "/About" element = {<About />}></Route>
        <Route path = "/Events" element = {<Events />}></Route>
        <Route path = "/Contact" element = {<Contact />}></Route>
        <Route path = "*" element = {<Whoops404 />}></Route>
      </Routes>
      </div>
    );
}

export default App;
