import React, { Component } from 'react'

export default class howto extends Component {
  render() {




    return (
      <main>
      <div className="container">
        <div className="how-title">
          <h3>Quick Payments and Invoicing</h3>
        </div>

     
         <h4>Getting Started</h4>
         <div className="theHowTo">
           <div className="create-Customer">
             <img  className="imageHow" src="images/createc.png" />
             <p className="info-box"> Create A Customer</p>
             <p>To create a customer, you can click on the blue button on the right button of the screen,
              you will then be prompted to enter in the customer's information,  after you have submitted the customer's information,
              you are now ready to create a invoice.
             </p>
           </div>
           <div className="invoice-Customer">
             <img className="imageHow" src="images/invoice.png" />
             <p className="info-box"> Create The Invoice</p>
             <p>After creating a customer, you can now go ahead and create a 
               invoice for that customer, by clicking on view more and then invoice. After
               the invoice is created you can now click send, which will email the invoice
               to the customer.
             </p>

           </div>
           <div className="collect-Customer">
             <img className="imageHow" src="images/collect.png" />
             <p className="info-box"> Collect Payment</p>
             <p> Since you have now created a invoice for the customer, you are now ready to collect
               payment. If you perfer to collect payment by email then you are finished. If you want to collect payment upfront click the pay button you will be redirect to 
               stripe's secure payment area.
             </p>
           </div>
         </div>
      </div>
      </main>
    )
  }
}
