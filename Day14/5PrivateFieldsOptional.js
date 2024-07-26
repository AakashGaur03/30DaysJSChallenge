// Activity 5: Private Fields (Optional)

// Task 9: Define a class Account with private fields for balance and a method to deposit and withdraw money. Ensure that the balance can only be updated through these methods.

class Account {
    #balance;
    constructor(initialBalance) {
        this.#balance = initialBalance;
    }
    deposit(amount) {
        if (amount > 0) {
            this.#balance += amount;
            return `Deposited ${amount}. New balance: ${this.#balance}`;
        } else {
            return 'Deposit amount must be positive'
        }
    }

    withdraw(amount) {
        if (amount > 0 && amount <= this.#balance) {
            this.#balance -= amount
            return `Withdrew ${amount}. New balance: ${this.#balance}`;
        } else if (amount > this.#balance) {
            return 'Insufficient funds'
        } else {
            return 'Withdraw amount must be positive'
        }
    }

    getBalance() {
        return `Current Balance: ${this.#balance}`
    }
}

// Task 10: Create an instance of the Account class and test the deposit and withdraw methods, logging the balance after each operation.


const myAcc = new Account(100)

console.log(myAcc.getBalance());
console.log(myAcc.deposit(50));
console.log(myAcc.getBalance());
console.log(myAcc.withdraw(100));
console.log(myAcc.getBalance());
console.log(myAcc.deposit(100));
console.log(myAcc.getBalance());
console.log(myAcc.withdraw(100));
console.log(myAcc.getBalance());
console.log(myAcc.withdraw(100));
console.log(myAcc.getBalance()); 
