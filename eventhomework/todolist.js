const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');
const filterOpition = document.querySelector('.filter-todo');

todoButton.addEventListener('click', function(e) {
    e.preventDefault();

    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');

    const newTodo = document.createElement('li');
    newTodo.innerText = todoInput.value;
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);

    const completedButton = document.createElement('button');
    completedButton.innerText= 'Completed';
    completedButton.classList.add('complete-btn');
    todoDiv.appendChild(completedButton);

    const deleteButton = document.createElement('button');
    deleteButton.innerText= 'Delete';
    deleteButton.classList.add('delete-btn');
    todoDiv.appendChild(deleteButton);

    todoList.appendChild(todoDiv);

    todoInput.value = "";
});

todoList.addEventListener('click', function(e) {
    if(e.target.classList[0] === 'delete-btn') {
        e.target.parentElement.remove();
    };
    if(e.target.classList[0] === 'complete-btn') {
        e.target.parentElement.classList.toggle('completed');
    };
})

filterOpition.addEventListener('click', function (e) {
    const todos = todoList.childNodes;
    todos.forEach(function(todo){
        switch(e.target.value){
            case "all":
                todo.style.display = "flex";
            break;
            case "completed":
                if (todo.classList.contains('completed')) {
                    todo.style.display = "flex";
                } else {
                    todo.style.display = "none";
                }
            break;
            case "uncompleted":
                if (!todo.classList.contains('completed')) {
                    todo.style.display = "flex";
                } else {
                    todo.style.display = "none";
                }
            break;
        };
    });
})