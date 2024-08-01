// Activity 2: Using LocalStorage


// Task 3: Create a simple form that saves user input (e.g., name and email) to localStorage when submitted. Retrieve and display the saved data on page load.

const form = document.getElementById("form1")
const name1 = document.getElementById("name1")
const email1 = document.getElementById("email1")


form.addEventListener("submit", (e) => {
    e.preventDefault()
    const formData = new FormData(form);
    const data = {};
    formData.forEach((value, key) => {
        data[key] = value;
    });
    localStorage.setItem('formData', JSON.stringify(data))
    displayName()
})

const displayName = () => {
    const storedData = JSON.parse(localStorage.getItem('formData'))
    const name = storedData.name
    const email = storedData.email
    if (name && email) {
        name1.textContent = `Name is : ${name} `
        email1.textContent = ` Email is :  ${email} `
    } else {
        name1.textContent = "Name not available"
        email1.textContent = "Email not available"
    }
}


// Task 4: Write a script to remove an item from localStorage. Log the localStorage content before and after removal.


const removeMyString = document.getElementById('removeMyString')

removeMyString.addEventListener('click',()=>{
    console.log(`Before Removing My String ${localStorage.getItem('MyString')}`)
    localStorage.removeItem('MyString')
    console.log(`After Removing My String ${localStorage.getItem('MyString')}`)
})