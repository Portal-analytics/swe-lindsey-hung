
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './Form.js'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar'

class App extends Component {
  render() {
    return (
      <div className="App">
        <MuiThemeProvider>
          <AppBar title='Portal Analytics' showMenuIconButton={false}/>
        </MuiThemeProvider>

        <Form />
      </div>
    );
  }
}

export default App;