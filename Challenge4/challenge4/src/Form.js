import React, { Component } from 'react'

class Form extends Component {
    constructor (props) {
        super(props)
        this.state = {
            contract: '',
            description: '',
            price: '',
            reqs: []
        }
    }
  
    handleChange(field, event){
        this.setState({
            ...this.state,
            [field]: event.target.value
        });
    }

    convertToList(){

    }

    handleClick(){
        var entry = "Contract:" + this.state.contract + '\n' + "Description: " + this.state.description + '\n' + "Price: " + this.state.price;
        var entryDisplay = "Contract:" + this.state.contract + '\n' + "Price: " + this.state.price;

        var requestArray = this.state.reqs;
        var requestList = this.state.reqs;

        requestArray.push({
            text: entry,
        });

        requestList.push({
            text: entryDisplay,
        });
 
        this.setState({
            ...this.state,
            reqs: requestArray,
            reqsDisplay: requestArray
        });

        console.log(this.state.reqs);
    }

  render () {
    return (
      <div>
        <label>Contract: </label>
        <input type='text' placeholder='Name the contract' value={this.state.contract} onChange={(event)=> this.handleChange('contract', event)} />
        <br />

        <label>Description: </label>
        <input type='text' placeholder='Describe contract here' value={this.state.description} onChange={(event)=> this.handleChange('description', event)} />
        <br />
        
        <label>Price: </label>
        <input type='text' placeholder='$$$' value={this.state.price} onChange={(event)=> this.handleChange('price', event)}/>
        <br />

        <input type="button" onClick={(event)=> this.handleClick()} value="Submit" />

         <ul>
          {this.state.reqs.map(function(req,key){
            return <li key={key}>{req}</li>;
          })}
        </ul>
      </div>
    )
  }
}

export default Form
