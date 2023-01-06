import 'bootstrap';
import {navBar} from './navbar';

function dailytasks(){
        const newDailyTask = document.getElementById("daily-task-page");
        const newDailyTasks = document.createElement("div");
        newDailyTasks.innerHTML = 
        '<span class="border border-info">'+
        '<form action="/action_page.php">'+
        '<div class="form-group mt-5 w-25">'+
        '<label for="Name Of Task">Name Of Task:</label>'+
        '<input type="text" class="form-control" id="nameOfTask" placeholder="Enter Your Task" name="taskName">'+
        '</div>'+
        '<div class="form-group w-25">'+
        '<label for="pwd">Password:</label>'+
        '<input type="date" class="form-control" id="dueDate" placeholder="Due Date" name="DueDate">'+
        '</div>'+
        '<div class="checkbox">'+
        '<label><input type="checkbox" name="remember"> Urgent</label>'+
        '</div>'+
        '<button type="submit" class="btn btn-success">Submit</button>'+
        '</form>'+
        '</span>';
        newDailyTask.appendChild(newDailyTasks);
    };

export {dailytasks};