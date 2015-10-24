import React from 'react';
import { Router, Route, Link, History, Lifecycle } from 'react-router';
import './../content/css/header.css';

class Header extends React.Component {
    render() {
        return (
            <div className='header-container'>
                <ul>
                    <li><Link to='/' className="logo"></Link></li>
                    <li className="nav-tab"><Link to='/' activeClassName="active">首页</Link></li>
                    <li className="nav-tab"><Link to='/about' activeClassName="active">关于</Link></li>
                </ul>
            </div>
        )
    }
}

export default Header