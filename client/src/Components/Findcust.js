import React, { Component, useContext, useEffect} from 'react';
import AuthContext from '../context/auth/authContext';
import axios from 'axios';


export default class Findcust extends Component {
  
    constructor(props){
        super(props)
        }
        state = {
          input : "",
          visable:[],
          emptyInput:true,
    
      }
  
    
      handleChange=(e)=>{
    
    this.setState({input: e.target.value})
    let clone = [...this.props.theCust]
    
      let filteredSearch = clone.filter((cust,i)=>{
          if(cust.phone){
              console.log(cust.phone)
              return cust.phone.includes(e.target.value)
          }else{
              return false;
            }
        })
        this.setState({visable:filteredSearch},()=>{
    
          this.props.searchRes(this.state.visable);
    
        }) 
    }

    render() {

        return (
            <div className="searchBox">
            
 <div className="row">
    <form className="col s6">
      <div className="row">
        <div className="input-field col s12">
        <input name='Name' type="text" value={this.state.input} onChange={this.handleChange} />
          <label>Search By Phone Number</label>
        </div>
      </div>
    </form>
  </div>

                
            </div>
        )
    }
}

