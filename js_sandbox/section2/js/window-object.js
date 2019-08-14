//WINDOW METHODS / OBJECTS / PROPERTIES

//Alert
// alert('Lets have some fun with the window object')

//Prompt
// const input =prompt("Enter name");
// alert(`Hello there ${input}`)

//Confirm
// if(confirm('Are you sure mi Daddy?')){
//     console.log("YES")
// } else {
//     console.log("NO")
// }

//PROPERTIES
let val;

//Outer height & width
val = window.outerHeight
val = window.outerWidth

//Outer height & width
val = window.innerHeight
val = window.innerWidth


//Scroll Points - Figure out where you are on scroll axis
val = window.scrollY
val = window.scrollX

//Location Object
val = window.location;
for(let prop in val){
    if(prop == 'search')
    console.log(`${prop} : ${val[prop]}`)
}

// window.location.href = 'http://localhost'

//History Object
window.history.go(-1)
val = window.history.length

//Navigator Object
val = window.navigator
console.log(val.platform ,val.language,val.userAgent,val.vendor)
