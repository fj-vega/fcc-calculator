import React from 'react';


const Calculator = ({ display, handleClick,handleSubmit, removeTransition }) => {
  return (
    <div>
      <header>
        <h1 className="header-title">
          React Calculat<span><img className="header-image" src="img/React.js_logo-512.png" /></span>r
        </h1>
      </header>
      
      <form 
        className="calculator" 
        onClick={ handleClick } 
        onSubmit={ handleSubmit }
        onTransitionEnd= { e => removeTransition(e) } >
        {/* Display */}
        <input type="text" id="display" value={ display } disabled />
        {/* Input buttons */}
        <input name="number"   type="button" id="zero"     value='0' />
        <input name="number"   type="button" id="one"      value='1' />
        <input name="number"   type="button" id="two"      value='2' />
        <input name="number"   type="button" id="three"    value='3' />
        <input name="number"   type="button" id="four"     value='4' />
        <input name="number"   type="button" id="five"     value='5' />
        <input name="number"   type="button" id="six"      value='6' />
        <input name="number"   type="button" id="seven"    value='7' />
        <input name="number"   type="button" id="eight"    value='8' />
        <input name="number"   type="button" id="nine"     value='9' />
        <input name="comma"    type="button" id="decimal"  value='.' />
        <input name="operator" type="button" id="add"      value='+' />
        <input name="operator" type="button" id="subtract" value='-' />
        <input name="operator" type="button" id="multiply" value='*' />
        <input name="operator" type="button" id="divide"   value='/' />
        <input name="delete"   type="button" id="delete"   value="&larr;" data-kbd="Backspace" />
        <input name="clear"    type="button" id="clear"    value="C"      data-kbd="Delete" />
        {/* Resolve display */}
        <input type="submit" id="equals" value='=' />
      </form>
    </div>
  );
};

export default Calculator;
