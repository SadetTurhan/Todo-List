function gettingInputPrinted(){
  const namePlace = document.getElementById("nameinput");
  const priorityPlace = document.getElementById("priorityinput");
  const progressinputPlace = document.getElementById("progressinput");
  namePlace.remove();
  priorityPlace.remove();
  progressinputPlace.remove();
  const inputName = document.getElementById("inputName");
  inputName.remove();
  const inputPriority = document.getElementById("inputPriority");
  inputPriority.remove();
  const inputProgress = document.getElementById("inputProgress");
  inputProgress.remove();
  const newTaskDaily = document.createElement("div");
  newTaskDaily.innerHTML = '<div class="container3">'+
  '<div class="row">'+
  '<div class="col-lg-4">'+
  '<p class="font-weight-bold">Bold text</p>'+
  '</div>'+
  '<div class="col-lg-4">'+
  '<p class="font-weight-bold">Bold text.</p>'+
  '</div>'+
  '<div class="col-lg-4">'+
  '<p class="font-weight-bold">Bold text.</p>'+
  '</div>'+
  '</div>'+
  '</div>';
  document.body.appendChild(newTaskDaily);
};
export {gettingInputPrinted}