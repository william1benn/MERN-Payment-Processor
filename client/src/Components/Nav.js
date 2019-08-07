import React, { Fragment,useContext } from 'react'
import { Link } from 'react-router-dom';
import AuthContext from '../context/auth/authContext';


const  Nav =(props)=>{

  const authContext = useContext(AuthContext);

  const {user} = authContext;

  const onLogout = () =>{
    localStorage.clear();
  }

  // useEffect(()=> {
  //     authContext.loadUser();
  //     //eslint-disable-next-line
  //   },[]);
  

  const authLinks =(
    <Fragment>
      <li>Hello {user && user.name}</li>
      <li> <Link to="/create">Create Customer</Link></li>
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
    <div className="nav-wrapper #64b5f6 blue lighten-2">
      <Link to ="/findCustomer" className="brand-logo">Logo </Link>
      <ul id="nav-mobile" className="right hide-on-med-and-down">
   {user? authLinks : guessLinks}
      </ul>
    </div>
  </nav>
        
            </div>
        )
    }

    export default Nav;

