import {addingDailyTasks} from './task';
function addDailyTask(){
    const rowForDailyTasks = document.getElementById("row");
    const addNewDailyTask = document.createElement("div");
    const dailyTaskAddButton = document.getElementById("addDailyTask");
    rowForDailyTasks.appendChild(addNewDailyTask); 
    addNewDailyTask.innerHTML = '<div class="input-group input-group-sm mb-3">'+
    '<div class="input-group-prepend">'+
      '<span class="input-group-text" id="inputName">Name</span>'+
    '</div>'+
    '<input id="nameinput" type="text" class="form-control" aria-label="Small" aria-describedby="inputGroup-sizing-sm">'+
  '</div>'+
  '<div class="input-group input-group-sm mb-3">'+
    '<div class="input-group-prepend">'+
      '<span class="input-group-text" id="inputPriority">Priority</span>'+
    '</div>'+
    '<input type="text" id="priorityinput" class="form-control" aria-label="Small" aria-describedby="inputGroup-sizing-sm">'+
  '</div>'+
  '<div class="input-group input-group-sm mb-3">'+
    '<div class="input-group-prepend">'+
      '<span class="input-group-text" id="inputProgress">Progress</span>'+
    '</div>'+
    '<input id="progressinput" type="text" class="form-control" aria-label="Small" aria-describedby="inputGroup-sizing-sm">'+
  '</div>';
  rowForDailyTasks.appendChild(addNewDailyTask);
};

export{addDailyTask};