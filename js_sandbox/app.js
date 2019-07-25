console.log("---------------------------");
console.log("Section 5 : Using the Console");
console.log("---------------------------");
console.table({
  name: "Simba",
  class: "ESNext from Scratch",
  year: 2019,
});

console.time("Start Timer");
for (let i = 0; i < 10; i++) {
  if (i % 2 === 0) {
    console.log(i, "is an even number");
  }
  else {
    console.warn(i, "is an odd number");
  }
}
console.timeEnd("Start Timer");

console.log("---------------------------");
console.log("Section 6 : Var , Let Const");
console.log("---------------------------");
console.log("Skipped");

console.log("---------------------------");
console.log("Section 7 & 8 : Data Types & Type Conversion");
console.log("---------------------------");

var whatisThisObject = "String";
var element = document.querySelector('title');
console.log('element',element);
console.log('what is This Object' ,whatisThisObject);
console.log(Object.prototype.toString.call(whatisThisObject));


console.log("***Type conversions ***")
let val;

//Number to string
val = String(100);


//Bool to String
val = String(false)


//Date to String
val = String(new Date());

//Array to string
val = String([1,2,3,4,5,6]);

//String to number
val = Number('500')
val = parseInt('9000');
val = parseFloat('100.900')
//Output
console.log(val);
console.log(typeof val);
console.log(val.toFixed(2));
