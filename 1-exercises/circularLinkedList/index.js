// --- Directions
// Given a linked list, return true if the list
// is circular, false if it is not.
// --- Examples
//   const l = new List();
//   const a = new Node('a');
//   const b = new Node('b');
//   const c = new Node('c');
//   l.head = a;
//   a.next = b;
//   b.next = c;
//   c.next = b;
//   circular(l) // true

function circular(list) {
  let fastNode = list.getFirst();
  let slowNode = list.getFirst();

  while (fastNode.next && fastNode.next.next) {
    slowNode = slowNode.next;
    fastNode = fastNode.next.next;
    if (slowNode === fastNode) {
      return true;
    }
  }
  return false;
}

/* 
	we take the same approach as in finding the midpoint in the linkedlist, we have 2 pointers storing the the head initially one slow and other fast. slow will be incremented by one node at a time while fast will be incremented 2 nodes at a time. At the point of time when both nodes are equal, we can conclude that the linked list is of type circular linked list, meaning one of the node is pointing back to a node existing in the linked list.
*/

function circular1(list) {
  const nodes = new Set();

  for (let node of list) {
    if (nodes.has(node)) {
      return true;
    }
    nodes.add(node);
  }

  return false;
}

/* 
	Here we leverage Set to check if the node already exists , if not we add it to the set. Set can only contain unique values.

*/

module.exports = [circular, circular1];
