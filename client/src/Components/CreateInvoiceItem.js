import React, { Component } from 'react';
import axios from 'axios';

export default class CreateInvoiceItem extends Component {
    consturctor(props){
    }
    state ={ 
        amount:'',
        description:'',
        alerts: '',
        color: '',
        days:'',
    }

    handleChange = (e) =>{

              this.setState({
              [e.target.name]: e.target.value
           })
        }
           InvoicedItem=(e)=>{
               
            e.preventDefault();

            let id = this.props.match.params.custid;

            axios.post(`${process.env.REACT_APP_BASE}/invoice/InvoiceMethod/${id}`,{
                amount:this.state.amount,
                description:this.state.description,
               
            }).then((theRes)=>{
            axios.post(`${process.env.REACT_APP_BASE}/invoice/createInvoice/`,{

                    customer: this.props.match.params.custid,
                    days: this.state.days,

                    
                })
                
                
                if(theRes.data === "ok"){
                    this.setState({
                        alerts: "Invoice Item Created",
                        color: 'green'
                    })
                }
                
            }).catch((err)=>{
                
                if(err){
                    this.setState({
                        alerts: "Invoice Item Failed",
                        color: 'red'
                    })
                }
                
            })
            setTimeout(()=>{
                
                this.setState({
                    amount:'',
                    description:'',
                    days:'',
                    
                })
            },5000)
            
            this.props.history.push(`/CustomerInfo/${id}`)
        }
        

         

    render() {
        return (
<main>
    
            <div className="container">
    <div className ="forms">

        
    <div style={{color: this.state.color}}>{this.state.alerts}</div>

    <form onSubmit={this.InvoicedItem} className="Create-Customer">

    <label className="inputs">
    Amount:
      <input className="input-field col s8"  name='amount' type="text" value={this.state.amount} onChange={this.handleChange} />
    </label>
    <label className="inputs">
    Description:
      <input className="input-field col s8" name="description" type="text" value={this.state.description} onChange={this.handleChange} />
    </label>
    <label className="inputs">
    Day Until Due:
      <input className="input-field col s8" name='days' type="text" value={this.state.days} onChange={this.handleChange} />
    </label>

    <button className="waves-effect btn-small">Create Invoice</button>

    </form>

    </div>

    </div>
</main>

        );
    }


}



