let name = "Simba";
let profession  ='Web Developer';
let city = "Dallas"
let today = new Date();
let age = 37;

function getDate(){
    return today.toDateString();
}


let output = `
<ul>
<li>Name : ${name}</li>
<li>Profession :${profession}</li>
<li>City :${city}</li>
<li>Date :${today.toLocaleDateString()}</li>
<li>Age Status :${age > 40 ? 'Howdy!':'Youngling'}</li>
<li>TimeZone :${getDate()}</li>
</ul>
`

document.body.innerHTML = output;
