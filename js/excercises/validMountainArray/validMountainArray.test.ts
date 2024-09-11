import { validMountainArray1 } from "./index";

describe.each([{ name: "validMountainArray1", func: validMountainArray1 }])("$name", ({ func }) => {
  test.each([
    { input: [0, 3, 2, 1], expected: true, description: "returns true for [0, 3, 2, 1]" },
    { input: [3, 5, 5], expected: false, description: "returns false for [3, 5, 5]" },
    { input: [0, 2, 3, 3, 5, 2, 1, 0], expected: false, description: "returns false for [0, 2, 3, 3, 5, 2, 1, 0]" },
    { input: [0, 2, 3, 4, 5, 2, 1, 0], expected: true, description: "returns true for [0, 2, 3, 4, 5, 2, 1, 0]" },
  ])("$description", ({ input, expected }) => {
    expect(func(input)).toBe(expected);
  });
});
