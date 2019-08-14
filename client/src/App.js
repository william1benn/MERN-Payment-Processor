import React, {Component} from "react";
import axios from 'axios';
import Main from './Components/Main';
import './App.css';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';
import AuthState from './context/auth/AuthState';
import AlertState from './context/alert/AlertState';

 
 export default class App extends Component{
   state={
     tokens:null,
   }

  componentWillMount(){

  this.CurrentUser();

    }

    componentDidMount(){
      //Materialized CSS
        M.AutoInit(); 
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




