import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {ThemeSwitch} from '../components/ThemeSwitch'
import Layout from '../components/Layout';


export default class Example extends Component {
    render() {
        return (
            <Layout>
                <ThemeSwitch/>
            </Layout>
        );
    }
}

if (document.getElementById('example')) {
    ReactDOM.render(<Example />, document.getElementById('example'));
}
