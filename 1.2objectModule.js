// Create a module that exports an object representing a person with properties and methods.

export const objPerson = {
    name: 'John Doe',
    age: '30',
    about() {
        return `My Name is ${this.name} and my age is ${this.age}`;
    }
}

// export default objPerson