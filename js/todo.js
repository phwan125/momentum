const todoForm = document.querySelector("#todo_form");
const todoInput = todoForm.querySelector("input");
const todoList = document.querySelector("#todo_list");

const TODOS_KEY = "todos";
let toDos = [];

function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteList(event) {
  const li = event.target.parentElement;
  console.log(li.id);
  li.remove("#li.id");
  toDos = toDos.filter((todo) => todo.id !== parseInt(li.id));
  saveToDos();
}

function paintTodo(newtodo) {
  const li = document.createElement("li");
  li.id = newtodo.id;
  const span = document.createElement("span");
  span.innerText = newtodo.text;
  const button = document.createElement("button");
  button.innerText = "❌";
  li.appendChild(span);
  li.appendChild(button);
  todoList.appendChild(li);
  button.addEventListener("click", deleteList);
}

function todoFormHandler(event) {
  event.preventDefault();
  const todoListValue = todoInput.value;
  todoInput.value = "";
  const toDoListObj = {
    text: todoListValue,
    id: Date.now(),
  };
  toDos.push(toDoListObj);
  paintTodo(toDoListObj);
  saveToDos();
}

todoForm.addEventListener("submit", todoFormHandler);
const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos) {
  const parsedToDos = JSON.parse(savedToDos);
  toDos = parsedToDos;
  parsedToDos.forEach(paintTodo);
}
