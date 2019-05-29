import React from 'react';

export default class App extends React.Component {
  // your Javascript goes here
  render() {
    return (
      <div className='container'>
      <title>Mortgage Calculator</title>
        <h1>Mortgage Calculator</h1>
        <input type='number' name='balance' placeholder='Loan Balance' />
        <input type='number' name='rate' placeholder='Interest Rate %' step='0.1' />
        <select name='term'>
          <option value='15'>15</option>
          <option value='30'>30</option>
        </select>
        <button type='button' name='submit'> Submit </button>
        {/* your JSX goes here */}
      </div>
    );
  }
}

    //   2) should have an input element with the name of "balance"
    //   3) should have an input element with the name of "rate"
    //   4) should have an input element with the name of "term"
    //   5) should contain a button with the name of "submit"
    // Integration
    //   6) should display correct mortgage payment
    //   7) should display correct mortgage payment