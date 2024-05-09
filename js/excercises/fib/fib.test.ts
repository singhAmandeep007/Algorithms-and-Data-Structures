import { fib1, fib2, fib3, fib4, fib5, fib6 } from "./index";

describe("fib", () => {
  [fib1, fib2, fib3, fib4, fib5, fib6].forEach((fib) => {
    test("Fib function is defined", () => {
      expect(typeof fib).toEqual("function");
    });

    test("calculates correct fib value for 1", () => {
      expect(fib(1)).toEqual(1);
    });

    test("calculates correct fib value for 2", () => {
      expect(fib(2)).toEqual(1);
    });

    test("calculates correct fib value for 3", () => {
      expect(fib(3)).toEqual(2);
    });

    test("calculates correct fib value for 4", () => {
      expect(fib(4)).toEqual(3);
    });

    test("calculates correct fib value for 15", () => {
      expect(fib(39)).toEqual(63245986);
    });
  });
});
