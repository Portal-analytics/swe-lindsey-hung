import React from 'react'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import './SideBar.css'

const SideBar = () => (
  <Router>
    <div>
      <ul>
        <li><Link to="/">Dashboard</Link></li>
        <li><Link to="/calendar">Calendar</Link></li>
        <li><Link to="/settings&account">Settings</Link></li>
        <li><Link to="/about&contact">About & Contact</Link></li>
      </ul>
    </div>
  </Router>
)

export default SideBar