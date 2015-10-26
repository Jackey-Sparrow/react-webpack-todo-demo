import React from 'react';
import Header from './../common/components/header';
import './content/css/dash.css';
import TodoList from './components/todo-list';
import TodoForm from './components/todo-form';
import TodoListService from './services/todo-list-service';

export default class DashComponent extends React.Component {

    render() {

        return (
            <div>
                <Header/>

                <div className='todo-container'>
                    <h2>Todo List:</h2>

                    <TodoList todoList={TodoListService.getTodoList()}/>
                    <TodoForm/>
                </div>
            </div>
        )
    }
}


