import React, {Component} from "react";
import axios from 'axios';
import Main from './Components/Main';
import './App.css';

import AuthState from './context/auth/AuthState';
import AlertState from './context/alert/AlertState';

 
 export default class App extends Component{
   state={
     tokens:null,
   }

  componentWillMount(){

  this.CurrentUser();

    }
  


  CurrentUser=()=>{
    let theToken = localStorage.getItem("token");
    this.setState({
      tokens:theToken,
    })

    
  }
   render() {
     
      return (
        <AuthState>
          <AlertState>
         <Main thetok = {this.state.tokens} theCurrentUser={this.CurrentUser} />
        </AlertState>
          </AuthState>
      );
    }
     
   
  }




