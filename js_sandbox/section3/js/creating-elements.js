// Create an Element
const li = document.createElement('li');

//Add a class
li.className ='collection-item';

//Add id
li.id = 'list-item'

//Add attribute
li.setAttribute('title','new title')

//Add a text node & append
let text = document.createTextNode('hey there')
li.appendChild(text)

//create new link element
const link = document.createElement('a')

//Add classes
link.className = 'delete-item secondary-content'

//Add delete icon
link.innerHTML = "<i class='fa fa-remove'></i>"

//Append link to the li
li.appendChild(link)

//Append li as child to ul
document.querySelector('ul.collection').appendChild(li)
console.log(li)