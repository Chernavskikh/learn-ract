import React, { Component } from 'react';

export default class Input extends Component {
    constructor() {
        super();
        this.state = {
            value: 'hello',
        };
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    render() {
        return <div>
            {this.state.value.toUpperCase()} 
                <input value={this.state.value} onChange={this.handleChange.bind(this)} />
            </div>
    }
}
