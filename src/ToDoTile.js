import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import './ToDoTile.css'
import TaskCreator from './TaskCreator/comp.js';
import TaskList from './TaskList/comp.js';
import fire from './fire.js';


class ToDoTile extends Component {

  constructor(props){
    super(props);
    this.state = {
      tasks: [
        {name: "Task 1"}, 
        {name: "Task 2"},
        {name: "Task 3"},
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

  //firebase stuff
  
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

  render() {
    return (
      <div className='ToDoTile'>
        <h1>To-Do</h1>
        {/*<button className="editButton1">+</button>*/}
        <div>
    
         <TaskCreator className = "block_3" onKeyUpHandler={this.createTask.bind((this))} onSubmit = {this.addMessage.bind(this.state.tasks)} />
         <TaskList removeTask={(id) => this.removeTask(id)} tasks={this.state.tasks}/>
        
        </div>
      </div>
    )
  }
}
export default ToDoTile