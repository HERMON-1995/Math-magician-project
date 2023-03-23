/* eslint-disable react/prefer-stateless-function */
import './App.css';
import React from 'react';
import Calculator from './component/calculator';
import Quote from './component/fetch-data';

function App() {
  return (
    <div>
      <div>
        <Quote />
      </div>
      <div>
        <Calculator />
      </div>
    </div>
  );
}

export default App;
