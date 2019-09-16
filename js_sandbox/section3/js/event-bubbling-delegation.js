//EVENT BUBBLING
const cardTitle = document.querySelector('.card-title')

cardTitle.addEventListener('click', () => console.log(`card title clicked`));

cardTitle.parentElement.addEventListener('click', () => console.log(`card-content clicked`));

cardTitle.parentElement.parentElement.addEventListener('click', () => console.log(`Main clicked`));

//EVENT DELEGATION

const deleteBtn = document.querySelector('.clear-tasks')

deleteBtn.addEventListener('click', (e) => {
  e.preventDefault();
  console.log(`Item has been deleted`);
});