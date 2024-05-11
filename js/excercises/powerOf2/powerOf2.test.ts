import { isPowerOfTwo1, isPowerOfTwo2 } from "./index";

describe("isPowerOf2", () => {
  [isPowerOfTwo1, isPowerOfTwo2].forEach((isPowerOf2) => {
    it("should return true for powers of 2", () => {
      expect(isPowerOf2(1)).toBe(true);
      expect(isPowerOf2(2)).toBe(true);
      expect(isPowerOf2(4)).toBe(true);
      expect(isPowerOf2(8)).toBe(true);
      expect(isPowerOf2(16)).toBe(true);
    });

    it("should return false for non-powers of 2", () => {
      expect(isPowerOf2(0)).toBe(false);
      expect(isPowerOf2(3)).toBe(false);
      expect(isPowerOf2(5)).toBe(false);
      expect(isPowerOf2(10)).toBe(false);
      expect(isPowerOf2(15)).toBe(false);
    });
  });
});
