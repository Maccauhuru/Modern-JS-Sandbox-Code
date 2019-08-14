//FUNCTION DECLARATIONS
function greet(fname = 'John Doe') {
  return 'Hello ' + fname;
}
console.log(greet('Dread'));

//FUNCTION DECLARATIONS
const squareRoot = function (num) {
  return Math.sqrt(num)
}
console.log(`The squareroot of 100 is ${squareRoot(100)}`);

//IMMEDIATELY INVOCABLE FUNCTION EXPRESSION
//VERY USEFUL FOR THINGS LIKE MODULAR PATTERNS
(function printName(name) {
  console.log(`Hello Rockstar : ${name}`)
}('Dread'));

//PROPERTY METHODS
const todo = {
  add: function () {
    console.log('Add todo...');
  },
  edit: function (id) {
    console.log(`Edit todo with id ${id}`);
  },
  task: 'Show my task'
}

//A method declared outside of the object
todo.delete = function (id) {
  console.log(`Deleted task with id ${id}`);
}

todo.add();
todo.edit(12);
console.log(todo.task);
todo.delete(1);
console.log(todo)