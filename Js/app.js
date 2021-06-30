//Selectors
const todoInput = document.querySelector('.todo-input');
const todoBtn = document.querySelector('.todo-btn');
const todoList = document.querySelector('.todo-list');

//EvenyListners 

todoBtn.addEventListener('click' , addTodo);
todoList.addEventListener('click' , deletecheck);


//Functions

function addTodo ( event){
    //Prrvent form from  submiting
      event.preventDefault();
    //Adding Todo Div
        const todoDiv = document.createElement('div');
        todoDiv.classList.add('todo');
    //Create Li 
        const newTodo = document.createElement('li');
        newTodo.classList.add('todo-item');
        newTodo.innerText = todoInput.value;   
        todoDiv.appendChild(newTodo);
    //Check Button
        const completeBtn = document.createElement('button');
        completeBtn.innerHTML = '<i class="fas fa-check"></i>';
        completeBtn.classList.add('complete-btn');
        todoDiv.appendChild(completeBtn);
    //Delete Button
        const deleteBtn =document.createElement('button');
        deleteBtn.innerHTML = '<i class="fas fa-trash"></i>';
        deleteBtn.classList.add('delete-btn');
        todoDiv.appendChild(deleteBtn);
    //Append to toDo-List
        todoList.appendChild(todoDiv);
    //Clear Todo input value
        todoInput.value = "";
}

function deletecheck (e){
       const item = e.target;

       //delete to do 
       if(item.classList[0] === "delete-btn"){
       const todo = item.parentElement;
       todo.classList.add("fall");
       todo.addEventListener("transitionend" , function(){
         todo.remove();
       });
       }
       
       //Complete element
       if( item.classList[0] === "complete-btn"){
        const todo = item.parentElement;
        todo.classList.toggle("Completed");
       }
} 