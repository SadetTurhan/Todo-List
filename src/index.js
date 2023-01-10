import 'bootstrap';
import {navBar} from './navbar';
import {dailyTasks} from './dailytasks';
import {urgentTasks} from './urgent';
import {render} from './render';
import {tasks} from './task';

tasks();
navBar();
const dailyButton = document.getElementById("daily");
dailyButton.addEventListener("click",render);
dailyButton.addEventListener("click",dailyTasks);
const urgentButton = document.getElementById("urgent");
urgentButton.addEventListener("click",render);
urgentButton.addEventListener("click",urgentTasks);

let tasksArray = [];
function Task(title,description,dueDate,priority){
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
};
function addTask(title,description,dueDate,priority){
  var title = "asdasd";
  var author = "sdsd";
  var pages = "dsd"
  var read = "sdds";
  const task = new Task(title,description,dueDate,priority);
  tasksArray.push(task);
}