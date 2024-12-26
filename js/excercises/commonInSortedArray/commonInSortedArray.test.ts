import { findCommonElements1, findCommonElements2 } from "./index";

describe("findCommonElements1", () => {
  [findCommonElements1, findCommonElements2].forEach((findCommonElements) => {
    test("function exists", () => {
      expect(typeof findCommonElements).toEqual("function");
    });

    test.each([
      [[1, 2, 3, 4, 5], [1, 2, 3, 4, 5], 5],
      [[1, 2, 3, 4, 5], [6, 7, 8, 9, 10], 0],
      [[1, 2, 3, 4, 5], [1, 3, 5, 7, 9], 3],
      [[1, 2, 3, 4, 5], [2, 4, 6, 8, 10], 2],
      [[1, 2, 3, 4, 5], [1, 2, 3, 4, 5], 5],
      [[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], [0, 1, 2, 3, 4, 5], 5],
      [[], [], 0],
    ])("findCommonElements1 %p %p %p", (array1, array2, expected) => {
      expect(findCommonElements(array1, array2)).toEqual(expected);
    });
  });
});
