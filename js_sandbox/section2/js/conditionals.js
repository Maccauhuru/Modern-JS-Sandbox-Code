const id = 100;

//Equal too 
// if (id == 100) {
//   console.log("correct");
// } else {
//   console.log("not equal");
// }

//check if undefined
if (typeof id !== 'undefined') {
  console.log(`The ID is defined : ${id}`)
} else {
  console.error(`The ID was not found`)
}

//IF ..ELSE IF
//LOGICAL OPERATORS (&& | OR)
//TERNARY OPERATOR

//IF STATEMENTS WITHOUT CURLY BRACES
//check if undefined
if (id >= 100)
  console.log(`The ID is >=100`)
else
  console.error(`The ID is not >=100`)

//SWITH STATEMENT
const color = 'yellow'
let output = 'The color is';

switch (color) {
  case 'red':
    console.log(`${output} ${color}`)
    break;
  case 'gold':
    console.log(`${output} ${color}`)
    break;
  case 'green':
    console.log(`${output} ${color}`)
    break;

  default:
    console.log("no rasta colors")
    break;
}


switch (new Date().getDay()) {
  case 0: day = 'Sunday'
    break;
  case 1: day = 'Monday'
    break;
  case 2: day = 'Tuesday'
    break;
  case 3: day = 'Wednesday'
    break;
  case 4: day = 'Thursday'
    break;
  case 5: day = 'Friday'
    break;
  case 6: day = 'Saturday'
    break;
}

console.log(`Today is ${day}`)