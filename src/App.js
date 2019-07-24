import React from 'react';
import './App.css';
import Calculator from './Calculator';

class App extends React.Component {
  state = {
    display: '0',
    isShowingResult: false,
  };

  componentDidMount() {
    window.addEventListener('keydown', e => {
      e.preventDefault();

      const btn = document.querySelector(`[value="${e.key}"]`) 
        || document.querySelector(`[data-kbd="${e.key}"]`);
      
      if (!btn) return;

      btn.click();
    });
  };

  handleClick = e => {
    if (this.isDisplayingError()) return;

    const updatedState = {
      // By default, the value of the input is added to the display
      display: this.state.display + e.target.value,
      isShowingResult: false
    }

    switch(e.target.name) {
      case 'clear':
        updatedState.display = '0';
        break;

      case 'delete':
        updatedState.display = this.state.display.toString().slice(0, -1);
        break;

      case 'operator':
        // Avoid multiple operators replacing last one with input
        if (/[-+*/]$/.test(this.state.display)) {
          updatedState.display = this.replaceLastCharacter(e);
        };
        break;

      case 'number':
        // if the display is showing an operation result, replace that number
        // instead of concatenating
        if (this.state.isShowingResult) {
          updatedState.display = e.target.value;
        }
        // Prevent leading zeroes when adding a new number 
        else if (this.getLastNumber() === '0') {
          updatedState.display = this.replaceLastCharacter(e);
        };
        break;
          
      case 'comma':
        if (this.getLastNumber().includes('.')) return;
        break;
      
      // Exit handleClick function on form submit or clicking elsewhere
      default:
        return;
    };

    e.target.classList.add('keypress');

    this.setState(updatedState);
  };

  handleSubmit = e => {
    e.preventDefault();
    if (this.isDisplayingError()) return;

    // String -> Number conversion to remove right hand zeroes
    // toString() required for checking using getLastNumber()
      // Otherwise display value is set as a number, which can't use .split()
    let result = +eval(this.state.display).toPrecision(12).toString();

    if (!isFinite(result)) result = 'Error';

    this.setState({
      display: result,
      isShowingResult: true
    });
  };

  removeTransition = e => {
    if (e.propertyName !== 'transform') return;
    e.target.classList.remove('keypress');
  };

  // Helper functions
  
  replaceLastCharacter = e => {
    return this.state.display.slice(0, -1) + e.target.value;
  };

  getLastNumber = () => {
    return this.state.display.split(/[-+*/]/).pop();
  };

  isDisplayingError = () => {
    if (this.state.display === 'Error') {
      this.setState({ display: '0' });
      return true;
    };
  };

  render() {
    return (
      <div className="App">
        <Calculator
          display={ this.state.display } 
          handleClick={ this.handleClick }
          handleSubmit={ this.handleSubmit }
          removeTransition={ this.removeTransition } 
        />
      </div>
    );
  };
};

export default App;
