import React, { Fragment,useContext } from 'react'
import { Link } from 'react-router-dom';
import AuthContext from '../context/auth/authContext';


const  Nav =(props)=>{

  const authContext = useContext(AuthContext);

  const {user} = authContext;

  const onLogout = () =>{
    localStorage.clear();
  }

  

  const authLinks =(
    <Fragment>
      
      <li><Link to="/">How it works</Link></li>
      <li> <Link to="/findCustomer">Search</Link></li>

      <li>
        <a onClick={onLogout} href = "/login">
          Logout
        </a>
      </li>
    </Fragment>
  )

  const guessLinks =(
    <Fragment>
      <li> <Link to="/login">Login</Link></li>
      <li> <Link to="/register">Register</Link></li>
      
    </Fragment>
  )
    
        return (
            <div>
     <nav>
    <div className="nav-wrapper #ffffff white">
      <ul id="nav-mobile" className="right">
      <li><Link to="/">How it works</Link></li>
      <li> <Link to="/findCustomer">Search</Link></li>
      </ul>
    </div>
  </nav>
        
            </div>
        )
    }

    export default Nav;

