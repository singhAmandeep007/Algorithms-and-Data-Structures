// --- Directions
// 1) Complete the task in weave/queue.js
// 2) Implement the 'weave' function.  Weave
// receives two queues as arguments and combines the
// contents of each into a new, third queue.
// The third queue should contain the *alterating* content
// of the two queues.  The function should handle
// queues of different lengths without inserting
// 'undefined' into the new one.
// *Do not* access the array inside of any queue, only
// use the 'add', 'remove', and 'peek' functions.
// --- Example
//    const queueOne = new Queue();
//    queueOne.add(1);
//    queueOne.add(2);
//    const queueTwo = new Queue();
//    queueTwo.add('Hi');
//    queueTwo.add('There');
//    const q = weave(queueOne, queueTwo);
//    q.remove() // 1
//    q.remove() // 'Hi'
//    q.remove() // 2
//    q.remove() // 'There'

const Queue = require("./queue");

function weave(sourceOne, sourceTwo) {
  let weavedQueue = new Queue();

  while (sourceOne.peek() !== undefined || sourceTwo.peek() !== undefined) {
    if (sourceOne.peek() !== undefined) {
      weavedQueue.add(sourceOne.remove());
    }

    if (sourceTwo.peek() !== undefined) {
      weavedQueue.add(sourceTwo.remove());
    }
  }
  return weavedQueue;
}

/* 
	we are first creating a new queue which will be returned later. Using the while loop with conditions of if 1st queue doesnt have the last element as undefined or same for the 2nd queue , then we will check for undefined value in both queue and add it in the resultant queue while also removing it from the original queue.  

*/

module.exports = weave;
