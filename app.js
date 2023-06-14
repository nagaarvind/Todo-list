//Select DOM
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");
const filterOption = document.querySelector(".filter-todo");

//Event Listeners
//document.addEventListener("DOMContentLoaded", getTodos);
todoButton.addEventListener("click", addTodo); //(function 1)
todoList.addEventListener("click", deleteCheck);
filterOption.addEventListener("click", filterTodo);

//FUNCTION
function addTodo(event) {
  event.preventDefault();
  //create todoDiv
  const todoDiv = document.createElement("Div");
  todoDiv.classList.add("todo");
  //create li
  const newTodo = document.createElement("li");
  newTodo.innerText = todoInput.value;
  newTodo.classList.add("todo-item");
  todoDiv.appendChild(newTodo);
  //CHECK MARK BUTTON
  const completedButton = document.createElement("button");
  completedButton.innerHTML = '<i class="fas fa-check"></i>';
  completedButton.classList.add("complete-btn");
  todoDiv.appendChild(completedButton);
  //CHECK TRASH BUTTON
  const trashButton = document.createElement("button");
  trashButton.innerHTML = '<i class="fas fa-trash"></i>';
  trashButton.classList.add("trash-btn");
  todoDiv.appendChild(trashButton);
  //APPEND TO LIST
  todoList.appendChild(todoDiv);
  //clear todo input value after giving input
  todoInput.value = "";
}
function deleteCheck(e) {
  const item = e.target;
  //Delete todo
  if (item.classList[0] === "trash-btn") {
    const todo = item.parentElement;
    //ANIMATION
    todo.classList.add("fall");
    todo.addEventListener("transitionend", function () {
      todo.remove();
    });
  }

  //CHECKMARK
  if (item.classList[0] === "complete-btn") {
    const todo = item.parentElement;
    todo.classList.toggle("completed");
  }
}

function filterTodo(e) {
  const todos = todoList.childNodes;
  todos.forEach(function (todo) {
    switch (e.target.value) {
      case "all":
        todo.style.display = "flex";
        break;
      case "completed":
        if (todo.classList.contains("completed")) {
          todo.style.display = "flex";
        } else {
          todo.style.display = "none";
        }
        break;
      case "uncompleted":
        if (!todo.classList.contains("completed")) {
          todo.style.display = "flex";
        } else {
          todo.style.display = "none";
        }
        break;
    }
  });
}
//----------------------------------------------------------------------------------------------
// //Select DOM
// const todoInput = document.querySelector(".todo-input");
// const todoButton = document.querySelector(".todo-button");
// const todoList = document.querySelector(".todo-list");
// const filterOption = document.querySelector(".filter-todo");

// //Event Listeners
// document.addEventListener("DOMContentLoaded", getTodos);
// todoButton.addEventListener("click", addTodo); //(function 1)
// todoList.addEventListener("click", deleteTodo);
// filterOption.addEventListener("click", filterTodo);

// //Functions

// function addTodo(e) {
//   //Prevent natural behaviour//1----------
//   e.preventDefault();
//   //Create todo div//2--------
//   const todoDiv = document.createElement("div");
//   todoDiv.classList.add("todo");
//   //Create list//3------------------
//   const newTodo = document.createElement("li");
//   newTodo.innerText = todoInput.value;
//   //Save to local - do this last
//   //Save to local
//   saveLocalTodos(todoInput.value);
//   //
//   newTodo.classList.add("todo-item");
//   todoDiv.appendChild(newTodo);
//   todoInput.value = "";
//   //Create Completed Button
//   const completedButton = document.createElement("button");
//   completedButton.innerHTML = `<i class="fas fa-check"></i>`;
//   completedButton.classList.add("complete-btn");
//   todoDiv.appendChild(completedButton);
//   //Create trash button
//   const trashButton = document.createElement("button");
//   trashButton.innerHTML = `<i class="fas fa-trash"></i>`;
//   trashButton.classList.add("trash-btn");
//   todoDiv.appendChild(trashButton);
//   //attach final Todo
//   todoList.appendChild(todoDiv);
// }

