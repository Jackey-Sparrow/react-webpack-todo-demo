import React from 'react';

export default React.createClass({
    onSubmit: function (e) {
        e.preventDefault();
        var description = this.refs.description.value.trim();
        var date = this.refs.todoDate.value.trim();
        console.log(date);
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
