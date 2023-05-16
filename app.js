const inputTaskName = document.getElementById('inputTaskName');
const addButton = document.getElementById('addButton');
const taskArea = document.getElementById('taskArea');

function addTask(){
    if(inputTaskName.value != ' '){
    const Task = {
        Taskname: inputTaskName.value
    }
    const newTask = document.createElement("div");
    newTask.classList.add("newTask");
    const newTaskName = document.createElement("p");
    const deleteButton = document.createElement("button");
    deleteButton.classList.add('deleteButton');
    deleteButton.textContent = "Delete Task";
    localStorage.setItem("task",JSON.stringify(Task));
    function deleteTask(){
        newTask.remove() 
    };
    deleteButton.addEventListener("click",deleteTask);
    newTask.textContent = inputTaskName.value;
    inputTaskName.value = ' ';
    newTask.appendChild(newTaskName);
    newTask.appendChild(deleteButton);
    taskArea.appendChild(newTask);
    }else{
        alert("please add a task");
    };
    
};

addButton.addEventListener("click",addTask);
