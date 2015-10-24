import React from 'react';
import { Router, Route, Link, History, Lifecycle } from 'react-router';

class Header extends React.Component {
    render() {
        return (
            <div>
                <h1 id='header'>Hi, React</h1>
                <ul className='dddd'>
                    <li><Link to='/' activeClassName="active">home</Link></li>
                    <li><Link to='/about' activeClassName="active">about</Link></li>
                </ul>
            </div>
        )
    }
}

export default Header