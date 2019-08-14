import React, { Component } from 'react'
import Axios from 'axios';
import { BrowserRouter, Link} from "react-router-dom";


export default class customerInfo extends Component {
    constructor(props){
        super(props)
    }

state={
    aCustomer:'',
    ready: false,
    invoice:'',
    pdf64:'',
    pay:'',
    uptodate:false,
    
}


    componentDidMount(){
        
        let id = this.props.match.params.custid;

        Axios.get(`${process.env.REACT_APP_BASE}/invoice/InvID/${id}`)
         .then(res1 => {
            Axios.get(`${process.env.REACT_APP_BASE}/getCustomer/${id}`)
            .then(res2 => this.setState({
                invoice:res1.data.invID,
                aCustomer:res2.data,
                ready: true,
            }, () => console.log(this.state))
            
            )
        }
        
          )

    } 

    delUser = () => {
        let id = this.props.match.params.custid;
        console.log(id)

        Axios.post(`${process.env.REACT_APP_BASE}/delCustomer/${id}`)
        .then((theRes)=>{
  
            console.log(theRes)
              
            this.props.history.push('/findCustomer');

        })

    }

    sending = (e) => {
        e.preventDefault();
        let invoiceID = this.state.invoice
        Axios.post(`${process.env.REACT_APP_BASE}/invoice/sendInvoice/${invoiceID}`)
        .then((response)=>{
            Axios.post(`${process.env.REACT_APP_BASE}/pdf/download/`,{
                files:response.data.invoice_pdf,
                pay:response.data.hosted_invoice_url,
            }).then((newRes)=>{

                    this.setState({
                        pdf64 : newRes.data,
                        pay:response.data.hosted_invoice_url,
                        uptodate:true,
                    })

                        }).then((theResponse)=>{
                            if(this.state.uptodate===true){
                            Axios.post(`${process.env.REACT_APP_BASE}/invoice/payLink`,{
                                    custid : this.state.aCustomer.id,
                                    linkToPay:this.state.pay,
                            })

                            this.props.history.push("/findCustomer")
                        }
                                }).catch((error)=>{
                                     console.log(error)
                                                        })
             

            
            //this.props.history.push('/findCustomer')
        })


        // this.setState({
            // invoiceDownload:response.data.invoice_pdf
        // })
    }



info(){

    if(this.state.ready===true){
        
return <div className="container">

<h3> {this.state.aCustomer.name}'s information</h3>
      <table class = "responsive-table">
         <thead>
            <tr>
               <th>Name</th>
               <th>Email</th>
               <th>Phone Number</th>
               <th>Street</th>
               <th>City</th>
               <th>State</th>
               <th>description of charges</th>
               <th>Balance</th>
            </tr>
         </thead>
         <tbody>
            <tr>
               <td>{this.state.aCustomer.name}</td>
               <td>{this.state.aCustomer.email}</td>
               <td>{this.state.aCustomer.phone}</td>
               <td>{this.state.aCustomer.address.line1}</td>
               <td>{this.state.aCustomer.address.city}</td>
               <td>{this.state.aCustomer.address.state}</td>
               <td>{this.state.aCustomer.description}</td>
               <td>{this.state.aCustomer.balance}</td>
            </tr>
          
          </tbody>
       </table>
 
</div>



    }

}

invoicing(){

if(this.state.invoice !== undefined){

 return <div>

<button onClick={this.sending} class="btn waves-effect waves-light btn-small #64b5f6 red lighten-2" type="submit" name="send"> Send </button>

</div>

}else {

return <div>
<Link to ={`/InvoiceItems/${this.state.aCustomer.id}`}>
<button class="btn waves-effect waves-light btn-small #64b5f6 blue lighten-2" type="submit" name="action">Invoice</button>
</Link>

    </div>
}
}


    render() {


        
        return (
<div>

{this.info()}


<div className="info-btns">

<Link to={`/findCustomer`}>
<button class="btn waves-effect waves-light modal-trigger btn-small #64b5f6 blue lighten-2">Back</button>
</Link>

 {this.invoicing()}

<Link to={`/UpdateCustomer/${this.state.aCustomer.id}`}>
<button class="btn waves-effect waves-light modal-trigger btn-small #64b5f6 blue lighten-2">Update</button>
</Link>

<button onClick ={this.delUser}
class="btn waves-effect waves-light btn-small #64b5f6 blue lighten-2" type="submit" name="action">Delete</button>

</div>
            </div>
        )
    }
}



