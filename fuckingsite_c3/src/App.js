import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import AppBar from 'material-ui/AppBar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import FlatButton from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import Popover, {PopoverAnimationVertical} from 'material-ui/Popover';
import FontIcon from 'material-ui/FontIcon';
import style from 'material-ui/Popover';
import TaskCreator from './TaskCreator/comp.js';
import TaskList from './TaskList/comp.js';
import Task from './Task/comp.js';

var quotes = ["1", "2", "3", "4", "5" ];
var sayings = ["super","sick","amazing"] 
var _this;


class App extends Component {
  
 /* constructor(){
    super();
    _this = this;
    this.state = {
      index: 0
    }
  }
  */

  constructor(props){
    super(props);
    this.state = {
      tasks: [
        {taskName: "Task 1"}, 
        {taskName: "Task 2"},
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
    tasks.push({taskName: e.target.value});
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

  changeValue(){
  var currentI = this.state.index;   //new variable, current state
  currentI = (currentI+1) % quotes.length;  //variable set to remainder which is the next number
  this.setState({     //variable set to remainder which is the next iteration
    index: currentI   //setting the new state by changing the index to the new variable
  })
}

  changevalue_random(){
    var rando = Math.round(Math.random()*10);
    rando = rando % quotes.length;
    var currentI = this.state.index;
    currentI = rando
    this.setState({
      index: currentI
    })    
  }
  
  render() {
    return (
      <div className="App">
  <MuiThemeProvider>
          <AppBar
    title="OnTime"
    iconClassNameRight="muidocs-icon-navigation-expand-more"
    onLeftIconButtonTouchTap 
          />
  </MuiThemeProvider>
       <MuiThemeProvider>  
             <RaisedButton
          onTouchTap={this.handleTouchTap}
          label="Settings" secondary={true} style={style}
          icon={<logo />}
              />      
       </MuiThemeProvider>
        <div className="App-header">
          <box_1 className="button">{quotes[this.state.index]}</box_1>
        </div>   
          <div>
         <button className="hello"onClick={() => this.changeValue()}> Order </button>
         <button onClick={() => this.changevalue_random()}> Random </button>
        </div>
        <div>
        <h1> My todo-list </h1>
        <div className ="block_3">
          <TaskCreator onKeyUpHandler={this.createTask.bind((this))} />
            {this.state.tasks.length}
          
            <ul className = "task--list">
              {this.state.tasks.map((task,i) => {
                  return <Task onClickHandler={this.removeTask.bind(this, i)} taskName={task.taskName} key = {"i"} />
                  })
              }
            </ul>
        </div>
        </div>
        </div>
      
    );
  }
}

export default App;
