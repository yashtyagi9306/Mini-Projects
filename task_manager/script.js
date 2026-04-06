
let todos = JSON.parse(localStorage.getItem('todos')) || [];
let currentfilter = 'all';
function saveTodos (){
    localStorage.setItem("todos", JSON.stringify(todos));
}

function renderTodo (){
    const todoList = document.getElementById("todoList");
    todoList.innerHTML = "";
    const filteredTodos = todos.filter((todo)=>{
        if (currentfilter === 'completed') return todo.completed;
        if (currentfilter === 'pending') return !todo.completed;
        return true;
    });
    filteredTodos.forEach((todo, index) => {
        const li = document.createElement('li');
        if (todo.completed){
            li.classList.add('completed')
        }
        li.innerHTML = `
            <div class='todo-content'>
            <span class='todo-text'>${todo.text}</span>
            </div>

            <div class='todo-actions'>
            <button data-index = "${index}" class='action-btn complete-btn'>
                <i class='fas ${todo.completed ? "fa-rotate-left": "fa-check"}'></i>
            
            </button>

            <button data-index = "${index}" class='action-btn delete-btn'>
                <i class='fas fa-trash'></i>
            
            </button>

            
            </div>
        `;

        todoList.appendChild(li);
    });

}

function addTodo () {
    const input = document.getElementById("todoInput");
    const text = input.value.trim();
    if(text){
        todos.push({
            text : text,
            completed: false,
            
        });
    }
    input.value = "";
    saveTodos();
    renderTodo();
}
function toggleTodo(index) {
    todos[index].completed = !todos[index].completed;
    saveTodos();
    renderTodo();
}
function deleteTodo(index){
    todos.splice(index,1);
    renderTodo();
    saveTodos();
}



document.getElementById('addTodoBtn').addEventListener('click', addTodo);
document.getElementById('todoInput').addEventListener('keypress', function(el){
    console.log(el);
});

document.getElementById('todoList').addEventListener('click',function(e){
    const target = e.target.closest('button');
    if (!target) return;
    const todoIndex = parseInt(target.dataset.index);
    if (target.classList.contains('complete-btn')){
        toggleTodo(todoIndex);

    }else if (target.classList.contains('delete-btn')){
        deleteTodo(todoIndex);
    }
})

renderTodo();