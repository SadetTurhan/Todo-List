import 'bootstrap';
function navBar() {
  const container = document.getElementById("container");
    container.innerHTML = 
       '<nav class="navbar navbar-light bg-light navbar-expand-lg fixed-top">' +
      '<a href="#" class="navbar-brand">Todo List</a>' +
      '<button class="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">'+
      '<span class="navbar-toggler-icon"></span>'+
      '</button>'+
      '<div class="collapse navbar-collapse" id="navbarCollapse">'+
      '<ul class="navbar-nav ml-auto>'+
      '<li class="navbar-item">'+
      '<button class="nav-link">All tasks</button>'+
      '</li>'+
      '<li class="navbar-item">'+
      '<button class="nav-link">Urgent Tasks</button>'+
      '</li>'+
      '<li class="navbar-item">'+
      '<button class="nav-link active" id="daily-task">Add Tasks</button>'+
      '</li>'+
      '</ul>'+
      '</div>' +
      '</nav>'

};
 


export {navBar};