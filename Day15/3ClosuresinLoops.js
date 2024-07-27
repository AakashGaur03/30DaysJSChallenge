// Activity 3: Closures in Loops

// Task 5: Write a loop that creates an array of functions. Each function should log its index when called. Use a closure to ensure each function logs the correct index.

let functionsArr = []

for (let i = 0; i < 5; i++) {

    (function (index) {
        functionsArr.push(function () {
            console.log(index);
        })
    })(i)


    // Here (i) is parameter that is passed to function(index)
}
console.log(functionsArr)
functionsArr[0]()
functionsArr[1]()
functionsArr[2]()
functionsArr[3]()
functionsArr[4]()