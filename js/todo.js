const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

let toDos = [];

function saveToDos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(event) {
    const div = event.target.parentElement;
    const li = div.parentElement;
    li.remove();
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
    saveToDos()
}

function markTodo() {
    const div = event.target.parentElement;
    const li = div.parentElement;
    if (li.style.textDecoration === "line-through") {
        li.style.textDecoration = "none";
    } else {
        li.style.textDecoration = "line-through";
    }
}
function paintToDo(newTodo) {
    const div1 = document.createElement("div");
    div1.setAttribute("style", "float:left;margin-right:10px;");
    const div2 = document.createElement("div");
    div2.setAttribute("style", "float:left;margin-right:10px;");
    const div3 = document.createElement("div");

    const checkBox = document.createElement("input");
    checkBox.id = newTodo.id;
    checkBox.type = "checkbox";
    checkBox.addEventListener("click", markTodo);
    div1.appendChild(checkBox);

    const li = document.createElement("li");
    li.id = newTodo.id;
    const span = document.createElement("span");
    span.innerText = newTodo.text;
    div3.appendChild(span);

    const button = document.createElement("button");
    button.innerText = "❌";
    button.addEventListener("click", deleteToDo);
    div2.appendChild(button);

    li.appendChild(div1);
    li.appendChild(div2);
    li.appendChild(div3);

    toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = "";
    const newTodoObj = {
        text: newTodo,
        id: Date.now(),
    };
    toDos.push(newTodoObj);
    paintToDo(newTodoObj);
    saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos !== null) {
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo);
}
