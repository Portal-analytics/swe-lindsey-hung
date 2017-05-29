import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar'
import AutoComplete from 'material-ui/AutoComplete';
import SubmitButton from './SubmitButton.js'
import inputFields from './inputField.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <MuiThemeProvider>
          <AppBar title='Portal Analytics' showMenuIconButton={false}/>
        </MuiThemeProvider>

        <form action="/">
        Contract Name: <input type="text" name="ContractName" id="contract" placeholder=""/><br/>
        Description: <input type="text" name="Desc" id="descript" placeholder=""/><br/>
        Price: <input type="text" name="Price" id="cost" placeholder=""/><br/>
        <input type="submit" value="Submit"/>
        </form>
        <MuiThemeProvider>
          <SubmitButton />
        </MuiThemeProvider>
      </div>
    );
  }
}

export default App;
