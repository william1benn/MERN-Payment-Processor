import React, { Component } from 'react';
import authContext from './context/auth/authContext';


function hookClass(Component) {
    return function WrappedComponent(props) {
      const myHookValue = authContext.loadUser();
      return <Component {...props} myHookValue={myHookValue} />;
    }
  }

  export default hookClass;