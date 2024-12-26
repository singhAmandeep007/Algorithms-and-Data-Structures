/**
 * Given two sorted arrays, find the number of elements in common. The arrays are the same length and each has all distinct elements.
 */

// brute force
export function findCommonElements1(array1: number[], array2: number[]) {
  let common = 0;

  for (const ele1 of array1) {
    for (const ele2 of array2) {
      if (ele1 === ele2) {
        common++;
      }
    }
  }

  return common;
}

// optimized (pointer approach)
export function findCommonElements2(array1: number[], array2: number[]) {
  let i = 0;
  let j = 0;
  let commonCount = 0;

  while (i < array1.length && j < array2.length) {
    if (array1[i] === array2[j]) {
      commonCount++;
      i++;
      j++;
    } else if (array1[i] < array2[j]) {
      i++;
    } else {
      j++;
    }
  }
  return commonCount;
}
