import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Layout from '../components/Layout';


export default class Example extends Component {
    render() {
        return (
            <Layout>
            </Layout>
        );
    }
}

if (document.getElementById('example')) {
    ReactDOM.render(<Example />, document.getElementById('example'));
}
