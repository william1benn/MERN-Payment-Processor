import React from 'react';
import Createcust from './Createcust';

const AddNew = () => {
  return (
    <div className="fixed-action-btn">
      <a href="#Createcust" className="btn-floating btn-large blue darken-2 modal-trigger">
      <i className="large material-icons">add</i>
      </a>
      <ul>
        <li>
          <a href="#Createcust" className="btn-floating green modal-trigger">
            <i className="material-icons">person_add</i>
          </a>
        </li>
      </ul>


  
    </div>
  )
}

export default AddNew;
