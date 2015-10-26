import React from 'react';
import TodoListService from './../services/todo-list-service';
import PubSub from 'pubsub-js';

export default  React.createClass({
    getInitialState: function () {
        return {
            todoList:TodoListService.getTodoList()
        }
    },
    componentDidMount: function () {
        PubSub.subscribe('reloadTodoList', function () {
            this.setState({
                todoList:TodoListService.getTodoList()
            });
        }.bind(this));
    },
    render:function() {
        var todoList = this.state.todoList.map(function (todo) {
            return (
                <div className='todo-item' key={todo.id}>
                    <div className='todo-id todo-field'>{todo.id}</div>
                    <div className='todo-description todo-field'>{todo.description}</div>
                    <div className='todo-date todo-field'>{todo.date}</div>
                </div>
            );
        });

        return (
            <div className='todo-lists'>
                <div className='todo-item title'>
                    <div className='todo-id todo-field'>序号</div>
                    <div className='todo-description todo-field'>未做事项</div>
                    <div className='todo-date todo-field'>时间</div>
                </div>
                {todoList}
            </div>
        );
    }
});