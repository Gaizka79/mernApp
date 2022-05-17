import React, {useContext} from "react";
import logo from '../../assets/logo3.png';
import Nav from './Nav';
import { userContext } from '../../context/userContext';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

function Header () {
  return (
    <header className="header">
      <img src={logo} alt="logo" />
      <Nav/>
      <div className="user">
        <userContext.Consumer>
          {({user,login, logout}) => 
            user?
              <>
                <p>Usuario: {user}</p>
                <Button variant='contained' className="Button" name='logout' onClick={logout} >Logout</Button>
              </>:
              <>
                <p>Login: </p>
                <TextField id='log' label='Nombre de usuario:' variant='filled' name='log' />
                <Button variant='contained' className="Button" name='log' onClick={login} >Login</Button>
              </>
          }
        </userContext.Consumer>
      </div>
    </header>
  )
}

export default Header;
