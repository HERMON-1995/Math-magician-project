/* eslint-disable react/prefer-stateless-function */
import './App.css';
import React from 'react';
import Calculator from './component/calculator';
import Quote from './component/fetch-data';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="allContent">
        <div className="quote">
          <Quote />
        </div>
        <div className="calculator-wrap">
          <Calculator />
        </div>
      </div>
    );
  }
}

export default App;
