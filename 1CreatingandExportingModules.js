// Activity 1: Creating and Exporting Modules

// Task 1: Create a module that exports a function to add two numbers. Import and use this module in another script.

// We need to add package.json and in it {type:'module'} to use import

import addNumbers from "./1.1addNumberModule.js";

console.log(addNumbers(4, 5))
const res = addNumbers(4, 8)
console.log(res)

// Task 2: Create a module that exports an object representing a person with properties and methods. Import and use this module in another script.

import { objPerson } from "./1.2objectModule.js";

console.log(objPerson.name)
console.log(objPerson.age)
// objPerson.age = 45
// objPerson.name = 'Mike'
console.log(objPerson.about())