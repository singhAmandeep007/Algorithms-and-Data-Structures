import { validMountainArray } from "./index";

describe("validMountainArray", () => {
  test.each([validMountainArray])(`%p`, (validMountainArray) => {
    it("returns true for [0, 3, 2, 1]", () => {
      expect(validMountainArray([0, 3, 2, 1])).toBe(true);
    });

    it("returns false for [3, 5, 5]", () => {
      expect(validMountainArray([3, 5, 5])).toBe(false);
    });

    it("returns false for [0, 2, 3, 3, 5, 2, 1, 0]", () => {
      expect(validMountainArray([0, 2, 3, 3, 5, 2, 1, 0])).toBe(false);
    });

    it("returns false for [0, 2, 3, 4, 5, 2, 1, 0]", () => {
      expect(validMountainArray([0, 2, 3, 4, 5, 2, 1, 0])).toBe(true);
    });
  });
});
