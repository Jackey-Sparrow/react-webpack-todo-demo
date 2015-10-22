import React from 'react';
import HelloWorldService from './services/hello-world-service';

var service = new HelloWorldService('Jackey', 26, 'male');

export default class HelloWorld extends React.Component {
    render() {
        return <h2>{service.getName()}</h2>;
    }
}
