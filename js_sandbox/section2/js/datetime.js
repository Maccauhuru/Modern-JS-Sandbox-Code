//Date & Times
let val;
const today = new Date();
let birthday = new Date('8-30-1982 07:00');
birthday = new Date('August 30 1982');
birthday = new Date('08/30/1982');
let month = today.getMonth(); //Will return a month behind (zero based)
month = today.getMonth() + 1; //Will return correct 

let day = today.getDay(); // we get the number sunday = 0
let year = today.getFullYear(); // we get the number sunday = 0
let time = today.getTime();//Time in seconds since 1 Jan 1970
//today.getHours
//today.getMinutes
//today.geSeconds
//today.getMilliseconds

let party = new Date('1 January 2020');
//set the time to your birthday in 2020
party.setDate('30');
party.setMonth('7');
party.setYear('2020')
party.setHours('3')
party.setMinutes('30')
party.setSeconds('35')

val = party;
console.log(val);