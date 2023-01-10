import 'bootstrap';
import {navBar} from './navbar';
function urgentTasks(){
    // welcoming message of urgent tasks
    const container = document.getElementById("container");
    const dailyTasksDetails = document.createElement("div");
    dailyTasksDetails.innerHTML = '<div class="container2">'+
        '<div class="row">'+
        '<div class="col-lg-12">Your Urgent Tasks</div>'+
        '<div class="col-lg-4">Name</div>'+
        '<div class="col-lg-4">Due Date</div>'+
        '<div class="col-lg-4">Progess</div>'+
    '</div>'+
    '</div>'+
    '<button type="button" class="btn btn-success">Add New Task</button>';
    container.appendChild(dailyTasksDetails);
    };

export {urgentTasks};