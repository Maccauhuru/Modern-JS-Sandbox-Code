//Set local storage item

const localStorage = window.localStorage;
const sessionStorage = window.sessionStorage;

// localStorage.setItem("2Pac", "Makaveli");
// localStorage.setItem("Biggie", "Ready 2 die");


// sessionStorage.setItem("Lion", "There is nothin else i would rather do than code!, even if it takes me 10 years to be good.");


//remove from local storage
//localStorage.removeItem('Tony');

// console.log(localStorage.getItem("2Pac"))
// console.log(localStorage.getItem("Biggie"))

//Clear from local storage
// localStorage.clear()

//Working with forms & localStorage
const form = document.querySelector('#task-form');
const task = document.querySelector('#task');

form.addEventListener('submit', (e) => {
  const { value } = task;
  e.preventDefault();
  //check if local storage has something
  let tasks;
  if (localStorage.getItem("todos") === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem("todos"));
  }
  tasks.push(value)
  localStorage.setItem("todos", JSON.stringify(tasks));
  value = ' ';
});

//In order to view the items they need to be parsed 
const itemsTodo = JSON.parse(localStorage.getItem('todos'));
itemsTodo.forEach(item => console.log(`${item}`));