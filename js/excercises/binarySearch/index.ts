/**
 * Binary Search
 *
 * Performs a binary search on a sorted array to find the index of a target element.
 *
 * @param arr - The sorted array to search in.
 * @param target - The target element to find.
 * @returns The index of the target element if found, otherwise -1.
 *
 * @example
 * // Example usage:
 * const arr = [1, 3, 5, 7, 9];
 * const target = 5;
 * const index = binarySearch(arr, target);
 * console.log(index); // Output: 2
 */

// O(log n)
export function binarySearch1(arr: number[], target: number) {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    const mid = Math.floor((start + end) / 2);

    if (arr[mid] === target) {
      return mid;
    } else if (arr[mid] < target) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
  return -1;
}

// O(logn)
export function binarySearch2(arr: number[], target: number, start?: number, end?: number) {
  start = start ?? 0;
  end = end ?? arr.length - 1;

  if (start > end) return -1;

  const middle = Math.floor((start + end) / 2);

  if (arr[middle] === target) return middle;

  if (target < arr[middle]) {
    return binarySearch2(arr, target, start, middle - 1);
  }

  if (target > arr[middle]) {
    return binarySearch2(arr, target, middle + 1, end);
  }
}
