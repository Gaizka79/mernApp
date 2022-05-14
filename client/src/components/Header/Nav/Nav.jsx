import React from "react";
//import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';

function Nav () {

  return (
    <nav className="navBar">
      <Button variant='contained' color='primary' href='/' className="navElement">Home</Button>
      <Button variant='contained' color='primary' href='/landing' className="navElement">Asteroides</Button>
      <Button variant='contained' color='primary' href='/neas' className="navElement">NEAs</Button>
    </nav>
  )
}

export default Nav;
/*
<Link to='/' className="nav_element">Home</Link>
      <Link to='/landing' className="nav_element">Landings</Link>
  
*/