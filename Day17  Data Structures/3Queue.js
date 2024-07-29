// Activity 3: Queue

// Task 5: Implement a Queue class with methods enqueue (add element), dequeue (remove element), and front (view the first element).

class Queue {
    constructor() {
        this.items = [];
    }

    enqueue(element) {
        this.items.push(element);
    }

    dequeue() {
        if (this.isEmpty()) {
            return "Queue is empty";
        }
        return this.items.shift()
    }

    front() {
        if (this.isEmpty()) {
            return "Queue is empty";
        }
        return this.items[0];
    }
    isEmpty() {
        return this.items.length === 0;
    }
    display() {
        console.log(this.items.toString());
    }
}

const queue = new Queue()

queue.enqueue("Job 1")
queue.enqueue("Job 2")
queue.enqueue("Job 3")
queue.display();

console.log("Front", queue.front());
console.log(queue.dequeue());
console.log(queue.dequeue());
queue.display();
console.log(queue.dequeue());
console.log(queue.dequeue());
queue.display();
console.log(queue.dequeue());

// Task 6: Use the Queue class to simulate a simple printer queue where print jobs are added to the queue and processed in order.


function simplePrinterQueue() {
    const printerQueue = new Queue();
    printerQueue.enqueue("JOB 1 Printing")
    printerQueue.enqueue("JOB 2 Printing")
    printerQueue.enqueue("JOB 3 Printing")

    while (!printerQueue.isEmpty()) {
        const currentJob = printerQueue.dequeue()
        console.log(`Processing ${currentJob}`)
    }

    console.log("ALL JOB DONE")

}

simplePrinterQueue();
