import { binarySearch1 } from "./index";

describe("binarySearch", () => {
  [binarySearch1].forEach((binarySearch) => {
    test("should return the index of the target element if found", () => {
      const arr = [1, 3, 5, 7, 9];
      const target = 5;
      expect(binarySearch(arr, target)).toBe(2);
    });

    test("should return the index of the target element if found", () => {
      const arr = [1, 9, 15, 17, 19, 88];
      const target = 19;
      expect(binarySearch(arr, target)).toBe(4);
    });

    test("should return -1 if the target element is not found", () => {
      const arr = [1, 3, 5, 7, 9];
      const target = 6;
      expect(binarySearch(arr, target)).toBe(-1);
    });
  });
});
