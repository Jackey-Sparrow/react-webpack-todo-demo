import React from 'react';
import Header from './../common/components/header';
import './content/css/dash.css';
import TodoList from './components/todo-list';
import TodoForm from './components/todo-form';
import TodoListService from './services/todo-list-service';

var todoListService =  new TodoListService();

export default class DashComponent extends React.Component {

    render() {

        return (
            <div>
                <Header/>

                <div className='todo-container'>
                    <h2>Todo List:</h2>

                    <TodoList todoList={todoListService.getTodoList()}/>
                    <TodoForm addTodo={todoListService.addTodoList}/>
                </div>
            </div>
        )
    }
}


