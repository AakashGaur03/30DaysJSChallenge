// Activity 5: Event Delegation

// Task 9: Add a click event listener to a list that logs the text content of the clicked list item using event delegation.

const list = document.getElementById('listDelegation')

list.addEventListener('click', (e) => {
    if (e.target && e.target.nodeName === 'LI') {
        console.log(e.target.textContent)
    }
})


// Task 10: Add an event listener to a parent element that listens for events from dynamically added child elements.


// const parent = document.getElementById('parent');
// const addChildButton = document.getElementById('addChild');

// Add event listener to the parent element

const parent = document.getElementById('parent')
const addChildButton = document.getElementById('addChild')

parent.addEventListener('click', (e) => {
    if (e.target && e.target.matches('button.child')) {
        alert(`Button Clicked : ${e.target.textContent}`);
    }
})

addChildButton.addEventListener('click', () => {
    const newBtn = document.createElement('button')
    newBtn.classList.add('child')
    newBtn.textContent = `Child ${parent.children.length + 1}`
    parent.appendChild(newBtn)
})