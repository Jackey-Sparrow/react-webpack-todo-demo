import React from 'react';
import TodoListService from './../services/todo-list-service';
import PubSub from 'pubsub-js';

export default React.createClass({
    onSubmit: function (e) {
        e.preventDefault();
        var description = this.refs.description.value.trim(),
            date = this.refs.todoDate.value.trim();
        //todo:validation
        var todo = {
            description: description,
            date: date
        };
        TodoListService.addTodo(todo);
        PubSub.publish('reloadTodoList');
    },

    render: function () {
        return (
            <form className='todo-form' onSubmit={this.onSubmit}>
                <input type='text' placeholder='描述' ref='description'/>
                <input type='date' ref='todoDate'/>
                <input type='submit' value='提交'/>
            </form>
        );
    }
});
