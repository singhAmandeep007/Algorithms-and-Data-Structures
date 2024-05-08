// --- Directions
// Return the 'middle' node of a linked list.
// If the list has an even number of elements, return
// the node at the end of the first half of the list.
// *Do not* use a counter variable, *do not* retrieve
// the size of the list, and only iterate
// through the list one time.
// --- Example
//   const l = new LinkedList();
//   l.insertLast('a')
//   l.insertLast('b')
//   l.insertLast('c')
//   midpoint(l); // returns { data: 'b' }

function midpoint(list) {
  // solving using 2 pointers (fast and slow)
  let slowNode = list.getFirst();
  let fastNode = list.getFirst();

  while (fastNode.next && fastNode.next.next) {
    // jump forward by 2
    fastNode = fastNode.next.next;
    // jump forward by 1
    slowNode = slowNode.next;
  }
  // at end of loop slowNode must be pointing at midpoint
  return slowNode;
}
/* 
	- to find the center node. We are going to create two temporary variables. One is going to be called slow and the other is going to be called fast. We are going to take both these variables and point them at the first node in our linked list. And when I say point at I mean just we're going to assign the first node to both these variables right here. So essentially, we'll say slow equals the first node and fast equals the first node. That's all.
	- After we do that initial assignment, we will then start to iterate through our linked list. So we're going to iterate through every node.For every step of iteration, like every step of a while loop, that's probably what are going to use here for every step of the while loop we are going to advance the slow variable forward by one element and then we will advance the fast variable forward by two elements or two nodes.
	- So after the first step through the while loop, the two variables will be updated. As soon as we advance fast to the next node, we will then check to see if the node after the one that it's now pointing at is defined and if the node after that is defined. So essentially, after we advance, fast forward, we're going to check to see if the next two nodes exist. If they do exist, that means that everything's good and we need to still continue iterating through the list. But if either of these next ones do not exist, then that means fast must be at the end of the linked list and that we can then consider slow to be at the midpoint.

*/

module.exports = midpoint;
