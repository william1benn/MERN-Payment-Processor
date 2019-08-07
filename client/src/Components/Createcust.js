import React, { Component } from 'react';
import axios from 'axios';
import AuthContext from '../context/auth/authContext';
import hookClass from '../hookClass';


 class Createcust extends Component {
  //  constructor(props){
  //    super(props)
  //    this.user = props.myHookValue
  //  }
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


   handleChange = (e) =>{
console.log(e.target.name)
       this.setState({
       [e.target.name]: e.target.value
    })
   }

newCustomer=(e)=>{
    e.preventDefault();

    axios.post("http://localhost:5000/addCustomer",{
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

    this.props.history.push('/findCustomer')
      
      
    }).catch((err)=>{
      console.log(err)

    })
    
   
}


    render() {
  
        return (
          <div className ="container">
            {/* {this.user.name} */}
          <div className="row">
            <h2>Enter Customer Information</h2>
          <form onSubmit={this.newCustomer} className="Create-Customer" class="col s12">
            <div className="row">
              <div class="input-field col s6">
                <input name='Name' id="name" type="text" value={this.state.Name} onChange={this.handleChange} class="validate"/>
                <label htmlFor="first_name">Name</label>
              </div>
              <div class="input-field col s6">
                <input  name="Email" type="email" value={this.state.Email} onChange={this.handleChange} class="validate"/>
                <label>Email</label>
              </div>
            </div>
            <div className="row">
              <div class="input-field col s6">
                <input  name="Phone" type="text" value={this.state.Phone} onChange={this.handleChange} className="validate"/>
                <label>Phone Number</label>
              </div>
              <div class="input-field col s6">
                <input name="Balance" type="text" value={this.state.Balance} onChange={this.handleChange}  class="validate"/>
                <label for="password">Balance</label>
              </div>
            </div>
            <div class="row">
              <div class="input-field col s12">
                <input name="Street" type="text" value={this.state.Street} onChange={this.handleChange}  class="validate"/>
                <label>Street Address</label>
              </div>
            </div>
              <div class="row">
              <div class="input-field col s4">
                <input input name="City" type="text" value={this.state.City} onChange={this.handleChange}  class="validate"/>
                <label htmlFor="city">City</label>
              </div>
              <div class="input-field col s4">
                <input name="State" type="text" value={this.state.State} onChange={this.handleChange} class="validate"/>
                <label>State</label>
              </div>
                  <div class="input-field col s4">
                <input name="Zip" type="text" value={this.state.Zip} onChange={this.handleChange}  class="validate"/>
                <label>Zip Code</label>
              </div>
            </div>
        <div class="row">
              <div class="input-field col s12">
                <input name="Desc" type="text" value={this.state.Desc} onChange={this.handleChange} class="validate"/>
                <label>Description Of Charge</label>
              </div>
              </div>
              <span className="custButton">
              <button className="waves-effect waves-green btn-large">Create Customer</button>
              </span>
          </form>
        </div> 
      </div>        


        )
    }
}


// Createcust = hookClass(Createcust)

export default Createcust;