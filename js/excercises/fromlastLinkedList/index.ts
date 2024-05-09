import { TLinkedList, TNode } from "./linkedlist";

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

function fromLast1(list: TLinkedList, n: number) {
  let slowNode = list.getFirst();
  let fastNode = list.getFirst();

  while (n > 0) {
    fastNode = (fastNode as TNode).next;
    n--;
  }
  while ((fastNode as TNode).next) {
    slowNode = (slowNode as TNode).next;
    fastNode = (fastNode as TNode).next;
  }
  return slowNode;
}

/* 
	Here we take 2 pointers , In the first phase of code ,we will move the fastnode n times step ahead of slownode.
	In the second phase of code we move the fast as well as slow node at equal pace ie one step at a time until fast node hits the end of linked list.
	Since the slow node is already n steps behind the fast node it will already be at n steps behind the last node when the loop completes.
	Thus we return the slow node at last
*/

function fromLast2(list: TLinkedList, n: number) {
  let slow = list.getFirst();
  let fast = list.getAt(n);

  while ((fast as TNode).next) {
    slow = (slow as TNode).next;
    fast = (fast as TNode).next;
  }
  return slow;
}

export { fromLast1, fromLast2 };
