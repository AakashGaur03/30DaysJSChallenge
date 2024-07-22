// Activity 1: Basic Event Handling

// Task 1: Add a click event listener to a button that changes the text content of a paragraph.

const generateRandomNumber = document.getElementById('randomNumberGenerator')
const updateNumber = document.getElementById('updateNumber')
generateRandomNumber.addEventListener('click', () => {
    const randomNumber = Math.floor(Math.random() * 360)
    updateNumber.textContent = `Random Number : ${randomNumber}`
})


// Task 2: Add a double-click event listener to an image that toggles its visibility.

const imageToToggleBtn = document.getElementById('updateVisibility')
const imageToToggle = document.getElementById('UpdateImageVisibility')

imageToToggleBtn.addEventListener('dblclick', (e) => {
    imageToToggle.style.visibility = imageToToggle.style.visibility === "hidden" ? 'visible' : 'hidden'


})
