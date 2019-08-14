import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import axios from 'axios';
import AuthContext from '../context/auth/authContext';
import M from 'materialize-css';


class Createcust extends Component {

    state ={ 
      Name:'',
      Email:'',
      Phone:'',
      Street:'',
      City:'',
      State:'',
      Zip:'',
      Country:'',
      Desc:'',
      Balance:'',
      loggedin:false
    }
    
  
   componentDidMount(){
      //Materialized CSS
        M.AutoInit(); 
  }
  
    
   handleChange = (e) =>{
console.log(e.target.name)
       this.setState({
       [e.target.name]: e.target.value
    })
   }


newCustomer=(e)=>{
    e.preventDefault();

    axios.post(`${process.env.REACT_APP_BASE}/addCustomer`,{
        name:this.state.Name,
        email:this.state.Email,
        phone:this.state.Phone,
        line1:this.state.Street,
        city:this.state.City,
        state:this.state.State,
        country:this.state.Country,
        postal_code:this.state.Zip,
        description:this.state.Desc,
        balance:this.state.Balance,
        
      }).then((theRes)=>{
        console.log(theRes)
        
      this.props.history.push('/findCustomer')
        
      this.setState({
        Name:'',
        Email:'',
        Phone:'',
        Street:'',
        City:'',
        State:'',
        Zip:'',
        Country:'',
        Desc:'',
        Balance:'',
      })
      
      
      
    }).catch((err)=>{
      console.log(err)
      
    })
    
    
}


    render() {
  
        return (
          <div id="Createcust" className="modal" style={modal}> 
          <div className="modal-content">
            <h4>Create A New Customer </h4>
          <div className="row">
          <form onSubmit={this.newCustomer} className="Create-Customer" class="col s12">
            <div className="row">
              <div class="input-field col s6">
                <input placeholder ="Name" name='Name' id="name" type="text" value={this.state.Name} onChange={this.handleChange} class="validate"/>
                <label htmlFor="first_name">Name</label>
              </div>
              <div class="input-field col s6">
                <input  placeholder ="Email" name="Email" type="email" value={this.state.Email} onChange={this.handleChange} class="validate"/>
                <label>Email</label>
              </div>
            </div>
            <div className="row">
              <div class="input-field col s6">
                <input  placeholder ="Phone" name="Phone" type="text" value={this.state.Phone} onChange={this.handleChange} className="validate"/>
                <label>Phone Number</label>
              </div>
              <div class="input-field col s6">
                <input placeholder ="Balance" name="Balance" type="text" value={this.state.Balance} onChange={this.handleChange}  class="validate"/>
                <label for="password">Balance</label>
              </div>
            </div>
            <div class="row">
              <div class="input-field col s12">
                <input placeholder ="Street" name="Street" type="text" value={this.state.Street} onChange={this.handleChange}  class="validate"/>
                <label>Street Address</label>
              </div>
            </div>
              <div class="row">
              <div class="input-field col s4">
                <input placeholder ="City" input name="City" type="text" value={this.state.City} onChange={this.handleChange}  class="validate"/>
                <label htmlFor="city">City</label>
              </div>
              <div class="input-field col s4">
                <input placeholder ="State" name="State" type="text" value={this.state.State} onChange={this.handleChange} class="validate"/>
                <label>State</label>
              </div>
                  <div class="input-field col s4">
                <input placeholder ="Zip" name="Zip" type="text" value={this.state.Zip} onChange={this.handleChange}  class="validate"/>
                <label>Zip Code</label>
              </div>
            </div>
        <div class="row">
              <div class="input-field col s12">
                <input placeholder ="Description Of Charge" name="Desc" type="text" value={this.state.Desc} onChange={this.handleChange} class="validate"/>
                <label>Description Of Charge</label>
              </div>
              </div>
              <div className="modal-footer">
              <span className="custButton">
              <button className="modal-close btn waves-effect waves-light btn-small #64b5f6 blue lighten-2">Create Customer</button>
              </span>
              </div>
          </form>
        </div> 
      </div> 
      </div>       


        )
    }
}

const modal ={
  width:"75%",
  height:"85%",
}

export default withRouter(Createcust);