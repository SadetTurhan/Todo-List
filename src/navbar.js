import 'bootstrap';
function navBar() {
  const navBar = document.getElementById("navbar");
  navBar.innerHTML = '<nav class="navbar navbar-expand-lg navbar-light bg-light top-left-fixed flex-column">'+
  '<a class="navbar-brand" href="#">Todo-List</a>'+
  '<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">'+
    '<span class="navbar-toggler-icon"></span>'+
  '</button>'+
  '<div class="collapse navbar-collapse" id="navbarNavAltMarkup">'+
    '<div class="navbar-nav">'+
      '<button class="nav-item nav-link active" href="#" id="projects">Projects</button>'+
      '<button class="nav-item nav-link" href="#" id="daily">Daily</button>'+
      '<button class="nav-item nav-link" href="#" id="urgent">Urgent</button>'+
    '</div>'+
  '</div>'+
'</nav>'+
'<button type="button" class="btn btn-success">add task</button>'

};
 


export {navBar};