import React, {Component} from 'react'

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

    handleClick(event) {
        var entry=[];
        entry.push(this.state.contract);
        entry.push(this.state.description);
        entry.push(this.state.price);
        let newContracts = this.state.reqs.concat([entry]);
        this.setState({
            contract:this.state.contract,
            description: this.state.description,
            price: this.state.price,
            reqs: newContracts
        })
      console.log(this.state)
      event.preventDefault();
    }

    render() {
        const contractList = this.state.reqs.map(
            (c) => {
                return(
                    <li> {"Contract: " + c[0] + " Description: " + c[1] + " Price: " + c[2]} </li> 
                );
            }
        );

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

export default Form