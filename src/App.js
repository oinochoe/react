import React, { Component, Fragment } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    const text = '이랑';
    const condition = true;

    return (
      <Fragment>
        <h1>안녕!</h1>
        <h2>{text}</h2>
        {
          condition ? "참" : "거짓"
        }
      </Fragment>
    );
  }
}

export default App;
