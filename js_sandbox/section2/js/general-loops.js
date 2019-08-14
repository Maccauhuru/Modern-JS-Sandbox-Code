//FOR LOOP

// for(let i=0;i <= 10;i++){
//     if(i ===5){
//         console.log("2 bad riddims");
//         break;
//     }
//     console.log("current count is", i)
// }


//WHILE LOOP
let i =10;
// while(i <= 10){
//     console.log('count is', i)
//     i++;
// }


//DO WHILE WILL RUN AT LEAST ONCE
// do {
//     console.log(`Count is ${i}`);
//     i--;
// }
// while(i >=0);


const cars = ['Chevy','Ford','Mercedes','Honda'];

//FOR EACH

// for(let i=0;i <=cars.length;i++){
//     console.log(cars[i])
// }

//cars.forEach(car => console.log(`${car}`));

//MAP

cars.map((car)=>console.log(`Buy a ${car}`));

const users = [
    {id:0 , name:'Michael'},
    {id:1 , name:'Gina'},
    {id:2 , name:'Thomas'}
]

users.map(user => console.log(`
The name is ${user.name} , the id is ${user.id}`
))

const simba = {
    firstName : 'simba',
    lastName : 'mupfukudzwa',
    age:40
}

//FOR IN LOOP
for(let item in simba){
    console.log(`${simba[item]}`)
}