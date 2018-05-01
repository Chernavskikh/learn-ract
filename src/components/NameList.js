import React, { Component } from 'react';

export default class NameList extends Component {
    constructor() {
        super();
        this.state = {
            names: [
                'Jack',
                'Lidia',
                'Max',
                'Nik',
            ],
            hideButton: 0,
        };
    }

    addItem() {
        this.state.names.push('Rick');
        this.setState({ names: this.state.names });
    }

    deleteItem(index) {
        this.state.names.splice(index, 1);
        this.setState({ names: this.state.names });
    }

    deleteLastItem() {
        this.setState({ names: this.state.names.slice(0, -1) });
    }

    render() {
        const list = this.state.names.map((item, index) => {
            return <li key={index}>{item} {index + 1}
                <button onClick={this.deleteItem.bind(this, index)}>Remove</button>
            </li>;
        });

        var buttonShow;

        if (this.state.names.length > 0) {
            buttonShow = <button onClick={this.deleteLastItem.bind(this)}>Remove Last Item</button>;
        } else {
            buttonShow = '';
        }

        return <div>
                <ul style={{textAlign: 'left'}}>
                    List:
                    {list}
                </ul>

            {buttonShow}
            </div>
    }
}
