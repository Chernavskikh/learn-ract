import React, { Component } from 'react';
import NameList from '../components/NameList';
import Hrefs from '../components/Hrefs';
import Input from '../components/Input';
import Form from '../components/Form';
import Work from '../components/Work';

class Main extends Component {
    render() {
        return (
            <div>
                Just some components with simple functionality...
                <NameList></NameList>
                <hr />
                <Hrefs></Hrefs>
                <hr />
                <Input></Input>
                <hr />
                <Form></Form>
                <hr />
                <Work></Work>
            </div>
        );
    }
}

export default Main;
