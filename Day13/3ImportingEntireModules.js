// Activity 3: Importing Entire Modules


// Task 5: Create a module that exports multiple constants and functions. Import the entire module as an object in another script and use its properties.

import * as constantAndFunc from './3.1MultipleDataImport.js'

console.log(constantAndFunc.constVal)

let squareRes = constantAndFunc.squareNum(4) 
let cubeRes = constantAndFunc.cubeNum(4) 
let addRes = constantAndFunc.addNumbers(4,6)
let subtractRes = constantAndFunc.subtractNumbers(4,6)

console.log(squareRes)
console.log(cubeRes)
console.log(addRes)
console.log(subtractRes)