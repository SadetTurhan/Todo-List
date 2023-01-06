import 'bootstrap';
import {navBar} from './navbar';
import {dailytasks} from './dailytasks';
navBar();
const dailyTask = document.getElementById("daily-task");
dailyTask.addEventListener("click",dailytasks);