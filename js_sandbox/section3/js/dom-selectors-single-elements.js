let val;
val = document.getElementById('task-title');
val = document.getElementById('task-title').id;
val = document.getElementById('task-title').textContent;
val = document.getElementById('task-title').innerText;
val = document.getElementById('task-title').className;

//Change the element styling
val = document.getElementById('task-title');
val.style.background = "blue"
val.style.color = "white"
val.style.padding = "5px"

//make an element dissapear
//val.style.display = 'none'

//Change The Content
val.textContent = "Girl Watcher"
val.innerText = "Task Watcher"


console.log(val);