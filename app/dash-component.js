/*globals COURSES:true */
import React from 'react';
import { Router, Route, Link, History, Lifecycle } from 'react-router';

export default class DashComponent extends React.Component {
    render() {
        return (
            <div>
                <h1>Hi, React</h1>
                <ul>
                    <li><Link to='/about' activeClassName="active">about</Link></li>
                </ul>
            </div>
        )
    }
}


