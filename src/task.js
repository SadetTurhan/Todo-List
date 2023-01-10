function tasks(){
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
//function getTaskFromUser(){

//}


};
export {tasks};