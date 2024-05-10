import { primeNums1, primeNums2 } from "./index";

describe("primeNums", () => {
  [primeNums1, primeNums2].forEach((primeNums) => {
    test("primeNums is a function", () => {
      expect(typeof primeNums).toEqual("function");
    });

    test("primeNums returns all prime numbers up to a given number", () => {
      const primes = primeNums(10);
      expect(primes).toEqual([2, 3, 5, 7]);
    });

    test("primeNums returns all prime numbers up to a given number", () => {
      const primes = primeNums(20);
      expect(primes).toEqual([2, 3, 5, 7, 11, 13, 17, 19]);
    });

    test("primeNums returns empty array", () => {
      const primes = primeNums(1);
      expect(primes).toEqual([]);
    });
  });
});
