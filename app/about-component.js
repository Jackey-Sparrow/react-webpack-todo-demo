import React from 'react';
import AboutService from './services/about-service';

var service = new AboutService('Jackey', 26, 'male');

export default class About extends React.Component {
    render() {
        return <h2>{service.getName()}</h2>;
    }
}
