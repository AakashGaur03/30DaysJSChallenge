// Activity 5: Event Handling

// Task 9: Add a click event listener to a button that changes the text content of a paragraph.

const updateTextOnClick = document.getElementById('updateTextOnClick')
const updateMytext = document.getElementById('updateMytext')

updateTextOnClick.addEventListener('click', updateParaText)

function updateParaText() {
    let randomNumber = Math.ceil(Math.random() * 100)
    updateMytext.innerText = `Number is ${randomNumber}`
}

// Task 10: Add a mouseover event listener to an element that changes its border color.

const UpdateMyborderColor = document.querySelector('.UpdateMyborderColor')

UpdateMyborderColor.addEventListener('mouseover',addBorderColor)
UpdateMyborderColor.addEventListener('mouseout',removeBorderColor)

function addBorderColor(){
    UpdateMyborderColor.style.border = '2px solid red'
}
function removeBorderColor(){
    UpdateMyborderColor.style.borderColor = 'red'
    UpdateMyborderColor.style.border = ''
}