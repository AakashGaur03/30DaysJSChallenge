// Activity 4: Fetching Data from an API

// Task 6: Use the fetch API to get data from a public API and log the response data to the console using promises.

const fetchDetails = new Promise((resolve, reject) => {
    const url = 'https://dogapi.dog/api/v2/breeds';
    const options = {
        method: 'GET',
    };

    fetch(url, options).then((response) => {
        return response.text();
    }).then((data) => {
        resolve(data)
    }).catch((err) => {
        console.log(err)
        reject("Error")
    })
})
fetchDetails
    .then(data => {
        console.log('Response data:', data);
    })
    .catch(err => {
        console.error('Promise rejected with error:', err);
    });

// Task 7: Use the fetch API to get data from a public API and log the response data to the console using async/await.

const fetchData = async () => {
    const url = 'https://dogapi.dog/api/v2/breeds';
    const options = {
        method: 'GET',
    };

    try {
        const response = await fetch(url, options)
        const result = await response.text()
        console.log(result)
    } catch (error) {
        console.log(error)
    }
}

// fetchData()