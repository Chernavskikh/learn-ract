import React, { Component } from 'react';

export default class Hrefs extends Component {
    constructor() {
        super();
        this.state = {
            hrefs: [
                { href: '1.html', text: 'link1' },
                { href: '2.html', text: 'link2' },
                { href: '3.html', text: 'link3' },
            ],
        };
    }

    render() {
        const list = this.state.hrefs.map((item, index) => {
            return <a style={{display: 'block', paddingLeft: '20px'}} key={index} href={item.href}>{item.text}</a>;
        });
        return <div style={{textAlign: 'left'}}>
                Links:
                {list}
            </div>;
    }
}
