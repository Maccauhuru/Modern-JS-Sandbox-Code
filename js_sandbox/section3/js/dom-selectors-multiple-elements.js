// const items = document.getElementsByClassName('collection-item')
// console.log(items)

// const li = document.getElementsByTagName('li')
// console.log(li)
// console.log(li[0])
// console.log();


const myNodeList = document.querySelectorAll('ul.collection li.collection-item')
let liOdd = document.querySelectorAll('li:nth-child(odd)');
let liEven = document.querySelectorAll('li:nth-child(even)');
console.log(myNodeList);


liOdd.forEach(line=>line.style.background = '#ccc')
liEven.forEach(line=>line.style.background = '#f4f')