let taskBtn = document.getElementById("taskBtn");  
let taskInputDesc = document.getElementById("taskInputDescription");  
let todosWrapper = document.querySelector(".toDoWrapper"); 

let tasks;

!localStorage.tasks ? tasks = [] : tasks = JSON.parse(localStorage.getItem("tasks"));

let toDoItemsElements = [];

!localStorage.tasks ? task=[] : JSON.parse(localStorage.getItem("tasks")) ;


function Task(description) {
    this.description = description;
    this.completed = false;

};
let createTemplate = (task, index) => {
    return `
        <div class="toDoItem ${task.completed ? "checked" : ""}" >
        <div class="sectionDesc">    
            <div class="description">${task.description}</div>
        </div>    
            <div class="btns">   
                    <input onclick="completeTask(${index})" class="btnComplete" type="checkbox" ${task.completed ? "checked" : ""}>
                    <button onclick="deleteTask(${index})" class="btnDelete">Delete</button>    
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
    if(tasks.length > 0 ){
        filterTask();
        tasks.forEach((item,index) => {
            todosWrapper.innerHTML += createTemplate(item,index);               
        });
        toDoItemsElements = document.querySelectorAll(".toDoItem");
    }
}

fillHtmlList();

let updateLocal = () => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
};

let completeTask = index => {  
    tasks[index].completed = !tasks[index].completed;
    if(tasks[index].completed) {
        toDoItemsElements[index].classList.add("checked");
    }
    else {
        toDoItemsElements[index].classList.remove("checked");
    }
    
    updateLocal();
    fillHtmlList();

}

taskBtn.addEventListener("click", () =>{
    tasks.push(new Task(taskInputDesc.value));
    updateLocal();

    fillHtmlList();
    taskInputDescription.value = "";
});

let deleteTask = index => {
    toDoItemsElements[index].classList.add("delay");
    setTimeout(() => {
        tasks.splice(index, 1);
        updateLocal();
        fillHtmlList();
   },1000)
}

