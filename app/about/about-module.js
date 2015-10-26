import React from 'react';
import AboutService from './services/about-service';
import Header from './../common/components/header';
import './content/css/about.css';

var service = new AboutService('Jackey', 26, 'male');

export default class About extends React.Component {
    render() {

        return (
            <div>
                <Header/>

                <div className='about-container'>
                    <h2>{service.getName()}</h2>
                </div>
            </div>
        );
    }
}
