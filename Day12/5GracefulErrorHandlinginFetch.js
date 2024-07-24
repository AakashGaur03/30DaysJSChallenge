// Activity 5: Graceful Error Handling in Fetch

// Task 8: Use the fetch API to request data from an invalid URL and handle the error using .catch(). Log an appropriate error message to the console.

// fetch('https://invalidurl.example.com')
//     .then(response => {
//         if (!response.ok) {
//             throw new Error('Network response was not ok');
//         }
//         return response.json();
//     })
//     .then(data => {
//         console.log(data);
//     })
//     .catch(error => {
//         console.error('Fetch error:', error.message);
//     });

fetch('invalid-url').then((res => {
    console.log(res)
})).catch((error) => {
    console.log('Failed to call API:', error.message);
})



// Task 9: Use the fetch API to request data from an invalid URL within an async function and handle the error using try-catch. Log an appropriate error message.

const fetchDataFromUrl = async () => {
    try {
        const response = await fetch('invalid-url')
        console.log(response)
    } catch (error) {
        console.log("API called Failed", error.message);
    }
}

fetchDataFromUrl()