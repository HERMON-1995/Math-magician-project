/* eslint-disable react/prop-types */
/* eslint-disable react/prefer-stateless-function */
/* eslint-disable max-classes-per-file */
import React from 'react';
import calculate from '../logic/calculate';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: null,
      next: null,
      operation: null,
    };
    this.handleClick = this.handleClick.bind(this);
    this.calculator = '** Calculator **';
  }

  handleClick(event) {
    const data = calculate(this.state, event.target.textContent);
    this.setState(data);
  }

  render() {
    const { total, next, operation } = this.state;
    return (
      <div className="calculator">
        <h1 className="title">{this.calculator}</h1>
        <div className="display-section">
          <p className="display-value">
            {total}
            {' '}
            {operation}
            {' '}
            {next}
          </p>
        </div>
        <Button value="AC" onClick={this.handleClick} />
        <Button value="+/-" onClick={this.handleClick} />
        <Button value="%" onClick={this.handleClick} />
        <Button value="÷" className="operator" onClick={this.handleClick} />

        <Button value="7" onClick={this.handleClick} />
        <Button value="8" onClick={this.handleClick} />
        <Button value="9" onClick={this.handleClick} />
        <Button value="x" className="operator" onClick={this.handleClick} />

        <Button value="4" onClick={this.handleClick} />
        <Button value="5" onClick={this.handleClick} />
        <Button value="6" onClick={this.handleClick} />
        <Button value="-" className="operator" onClick={this.handleClick} />

        <Button value="1" onClick={this.handleClick} />
        <Button value="2" onClick={this.handleClick} />
        <Button value="3" onClick={this.handleClick} />
        <Button value="+" className="operator" onClick={this.handleClick} />

        <Button value="0" className="zero" onClick={this.handleClick} />
        <Button value="." onClick={this.handleClick} />
        <Button value="=" className="operator" onClick={this.handleClick} />
      </div>
    );
  }
}

class Button extends React.Component {
  render() {
    const { value, onClick, className } = this.props;
    return (
      <button type="button" onClick={onClick} className={className}>
        {value}
      </button>
    );
  }
}

export default Calculator;
