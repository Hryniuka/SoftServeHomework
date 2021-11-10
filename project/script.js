let addTaskBtn = document.getElementById("add-task-btn"); 
let deskTaskInput = document.getElementById("description-task"); 
let todosWrapper = document.querySelector(".todos-wrapper");  

let tasks;
!localStorage.tasks ? tasks = [] : tasks = JSON.parse(localStorage.getItem("tasks"));

let todoItemElems = []; 

function Task(description) { 
    this.description = description; 
    this.completed = false; 
}

let createTemplate = (task, index) => { 
    return`
            <div class="todo-item ${task.completed ? "checked" : ""}"> 
                <div class="description">${task.description}</div> 
                <div class="buttons">
                    <input onclick = "completeTask(${index})"class="btn-complete" type="checkbox" ${task.completed ? "checked" : ""}>
                    <button onclick = "deleteTask(${index})"class="btn-delete">Delete</button>
                </div>
            </div>
    `
}

let filterTask = () => { 
    let activeTasks = tasks.length && tasks.filter(item => item.completed == false);
    let completedTasks = tasks.length && tasks.filter(item => item.completed == true); 
    tasks = [...activeTasks,...completedTasks]; 
};

let fillHtmlList = () => { 
    todosWrapper.innerHTML = ""; 
    if(tasks.length > 0) {
        filterTask(); 
        tasks.forEach((item, index) => {
            todosWrapper.innerHTML += createTemplate (item, index);
            todoItemElems = document.querySelectorAll(".todo-item");
        })

    }
}

fillHtmlList ();
  
let updateLocal = () => {
    localStorage.setItem ("tasks", JSON.stringify(tasks)); 
}

let completeTask = index => {
    tasks[index].completed = !tasks[index].completed;
    if(tasks[index].completed){
        todoItemElems[index].classList.add("checked");
    } else{
        todoItemElems[index].classList.remove("checked"); 
    }
    updateLocal();
    fillHtmlList();
}

addTaskBtn.addEventListener("click", () => {
    tasks.push (new Task(deskTaskInput.value)); 
    updateLocal (); 
    fillHtmlList(); 
    deskTaskInput.value = ""; 
})

let deleteTask = index => {
    todoItemElems[index].classList.add("deletion");
    setTimeout(() => {
        tasks.splice (index, 1);
        updateLocal();
        fillHtmlList();
    },300)
}