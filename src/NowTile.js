import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import NowPage from './NowPage.js'
import './NowTile.css'
import ReactCountdownClock from 'react-countdown-clock'
import myCallback from 'react-countdown-clock'

class NowTile extends Component {

  render() {
    return (
      <div className='NowTile'>
        <h1>Now</h1>
        {/*<button className="editButton">+</button>*/}
        <div>
          <ReactCountdownClock className="clock" seconds={1500}
                     color="#F00"
                     alpha={0.9}
                     size={100}
                     onComplete={myCallback}
                      />
                      
          </div>
      </div>
    )
  }
}
export default NowTile