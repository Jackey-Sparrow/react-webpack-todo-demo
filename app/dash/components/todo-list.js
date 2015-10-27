import React from 'react';
import TodoListService from './../services/todo-list-service';
import PubSub from 'pubsub-js';
import Todo from './todo';

export default  React.createClass({
    getInitialState: function () {
        return {
            todoList: TodoListService.getTodoList()
        }
    },
    componentDidMount: function () {
        this.pubsub = PubSub.subscribe('reloadTodoList', function (name, data) {
            debugger;

            this.setState({
                todoList: data
            });
        }.bind(this));
    },
    componentWillUnmount: function () {
        PubSub.unsubscribe(this.pubsub);
    },
    render: function () {
        var todoList = this.state.todoList.map(function (todo) {
            return (
                <Todo todo={todo} key={todo.id}/>
            );
        }.bind(this));

        return (
            <div className='todo-lists'>
                <div className='todo-item title'>
                    <div className='todo-id todo-field'>序号</div>
                    <div className='todo-description todo-field'>未做事项</div>
                    <div className='todo-date todo-field'>时间</div>
                    <div className='todo-action todo-field'>操作</div>
                </div>
                {todoList}
            </div>
        );
    }
});