import React, { useState, useEffect } from "react";
import Card from '../Landings/Cards';
import useAxios from "../../../hooks/useAxios";
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';

import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

function List () {
  const [ filtro, setFiltro ] = useState(0);
  const [ asteroides, setAsteroides ] = useState([]);
  const [ page, setPage ] = useState(1);
  const [ limit, setLimit ] = useState(10);
  const [ order, setOrder ] = useState(1);
  const [ xMasa, setXmasa ] = useState(1);

  useEffect(() => {
    console.log(filtro);
    if (filtro) {
      async function getFiltrados() {
        const res = await axios.get(`http://localhost:5000/landing/mass?minimum_mass=${filtro}&page=${page}&limit=${limit}&order=${xMasa}`)
        const data = await res.data;
        setAsteroides(data);
        console.log("badago filtrorik");
        console.log(asteroides);
      }
      getFiltrados();
    }
    else {
      console.log("ez dago filtrorik");
      async function getSinFiltrar() {
        console.log("sin filtros");
        const result = await axios.get(`http://localhost:5000/landing?page=${page}&limit=${limit}&order=${order}&minimum_mass=${filtro}`);
        //const res = await result.data.slice(0,30);
        const res = await result.data;
        //const data = res.slice(0,30);
        console.log("el resultado de data es:");
        console.log(res);
        setAsteroides(res);
        console.log(asteroides);
      }
      getSinFiltrar();
    }
    console.log(asteroides);
  }, [filtro, page, limit, order, xMasa]);

  function handleSiguiente () {
    setPage(page+1);
  }
  function handleAnterior () {
    page>1? setPage(page-1) :"";
  }
  function handleLimit (e) {
    e.preventDefault();
    setLimit(e.target.value);
  }

  function handleSubmit (e)  {
    e.preventDefault();
    setFiltro(e.target[0].value)
    console.log(filtro);
    //handleFiltro(filtro);
  }

  function sortByName () {
    order ===1 ? setOrder(-1) : setOrder(1);
  }
  function sortByMasa () {
    xMasa ===1 ? setXmasa(-1) : setXmasa(1);
  }

  return (
    <>
      <form onSubmit={handleSubmit} className="filtro"> 
        <h1>NASA</h1>
       <TextField id='outlined-basic' label='Filtrar por peso mínimo: ' variant='filled' name='minimum_mass' />
        <Button variant='contained' type="submit" className="Button"  sx={{margin:1}}>Buscar</Button> 
      </form>
      <div className="ordenar">
        <Button onClick={sortByName} variant="contained" className="Button" name="nombre">Nombre</Button>
        {/* <Button variant="contained" className="Button" name="nombre">Fecha</Button> */}
        <Button onClick={sortByMasa} variant="contained" className="Button" name="nombre">Masa</Button>

      </div>
      <div className="paginacion">
        <Button variant='contained' className="Button" name='ant' onClick={handleAnterior} >Anterior</Button>
        <Button variant='contained' className="Button" name='sig' onClick={handleSiguiente} >Siguiente</Button>
      </div>
      <div className="padreCards">
        {asteroides===[] ? ""
        : asteroides.map((temp) =><Card key={uuidv4()} value={temp} />)}
      </div>
      
    </>
  )

}

export default List;
