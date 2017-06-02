import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

var quotes = ["Just do it", "Hustle", "Yesterday you said tomorrow"] //list that holds quotes


class App extends Component {

  constructor(){ //setting up initial constructor
    super();    //receives parent properties
    this.state = { //initializing state
      index: 0    //state is set to the first thing in the list
    }
  }

  changeValue(){ //function changeValue makes it so the state changes to the next object in the list
    var currentI = this.state.index;
    currentI = (currentI+1) % quotes.length; //the modulo is there so that it makes it so that it returns back to 0 and doesn't go on forever
    this.setState({  //setting the new state as the new currentI
      index: currentI
    })
  }

  changeValueRandom(){  //function changeValueRandom makes it so that the state changes randomly
    var currentI = this.state.index;  //sets the current state as some variable 
    currentI = (Math.floor((Math.random() * 10))) % quotes.length;  //changes the variable to be a random number within the length of the list using modulo
    this.setState({ //setting the new state as the new random number
      index:currentI
    })
  }

  render() {  //putting stuff on the screen
    return (  //what App returns when it's exported to index.js to go into  the DOM
      <div className="App"> 
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>UVA Motivation</h2>
        </div>
        <div className="App-body">
          {/*shows the quote */}
          <p className="quote"> {quotes[this.state.index]} </p> 
          {/*button that when click the value changes*/}
        <button className="Change" onClick={() => this.changeValue()}> 
          Be motivated!
          </button>
         <button className="Random" onClick={() => this.changeValueRandom()}>
           Random
           </button>
          </div>
      </div>
    );
  }
}

export default App;
