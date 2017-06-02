import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      quoteArray: [
        "Life is 10% what happens to you and 90% how you React.js to it. -Charles Swindoll(modified by me)",
        "Our greatest weakness lies in giving up. The most certain way to succeed is always to try just one more time. -Thomas Edison", 
        "It does not matter how slowly you go as long as you do not stop. -Confucius", 
        "Failure will never overtake me if my determination to succeed is strong enough. -Og Mandino",
        "Don't watch the clock; do what it does. Keep going. -Sam Levenson"],
        currentQuote: "Click Button for Motivational Quote",
        currentIndex: 0
    }
  }

  inOrder(){
    var currentI = this.state.currentIndex;
    currentI = (currentI+1) % this.state.quoteArray.length;
    this.setState({
      ...this.state,
      currentIndex: currentI,
      currentQuote: this.state.quoteArray[currentI]
    })
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">{this.state.currentQuote}
        </p>
        <button onClick={(event) => this.inOrder()}>Click for Motivation!</button>
      </div>
    );
  }
}

export default App;
