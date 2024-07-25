// Activity 4: Using Third-Party Modules

// Lodash is a popular JavaScript utility library that provides a wide range of functions for common programming tasks. It helps simplify and enhance JavaScript code by offering utilities for:

// Array Manipulation: Functions for filtering, mapping, reducing, chunking, and more.
// Object Manipulation: Functions for deep cloning, merging, extending, and more.
// Collection Handling: Functions to work with arrays and objects seamlessly.
// String Manipulation: Functions for string case conversion, trimming, escaping, and more.
// Type Checking: Functions to check the type of a variable, such as _.isArray, _.isFunction, and _.isObject.
// Function Utilities: Functions for debouncing, throttling, currying, and more.
// Performance Optimization: Functions to memoize, debounce, and throttle functions to improve performance.

// Task 6: Install a third-party module (e.g., lodash) using npm. Import and use a function from this module in a script.

import _ from 'lodash';

let arr = [1, 2, 3, 4, 5, 6, 7, 87, 8, 98, 5]

const chunkArray = _.chunk(arr, 2)
console.log(chunkArray)


function log() {
    console.log("Function Execulted")
}
const debounceLog = _.debounce(log, 1000)

debounceLog()

const object1 = { 'a': 1, 'b': 3 };
const object2 = { 'b': 2, 'c': 4 };

// If same key then takes the last value
const mergedObject = _.merge(object1, object2);

console.log(mergedObject);

// Task 7: Install a third-party module (e.g., axios) using npm. Import and use this module to make a network request in a script.


import axios from 'axios';

const callDogsBreed = async () => {

    try {
        const response = await axios.get('https://dogapi.dog/api/v2/breeds')
        console.log(response.data)
    } catch (error) {
        console.log(error)
    }
}

callDogsBreed()