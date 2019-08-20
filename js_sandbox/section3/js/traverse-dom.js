let val;
const list = document.querySelector('ul.collection');
const listItem = document.querySelector('li.collection-item:first-child')
val = list;
val = listItem;

//Get child nodes from list - problem returns with line breaks
val = list.childNodes //Returns a nodeList(11)
val = list.childNodes[0].nodeName;
val = list.childNodes[0].nodeType;

//1.Element, 2.Attribute(deprecated) , 3.Text Node
//8.Comment 9.Comment , 10.DocType



//Get child nodes from list - NO line breaks
val = list.children  //Returns an HTML collection (5)
//list.children[2].textContent = "Howdy!"


//Select children of children
val = list.children[3].children
val = list.children[3].children[0]
list.children[3].children[0].id = 'first-blood'

//firstChild vs firstElementChild
val = list.firstChild; //Returns nodeList
val = list.firstElementChild; //Returns the actual child element

//lastChild vs lastElementChild
val = list.lastChild
val = list.lastElementChild
val = list.children[3]

//Count the number of child elements
val = list.childElementCount

//Get parent Node
val = list.parentNode
val = list.parentElement
val = list.parentElement.parentElement

//Next Siblings
val  = listItem.nextSibling
val  = listItem.nextElementSibling

//Previous Siblings
val  = listItem.previousSibling
val  = listItem.previousElementSibling


console.log(val);