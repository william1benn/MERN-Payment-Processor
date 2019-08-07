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
    
    
}


    componentDidMount(){
        
        let id = this.props.match.params.custid;

        Axios.get(`${process.env.REACT_APP_BASE}invoice/InvID/${id}`)
         .then(res1 => {
            Axios.get(`${process.env.REACT_APP_BASE}getCustomer/${id}`)
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

        Axios.post(`${process.env.REACT_APP_BASE}delCustomer/${id}`)
        .then((theRes)=>{
  
            console.log(theRes)
              
            this.props.history.push('/findCustomer');

        })

    }


    sending = (e) => {
        e.preventDefault();
        let invoiceID = this.state.invoice
        Axios.post(`${process.env.REACT_APP_BASE}invoice/sendInvoice/${invoiceID}`)
        .then((response)=>{
            Axios.post(`${process.env.REACT_APP_BASE}pdf/download/`,{
                files:response.data.invoice_pdf,
            }).then((newRes)=>{

                    this.setState({
                        pdf64 : newRes.data
                    })
                    console.log(this.state.pdf64)
                    

}).catch((error)=>{
                console.log(error)
            })
                // Axios.get(response.data.invoice_pdf, headers)
                // .then((response)=>{
                //     console.log(response, '--=-=-=-=-*******')
                //     // FileDownload(response.data,)
                // })

            
            //this.props.history.push('/findCustomer')
        })


        // this.setState({
            // invoiceDownload:response.data.invoice_pdf
        // })
    }



info(){

    if(this.state.ready===true){
        
return <div>

<h2>{this.state.aCustomer.name}</h2>
<h5>{this.state.aCustomer.email}</h5>
<h5>{this.state.aCustomer.phone}</h5>
<h5>{this.state.aCustomer.address.line1}</h5>
<h5>{this.state.aCustomer.address.city}</h5>
<h5>{this.state.aCustomer.address.state}</h5>
<h5>{this.state.aCustomer.address.country}</h5>
<h5>{this.state.aCustomer.description}</h5>
<h5>{this.state.aCustomer.balance}</h5>


</div>

    }

}

invoicing(){
if(this.state.invoice !== undefined){

 return <div>

<button onClick={this.sending} class="btn waves-effect waves-light" type="submit" name="send"> Send Invoice</button>

</div>

}else {

return <div>
<Link to ={`/InvoiceItems/${this.state.aCustomer.id}`}>
<button class="btn waves-effect waves-light" type="submit" name="action">Invoice Customer</button>
</Link>

    </div>
}
}
    render() {


        
        return (
<div>

            {this.info()}



<button onClick ={this.delUser}
class="btn waves-effect waves-light" type="submit" name="action">Delete Customer
  </button>



    {this.invoicing()}

<Link to ={`/UpdateCustomer/${this.state.aCustomer.id}`}>
<button 
class="btn waves-effect waves-light" type="submit" name="action">Update Customer</button>
</Link>


<div>
  <p>PDF</p>
  <img src={`data:image/png;base64,${this.state.pdf64}`} alt="Red dot" />
</div>


            </div>
        )
    }
}

