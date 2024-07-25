// Activity 2: Named and Default Exports



// Task 3: Create a module that exports multiple functions using named exports. Import and use these functions in another script.
import {
    addTwoNumbers,
    sybTwoNumbers,
    mulTwoNumbers,
    divTwoNumbers
} from './2.1multipleFunctions.js'

const res1 = addTwoNumbers(20,30)
const res2 = sybTwoNumbers(20,30)
const res3 = mulTwoNumbers(20,30)
const res4 = divTwoNumbers(20,30)
console.log(res1)
console.log(res2)
console.log(res3)
console.log(res4)

// Task 4: Create a module that exports a single function using default export. Import and use this function in another script.

import singleFunction from './2.2singleFunction.js'

console.log(singleFunction())