import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import './EventTile.css'
import TaskCreator from './TaskCreator/comp.js';
import TaskList from './TaskList/comp.js';

class EventTile extends Component {

  constructor(props){
    super(props);
    this.state = {
      tasks: [
        {name: "Time | Event"}, 
        {name: "Time | Event"},
        {name: "Time | Event"},
        ]
    }
  }

  removeTask(index){
    const tasks = this.state.tasks.slice(0);
    tasks.splice(index, 1); 
    this.setState({tasks: tasks});

  }

  createTask(e){

    //Only fire on enter
    if (e.which !== 13)
      return;

    const tasks = this.state.tasks.slice(0);
    tasks.push({name: e.target.value});
    this.setState({tasks: tasks});

  }


  handleTouchTap = (event) => {
    // This prevents ghost click.
    event.preventDefault();

    this.setState({
      open: true,
      anchorEl: event.currentTarget,
    });
  };

  handleRequestClose = () => {
    this.setState({
      open: false,
    });
  };

  render() {
    return (
      <div className='EventTile'>
        <h1>Events</h1>
        {/*<button className="editButton2">+</button>*/}
        <div>
         <TaskCreator className = "block_3" onKeyUpHandler={this.createTask.bind((this))} />
         <TaskList removeTask={(id) => this.removeTask(id)} tasks={this.state.tasks}/>
        </div>
      </div>
    )
  }
}
export default EventTile