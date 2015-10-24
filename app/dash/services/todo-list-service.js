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

    addTodoList(todo){
        this.todoList.push(todo);
    }

    getNextId(){

    }
}

export default TodoList;