import React from 'react';
import TodoListService from './../services/todo-list-service';

export default class TodoList extends React.Component {
    //do not use getInitialState
    constructor(props) {
        super(props);
        this.todoList = new TodoListService().getTodoList()
    }

    render() {
        var todoList = this.todoList.map(function (todo) {
            return (
                <div key={todo.id}>{todo.description} {todo.date}</div>
            );
        });

        return (
            <div className='todo-lists'>{todoList}</div>
        );
    }
}