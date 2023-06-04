var todoList = document.getElementById("todo-list");
var todoInput = document.getElementById("todo-input");
var addButton = document.getElementById("add-button");

addButton.addEventListener('click', ()=>{
    var newTodoText = todoInput.value;
    if(newTodoText !== ""){
        addTodoitem(newTodoText);
        todoInput.value = '';
    }
});
function addTodoitem(text){
    var liElement = document.createElement('li');
    liElement.innerText = text;

    var deleteButton = document.createElement('button');
    deleteButton.innerText = 'Delete';
    deleteButton.classList.add('delete-btn');

    deleteButton.addEventListener('click',()=>{
        liElement.remove();
    })
    todoList.appendChild(liElement);
    liElement.appendChild(deleteButton);
}
