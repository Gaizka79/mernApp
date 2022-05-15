import React from "react";

function Cards (props){
  if (props.value) {
    const aste = props.value;
    //let fecha = aste.year.toDateString()
    return (
      <article className="cards">
        <h2>{aste.name}</h2>
        <h4>Clase: {aste.recclass}</h4>
        <p><b>Masa:</b> {aste.mass}Kg.</p>
        <p><b>Fecha:</b> {aste.year}</p>
      
      </article>
      
    )
  }
}

export default Cards;