//learning---------------------------------------------------------------------
// function addtodo(e) {
//   e.preventDefault();
//   //create todoDiv
//   const todoDiv = document.createElement("Div");
//   todoDiv.classList.add(todo);
//   //create list
//   const newTodo = document.createElement("li");
//   newTodo.innerText = todoInput.value;
//   newTodo.classList.add(todo - item);
//   todoDiv.appendChild(newTodo);
//   //CHECK MARK BUTTON
// }
// const completedButton = document.createElement;
// ("button");
// completedButton.innerHTML = "<i class = "fas -fas-check"></i>";
//-------------------------------------------------------------------------------
// function deleteTodo(e) {
//   const item = e.target;

//   if (item.classList[0] === "trash-btn") {
//     // e.target.parentElement.remove();
//     const todo = item.parentElement;
//     todo.classList.add("fall");
//     //at the end
//     removeLocalTodos(todo);
//     todo.addEventListener("transitionend", e => {
//       todo.remove();
//     });
//   }
//   if (item.classList[0] === "complete-btn") {
//     const todo = item.parentElement;
//     todo.classList.toggle("completed");
//     console.log(todo);
//   }
// }

// function filterTodo(e) {
//   const todos = todoList.childNodes;
//   todos.forEach(function(todo) {
//     switch (e.target.value) {
//       case "all":
//         todo.style.display = "flex";
//         break;
//       case "completed":
//         if (todo.classList.contains("completed")) {
//           todo.style.display = "flex";
//         } else {
//           todo.style.display = "none";
//         }
//         break;
//       case "uncompleted":
//         if (!todo.classList.contains("completed")) {
//           todo.style.display = "flex";
//         } else {
//           todo.style.display = "none";
//         }
//     }
//   });
// }

// function saveLocalTodos(todo) {
//   let todos;
//   if (localStorage.getItem("todos") === null) {
//     todos = [];
//   } else {
//     todos = JSON.parse(localStorage.getItem("todos"));
//   }
//   todos.push(todo);
//   localStorage.setItem("todos", JSON.stringify(todos));
// }
// function removeLocalTodos(todo) {
//   let todos;
//   if (localStorage.getItem("todos") === null) {
//     todos = [];
//   } else {
//     todos = JSON.parse(localStorage.getItem("todos"));
//   }
//   const todoIndex = todo.children[0].innerText;
//   todos.splice(todos.indexOf(todoIndex), 1);
//   localStorage.setItem("todos", JSON.stringify(todos));
// }

// function getTodos() {
//   let todos;
//   if (localStorage.getItem("todos") === null) {
//     todos = [];
//   } else {
//     todos = JSON.parse(localStorage.getItem("todos"));
//   }
//   todos.forEach(function(todo) {
//     //Create todo div
//     const todoDiv = document.createElement("div");
//     todoDiv.classList.add("todo");
//     //Create list
//     const newTodo = document.createElement("li");
//     newTodo.innerText = todo;
//     newTodo.classList.add("todo-item");
//     todoDiv.appendChild(newTodo);
//     todoInput.value = "";
//     //Create Completed Button
//     const completedButton = document.createElement("button");
//     completedButton.innerHTML = `<i class="fas fa-check"></i>`;
//     completedButton.classList.add("complete-btn");
//     todoDiv.appendChild(completedButton);
//     //Create trash button
//     const trashButton = document.createElement("button");
//     trashButton.innerHTML = `<i class="fas fa-trash"></i>`;
//     trashButton.classList.add("trash-btn");
//     todoDiv.appendChild(trashButton);
//     //attach final Todo
//     todoList.appendChild(todoDiv);
//   });
// }
//------------------------------------------------------------------------------------------------------------
