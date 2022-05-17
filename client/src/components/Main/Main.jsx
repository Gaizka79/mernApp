import React from "react";
import { Routes, Route } from 'react-router-dom';

import Home from './Home';
import Landings from './Landings';
//import Mapa from './Landings/Mapa';
import List from './List';

function Main () {
  return (
    <main className="main">
      <Routes>
        <Route element={<Home/>} path='/'/>
        <Route element={<Landings/>} path='/landing'/>
        <Route element={<List/>} path='/landing/list' />
      </Routes>
    </main>
  )
  
}

export default Main;
