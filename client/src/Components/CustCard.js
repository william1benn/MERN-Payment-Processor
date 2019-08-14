import React, { Component } from 'react';
import M from 'materialize-css';
import { Link } from 'react-router-dom';


export default class CustCard extends Component {

  state={
    payments:true,
  }

  componentDidMount(){

  }

  render() {

    console.log(this.props)
    console.log(this.props.customer.paymentLink)
    // const paymentButton = <Link to={`${this.props.customer.paymentLink}`} className=" list-button waves-effect btn-small #64b5f6 red lighten-2">Pay</Link>

    return (
     
          <tr>
            <td>{this.props.customer.name}</td>
            <td>{this.props.customer.email}</td>
            <td>{this.props.customer.phone}</td>
            <td>{this.props.customer.state}</td>
            <td>{this.props.customer.balance}</td>
            {
              this.props.customer.paymentLink &&
              <a href ={this.props.customer.paymentLink} id="payNowBtn" className="list-button waves-effect btn-small #64b5f6 red lighten-2 col s4">Pay Now</a>
            }
      <Link to={`customerInfo/${this.props.customer.custid}`} id="view-btn" className="list-button waves-effect btn-small #64b5f6 blue lighten-2 col s4 push-s1">View More</Link>
          </tr>
        
      
      
     

       
    )
  }
}