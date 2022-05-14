import React, {useEffect, useState } from "react";
import useAxios from "../../../hooks/useAxios";

function Home () {
  //const [ landing, setLanding ] = useState([]);
  //const [ result, setResult ] = useState();
  
  const result = useAxios(`https://api.nasa.gov/planetary/apod?api_key=${process.env.REACT_APP_API_NASA}`)
//  setResult(res);

  //setLanding(result);
  return (
    <div className="home">
      <h4>{result.title}</h4>
      {(result.media_type==='image')? 
        <img src={result.hdurl} alt="Imagen APOD" /> : ""}
      <p className="explanation">{result.explanation}</p>
    </div>
  )
}

export default Home;
/*

    */