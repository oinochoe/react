import React, { Component } from 'react';
import styles from './App.css';

console.log(styles); // 콘솔에 무엇이 출력되는지 확인해보세요.

class App extends Component {
  render() {
    return (
      <div className={styles.box}>
      
      </div>
    );
  }
}

export default App;