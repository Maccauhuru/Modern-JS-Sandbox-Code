//Replace element

//create element
const newHeading = document.createElement('h2');

//add an id
newHeading.id = 'task-title'

//add a new text node
newHeading.appendChild(document.createTextNode('My Tasks List'))

//Change the old heading
const oldHeading = document.querySelector('#task-title')

//To replace we need to target a parent
const cardAction = document.querySelector('.card-action')

//Replace using replaceChild
cardAction.replaceChild(newHeading,oldHeading)

//Remove Element(s)

const lis = document.querySelectorAll('li');
const list = document.querySelector('ul');

//Remove a single list item
lis[0].remove()

//Remove a child element
list.removeChild(lis[2])

//Classes & Attributes
const firstListItem  = document.querySelector('li:first-child')
const firstItemChildren = firstListItem.children[0]

//CLASSES
let val;
val = firstItemChildren.className
val = firstItemChildren.classList //returns DOMTokenList
val = firstItemChildren.classList[0] //access individual tokens
//add new class
firstItemChildren.classList.add('item-class')
firstItemChildren.classList.remove('item-class')
val = firstItemChildren

//ATTRIBUTES
const link = firstListItem.children[0]
val = link.getAttribute('href')
val = link.setAttribute('href','http://woo.io/eng')
val = link.hasAttribute('title')
val = link.hasAttribute('href')
val = link.setAttribute('title','new-title')
val = link.removeAttribute('href')
val = link
console.log(val)