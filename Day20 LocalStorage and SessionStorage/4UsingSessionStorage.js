// Activity 4: Using SessionStorage


// Task 7: Create a simple form that saves user input (e.g., name and email) to sessionStorage when submitted. Retrieve and display the saved data on page load.



const form2 = document.getElementById("form2")
const name2 = document.getElementById("name2")
const email2 = document.getElementById("email2")


form2.addEventListener("submit", (e) => {
    e.preventDefault()
    const formDataSession = new FormData(form2);
    const data = {};
    formDataSession.forEach((value, key) => {
        data[key] = value;
    });
    sessionStorage.setItem('formDataSession', JSON.stringify(data))
    displayNameSession()
})

const displayNameSession = () => {
    const storedDataSession = JSON.parse(sessionStorage.getItem('formDataSession'))
    const nameSession = storedDataSession.name
    const emailSession = storedDataSession.email
    if (nameSession && emailSession) {
        name2.textContent = `Name from Session Storage is : ${nameSession} `
        email2.textContent = ` Email from Session Storage is :  ${emailSession} `
    } else {
        name2.textContent = "Name not available"
        email2.textContent = "Email not available"
    }
}



// Task 8: Write a script to remove an item from sessionStorage. Log the sessionStorage content before and after removal.

const removeItemSessionStorage = document.getElementById("removeItemSessionStorage")

removeItemSessionStorage.addEventListener('click',()=>{
    console.log(`Before Removing My String ${sessionStorage.getItem('sessionString')}`)
    sessionStorage.removeItem('sessionString')
    console.log(`After Removing My String ${sessionStorage.getItem('sessionString')}`)
})