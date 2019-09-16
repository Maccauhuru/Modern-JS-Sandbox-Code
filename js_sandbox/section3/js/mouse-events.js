const clearBtn = document.querySelector('.clear-tasks')
const card = document.querySelector('.card')
const heading = document.querySelector('h5')

//Event Handler
const runEvent = (e) => {
    e.preventDefault();
    console.log(`EVENT TYPE : ${e.type}`)
    heading.textContent = `MouseX : ${e.offsetX} MouseY : ${e.offsetY}`;
    document.body.style.backgroundColor = `rgb(${e.offsetX},${e.offsetY}, 40)`
}

//Click Event
// clearBtn.addEventListener('click',runEvent) //click
// clearBtn.addEventListener('dblclick',runEvent) //double click
// clearBtn.addEventListener('mousedown', runEvent) //mouse down
// clearBtn.addEventListener('mouseup', runEvent) //mouse up
//card.addEventListener('mouseenter', runEvent) //mouse enter (p)
//card.addEventListener('mouseleave', runEvent) //mouse leave (p)
//card.addEventListener('mouseover', runEvent) //mouse over
//card.addEventListener('mouseout', runEvent) //mouse leave
card.addEventListener('mousemove', runEvent) //mouse move



