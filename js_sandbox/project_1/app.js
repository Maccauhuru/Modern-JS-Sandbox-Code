const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const addTaskBtn = document.querySelector('#add-task');
const taskInput = document.querySelector('#task');
const filterInput = document.querySelector('#filter');
const clearTaskBtn = document.querySelector('#clear-tasks');

//function to add task
const addTask = (e) => {
  e.preventDefault();
  if (taskInput.value == '') {
    alert("Please add a task");
  }
  const li = document.createElement('li');
  li.className = 'collection-item'; //material uses this class
  li.appendChild(document.createTextNode(taskInput.value));
  const link = document.createElement('a');
  link.className = 'delete-item secondary-content';//material classes
  link.innerHTML = '<i class="fa fa-remove"></i>';
  li.appendChild(link);
  taskList.appendChild(li);
  taskInput.value = '';
}
//function to clear tasks
const clearTask = (e) => {
  taskList.innerText = '';
}

const taskInputValue = (e) => {
  e.preventDefault();
  console.log(e.target.value)
}

//load all event listeners 
const loadEventListeners = () => {
  form.addEventListener('submit', addTask)
  clearTaskBtn.addEventListener('click', clearTask)
  taskInput.addEventListener('change', taskInputValue)
};

//load all event listeners in global scope
loadEventListeners();









