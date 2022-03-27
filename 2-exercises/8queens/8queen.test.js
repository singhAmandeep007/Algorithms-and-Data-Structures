const solutions = require("./index");

for (let sol of solutions) {
  let eightQueen = sol;

  test("eightQueen is a function", () => {
    expect(typeof eightQueen).toBe("function");
  });

  test("eightQueen returns true", () => {
    expect(
      // [1 5 8 6 3 7 2 4] That means for this example that the first queen is placed in the first colum first row, the second queen is placed in the second column fifth row and so on.
      //[2 4 6 8 3 1 7 5 ]
      eightQueen([
        "(2,1)",
        "(4,2)",
        "(6,3)",
        "(8,4)",
        "(3,5)",
        "(1,6)",
        "(7,7)",
        "(5,8)",
      ])
    ).toBe("true");
  });
  test("eightQueen returns true", () => {
    expect(
      //[1 5 8 6 3 7 2 4 ]
      eightQueen([
        "(1,1)",
        "(5,2)",
        "(8,3)",
        "(6,4)",
        "(3,5)",
        "(7,6)",
        "(2,7)",
        "(4,8)",
      ])
    ).toBe("true");
  });

  test("eightQueen return (7,7)", () => {
    expect(
      eightQueen([
        "(2,1)",
        "(4,2)",
        "(6,3)",
        "(8,4)",
        "(3,5)",
        "(1,6)",
        "(7,7)",
        "(7,8)",
      ])
    ).toBe("(7,7)");
  });

  test("eightQueen returns (8,4)", () => {
    expect(
      eightQueen([
        "(2,1)",
        "(4,2)",
        "(6,3)",
        "(8,4)",
        "(3,5)",
        "(1,6)",
        "(7,7)",
        "(8,8)",
      ])
    ).toBe("(8,4)");
  });
  test("eightQueen returns true", () => {
    expect(
      eightQueen([
        "(5,1)",
        "(2,2)",
        "(4,3)",
        "(7,4)",
        "(3,5)",
        "(8,6)",
        "(6,7)",
        "(1,8)",
      ])
    ).toBe("true");
  });
}
