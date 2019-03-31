import React, { Component } from 'react';
class App extends Component {
  render() {
    const text = '이랑';
    const condition = true;

    return (
      <div>
        <h1>hi react</h1>
        <h2>{text}</h2>
        {
          condition ? '참' : '거짓'
        }
      </div>
    );
  }
}

export default App;
