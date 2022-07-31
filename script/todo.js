const toDOform = document.querySelector(".toDoList-form");
const toDOList = document.querySelector(".toDoList-list");
const toDoInput = document.querySelector(".toDoList-form input");
let toDos = [];

function toDoSubmit(event){
    event.preventDefault();
    const newToDo = toDoInput.value;
    toDoInput.value = "";
    const newToDoObject = {
        text : newToDo,
        id : Date.now()
    }
    toDos.push(newToDoObject);
    toDoMake(newToDoObject);
    toDoSave();
}
toDOform.addEventListener("submit", toDoSubmit);

function toDoSave(){
    localStorage.setItem("To-Do-List", JSON.stringify(toDos));
}


const toDoStorage = localStorage.getItem("To-Do-List");
if(toDoStorage !== null){
    const toDoParsed = JSON.parse(toDoStorage);
    toDos = toDoParsed;
    toDoParsed.forEach(toDoMake);
}

function toDoMake(newToDoObject){
    const list = document.createElement("li");
    const span = document.createElement("span");
    const button = document.createElement("button");
    const delBtn = document.createElement("img");
    delBtn.src = "img/cross.png";
    span.innerText = newToDoObject.text;
    list.id = newToDoObject.id; 
    button.innerText = "";
    button.appendChild(delBtn);
    button.addEventListener("click", toDoDelete);
    list.appendChild(span);
    list.appendChild(button);
    toDOList.appendChild(list);
}

function toDoDelete(event){
    const deleteThis = event.target.parentElement.parentElement;
    deleteThis.remove();
    toDos = toDos.filter(thisToDo => thisToDo.id !== parseInt(deleteThis.id));
    toDoSave();
}