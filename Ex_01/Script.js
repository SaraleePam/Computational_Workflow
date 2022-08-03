
let W = prompt('what is the width?')
let H = prompt('what is the height?')

function AreaOfRoom(Width, Height) {
let area = Width * Height;
alert('the calculated area is' + area);

};

AreaOfRoom(W,H);


/////////////////////////////////////

let greeting = document.querySelector('.greeting');
greeting.textContent = "Goodbye!";

console.log(greeting[0]);

////////////////////////////////////

//select the unorder list
const ul = document.querySelector('ul')
// create a new html element
const listItem = document.createElement('li');
//add a a class to the list item
listItem.classList.add('list-item')
listItem.textContent = 'Monday'
//append the list item to the parent ul
ul.appendChild(listItem)

//////////////////////////////////
