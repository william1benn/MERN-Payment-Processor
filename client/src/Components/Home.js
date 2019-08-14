import React,{useContext,useEffect} from 'react';
import { BrowserRouter, Route, Link, Switch, withRouter } from "react-router-dom";

const Home = () => {

  
    return (
        <div className="Main">
            <div className = "thePhone">
                <img src ="images/phone.png"/>
            </div>

            <div className="title">
                <div className="theTitle">
                <h3>Welcome to Quick Invoicing</h3>
                </div>
            
            
            <div className="SignButton">
                
        <Link><button class="waves-effect waves-light btn-large signin-btn">Sign In </button></Link>
        </div>
            
            </div>

            
        </div>
    )
}

export default Home;
