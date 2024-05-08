const solutions = require("./index");

for (let sol of solutions) {
  let steps = sol;

  const log = console.log;
  beforeEach(() => {
    // jest.spyOn(console, 'log');
    console.log = jest.fn();
  });

  afterEach(() => {
    console.log = log;
  });

  test("steps is a function", () => {
    expect(typeof steps).toEqual("function");
  });

  test("steps called with n = 1", () => {
    steps(1);
    expect(console.log.mock.calls[0][0]).toEqual("#");
    expect(console.log.mock.calls.length).toEqual(1);
  });

  test("steps called with n = 2", () => {
    steps(2);
    expect(console.log.mock.calls[0][0]).toEqual("# ");
    expect(console.log.mock.calls[1][0]).toEqual("##");
    expect(console.log.mock.calls.length).toEqual(2);
  });

  test("steps called with n = 3", () => {
    steps(3);
    expect(console.log.mock.calls[0][0]).toEqual("#  ");
    expect(console.log.mock.calls[1][0]).toEqual("## ");
    expect(console.log.mock.calls[2][0]).toEqual("###");
    expect(console.log.mock.calls.length).toEqual(3);
  });
}
