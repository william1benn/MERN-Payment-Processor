import React, { Component } from 'react';
import Axios from 'axios';

export default class DelUser extends Component {

    componentDidMount(){
        let id = this.props.match.params.custid;

        Axios.post(`${process.env.REACT_APP_BASE}delCustomer/${id}`)
        .then((theRes)=>{
  
            console.log(theRes)
              
            this.props.history.push('/find');

        })

    } 

  
    render() {
        return (
            <div>

                
                
            </div>
        )
    }
}
