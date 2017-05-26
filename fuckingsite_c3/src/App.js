import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import AppBar from 'material-ui/AppBar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import FlatButton from 'material-ui/styles/MuiThemeProvider';

var quotes = ["1", "2", "3", "4", "5" ];
var _this;
var quotes_random = quotes(Math.random);

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

  changevalue(){
    var currentI = this.state.index;
    this.setState({
      quotes_random = quotes(Math.random);
    })
  }
  
  render() {
    return (
      <div className="App">
        <MuiThemeProvider>
          <AppBar
    title="Fucking Page"
    iconClassNameRight="muidocs-icon-navigation-expand-more"
    onLeftIconButtonTouchTap 
          />
  </MuiThemeProvider>
        <div className="App-header">
          <h2>Great Fucking Startup Advice</h2>
        </div>
          <button className="button">{quotes[this.state.index]}</button>
          <div>
         <button onClick={() => this.changeValue()}> Order </button>
         <button onClick={() => this.changeValue_random()}> Random </button>
        </div>
        </div>
    );
  }
}

export default App;