// --- Directions
// Given a node, validate the binary search tree,
// ensuring that every node's left hand child is
// less than the parent node's value, and that
// every node's right hand child is greater than
// the parent

/**
 *
 * @param {*} node current node ( having left , right and data properties)
 * @param {*} min minimum value used to compare right child node
 * @param {*} max maximum value used to compare left child node
 * @returns whether the bst is valid or not
 *
 * Here we use recursion to traverse our tree and find whether its valid or not.
 * Initially while traversing the root node, min and max would be null and for every subsequent recursive call there will be either max or min or both.
 * so in our first traverse , we will check if node.left is true and call validate on the left child with min as null and max as node.data.
 * left child 's data must be less than the parent node 's data. so we check if max is not null and the node's data is more than max , if this is true we immediately return false.
 * same goes for right child , if its less than min then we immediately return false;
 * finally if any one of them will be false , it will cascade and eventually the funciton will return false;
 * at last we return true as none of the above conditions came out true.
 */

function validate(node, min = null, max = null) {
  if (max !== null && max < node.data) {
    return false;
  }
  if (min !== null && min > node.data) {
    return false;
  }

  if (node.left && !validate(node.left, min, node.data)) {
    return false;
  }

  if (node.right && !validate(node.right, node.data, max)) {
    return false;
  }

  return true;
}

module.exports = validate;
