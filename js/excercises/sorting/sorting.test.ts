import { bubbleSort, insertionSort, mergeSort, selectionSort, merge, quickSort } from "./index";

describe("sort", () => {
  test.each([
    [
      [100, -40, 500, -124, 0, 21, 7],
      [-124, -40, 0, 7, 21, 100, 500],
    ],
    [
      [0, 1, 2, 3, 4, 5, 6],
      [0, 1, 2, 3, 4, 5, 6],
    ],
    [
      [6, 5, 5, 5, 5, 4, -22, 3, 2, 2, 1, 0],
      [-22, 0, 1, 2, 2, 3, 4, 5, 5, 5, 5, 6],
    ],
  ])("%p should be sorted to %p", (arr, expected) => {
    expect(bubbleSort(arr)).toEqual(expected);
    expect(selectionSort(arr)).toEqual(expected);
    expect(insertionSort(arr)).toEqual(expected);
    expect(quickSort(arr)).toEqual(expected);
    expect(mergeSort(arr)).toEqual(expected);
  });
});

describe("Merge sort", () => {
  test("merge function can join together two sorted arrays", () => {
    const left = [1, 10];
    const right = [2, 8, 12];

    expect(merge(left, right)).toEqual([1, 2, 8, 10, 12]);
  });
});
