//import React from 'react';
import './styles/styles.scss';
import { BrowserRouter } from 'react-router-dom';

import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

import 'normalize.css';

import { useState } from 'react';
import { userContext } from './context/userContext';

function App() {

  const [ user, setUser ] = useState("Gaizka");

  const login = (name) => setUser(name), logout = () => setUser("");

  const userData = { user, login, logout };

  return (
    <div className="App">
      <BrowserRouter>
      <userContext.Provider value={userData}>
          <Header/>
          <Main/>
          </userContext.Provider> 
      </BrowserRouter>
      <Footer/>
    </div>
    
  );
}

export default App;
