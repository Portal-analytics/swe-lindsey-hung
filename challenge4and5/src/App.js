
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './Form.js'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar'
import * as firebase from 'firebase'

class App extends Component {

constructor() {
  super();
  this.state = {
    speed: 25
  };
}

componentDidMount() {
  const rootRef = firebase.database().ref().child('react');
  const speedRef = rootRef.child('speed');
  speedRef.on('value',snap => {
    this.setState({
      speed: snap.val()
    })
  });
}

  render() {
    return (
      <div className="App">
        <MuiThemeProvider>
          <AppBar title='Portal Analytics' showMenuIconButton={false}/>
        </MuiThemeProvider>
        <Form />
        <h1>{this.state.speed}</h1>
      </div>
    );
  }
}

export default App;