import React from 'react';

export default class App extends React.Component {
  constructor() {
    super(); 

    this.state={
      balance: '',
      rate: '',
      term: '',
      result: 0
    };
    
    this.handleChange = this.handleChange.bind(this);
    this.calculate=this.calculate.bind(this);
  }
  
  handleChange(event) {
    this.setState({[event.target.name]: event.target.value});
    
    // this.setState({balance: event.target.value});
    // this.setState({rate: event.target.value});
    // this.setState({term: event.target.value});
    
  }
  
  calculate(balance, rate, term) {
    const P = Number(balance);
    const r = Number((rate/100)/12);
    const n = (Number(term) * 12);
    const top = P*(r*(1+r)**n);
    const bottom = ((1+r)**n)-1;
    const M = (top/bottom).toFixed(2);
    
    this.setState({result: M});
    console.log(typeof P);
    console.log(typeof r);
    console.log(n);
    console.log(typeof top);
    console.log(typeof bottom);
    console.log(typeof M);

  }
 
  // your Javascript goes here
  render() {
    return (
      <div className='container'>
        <h3>Mortgage Calculator</h3>
        <input type='number' name='balance' placeholder='Loan Balance' value={this.state.balance} onChange={ this.handleChange } />
        <input type='number' name='rate' placeholder='Interest Rate %' step='0.1' value={this.state.rate} onChange={this.handleChange} />
        <select name='term' value={this.state.term} onChange={this.handleChange}>
          <option value='15'>15</option>
          <option value='30'>30</option>
        </select>
        <button type='button' name='submit' className='btn btn-primary' onClick={() => {this.calculate(this.state.balance, this.state.rate, this.state.term)}} > Calculate </button>
        <div name='output' id='output' onChange={this.handleChange}>
        <h4>Your Payment is : {this.state.result}</h4></div>
        {/* your JSX goes here */}
      </div>
    );
  }
}