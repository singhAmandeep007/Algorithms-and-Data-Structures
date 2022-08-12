const solutions = require("./index");

for (let sol of solutions) {
  let createEfficientTeams = sol;

  test("function createEfficientTeams", () => {
    expect(typeof createEfficientTeams).toEqual("function");
  });

  test("createEfficientTeams fn returns 7", () => {
    expect(createEfficientTeams([1, 2, 3, 2])).toEqual(7);
  });

  test("createEfficientTeams fn returns 174", () => {
    expect(
      createEfficientTeams([
        1, 2, 3, 2, 8, 8, 7, 9, 6, 1, 3, 1, 5, 4, 4, 6, 5, 9, 9, 7,
      ])
    ).toEqual(174);
  });
  test("createEfficientTeams fn returns -1", () => {
    expect(
      createEfficientTeams([
        1, 2, 3, 2, 8, 8, 7, 9, 6, 1, 3, 1, 5, 4, 4, 6, 5, 9, 9, 7, 2,
      ])
    ).toEqual(-1);
  });
  test("createEfficientTeams fn returns 2", () => {
    expect(createEfficientTeams([1, 2])).toEqual(2);
  });
  test("createEfficientTeams fn returns -1", () => {
    expect(createEfficientTeams([1])).toEqual(-1);
  });
}
