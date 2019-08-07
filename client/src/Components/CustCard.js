import React, { Component } from 'react';
import M from 'materialize-css';
import { Link } from 'react-router-dom';


export default class CustCard extends Component {
 
  
  render() {

    return (
     
          <tr>
            <td>{this.props.customer.name}</td>
            <td>{this.props.customer.email}</td>
            <td>{this.props.customer.phone}</td>
            <td>{this.props.customer.state}</td>
            <td>{this.props.customer.balance}</td>
      <Link to={`customerInfo/${this.props.customer.custid}`} className=" list-button waves-effect btn-small #64b5f6 blue lighten-2">View</Link>
          </tr>
        
      
      
     

       
    )
  }
}