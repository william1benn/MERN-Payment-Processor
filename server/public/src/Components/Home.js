import React,{useContext,useEffect} from 'react';
import AuthContext from '../context/auth/authContext';

const Home = () => {

const authContext = useContext(AuthContext);

    useEffect(()=> {
      authContext.loadUser();
      //eslint-disable-next-line
    },[]);
  
    return (
        <div className="Main">
            <div className = "thePhone">
                <img src ="images/phone.png"/>
            </div>

            <div className="title">
                <div className="theTitle">
                <h3>Welcome to Quick Invoicing</h3>
                </div>
            
            
            <div className="SignButton"><button class="waves-effect waves-light btn-large signin-btn">Sign In</button></div>
            
            </div>

            
        </div>
    )
}

export default Home;
