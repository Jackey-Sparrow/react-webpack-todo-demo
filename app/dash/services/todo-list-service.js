class TodoList {
    constructor() {
        this.todoList = [
            {
                id: 1,
                description: 'buy some sugar',
                date: '2015-10-24'
            },
            {
                id: 2,
                description: 'practise es6 more',
                date: '2015-10-24'
            }
        ];
    }

    getTodoList() {
        return this.todoList;
    }

    getNextId() {
        var result = 1, i = 0;
        for (; i < this.todoList.length; i++) {
            var id = this.todoList[i].id;
            if (id > result) {
                result = id;
            }
        }
        return ++result;
    }

    addTodoList(todo:Object) {
        //todo.id = this.getNextId();
        console.log(this);
        this.todoList.push(todo);
    }


}

export default TodoList;