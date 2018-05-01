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
        };
    }

    render() {
        const list = this.state.names.map((item, index) => {
            return <li key={index}>{item} {index + 1}</li>;
        });
        return <ul style={{textAlign: 'left'}}>
                List:
                {list}
            </ul>;
    }
}
