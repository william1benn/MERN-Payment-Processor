import React from 'react'
import spinner from './spinning.gif';

const Spinner = () => {

  return (
  
  <React.Fragment>
<div className = "spinner" >
    <img src={spinner} alt ="loading..." style={{width:"200px"}} />
</div>
  </React.Fragment>
  )
}

export default Spinner