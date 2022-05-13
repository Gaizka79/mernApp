import React from 'react';

import { BrowserRouter } from 'react-router-dom';
import 'normalize.css';

import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Header/>
          <Main/>
      </BrowserRouter>
      <Footer/>
    </div>
  );
  
}

export default App;
