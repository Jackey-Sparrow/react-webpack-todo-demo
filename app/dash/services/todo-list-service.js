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
        var result = 0, i = 0;
        for (; i < this.todoList.length; i++) {
            var id = this.todoList[i].id;
            if (id > result) {
                result = id;
            }
        }
        return ++result;
    }

    addTodo(todo:Object) {
        todo.id = this.getNextId();
        this.todoList.push(todo);
    }

    removeTodoById(id) {
        if (!id) {
            return;
        }
        for (var i = 0; i < this.todoList.length; i++) {
            if (this.todoList[i].id === id) {
                console.log(id);
                debugger;
                this.todoList.splice(i, 1);
                break;
            }
        }
    }

}

var TodoListServie = new TodoList();

export default TodoListServie;