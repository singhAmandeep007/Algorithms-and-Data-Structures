// --- Directions
// 1) Create a node class.  The constructor
// should accept an argument that gets assigned
// to the data property and initialize an
// empty array for storing children. The node
// class should have methods 'add' and 'remove'.
// 2) Create a tree class. The tree constructor
// should initialize a 'root' property to null.
// 3) Implement 'traverseBF' and 'traverseDF'
// on the tree class.  Each method should accept a
// function that gets called with each element in the tree

class Node {
  constructor(data) {
    this.data = data;
    this.children = [];
  }
  add(data) {
    // create a new node and push it into the current node's children array.
    this.children.push(new Node(data));
  }
  remove(data) {
    // we will check if the data matches with any of the children , if it does , we will remove it.
    this.children = this.children.filter((node) => {
      return node.data !== data;
    });
  }
}

class Tree {
  constructor() {
    // root of the tree (initially null)
    this.root = null;
  }
  traverseBF(fn) {
    //if (!this.root) return null;
    /**
     * we create an empty array
     * then we immediately take the root node from our tree and we stick that into the array at the very start.
     * We then start iterating through this array and we say while the array has some elements in it, take out the very first element.
     * Retrieve all of this nodes, children, and stick all those children into the array at the end (push).
     * Then we call our function that is provided to the Traverse method with this node. and throw it away from the array
     * iterate the process again from 3rd point
     */
    const arr = [this.root];
    while (arr.length) {
      const node = arr.shift();

      arr.push(...node.children);
      fn(node);
    }
  }
  traverseDF(fn) {
    //if (!this.root) return null;
    /**
     * we create an empty array
     * then we immediately take the root node from our tree and we stick that into the array at the very start.
     * We then start iterating through this array and we say while the array has some elements in it, take out the very first element.
     * Retrieve all of this nodes, children, and stick all those children into the array from the start(unshift).
     * Then we call our function that is provided to the Traverse method with this node. and throw it away from the array
     * iterate the process again from 3rd point
     */
    const arr = [this.root];
    while (arr.length) {
      const node = arr.shift();

      arr.unshift(...node.children);
      fn(node);
    }
  }
}

// const tree = new Tree();
// tree.root = new Node("a");
// tree.root.add("b");
// tree.root.add("c");
// tree.root.children[0].add("c");

module.exports = { Tree, Node };
