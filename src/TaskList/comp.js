import React, { Component } from 'react';
import './comp.style.scss';
import Task from '../Task/comp.js';

class TaskList extends Component {
    render(){
        const tasks = this.props.tasks;
        const removeTask = this.props.removeTask;
        return (
            <div className = "task--list">
              {tasks.map((task,id) => {
                  task.id = id;
                  return ( 
                    <Task onClickHandler={(id) => removeTask(id)} task={task} />
                  ); 
              })}
            </div>
        )    
    }
}


export default TaskList;
