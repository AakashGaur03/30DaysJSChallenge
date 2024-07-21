// Activity 3: Removing Elements


// Task 5: Select an HTML element and remove it from the DOM.

const removeElement = document.getElementById('removeMe')

// removeElement.remove()
document.body.removeChild(removeElement)

// Task 6: Remove the last child of a specific HTML element.

const parentDiv = document.querySelector('.parentDiv');
parentDiv.removeChild(parentDiv.lastElementChild);
