import { defaultArgs } from "./index";

describe("defaultArgs", () => {
  [defaultArgs].forEach((defaultArg) => {
    test("function defaultArg", () => {
      expect(typeof defaultArg).toEqual("function");
    });

    test("default arg fn returns 12", () => {
      const addTwoCb = (a: number, b: number) => {
        return a + b;
      };
      let addTwo = defaultArg(addTwoCb, { b: 8 });

      expect(addTwo(4)).toEqual(12);
    });

    test("default arg fn returns 17", () => {
      function addMulThreeCb(a: number, b: number, c: number) {
        return a + b * c;
      }
      let addMulThree = defaultArg(addMulThreeCb, { c: 6 });

      expect(addMulThree(5, 2)).toEqual(17);
    });

    test("default arg fn returns -1", () => {
      function addSubThreeCb(a: number, b: number, c: number) {
        return a + b - c;
      }
      let addSubThree = defaultArg(addSubThreeCb, { c: 8 });

      expect(addSubThree(3, 4)).toEqual(-1);
    });

    test("default arg fn returns 12", () => {
      function addThreeCb(a: number, b: number, c: number) {
        return a + b + c;
      }
      let addThree = defaultArg(addThreeCb, { a: 1, c: 8 });

      expect(addThree(undefined, 3)).toEqual(12);
    });

    test("default arg fn returns NaN", () => {
      function addThreeCb(a: number, b: number, c: number) {
        return a + b + c;
      }
      let addThree = defaultArg(addThreeCb, { c: 8 });

      expect(addThree(undefined, 3)).toBe(NaN);
    });
  });
});
