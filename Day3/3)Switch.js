// Activity 3: Switch Case


// Task 4: Write a program that uses a switch case to determine the day of the week based on a number (1-7) and log the day name to the console.


const getDaybyNumber = (number) => {
    switch (number) {
        case 1: {
            console.log("Monday");
            break
        }
        case 2: {
            console.log("Tuesday");
            break
        }
        case 3: {
            console.log("Wednesday");
            break
        }
        case 4: {
            console.log("Thursday");
            break
        }
        case 5: {
            console.log("Friday");
            break
        }
        case 6: {
            console.log("Saturday");
            break
        }
        case 7: {
            console.log("Sunday");
            break
        }
        default: {
            console.log("Invalid day number")
        }
    }
}

// getDaybyNumber(1)
// getDaybyNumber(2)
// getDaybyNumber(3)
// getDaybyNumber(4)
// getDaybyNumber(5)
// getDaybyNumber(6)
// getDaybyNumber(7)
// getDaybyNumber(8)
// getDaybyNumber(0)


// Task 5: Write a program that uses a switch case to assign a grade ('A', 'B', 'C', 'D', 'F') based on a score and log the grade to the console.

const getGradebyNumber = (number) => {
    switch (true) {
        case (number <= 100 && number >= 90): {
            console.log("Grade : A");
            break
        }
        case (number < 90 && number >= 80): {
            console.log("Grade : B");
            break
        }
        case (number < 80 && number >= 60): {
            console.log("Grade : C");
            break
        }
        case (number < 60 && number >= 40): {
            console.log("Grade : D");
            break
        }
        case (number < 40 && number >= 0): {
            console.log("Grade: F");
            break
        }
        default: {
            console.log("Invalid Grade")
            break
        }
    }
}

getGradebyNumber(79)
getGradebyNumber(39)
getGradebyNumber(40)
getGradebyNumber(55)
getGradebyNumber(78)
getGradebyNumber(89)
getGradebyNumber(100)
getGradebyNumber(99)
getGradebyNumber(199)
getGradebyNumber(0)
getGradebyNumber(-20)