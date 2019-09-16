const btn = document.querySelector('.btn')

btn.addEventListener('click',onClick)


function onClick(e) {
    e.preventDefault()
    let val;

    val = e;
    //Target

    val = e.target
    val = e.target.id
    val = e.target.className
    val = e.target.value
    val = e.target.classList //DOMTokenList
    e.target.innerText = 'Clicked'

    //Event Type
    val = e.type

    //Timestamp
    val = e.timeStamp

    //Coords
    val  = e.clientX
    val  = e.clientY

    //Offsets
    val = e.offsetX
    val = e.offsetY
    console.log(val)
}