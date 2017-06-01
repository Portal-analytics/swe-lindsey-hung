import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import NowTile from './NowTile.js'
import './NowTile.css'
import EventTile from './EventTile.js'
import RemindTile from './RemindTile.js'
import ToDoTile from './ToDoTile.js'
import './Dashboard.css'
import './App.css'

class Dashboard extends Component {
  render () {
    return (
      <div className='Dashboard'>
        <div className='top'>
          <NowTile />
          <EventTile />
        </div>
        <div className='bottom'>
          <RemindTile />
          <ToDoTile />
        </div>
      </div>
    )
  }
}
