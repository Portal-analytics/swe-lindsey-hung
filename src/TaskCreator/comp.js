import React, { Component } from 'react';
import './comp.style.scss';

class TaskCreator extends Component {
    render(){
        return (
            <div className="task--creator">
                {/*<label>New Task</label>*/}
                
                <input type = "text" onKeyUp={this.props.onKeyUpHandler} placeholder="Type here..." />
                
                </div>
        );
    }
}

export default TaskCreator;
