// Activity 2: Mouse Events

// Task 3: Add a mouseover event listener to an element that changes its background color.

const updateBgColor = document.querySelector('.updateMyBGColor')

updateBgColor.addEventListener('mouseover',()=>{
    const randomColor = Math.floor(Math.random() * 999999)
    updateBgColor.style.backgroundColor = `#${randomColor}`
})


// Task 4: Add a mouseout event listener to an element that resets its background color.

updateBgColor.addEventListener('mouseout',()=>{
    updateBgColor.style.backgroundColor = `#FFF`
})