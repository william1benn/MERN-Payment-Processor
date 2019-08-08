import React, { Component } from 'react';
import axios from 'axios';

export const Context = React.createContext();

export class Context extends Component {
  state = {
    user: '',
  }

  componentDidMount() {
    Axios.ge
  }

  getCurrentUser = () => {
    axios.get(`${process.env.REACT_APP_BASE}`)
  }

  render() {
    return (
      <div>
        
      </div>
    )
  }
}
