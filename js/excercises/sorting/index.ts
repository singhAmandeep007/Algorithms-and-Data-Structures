/**
 *
 * @param {*} arr
 * @returns sorted array in *ASCENDING* order
 * Here we use nested for loop, for every step of the outer for loop, the inner loop is going to have a shrinking window of elements that we're going to iterate through.
 * The first time that we run through our array with bubble sort, we're going to find the largest record in the array, and we're going to move it all the way over to the right hand side as quickly as possible. And so that's how you end up with the shrinking window.
 * When we move the largest element all the way over to the right, we know that the element at the very end has now been sorted into the correct location. So we no longer need to look at this element right here. We only need to consider the window of elements before it.
 * We will check if next record in the array is greater than the current record in the array , if true we will swap them.
 */
export function bubbleSort(arr: number[]) {
  for (let i = 0; i < arr.length; i++) {
    // we don't need to SWAP last element and items already sorted and placed at correct postion
    for (let j = 0; j < arr.length - i - 1; j++) {
      // swap only if item is greater than the item to it's right (ascending)
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }

  return arr;
}

/**
 * @param {*} arr
 * Here we will assume that left part is a sorted array and right part is an unsorted array.
 * We will start from the second element and compare it with the first element, if it is smaller we will swap them.
 * Will repeat until the element to the left is smaller than the element
 */
export function insertionSort1(arr: number[]) {
  // assume first element is sorted
  for (let i = 1; i < arr.length; i++) {
    let numToInsert = arr[i];

    let j = i - 1;
    while (j >= 0 && arr[j] > numToInsert) {
      arr[j + 1] = arr[j];

      j -= 1;
    }

    arr[j + 1] = numToInsert;
  }

  return arr;
}

export function insertionSort(arr: number[]) {
  for (let i = 1; i < arr.length; i++) {
    let currentVal = arr[i];
    let j;

    for (j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
      arr[j + 1] = arr[j];
    }

    arr[j + 1] = currentVal;
  }

  return arr;
}

/**
 *
 * @param {*} arr
 * We're again going to iterate through every element in the array. Starting off at i= 0.
 * We are going to assume that the element at index i,is the lowest value in the array. we will assign the index of it to a variable (like indexOfMin).
 * the purpose of this inner for loop is to show if there is some other value in the array with a lower value.
 * So we're going to iterate from i + 1 to the end of the array and for every one of those elements, we're going to check to see if they're if it has a value less than the current element that we are looking at. If true we're going to update the value of indexOfMin to be the index of that element.
 * At last we will check if i and indexOfMin are not the same value, swap the elements at these two indices.
 * Finally we return the array
 */
export function selectionSort(arr: number[]) {
  for (let i = 0; i < arr.length; i++) {
    let indexOfMin = i;

    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[indexOfMin]) {
        indexOfMin = j;
      }
    }
    if (indexOfMin !== i) {
      let lesser = arr[indexOfMin];
      arr[indexOfMin] = arr[i];
      arr[i] = lesser;
    }
  }

  return arr;
}

/**
 *
 * @param {*} arr
 * Here the most important line is the first line -> we break down the array untill there is only 1 left. array with 1 element is always sorted.
 * if the array's length is 1 we return it.
 * Here first we find the center of the array, using Math.floor we get the integer.
 * then we split the arr into 2 parts using slice , remember when we pass 2 argument to slice it will return a new array slicing it from the first parameter index till last parameter index ( not including it).
 * so left array would be from 0th index till center index;
 * and right array would be from center till end of the array
 * Finally we will call the merge function to get the resulting sorted array by passing the value returned by mergeSort on left array and mergeSort on right array as parameters.
 */
export function mergeSort(arr: number[]): number[] {
  if (arr.length === 1) return arr;

  const center = Math.floor(arr.length / 2);
  const left = arr.slice(0, center);
  const right = arr.slice(center);

  // best way to imagine this is with array of 2 elements called in mergeSort, EXAMPLE: mergeSort([97,0])
  return merge(mergeSort(left), mergeSort(right));
}

/**
 *
 * @param {*} left
 * @param {*} right
 * Left and right are two separate sorted arrays of values. (ascending order).
 * The general purpose of the merger function is to take two separate sorted arrays and merge them together into one sorted array.
 * Steps in merger
 * 1) create an empty array to store the result
 * 2) while there are still element in the arrys (left or right) we will compare the first values of each array, whichever is lesser we will shift it and push it in results
 * 3) repeat same thing again, compare first values of each array and push lesser in results
 * 4) After while loop ends if there is still any record in array then we will take all those and push it in the results array.
 *
 */
export function merge(left: number[], right: number[]) {
  let result: number[] = [];
  while (left.length && right.length) {
    if (left[0] < right[0]) {
      result.push(left.shift() as number);
    } else {
      result.push(right.shift() as number);
    }
  }
  // by the time that the while loop stops running, either the left array or the right array is going to be completely empty so it doesn't matter if we concat left first or right first.
  return [...result, ...left, ...right];
}

/**
 *
 * @param {*} arr
 * @returns
 * Here we will assume that the last element in the array is the pivot element.
 * We will create two arrays left and right.
 * We will iterate through the array and compare each element with the pivot element.
 * If the element is greater than pivot element we will push it in right array.
 * Else we will push it in left array.
 * Finally we will return the result of quickSort on left array, pivot element and quickSort on right array.
 * This is a recursive function.
 */
export function quickSort(arr: number[]): number[] {
  let pivot = arr[arr.length - 1];

  if (arr.length < 2) return arr;

  let left = [];
  let right = [];

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] >= pivot) {
      right.push(arr[i]);
    } else if (arr[i] <= pivot) {
      left.push(arr[i]);
    }
  }

  return [...quickSort(left), pivot, ...quickSort(right)];
}
