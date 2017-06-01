import React, {Component} from 'react'
import "./Form.css"

var countReqs = 0;
class Form extends Component {
    constructor(props) {
        super(props)
        this.state = {
            contract: '',
            description: '',
            price: '',
            reqs: []
        }
    }

    handleChange(field, event) {
        this.setState({
            ...this.state,
            [field]: event.target.value
        });
        console.log(this.state);
    }

    handleEditChange(field, event) {
        this.setState({
            ...this.state,
            [field]: event.target.value
        });
        console.log(this.state);
    }

    handleClick(event) {
        var entryArr = this.state.reqs,
        updatedReqs = this.state.reqs.concat(
        [
            {contract: this.state.contract,
            description: this.state.description,
            price: this.state.price,
            index: countReqs}
        ]);
        
        countReqs++;

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
                {!req.editing && req.contract + " "} 
                {req.editing &&  <input type="text" value={this.state.contract} onChange={(event) => this.handleChange('contract', event)} />}
                {/*These are the buttons that appear when you click submit*/}
                <button onClick = {() => {this.handleEdit(req)}}> Edit </button > 
                <button onClick = {() => {this.handleEditDone(req)}}> Done </button>
            </li>)
})

        console.log(contractList);

        return ( 
        <div>
            <label > Reminder: </label> 
            <input 
                type = 'text'
                placeholder = 'Type here...'
                value = {this.state.contract}
                onChange = {(event) => this.handleChange('contract', event)}/> 
            <br />

            {/*<label> Description: </label> 
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
            <br />*/}

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

export default Form