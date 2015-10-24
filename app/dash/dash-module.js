import React from 'react';
import Header from './../common/components/header';
import './content/css/dash.css';
import TodoList from './components/todo-list';
import TodoForm from './components/todo-form';

export default class DashComponent extends React.Component {

    render() {

        return (
            <div>
                <Header/>

                <div className='todo-container'>
                    <h2>Todo List:</h2>

                    <TodoList/>
                    <TodoForm/>
                </div>
            </div>
        )
    }
}


