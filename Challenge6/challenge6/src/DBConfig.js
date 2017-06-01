import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';

import injectTapEventPlugin from 'react-tap-event-plugin';
import * as firebase from "firebase";

var config = {
    apiKey: "AIzaSyCTwvxGx0IDs57254EEei_lml7-gOregwA",
    authDomain: "contractdb-e937e.firebaseapp.com",
    databaseURL: "https://contractdb-e937e.firebaseio.com",
    projectId: "contractdb-e937e",
    storageBucket: "contractdb-e937e.appspot.com",
    messagingSenderId: "298194083977"
};

firebase.initializeApp(config);
injectTapEventPlugin();
var database = firebase.database();

var countReqs = 0;
export default class contractDB extends Component {
    constructor(props) {
        super(props)
        this.state = {
            contract: '',
            description: '',
            price: '',
            reqs: []
        };
    }

    handleChange(field, event) {
        this.setState({
            ...this.state,
            [field]: event.target.value
        });
        console.log(this.state);
    }

    writeToDB = (contract, description, price) => {
      firebase.database().ref('/contracts ' + contract).set({
        contract: contract,
        description: description,
        price: price,
      });
    }
    
    reWriteToDB = (contract, description, price) => {
        firebase.database().ref('/contracts ' + contract).set({
        contract: contract,
        description: description,
        price: price,
      });
    }

    handleClick(event) {
        var entryArr = this.state.reqs,
        updatedReqs = this.state.reqs.concat(
        [{contract: this.state.contract,
            description: this.state.description,
            price: this.state.price,
            index: countReqs}
        ]);
        
        countReqs++;

        this.writeToDB(this.state.contract, this.state.description, this.state.price);

        this.setState({
            ...this.state,
            reqs: updatedReqs
        })

      console.log(this.state)
      event.preventDefault();
    }

    handleEdit(req) {
        const updatedReqs = this.state.reqs.slice(0);
        updatedReqs[req.index].editing = true;

        this.reWriteToDB(this.state.contract, this.state.description, this.state.price);
        this.setState({
            ...this.state,
            reqs: updatedReqs
        });
        
        console.log(this.state);
    }

    handleEditDone(req) {
        const updatedReqs = this.state.reqs.slice(0);

        updatedReqs[req.index].editing = false;
        updatedReqs[req.index].contract = this.state.contract;
        updatedReqs[req.index].description = this.state.description;
        updatedReqs[req.index].price = this.state.price;

        this.reWriteContract(this.state.contract, this.state.description, this.state.price);
        this.setState({
            ...this.state,
            reqs: updatedReqs
        });
        console.log(this.state);
    }

    render() {
        const contractList = this.state.reqs.map(req => {
        return (
            <li> 
                Name: {!req.editing && req.contract + " "} 
                {req.editing &&  <input type="text" value={this.state.contract} onChange={(event) => this.handleChange('contract', event)} />}
     
                Description: {!req.editing && req.description + " "} 
                {req.editing &&  <input type="text" value={this.state.description} onChange={(event) => this.handleChange('description', event)} />}
      
                Price: {!req.editing && req.price + " "}
                {req.editing &&  <input type="text" value={this.state.price} onChange={(event) => this.handleChange('price', event)} />}

                <button onClick = {() => {this.handleEdit(req)}}> Edit </button > 
                <button onClick = {() => {this.handleEditDone(req)}}> Done </button>
            </li>)
        })

        console.log(contractList);

        return ( 
        <div>
            <label > Contract: </label> 
            <input 
                type = 'text'
                placeholder = 'Name the contract'
                value = {this.state.contract}
                onChange = {(event) => this.handleChange('contract', event)}/> 
            <br />

            <label> Description: </label> 
            <input 
                type = 'text'
                placeholder = 'Describe contract here'
                value = {this.state.description}
                onChange = {(event) => this.handleChange('description', event)}/>
            <br />

            <label> Price: </label> 
            <input 
                type = 'text'
                placeholder = '$$$'
                value = {this.state.price}
                onChange = {(event) => this.handleChange('price', event)}/> 
            <br />

            <input 
                type = "button"
                onClick = {(event) => this.handleClick(event)}
                value = "Submit" />
            <ul type="none">
                {contractList}
            </ul>
            </div>
        )
    }
}

 ReactDOM.render(<contractDB />, document.getElementById('root'));