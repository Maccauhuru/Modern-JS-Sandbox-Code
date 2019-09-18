//EVENT BUBBLING
// const cardTitle = document.querySelector('.card-title')

// cardTitle.addEventListener('click', () => console.log(`card title clicked`));

// cardTitle.parentElement.addEventListener('click', () => console.log(`card-content clicked`));

// cardTitle.parentElement.parentElement.addEventListener('click', () => console.log(`Main clicked`));

//EVENT DELEGATION

// const deleteSomething = document.querySelector('.delete-item');
//Works but not the best way incase the className alters
const delItem = (e) => {
  if (e.target.parentElement.className === 'delete-item secondary-content') {
    e.target.parentElement.parentElement.textContent = "Changed List Item";
    console.log(`deleted list item`)
  }
}

const delItemz = (e) => {
  if (e.target.parentElement.classList.contains('delete-item')) {
    console.log(`${e.target.parentElement.parentElement}must be deleted`)
  }
}

document.body.addEventListener('click', delItemz);
// deleteSomething.addEventListener('click', delItem)