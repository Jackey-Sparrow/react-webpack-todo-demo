import React from 'react';
import PubSub from 'pubsub-js';
import TodoListService from './../services/todo-list-service';

export default React.createClass({
    getInitialState: function () {
        return {
            todo: this.props.todo
        };
    },
    onRemoveTodo: function (e) {
        e.preventDefault();
        TodoListService.removeTodoById(this.state.todo.id);
        PubSub.publish('reloadTodoList', TodoListService.getTodoList());
    },
    render: function () {
        var deleteClassName = 'delete' + this.state.todo.id;
        return (
            <div className='todo-item'>
                <div className='todo-id todo-field'>{this.state.todo.id}</div>
                <div className='todo-description todo-field'>{this.state.todo.description}</div>
                <div className='todo-date todo-field'>{this.state.todo.date}</div>
                <div className='todo-action todo-field'>
                    <button id={deleteClassName} onClick={this.onRemoveTodo}>删除</button>
                </div>
            </div>
        );
    }
});