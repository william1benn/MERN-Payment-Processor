import React from 'react';
import {Link} from "react-router-dom";


const footer = () => {
  return (
    <div className ="theFooter">
       <footer class="page-footer">
          <div class="container">
            <div class="row">
              <div class="col l6 s12">
                
                <p class="footlinks">Quick Payment and Invoicing Solutions</p>
              </div>
              <div class="col l4 offset-l2 s12">
                <h5 class="footlinks">Site Map</h5>
                <ul>
                  <li><Link to='/' class="footlinks">Home</Link></li>
                  <li><Link to="findCustomer" class="footlinks">Find Customer</Link></li>
                </ul>
              </div>
            </div>
          </div>
          <div class="footer-copyright">
            <div class="footlinks container">
            © 2019 Copyright
            
            </div>
          </div>
        </footer>
    </div>


  )
}

export default footer;
