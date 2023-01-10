import 'bootstrap';
import {navBar} from './navbar';

function dailyTasks(){
    // welcoming message of daily tasks
    const container = document.getElementById("container");
    const dailyTasksDetails = document.createElement("div");
    dailyTasksDetails.innerHTML = '<div class="container2">'+
        '<div class="row" id="row">'+
        '<div class="col-lg-12"><h1 class="font-weight-light">Your Daily Tasks</h1></div>'+
        '<div class="col-lg-4">Name'+
        '<p class="font-weight-bold">Bold text.</p>'+
        '<p class="font-weight-bold">Bold text.</p>'+
        '<p class="font-weight-bold">Bold text.</p>'+
        '</div>'+
        '<div class="col-lg-4">Priority'+
        '<p class="font-weight-bold">Bold text.</p>'+
        '<p class="font-weight-bold">Bold text.</p>'+
        '<p class="font-weight-bold">Bold text.</p>'+
        '</div>'+
        '<div class="col-lg-4">Progess'+
        '<p class="font-weight-bold">Bold text.</p>'+
        '<p class="font-weight-bold">Bold text.</p>'+
        '<p class="font-weight-bold">Bold text.</p>'+
        '</div>'+       
    '</div>'+
    '</div>'+
    '<button type="button" class="btn btn-success" id="addDailyTask">Add New Task</button>';
    
    container.appendChild(dailyTasksDetails);
    };

export {dailyTasks};