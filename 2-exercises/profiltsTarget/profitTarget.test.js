let solutions = require("./index");

for (let sol of solutions) {
  let stocksPairs = sol;

  test("returns 3", () => {
    expect(stocksPairs([5, 7, 9, 13, 11, 6, 6, 3, 3], 12)).toBe(3);
  });
  test("returns 2", () => {
    expect(stocksPairs([5, 6, 5, 7, 7, 8], 13)).toBe(2);
  });
  test("returns 2", () => {
    expect(stocksPairs([1, 1, 2, 45, 46, 46], 47)).toBe(2);
  });
  test("returns 1", () => {
    expect(stocksPairs([1, 1], 2)).toBe(1);
  });
  test("returns 1", () => {
    expect(stocksPairs([1, 5, 1, 5], 6)).toBe(1);
  });
  test("returns 1", () => {
    expect(stocksPairs([1, 3, 46, 1, 3, 9], 47)).toBe(1);
  });
  test("returns 0", () => {
    expect(stocksPairs([1, 3, 46, 1, 3, 9], 107)).toBe(0);
  });
  test("returns 0", () => {
    expect(stocksPairs([], 107)).toBe(0);
  });
}
