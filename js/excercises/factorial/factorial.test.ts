import { factorial1, factorial2, factorial3 } from "./index";

describe("factorial", () => {
  [factorial1, factorial2, factorial3].forEach((factorial) => {
    test("factorial is a function", () => {
      expect(typeof factorial).toEqual("function");
    });

    it("should return 1 when input is 0", () => {
      expect(factorial(0)).toBe(1);
    });

    it("should return 1 when input is 1", () => {
      expect(factorial(1)).toBe(1);
    });

    it("should return the correct factorial for positive numbers", () => {
      expect(factorial(5)).toBe(120);
      expect(factorial(10)).toBe(3628800);
      expect(factorial(15)).toBe(1307674368000);
    });
  });
});
