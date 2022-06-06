// --- Directions
// 1) Implement the Node class to create
// a binary search tree.  The constructor
// should initialize values 'data', 'left',
// and 'right'.
// 2) Implement the 'insert' method for the
// Node class.  Insert should accept an argument
// 'data', then create an insert a new node
// at the appropriate location in the tree.
// 3) Implement the 'contains' method for the Node
// class.  Contains should accept a 'data' argument
// and return the Node in the tree with the same value.

class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
  /**
   * Using recursion
   * we will first check if data is less than the data of current node and if its left child is true, if that's the case we will call the insert method on that particular node
   * else if data is less than the data of current node we will insert a new node as its left child .
   * else if data is greater than the data of current node and the node has a right child we will call insert method on its right node.
   * else if data is greater than the data of current node we will insert a new node with the data as its right child
   */
  insert(data) {
    if (data < this.data && this.left) {
      this.left.insert(data);
    } else if (data < this.data) {
      this.left = new Node(data);
    } else if (data > this.data && this.right) {
      this.right.insert(data);
    } else if (data > this.data) {
      this.right = new Node(data);
    }
  }
  /**
   * if data matches return the node
   * if data > data of current node and there is a right child we will return the value(node) returned by calling contains method on the right child
   * similarly if data < data of current node we will return the value(node) returned by calling the contains method on left child
   * if none of the conditions match we will return null
   */
  contains(data) {
    if (!data || isNaN(data)) return null;
    if (this.data === data) {
      return this;
    }
    if (this.data < data && this.right) {
      return this.right.contains(data);
    } else if (this.data > data && this.left) {
      return this.left.contains(data);
    }

    return null;
  }
}

module.exports = Node;
