import React, { Component } from 'react';
import M from 'materialize-css';
import axios from 'axios';
import {Link} from "react-router-dom";


export default class Createcust extends Component {
    constructor(props){
        super(props)
    }
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
    }
    
     
  componentDidMount(){
    M.AutoInit(); 


    let id = this.props.match.params.custid;
    axios.get(`${process.env.REACT_APP_BASE}/getCustomer/${id}`).then((res)=>{

        this.setState({
    
            Name:res.data.name,
            Email:res.data.email,
            Phone:res.data.phone,
            Street:res.data.address.line1,
            City:res.data.address.city,
            State:res.data.address.state,
            Zip:res.data.address.postal_code,
            Country:res.data.address.country,
            Desc:res.data.description,
            Balance:res.data.balance,
    
        })
    }).catch((error)=>{
        console.log(error)
    })
        
    }

    backBtn(){
  let id = this.props.match.params.custid;
  return <Link to={`/CustomerInfo/${id}`}>
<button class="btn waves-effect waves-light btn-small #64b5f6 blue lighten-2">Back</button>
</Link>
    }

  


   handleChange = (e) =>{
console.log(e.target.name)
       this.setState({
       [e.target.name]: e.target.value
    })
   }

updateCustomer=(e)=>{
    e.preventDefault();

    let id = this.props.match.params.custid;

    axios.post(`${process.env.REACT_APP_BASE}/updateCustomer/${id}`,{
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
      
    }).catch((err)=>{
      console.log(err)

    })
    
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

    this.props.history.push(`/customerInfo/${id}`)
}


    render() {
      //the user
  
        return (
  
            <div className ="forms" >
    
            <h4>Update Customer </h4>
          <div className="row">
          <form onSubmit={this.updateCustomer} className="Create-Customer" class="col s12">
            <div className="row">
              <div class="input col s6">
                <label htmlFor="first_name">Name</label>
                <input name='Name' id="name" type="text" value={this.state.Name} onChange={this.handleChange} class="validate"/>
              </div>
              <div class="input col s6">
                <label>Email</label>
                <input  name="Email" type="email" value={this.state.Email} onChange={this.handleChange} class="validate"/>
              </div>
            </div>
            <div className="row">
              <div class="input col s6">
                <label>Phone Number</label>
                <input  name="Phone" type="text" value={this.state.Phone} onChange={this.handleChange} className="validate"/>
              </div>
              <div class="input col s6">
                <label for="balance">Balance</label>
                <input name="Balance" type="text" value={this.state.Balance} onChange={this.handleChange}  class="validate"/>
              </div>
            </div>
            <div class="row">
              <div class="input col s12">
                <label>Street Address</label>
                <input name="Street" type="text" value={this.state.Street} onChange={this.handleChange}  class="validate"/>
              </div>
            </div>
              <div class="row">
              <div class="input col s4">
                <label htmlFor="city">City</label>
                <input input name="City" type="text" value={this.state.City} onChange={this.handleChange}  class="validate"/>
              </div>
              <div class="input col s4">
                <label>State</label>
                <input name="State" type="text" value={this.state.State} onChange={this.handleChange} class="validate"/>
              </div>
                  <div class="input col s4">
                <label>Zip Code</label>
                <input name="Zip" type="text" value={this.state.Zip} onChange={this.handleChange}  class="validate"/>
              </div>
            </div>
        <div class="row">
              <div class="input col s12">
                <label>Description Of Charge</label>
                <input name="Desc" type="text" value={this.state.Desc} onChange={this.handleChange} class="validate"/>
              </div>
              </div>
              <span className="updateBtn">
              {this.backBtn()}
              <button className="btn waves-effect waves-light btn-small #64b5f6 blue lighten-2">Update</button>
              </span>
          </form>
          
        </div> 
        
      </div> 

      



          
        )
    }
}



