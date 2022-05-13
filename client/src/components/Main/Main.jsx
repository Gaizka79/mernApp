import React, { Component } from "react";
import axios from 'axios';

import logo from '../../src/logo.svg';

function Main () {
  const [ data, setData ] = useState();

  useEffect(() => {
    async function getData() {
      try {
        const resp = await axios('http://localhost:5000/langfsgdding')
        const res = await resp.data;
        console.log("baiiiiii");
        console.log(res);
        //.then((res) => await res.json())
        //.then((data) => setData(data.message));
      }
      catch (err) {
        console.log(`Error: ${err}`);
        throw err;
      }
    }
    getData();
  }, []);
  
  return (
    <main>
      <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>{!data ? "Loading..." : data}</p>
      </header>
    </div>

    </main>
  )
  
}

export default Main;
