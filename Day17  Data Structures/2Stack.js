// Activity 2: Stack

// Task 3: Implement a Stack class with methods push (add element), pop (remove element), and peek (view the top element).


class Stack {
    constructor() {
        this.items = [];
    }

    push(element) {
        this.items.push(element);
    }

    pop() {
        console.log(this)
        if (this.isEmpty()) {
            console.log("Stack is empty")
            return "Stack is empty";
        }
        return this.items.pop();
    }

    peek() {
        if (this.isEmpty()) {
            console.log("Stack is empty")
            return "Stack is empty";
        }
        console.log(this.items[this.items.length - 1])
        return this.items[this.items.length - 1]
    }
    isEmpty() {
        return this.items.length === 0;
    }

    display() {
        console.log(this.items.toString());
    }
}

const stack = new Stack()

stack.display()
stack.push("1")
stack.peek()
stack.push("2")
stack.display()
stack.push(4)
stack.push("A")
stack.peek()
stack.pop()
stack.pop()
stack.display()
stack.pop()
stack.display()

// Task 4: Use the Stack class to reverse a string by pushing all characters onto the stack and then popping them off.

const reverseStr = (str) => {

    const stack2 = new Stack()

    for (const iterator of str) {
        stack2.push(iterator)
    }

    let result = ''

    while (!stack2.isEmpty()) {
        result += stack2.pop()
    }

    return result
}


const originalString = "hello";

const reversedString = reverseStr(originalString);
console.log(originalString)
console.log(reversedString)