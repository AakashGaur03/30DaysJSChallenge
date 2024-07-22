// Activity 3: Keyboard Events

// Task 5: Add a keydown event listener to an input field that logs the key pressed to the console.

const inputText = document.getElementById('inputText')

inputText.addEventListener('keydown', (e) => {
    console.log(e.target.value)
})

// Task 6: Add a keyup event listener to an input field that displays the current value in a paragraph.


const insertInPara = document.getElementById('insertInPara')
const updatePara = document.getElementById('updatePara')

insertInPara.addEventListener('keyup', (e) => {
    const inputValue = e.target.value.trim();
    updatePara.textContent = inputValue === "" ? "Update me by entering in above Input" : inputValue;
})