function tasks(){
  let allTasks = [];
  console.log(allTasks);
  function task(name,description,dueDate,priority){
    this.name = name;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
  };
  
};
export {tasks}