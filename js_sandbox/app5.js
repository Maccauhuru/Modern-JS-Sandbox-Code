let nums = [23,5,6,710,100];
let arrStr = ['jack','ben','paul']
let arr = new Array(2,5,6,-10,90);


//Get array length
console.log(nums.length);
//Check if Array
console.log(Array.isArray(arr));
//insert into existing array
// arr[0]=-3;

//find item in array
console.log(arr.indexOf(-10));
//Remove items using splice
arr.splice(3,2)
//reverse array
//concat array

console.log(arrStr.sort());

function greaterThanHundred(num){
    return num > 100;
}
//Array find method
console.log(nums.find(greaterThanHundred));