// Activity 2: Creating and Appending Elements

// Task 3: Create a new div element with some text content and append it to the body.

let divElement = document.createElement('div')
let divElement2 = document.createElement('div')
divElement.innerHTML = "<h2>This is Div Element Appended from script </h2>"
// divElement2.innerText = "<h2>This is Div Element Appended from script </h2>"

document.body.appendChild(divElement)
document.body.appendChild(divElement2)

// Task 4: Create a new li element and add it to an existing ul list.


const liElement = document.createElement('li')
const ulElement = document.querySelector('ul')

liElement.innerText = "Item 4"

ulElement.appendChild(liElement)