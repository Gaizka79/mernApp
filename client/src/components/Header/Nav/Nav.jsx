import React, { Component } from "react";
import { Link } from 'react-router-dom';
//import Button from '@mui/material/Button';

function Nav () {

  return (
    <nav className="navBar">
      <Link to='/' className="nav_element">Home</Link>
      <Link to='/landings' className="nav_element">Landings</Link>
    </nav>
  )
}

export default Nav;
/*
  <Button variant='contained' color='primary' href='/' className="navElement">Home</Button>
  <Button variant='contained' color='primary' href='/landings' className="navElement">Asteroides</Button>
  <Button variant='contained' color='primary' href='/neas' className="navElement">NEAs</Button>
*/