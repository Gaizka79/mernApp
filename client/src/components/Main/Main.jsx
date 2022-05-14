import React from "react";
import { Routes, Route } from 'react-router-dom';

import Home from './Home';
import Landings from './Landings';
//import Mapa from './Landings/Mapa';
//import List from './Landings/List';

function Main () {
  return (
    <main className="main">
      <Routes>
        <Route element={<Home/>} path='/'/>
        <Route element={<Landings/>} path='/landing'/>
      </Routes>
    </main>
  )
  
}

export default Main;
/*  
import logo from '../../logo.svg';  
let data = "";
<div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>{!data ? "Loading..." : data}</p>
        </div>
      </div>
      */