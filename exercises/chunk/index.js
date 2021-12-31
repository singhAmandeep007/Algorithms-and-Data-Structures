/* --- Directions
Given an array and chunk size, divide the array into many subarrays
where each subarray is of length size
--- Examples
chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]] */

// 1st solution
function chunk1(array, size) {
  if (!size || array.length < 2) {
    return array;
  }
  let chunkedArray = [];

  for (let element of array) {
    // take last array of chunked array
    let lastArrayOfChunkedArray = chunkedArray[chunkedArray.length - 1];
    // if not true or length equals size , append new array
    if (!lastArrayOfChunkedArray || lastArrayOfChunkedArray.length === size) {
      chunkedArray.push([element]);
    } else {
      // push to existing last array of chunked array
      lastArrayOfChunkedArray.push(element);
    }
  }

  return chunkedArray;
}
/* 
    Here we first create chunkedArray which we are building. with for loop we will iterate over each element of array.
	 Then we create a new variable to access the last subarray of the chunkedArray. Initially as it doesn't exit it would be null, so it will create a new array with 1st element inside it and push it in chunkedArray. Then with each iteration it will first check if the last subarray length equals the size or if it is not true. Else block will execute until the if condition fails , in which we push the element in the last sub array of chunkedArray. 
	 NOTE: here when we assign lastArrayOfChunkedArray the value of chunkedArray 's element at nth position , then its copied by address, so later when we push element in lastArrayOfChunkedArray it's actually pushed in the chunkedArray. lastArrayOfChunkedArray is just a pointer to the address where chunkedArray is stored.
	 NOTE: here we are dealing with the last array as based on that the next element's position will be decided. If its length is equal to the parameter (size) then we need to append a new array else keep pushing in it.
    
    At last we return the chunkedArray.
*/

// 2nd solution
function chunk2(array, size) {
  if (!size || array.length < 2) {
    return array;
  }
  let chunkedArray = [];
  let i = 0;
  while (i < array.length) {
    chunkedArray.push(array.slice(i, i + size));
    i += size;
  }
  return chunkedArray;
}
/* 
    Here we first create chunkedArray which we are building. with while loop we will iterate over each element of array.
	 Then using slice method we first extract sub array and then push to chunked array. with each iteration we increment i .
	 
	 At last we return the chunkedArray.

	 The slice() method returns the selected elements in an array, as a new array object.
	 where as splice mutates the original array
	 NOTE: Immutability can be critical, and mutating inputs might lead to bugs that are quite hard to detect. 

	This is why slice (which returns a *copy* of the sub-array and leaves the original array untouched) is a much better choice than splice in this instance.

*/

//3rd solution
function chunk3(array, size) {
  if (!size || array.length < 2) {
    return array;
  }
  return Array.from({ length: Math.ceil(array.length / size) }, (_, i) =>
    array.slice(i * size, i * size + size)
  );
}
/* 
	 NOTE: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from
    In this we return a new array created with help of array.from .Array.from() lets you create Arrays from:
    1)array-like objects (objects with a length property and indexed elements); or
    2)iterable objects (objects such as Map and Set).

    we use length to specify the length of array initially using Math.ceil
    then in 2nd argument we use Map function to call on every element of the array. where v is each element and i is index.
    we pass a new array created from array.slice method.

    Generate a sequence of numbers
    Since the array is initialized with `undefined` on each position,
    the value of `v` below will be `undefined`

*/

function chunk4(array, size, result = []) {
  if (array.length < 2 || !size) {
    return array;
  }
  if (result.length === Math.ceil(array.length / size)) {
    return result;
  }

  result.push(array.slice(result.length * size, size + result.length * size));

  return chunk4(array, size, result);
}

module.exports = [chunk1, chunk2, chunk3, chunk4];
