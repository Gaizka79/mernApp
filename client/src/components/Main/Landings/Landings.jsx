import React, { useState, useEffect } from "react";
import Card from './Cards';
import useAxios from "../../../hooks/useAxios";
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';

import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

function Landings () {
  const [ filtro, setFiltro ] = useState();
  const [ asteroides, setAsteroides ] = useState([]);
  const [ page, setPage ] = useState(1);
  const [ limit, setLimit ] = useState(10);

  useEffect(() => {
    console.log(filtro);
    if (filtro) {
      async function getFiltrados() {
        const res = await axios.get(`http://localhost:5000/landing/mass?minimum_mass=${filtro}`)
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
        const result = await axios.get(`http://localhost:5000/landing?page=${page}&limit=${limit}`);
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
  }, [filtro, page, limit]);

  function handleSiguiente () {
    setPage(page+1);
  }
  function handleAnterior () {
    setPage(page-1);
  }
  function handleLimit (e) {
    e.preventDefault();
    console.log(e.target.value);
    setLimit(e.target.value);
  }

  function handleSubmit (e)  {
    e.preventDefault();
    setFiltro(e.target[0].value)
    console.log(filtro);
    //handleFiltro(filtro);
  }

  return (
    <>
      <form onSubmit={handleSubmit} className="filtro"> 
        <h1>NASA</h1>
        <TextField id='outlined-basic' label='Filtrar por peso mínimo: ' variant='filled' name='minimum_mass' />
        <Button variant='contained' type="submit" className="Button"  sx={{margin:1}}>Buscar</Button>
      </form>
      <div className="padreCards">
        {asteroides===[] ? ""
        : asteroides.map((temp) =><Card key={uuidv4()} value={temp} />)}
      </div>
      <div className="paginacion">
      <h2>Paginas:</h2>
        <label htmlFor="limit">Elementos por pagina:</label>
        <input type="text" name="limit" id="limit" onChange={handleLimit}/>
        <button name='ant' onClick={handleAnterior} >Anterior</button>
        <button name='sig' onClick={handleSiguiente} >Siguiente</button>
      </div>
    </>
  )

}

export default Landings;
/*
const result = useAxios('http://localhost:5000/landing');
  const data = result.slice(0,100);
  console.log("el resultado de data es:");
  console.log(data);
  //setAsteroides(data);
  console.log(asteroides);
  *****************************************

  **************************************
  const handleFiltro = async (e) => {
    //setFiltro(e.target.name)
    console.log(filtro);
    try{
      const res = await axios.get(`http://localhost:5000/landing/mass?minimum_mass=${filtro}`)
      const data = await res.data;
      setAsteroides(data);
      
    }
    catch (err){
      console.log(`Error: ${err}`);
      throw err;
    }
    console.log("asteroides");
    console.log(asteroides);
  }
  ***************************
<div className="landings">
        <p>Landingngngngng</p>
        // {data ? <p>{data.length}</p> : <p>no  hay data</p>} 
        {asteroides ? <p>si hay {asteroides.length}</p> : <p>no  hay</p>
        } 
      </div>
<form action="landing" method="get" className="filtro">

onClick={handleFiltro}
<form action="onSubmit" className="filtro">
        <TextField id='outlined-basic' label='Filtrar por peso mínimo: ' variant='filled' name='minimum_mass' />
        <Button variant='contained' type='submit' className="Button" sx={{margin:1}}>Buscar</Button>

      </form>
*****************************************
useEffect(() => {
    async function getData() {
      try {
        const resp = await axios('http://localhost:5000/landing')
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
  */