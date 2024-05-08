/* --- Description
/ Create a queue data structure.  The queue
 should be a class with methods 'add' and 'remove'.
 Adding to the queue should store an element until
 it is removed
 --- Examples
     const q = new Queue();
     q.add(1);
     q.remove(); // returns 1;
*/

// NOTE: queue follows first in first out

// 1st solution
class Queue1 {
  constructor() {
    this.data = [];
  }

  add(record) {
    this.data.unshift(record);
  }

  remove() {
    return this.data.pop();
  }
}

function Queue2() {
  this.data = [];
}

Queue2.prototype.add = function (record) {
  this.data.unshift(record);
};

Queue2.prototype.remove = function () {
  return this.data.pop();
};
Queue2.prototype.isEmpty = function () {
  return this.data.length === 0;
};

Queue2.prototype.print = function () {
  let str = "";
  for (let record of this.data) {
    str += record + " ";
  }

  return str;
};

// 3rd solution
class Queue3 {
  constructor() {
    this.queue = {};
    this.start = null;
    this.end = null;
  }

  add(valueToAdd) {
    const { end, start, queue } = this;
    // just to have something here, since js have no pointers in memory
    let newEnd = end ? end + "q" : "end";

    queue[newEnd] = {
      value: valueToAdd,
      next: null,
      prev: end,
    };

    // adding a pointer on this new element to the previous one
    if (end) queue[end].next = newEnd;
    // if this is a first element in queue, so need to write it to start as well
    if (!start) this.start = newEnd;

    // and now this element is a new end
    this.end = newEnd;
  }

  remove() {
    const { start, end, queue } = this;

    // we are removing the start element, so if it's not exists, returning
    if (!start) return start;

    const { next, value } = queue[start];

    // deleting start element
    delete queue[start];

    // if removed element had a pointer to the next one, will update this next element
    if (next) {
      // this next element have no reference to prev element, since we just removed it
      queue[next].prev = null;
      // and it also became a new start element
      this.start = next;
    } else {
      // if there is no following item, removing a pointer to start item, since there are no items in queue
      delete this.start;
    }

    return value;
  }
}
module.exports = [Queue1, Queue2, Queue3];

/* 
The push() method adds one or more elements to the end of an array and returns the new length of the array.

The shift() method removes the first element from an array and returns that removed element. This method changes the length of the array.

Instead what required is 

The unshift() method adds one or more elements to the beginning of an array and returns the new length of the array.

The pop() method removes the last element from an array and returns that element. This method changes the length of the array.


*/
