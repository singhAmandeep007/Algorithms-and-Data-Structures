// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}
/* 
	a node in a linked list essentially just contains some amount of data and a reference to the next node along the chain. And so it really has essentially no functionality tied to it as just a little bit little container that contains some amount of data.
*/

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }
  insertFirst(data) {
    // creating a new node and sticking it in the front of the linked list
    // linked list starts empty
    if (!this.head) {
      let node = new Node(data);
      // head should point to the new node inserted
      this.head = node;
      this.tail = node;
    } else {
      // head should point to the new node inserted
      this.head = new Node(data, this.head);
    }
  }

  size() {
    // NOTE: important part of linked list; Here we use a counter variable to count the length. We then create a variable to store the reference of head, and using while loop we check if tempNode is true, if true we increment the count and assign the next node to tempNode. Finally return length
    let length = 0;
    let tempNode = this.head;
    while (tempNode) {
      length++;
      tempNode = tempNode.next;
    }
    return length;
  }

  getFirst() {
    return this.head;
  }
  getLast() {
    return this.tail;
  }
  clear() {
    this.head = null;
    this.tail = null;
  }
  removeFirst() {
    if (!this.head) {
      return;
    }
    this.head = this.head.next;
  }
  removeLast() {
    // there is no head
    if (!this.head) {
      return;
    }
    // there is only head in the linked list
    if (this.head.next === null) {
      this.head = null;
      this.tail = null;
      return;
    }
    // NOTE: both above if conditions combined
    // if (!this.head || !this.head.next) {
    // 	this.head = null;
    // 	return;
    // }

    let prevNode = this.head;
    let nextNode = this.head.next;
    while (nextNode.next) {
      prevNode = nextNode;
      nextNode = nextNode.next;
    }

    prevNode.next = null;
    this.tail = prevNode;

    // let tempNode = this.head;
    // while (tempNode) {
    //   if (tempNode.next?.next === null) {
    //     tempNode.next = null;
    //     this.tail = tempNode;
    //   } else {
    //     tempNode = tempNode.next;
    //   }
    // }
  }

  insertLast(data) {
    if (!this.head) {
      let node = new Node(data);
      // head should point to the new node inserted
      this.head = node;
      this.tail = node;
    } else {
      let newNode = new Node(data);
      this.getLast().next = newNode;
      this.tail = newNode;
    }
  }

  getAt(i) {
    //if (!this.head) return null;

    let tempNode = this.head;
    let count = 0;
    while (tempNode) {
      if (count === i) {
        return tempNode;
      }
      tempNode = tempNode.next;
      count++;
    }

    return null;
  }

  removeAt(i) {
    if (!this.head) return null;
    if (i === 0) {
      this.removeFirst();
      // this.head = this.head.next;
      return;
    }
    let previous = this.getAt(i - 1);
    if (!previous || !previous.next) {
      return;
    }
    previous.next = previous.next.next;
    this.tail = previous;
  }
  insertAt(data, i) {
    if (!this.head || i === 0) {
      this.insertFirst(data);
      return;
    }

    let previous = this.getAt(i - 1) || this.getLast();

    const node = new Node(data, previous.next);
    previous.next = node;
  }

  forEach(fn) {
    if (!this.head) {
      return;
    }
    let counter = 0;
    let tempNode = this.head;
    while (tempNode) {
      fn(tempNode, counter); // current value in list and index
      tempNode = tempNode.next;
      counter++;
    }
  }
  // this defines a generator function with the key of symbol iterator.For...Of loops are built to automatically look for a key of Symbol.Iterator.
  // [Symbol.iterator] is specifically meant to set up the default iterator for the for...of loop. It also lets you use the spread operator on the object / class,
  // READ-MORE: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols
  *[Symbol.iterator]() {
    // while node is true
    // every step along the node, we will yield the current node
    let tempNode = this.head;
    while (tempNode) {
      yield tempNode;
      tempNode = tempNode.next;
    }
  }
}

/* 
	the linked list class has no idea about, how many nodes belong to the linked list,size of linked list. We need to crawl over the linked list to calculate the size.We are only able to acess the head of the linked list.

*/

module.exports = { Node, LinkedList };
