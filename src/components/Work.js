import React, { Component } from 'react';

export default class Input extends Component {
    constructor() {
        super();
        this.state = {
            texts: [],
        };
    }

    handleChange(event) {
        this.setState({ value: event.target.value })
    }

    onSubmit() {
        this.state.texts.push(this.state.value)
        this.setState({ texts: this.state.texts, value: '' })
    }

    render() {
        const paragraphs = this.state.texts.map((item, index) => {
            return <p key={index}>{item}</p>
        });

        return <div>
            <textarea value={this.state.value} onChange={this.handleChange.bind(this)}></textarea>
            <button type="button" onClick={this.onSubmit.bind(this)}>Add text</button>

            <div>
                {paragraphs}
            </div>
        </div>
    }
}
