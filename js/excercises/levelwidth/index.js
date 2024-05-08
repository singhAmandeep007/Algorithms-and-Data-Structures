// --- Directions
// Given the root node of a tree, return
// an array where each element is the width
// of the tree at each level.
// --- Example
// Given:
//     0
//   / |  \
// 1   2   3
// |       |
// 4       5
// Answer: [1, 3, 2]

/**
 * Here we first create 2 arrays , 1 to hold the nodes that we will process in our tree (initialized with root node and 's') and other to hold the width at each level (initialized with 0).
 * we also append a stopper so that we can recognize that we have hit the end of a row.
 * We will then iterate through the array holding our nodes if there is more than 1 element in the array ( so at least 2). Because if only 's' (our stopper symbol) is left in the array that means we have reached the end, we dont want to process the array any further.
 * then inside the while loop we have 2 different conditions that we want to process.
 * 1. we pull out 's' -> then its the end of the row/level , so we would add a new index to our counter and we will also push 's' back to end of the array.
 * 2. we pull out node -> then we take all of its children and stick them into the end of our array, and we will also increment the last value in our counters array.
 * At last we will return the counters array.
 */
function levelWidth1(root) {
  let arr = [root, "s"];
  let counters = [0];

  while (arr.length > 1) {
    let node = arr.shift();

    if (node === "s") {
      counters.push(0);
      arr.push("s");
    } else {
      arr.push(...node.children);
      counters[counters.length - 1]++;
    }
  }
  return counters;
}

/**
 * Here we first create an counters array and an array to hold our nodes;
 * while array is not empty, we will first push the length of the arr into counters
 * then for each node in arr we will push its children into the arr.
 * IMP: then we will reassign the arr value to a  new copy array of arr, while skipping the previous nodes
 */
function levelWidth2(root) {
  const counters = [];
  let arr = [root];

  while (arr.length) {
    counters.push(arr.length);
    arr.forEach((node) => arr.push(...node.children));
    arr = arr.slice(counters[counters.length - 1]);
  }
  return counters;
}

module.exports = [levelWidth1, levelWidth2];
