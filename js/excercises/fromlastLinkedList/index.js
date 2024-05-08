// --- Directions
// Given a linked list, return the element n spaces
// from the last node in the list.  Do not call the 'size'
// method of the linked list.  Assume that n will always
// be less than the length of the list.
// --- Examples
//    const list = new List();
//    list.insertLast('a');
//    list.insertLast('b');
//    list.insertLast('c');
//    list.insertLast('d');
//    fromLast(list, 2).data // 'b'

function fromLast(list, n) {
  let slowNode = list.getFirst();
  let fastNode = list.getFirst();

  while (n > 0) {
    fastNode = fastNode.next;
    n--;
  }
  while (fastNode.next) {
    slowNode = slowNode.next;
    fastNode = fastNode.next;
  }
  return slowNode;
}

/* 
	Here we take 2 pointers , In the first phase of code ,we will move the fastnode n times step ahead of slownode.
	In the second phase of code we move the fast as well as slow node at equal pace ie one step at a time until fast node hits the end of linked list.
	Since the slow node is already n steps behind the fast node it will already be at n steps behind the last node when the loop completes.
	Thus we return the slow node at last
*/

function fromLast1(list, n) {
  let slow = list.getFirst();
  let fast = list.getAt(n);

  while (fast.next) {
    slow = slow.next;
    fast = fast.next;
  }
  return slow;
}

module.exports = [fromLast, fromLast1];
