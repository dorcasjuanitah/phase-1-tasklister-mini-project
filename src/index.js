document.addEventListener("DOMContentLoaded", () => {
  document.querySelector("form").addEventListener('submit', (e) =>{
    e.preventDefault();
   buildToDo(e.target.new-task-description.value);
  })
});

function buildToDo(todo){
  //console.log(todo);
  let p = document.createElement('p');
  let btn = document.createElement('button');
  btn.tectcontent = 'X';
  btn.addEventListener('click', handleDelete);

  p.textContent = `${todo} `;
  document.querySelector('#new-task-description').appendChild(p)
}

function handleDelete(e){
  e,target.parentNode.remove;
}