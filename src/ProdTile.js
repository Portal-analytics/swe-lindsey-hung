import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

class RemindTile extends Component {
  constructor() {
    super()
    this.state = {
      name: null,
      time: null,
      loc: null
    }
  }

  render() {
    return (
      <div className='RemindTile'>
        <h1>Reminders</h1>
      </div>
    )
  }
}
export default RemindTile