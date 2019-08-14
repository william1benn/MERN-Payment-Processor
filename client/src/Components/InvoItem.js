import React from 'react';
import Axios from 'axios';


const InvoItem = (props) => {

        let id = props.match.params.custid;

        Axios.post(`${process.env.REACT_APP_BASE}/InvoiceMethod/${id}`)
        .then((theRes)=>{
  
            console.log(theRes)
              
        })



    return (
        <div>


                    <button>Invoiced</button>

        </div>
    )

    }
export default InvoItem;




