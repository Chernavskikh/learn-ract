import React, { Component } from 'react';

export default class Form extends Component {
    constructor() {
        super()
        this.state = {
            value: '',
            optValue: 0,
            items: ['a', 'b', 'c'],
            langs: ['en', 'uk', 'ch'],
        }
    }

    inputOnchange(event) {
        this.setState({value: event.target.value})
    }

    addItem(event) {
        this.state.items.push(this.state.value);
        this.setState({ items: this.state.items, value: '' });
        event.preventDefault();
    }

    handleSelectChange(event) {
        this.setState({ optValue: event.target.value });
    }

    render() {
        const list = this.state.items.map((item, index) => {
            return <li key={index}>{item}</li>;
        });

        const options = this.state.langs.map((lang, index) => {
            return <option key={index} value={index}>{lang}</option>;
        });

        return <form onSubmit={this.addItem.bind(this)}>
            <input value={this.state.value} onChange={this.inputOnchange.bind(this)} type="text"/>
            <input type="submit"/>
            <ul style={{ textAlign: 'left' }}>{list}</ul>

            <select
                onChange={this.handleSelectChange.bind(this)}
                value={this.state.optValue}>
                {options}
            </select>
            <p>{this.state.langs[this.state.optValue]}</p>
        </form>;
    }
}
