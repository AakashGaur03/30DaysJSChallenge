// Activity 5: Enhanced Object Literals


// Task 8: Use enhanced object literals to create an object with methods and properties, and log the object to the console.

name = "John"
age = "25"
const person = {
    name,
    age,
    intro() {
        console.log(`Name is ${this.name} and Age is ${person.age}`)
    }
}

console.log(person)
console.log(person.name)
console.log(person.age)
person.intro()
// Task 9: Create an object with computed property names based on variables and log the object to the console.


const propertyName1 = "firstName"
const propertyName2 = "lastName"
const propertyName3 = "age"

let info = {
    [propertyName1]: "John",
    [propertyName2]: "Doe",
    [propertyName3]: "34",
}

console.log(info)




// Extra Dynamic Property Names

const AboutHuman = createPerson("Sam",34)
const AboutHuman2 = createPerson("Ramanujan",14)

function createPerson(name, age){
    return{
        name,
        age,
        [`is${name}Adult`]: age>=18
    }
}

console.log(AboutHuman)
console.log(AboutHuman2)