
// Function Declaration
function multiply(a, b) {
    return a * b;
}
var result = multiply(5, 5);
console.log(result)


// Function Expression

var add = function (a, b) {
    return a * b;
}
console.log(add(5, 5))



// Higher order Functions

function HigherOrderFunction(callback){
    callback()
}

function callbackFunction() {
    console.log("I am a function")
}

console.log(HigherOrderFunction(callbackFunction))