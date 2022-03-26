// --- Directions
// Implement a Queue datastructure using two stacks.
// *Do not* create an array inside of the 'Queue' class.
// Queue should implement the methods 'add', 'remove', and 'peek'.
// For a reminder on what each method does, look back
// at the Queue exercise.
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.add(2);
//     q.peek();  // returns 1
//     q.remove(); // returns 1
//     q.remove(); // returns 2

const Stack = require("./stack");

class Queue {
  constructor() {
    // creating 2 stacks
    this.stackA = new Stack();
    this.stackB = new Stack();
  }

  add(record) {
    // records will be added in stackA ie first stack always
    this.stackA.push(record);
  }
  remove() {
    // while there is a record in first stack, pop it and push it in second stack, this way we will be able to put the last record in first stack on top in second stack.
    while (this.stackA.peek()) {
      this.stackB.push(this.stackA.pop());
    }
    // we are not able to access the first record that was pushed in the queue. We will pop it from second stack.
    const record = this.stackB.pop();
    // RESTORE back the first stack to maintain order.
    while (this.stackB.peek()) {
      this.stackA.push(this.stackB.pop());
    }
    // finally return the record;
    return record;
  }
  peek() {
    // while there is a record in the first stack, pop it and push it in second stack
    while (this.stackA.peek()) {
      this.stackB.push(this.stackA.pop());
    }
    // check if there is any record in second stack (pushed from first stack), dont pop it.
    const record = this.stackB.peek();
    // RESTORE the first stack order
    while (this.stackB.peek()) {
      this.stackA.push(this.stackB.pop());
    }
    // finally return the record
    return record;
  }
}

class Queue1 {
  constructor() {
    this.firstStack = new Stack();
    this.secondStack = new Stack();
  }
  add(record) {
    this.firstStack.push(record);
  }
  remove() {
    if (this.secondStack.peek()) {
      return this.secondStack.pop();
    }

    while (this.firstStack.peek()) {
      this.secondStack.push(this.firstStack.pop());
    }
    return this.secondStack.pop();
  }
  peek() {
    if (this.secondStack.peek()) {
      return this.secondStack.peek();
    }
    while (this.firstStack.peek()) {
      this.secondStack.push(this.firstStack.pop());
    }

    return this.secondStack.peek();
  }
}

module.exports = Queue1;
