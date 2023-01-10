import {tasks} from './task';
tasks();
function addDailyTask(){
    const rowForDailyTasks = document.getElementById("row");
    const addNewDailyTask = document.createElement("p");
    addNewDailyTask.innerHTML = '<div class="input-group input-group-sm mb-3">'+
    '<div class="input-group-prepend">'+
      '<span class="input-group-text">Name</span>'+
    '</div>'+
    '<input id="nameinput" type="text" class="form-control" aria-label="Small" aria-describedby="inputGroup-sizing-sm">'+
  '</div>'+
  '<div class="input-group input-group-sm mb-3">'+
    '<div class="input-group-prepend">'+
      '<span class="input-group-text">Priority</span>'+
    '</div>'+
    '<input type="text" id="priorityinput" class="form-control" aria-label="Small" aria-describedby="inputGroup-sizing-sm">'+
  '</div>'+
  '<div class="input-group input-group-sm mb-3">'+
    '<div class="input-group-prepend">'+
      '<span class="input-group-text">Progress</span>'+
    '</div>'+
    '<input id="progressinput" type="text" class="form-control" aria-label="Small" aria-describedby="inputGroup-sizing-sm">'+
  '</div>';

    rowForDailyTasks.appendChild(addNewDailyTask);
    let dailyTasks = [];
    function task(name,description,dueDate,priority){
        this.name = name;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
      };
    var name = document.getElementById("nameinput").value;
    var priority = document.getElementById("priorityinput").value;
    var progressinput = document.getElementById("progressinput").value;
    var dueDate = "asds";
    const dailytask = new task(name,priority,progressinput,dueDate);
    dailyTasks.push(dailytask);
    console.log(dailyTasks);
};

export{addDailyTask};