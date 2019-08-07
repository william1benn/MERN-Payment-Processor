import React, { Component } from 'react';
import CustCard from './CustCard';
import Spinner from './Spinner';

 

export default class Users extends Component {
    constructor(props){
      super(props);
      this.state={}
    }

     componentDidMount(){
       this.props.getCust()
     }


      render() {
    if(this.props.loading){
    
      return <Spinner />
    
    }else{
    
      return (
        <div className ="container">
        <div className = "row">
        <table className="responsive-table striped custTable col s12" >
        <thead>
          <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>State</th>
              <th>Balance</th>
          </tr>
        </thead>

        <tbody>
    
         {this.props.theCustomers.map(user=>(
    
           <CustCard  key={user._id} customer={user} />
    
        ))}
    
    </tbody>
      </table>
      </div>
      </div>
      
      );
    
         }
    }
    
    }
