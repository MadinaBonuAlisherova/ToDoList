//some selectors goes here
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');
const filterOpt = document.querySelector('.filter-todo');
//mouseover action UPPERCASE
todoList.addEventListener('mouseover', (event) => {
    if(event.target.tagName == 'LI'){
        event.target.textContent = event.target.textContent.toUpperCase();
    }
});
//mouseout action to lowercase
todoList.addEventListener('mouseout', (event) => {
    if(event.target.tagName == 'LI'){
        event.target.textContent = event.target.textContent.toLowerCase();
    }
});
//isEmpty function in the input field
// todoInput.forEach(input =>{
//     input.addEventListener('blur', (et) => {
//         if (et.target.value === ""){
//             et.target.setAttribute('placeholder', "This field is required")
//         }
//         else con
//     })
// })

// //EVent Listeners----------
// document.addEventListener("DOMContentLoaded", gettoDos);


//Add todo list function
todoButton.addEventListener('click', (event) => {
     event.preventDefault();
    //div creating
     const todoDiv = document.createElement('div');
     todoDiv.classList.add('todo');
     //li creating
     const newTodo = document.createElement('li');
     newTodo.innerText = todoInput.value;
     newTodo.classList.add('todo-item');
     todoDiv.appendChild(newTodo);
     //Add todos into my local Storage
     saveAlreadyTodos(todoInput.value);
     //1st button
     const completedButton = document.createElement('button');
     completedButton.innerHTML = '<i class="fas fa-check-square"></i>';
     completedButton.classList.add('complete-btn');
     todoDiv.appendChild(completedButton);
      //2nd button
      const trashButton = document.createElement('button');
      trashButton.innerHTML = '<i class="fas fa-trash"></i>';
      trashButton.classList.add('trash-btn');
      todoDiv.appendChild(trashButton);
      // append to List

      todoList.appendChild(todoDiv);
      //input values
      todoInput.value ="";
});

//Delete function of button from todo list
 todoList.addEventListener('click', (e) =>{
     e.preventDefault();

     item = e.target;
    //Delete from list
    if(item.classList[0] === 'trash-btn'){
     const todo = item.parentElement;
     //Animating the process
     todo.classList.add('drop');
     todo.addEventListener('transitioned', function(){
      todo.remove();
     });
    
    }
      //Checked elemetns function in the list

      if(item.classList[0] === 'complete-btn') {
        const todo = item.parentElement;
        console.log("working");
        todo.classList.toggle('completed');
    }
 });

 //Filter option to check if the todo is "completed" or "uncompleted"
filterOpt.addEventListener('click', function (e) {
     const todos = todoList.childNodes;
     todos.forEach(function (todo){
        switch(e.target.value){
            case "all":
                todo.style.display = "flex";
                break;
            case "completed":
                if(todo.classList.contains('completed')) {
                    todo.style.display = "flex";
                }   else {
                    todo.style.display = "none";
                }
                break;
            case "uncompleted":
                if(!todo.classList.contains("completed")){
                    todo.style.display ="flex";
                } else {
                    todo.style.display = "none";
                }
                break;
        }
     });
});
// filterOpt.addEventListener('click', filterOptions);

// function filterOptions(et) {
//     const todos = todoList.childNodes;
//     todos.forEach(function(todo){
//         switch(et.target.value){
//             case "all":
//                 todo.style.display = "flex";
//                 break;
//             case "completed":
//                 if(todo.classList.contains("completed")) {
//                         todo.style.display = "flex";
//                     }   else {
//                         todo.style.display = "none";
//                     }
//             }
//          });
// }

// Todos in my list 

function saveAlreadyTodos(todo){
    //Check if i have already in my list

    let todos;
    if(localStorage.getItem("todos") === null){
        todos = [];
    } else {
        todos =JSON.parse(localStorage.getItem("todos"));
    }

    todos.push(todo);
    localStorage.setItem("todos", JSON.stringify(todos));
}

// //DOMCOntent is Loaded using this funtion
// function gettoDos(){
//     console.log("hello");
//     let todos;
//     if(localStorage.getItem("todos") === null){
//         todos = [];
//     } else {
//         todos =JSON.parse(localStorage.getItem("todos"));
//     }

//     todos.forEach(function(todo){
    
//         //Div todo 
//         const todoDiv =document.createElement("div");
//         todoDiv.classList.add("todo");
//         //creating list items
//         const newTodo = document.createElement("li");
//         newTodo.classList.add("todo-item");
//         todoDiv.appendChild(newTodo);

// //1st button
// const completedButton = document.createElement('button');
// completedButton.innerHTML = '<i class="fas fa-check-square"></i>';
// completedButton.classList.add('complete-btn');
// todoDiv.appendChild(completedButton);
//  //2nd button
//  const trashButton = document.createElement('button');
//  trashButton.innerHTML = '<i class="fas fa-trash"></i>';
//  trashButton.classList.add('trash-btn');
//  todoDiv.appendChild(trashButton);
//  // append to List

//  todoList.appendChild(todoDiv);
//  //input values
//  todoInput.value ="";


//     });
// }









