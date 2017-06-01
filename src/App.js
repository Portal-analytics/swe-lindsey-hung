import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import logo from './logo.svg'
import './App.css'
import NowTile from './NowTile.js'
import EventTile from './EventTile.js'
import RemindTile from './RemindTile.js'
import ToDoTile from './ToDoTile.js'
import SideBar from './SideBar.js'
import NowPage from './NowPage.js'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar'
import UserInput from './EventTile.js'
import fire from './fire.js'

class App extends Component {

  constructor(props) {
    super(props);
    this.state = { messages: [] }; // <- set up react state
  }

  componentWillMount(){
    /* Create reference to messages in Firebase Database */
    let messagesRef = fire.database().ref('messages').orderByKey().limitToLast(100);
    messagesRef.on('child_added', snapshot => {
      /* Update React state when message is added at Firebase Database */
      let message = { text: snapshot.val(), id: snapshot.key };
      this.setState({ messages: [message].concat(this.state.messages) });
    })
  }

  addMessage(e){
    e.preventDefault(); // <- prevent form submit from reloading the page
    /* Send the message to Firebase */
    fire.database().ref('messages').push( this.inputEl.value );
    this.inputEl.value = ''; // <- clear the input
  }

  render () {
    return (
      <div className='App'>
        <MuiThemeProvider>
          <AppBar title='OnTime' showMenuIconButton={false} />
        </MuiThemeProvider>

        <div className="SideBar">
          <SideBar />
          {/*<Route path="/now" component={NowPage}/>*/}
      {/*<Route path="/events" component={EventPage}/>*/}
          <div className="Productivity">
            <h3>Productivity</h3>
            <img src="https://www.internetmarketingninjas.com/blog/wp-content/uploads/2012/07/6-cool-productivity-charts-03-1.png" />
            <p>This will be the space for the productivity data (score/chart).  Image above is the current placeholder</p>
          </div>
        </div>
        <div className="Dashboard">
          <div className='top'>
            <NowTile />
            <EventTile />
          </div>
          <div className='bottom'>
            <RemindTile />
            <ToDoTile />
                        <form onSubmit={this.addMessage.bind(this)}>
                    <input type="text" ref={ el => this.inputEl = el }/>
                    <input type="submit"/>
                    <ul>
                      { /* Render the list of messages */
                        this.state.messages.map( message => <li key={message.id}>{message.text}</li> )
                      }
                    </ul>
                  </form>
          </div>
        </div>
      </div>
    )
  }
}

export default App
