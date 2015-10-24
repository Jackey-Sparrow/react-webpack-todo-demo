import React from 'react';
import { Router, Route, Link, History, Lifecycle } from 'react-router';
import './../content/css/header.css';

class Header extends React.Component {
    render() {
        return (
            <div className='header-container'>
                <ul>
                    <li><Link to='/' activeClassName="active" className="logo"></Link></li>
                    <li><Link to='/about' activeClassName="active">关于</Link></li>
                </ul>
            </div>
        )
    }
}

export default Header