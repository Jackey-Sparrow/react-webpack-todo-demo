import React from 'react';
import Header from './../common/components/header';
import './content/css/dash.css';
import TodoList from './services/todo-list-service';

export default class DashComponent extends React.Component {
    //do not use getInitialState
    constructor(props) {
        super(props);
        this.todoList = new TodoList().getTodoList()
    }

    render() {
        var todoList = this.todoList.map(function (todo) {
            return (
                <div>{todo.description}</div>
            );
        });
        return (
            <div>
                <Header/>

                <div className='todo-container'>
                    <h2>Todo List:</h2>

                    <div>{todoList}</div>
                </div>
            </div>
        )
    }
}


