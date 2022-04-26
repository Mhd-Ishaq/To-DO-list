
const form = document.querySelector("#form");
const input = document.querySelector("#input");
const btnAdd = document.querySelector("#btn-add");
const list = document.querySelector("#Tasks");
const span = document.querySelector("span")


function add(){
  let task = input.value;
  if(!task){
    span.classList.add("show");
    return;
  }

  span.classList.remove("show");
  const taskEl = document.createElement("div")
  taskEl.setAttribute("class","task");

  const taskElContent = document.createElement("div")
  taskElContent.setAttribute("class","content");

  taskEl.appendChild(taskElContent);

  const taskEdit = document.createElement("input");
  taskEdit.classList.add("text");
  taskEdit.type = "text";
  taskEdit.value = task;
  taskEdit.setAttribute("readonly","readonly");
  taskElContent.appendChild(taskEdit);

  const actions = document.createElement("div");
  actions.classList.add("actions");

  const edit = document.createElement("button");
  edit.classList.add("edit");
  edit.innerText = "Edit";
  const taskDelete = document.createElement("button");
  taskDelete.classList.add("delete");
  taskDelete.innerText = "Delete";
  actions.appendChild(edit);
  actions.appendChild(taskDelete);
  taskEl.appendChild(actions);
list.appendChild(taskEl);
input.value = "";

edit.addEventListener("click",()=>{
  if(edit.innerText.toLowerCase() == "edit" ){
    taskEdit.removeAttribute("readonly");
    edit.focus();
    edit.innerText= "Save";
  }else{
    taskEdit.setAttribute("readonly","readonly");
    edit.innerText= "Edit";
  }
});
taskDelete.addEventListener("click",()=>{
  list.removeChild(taskEl);
})

}

