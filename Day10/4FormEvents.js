// Activity 4: Form Events

// Task 7: Add a submit event listener to a form that prevents the default submission and logs the form data to the console.

const form = document.getElementById('submitForm');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const formData = new FormData(form);
    const formObject = {};

    formData.forEach((value, key) => {
        formObject[key] = value;
    });

    console.log(formObject);
});



// Task 8: Add a change event listener to a select dropdown that displays the selected value in a paragraph.

const dropdown = document.getElementById('dropdown');

dropdown.addEventListener('change', (e) => {
    const selectedValue = e.target.value;
    const selectedValuePara = document.getElementById('selectedValue')
    selectedValuePara.innerText = `Selected value : ${selectedValue}`
})

