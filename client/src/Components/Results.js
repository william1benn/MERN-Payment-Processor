import React, { Component } from 'react'
import Findcust from './Findcust';
import FoundCust from './FoundCust';



export default class Results extends Component {
constructor(props){
    super(props)
}


    render() {

        return (
             <div>
             <Findcust  theCust = {this.props.theCust} searchRes= {this.props.searchRes} />
             <FoundCust theCustomers = {this.props.theCustomers} loading={this.props.loading} getCust={this.props.getCust} />
            
        </div>
        )
    }
}



