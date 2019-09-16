const form = document.querySelector('task-form');
const taskInput = document.getElementById('task');
const heading = document.querySelector('h5');
const selectOptions = document.querySelector('#selectOptions');
//clear the form
taskInput.value = '';

const runEvent = (e) => {
  e.preventDefault();
  console.log(e.type);
  console.log(e.target.value);
  //heading.textContent = e.target.value;
}

// form.addEventListener('submit', runEvent)
// taskInput.addEventListener('keydown', runEvent)
//taskInput.addEventListener('keyup', runEvent)
taskInput.addEventListener('keypress', runEvent)
// taskInput.addEventListener('focus', runEvent)
//taskInput.addEventListener('blur', runEvent)
//taskInput.addEventListener('cut', runEvent)
//taskInput.addEventListener('paste', runEvent)
//taskInput.addEventListener('input', runEvent) // anything goes
selectOptions.addEventListener('change', runEvent)