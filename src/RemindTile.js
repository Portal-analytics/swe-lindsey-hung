import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import './RemindTile.css'
import Form from './Form.js'
import PropTypes from 'prop-types';
import RaisedButton from 'material-ui/RaisedButton';

class RemindTile extends Component {

  constructor(props) {
    super(props);

    this.state = {
      contractList: [],
      editIndex: -1,
      editContract: {title: "", description: "", price: ""}
    };

    this.createContract = this.createContract.bind(this);
    this.uploadContract = this.uploadContract.bind(this);
    this.editContract = this.editContract.bind(this);
  }


  uploadContract (editIndex) {
    this.setState({
      ...this.state,
      editIndex: editIndex,
      editContract: this.state.contractList[editIndex]
    });
  }

  editContract (title, description, price, index) {
    let newContract = {
      title: title,
      description: description, 
      price: price
    };

    console.log(newContract);
    console.log(index);

    let newContractList = this.state.contractList;
    newContractList[index] = newContract;  //error

    console.log(newContractList);

    this.setState ({ //if you don't define things, you'll lose it
      ...this.state, // defines everything in the original state
      contractList: newContractList, //make these changes to it 
      editIndex: -1, //reseting index to -1
      editContract: {title: "", description: "", price: ""} //resetting titles to nothing
    });
  }

  createContract (title, description, price, index) {
    let newContract = [{
      title: title,
      description: description, 
      price: price
    }];

    let newContractList = this.state.contractList.concat(newContract);

    this.setState ({
      ...this.state, 
      contractList: newContractList 
    });
  }

  render() {
    return (
      <div className='RemindTile'>
        <h1>Reminders</h1>
        {/*<button className="editButton3">+</button>*/}
        <div className="App">

        {this.state.editIndex < 0 && 
        <Form id="input" 
          onSubmit={this.createContract}
          editIndex={this.state.editIndex}
          uploadedContract={this.state.editContract}
          />}

        <ul className="contractList">
          {this.state.contractList.map((contract, index) =>
            <li key={index} className="contract" >
              <h1 className="title">
                {contract.title}
              </h1>
              <RaisedButton label = "Edit"
									onClick={(e) => this.uploadContract(index)}>
              </RaisedButton>
            </li>
          )}
        </ul>
      </div>
      </div>
    )
  }
}
export default RemindTile