import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

var quotes = ["yas", "pls", ];
var _this;

class App extends Component {
  
  constructor(){
    super();
    _this = this;
    this.state = {
      index: 0
    }
  }

  changeValue(){
  var currentI = this.state.index;
  currentI = (currentI+1) % quotes.length;
  this.setState({
    index: currentI
  })
}
  
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Great Fucking Startup Advice</h2>
        </div>
          <button className="button"onClick={() => this.changeValue()}>{quotes[this.state.index]}</button>
        </div>
    );
  }
}

export default App;