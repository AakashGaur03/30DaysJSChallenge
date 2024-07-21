// Activity 4: Modifying Attributes and Classes


// Task 7: Select an HTML element and change one of its attributes (e.g., src of an img tag).

const changeAttr = document.getElementById('changeHref')

changeAttr.setAttribute('target', '_blank')
changeAttr.setAttribute('href', 'https://www.google.com/')

// Task 8: Add and remove a CSS class to/from an HTML element

const updateClass = document.querySelector('.updateClass')

updateClass.classList.remove('removeThisClass')
updateClass.classList.add('addNewClass')