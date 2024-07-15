// Combining Conditions

// Task 7: Write a program to check if a year is a leap year using multiple conditions (divisible by 4, but not 100 unless also divisible by 400) and log the result to the console.

const leapYearOrNot = (year) => {
    if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
        console.log("Year is a leap year")
    } else {
        console.log("Year is not a leap year")
    }
}

leapYearOrNot(2020)
leapYearOrNot(2000)
leapYearOrNot(2016)
leapYearOrNot(2018)
leapYearOrNot(2008)
leapYearOrNot(2016)
leapYearOrNot(2100)