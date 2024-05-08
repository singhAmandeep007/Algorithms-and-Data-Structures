const solutions = require("./index");

for (let sol of solutions) {
  let fizzBuzz = sol;

  describe("Testing fizzbuzz", () => {
    const log = console.log; // save original console.log function
    beforeEach(() => {
      //jest.spyOn(console, 'log');
      console.log = jest.fn(); // create a new mock function for each test
    });

    afterEach(() => {
      console.log = log; // restore original console.log after all tests
      //console.log.mockRestore();
    });

    test("fizzBuzz function is defined", () => {
      expect(fizzBuzz).toBeDefined();
    });

    test("Calling fizzbuzz with `5` prints out 5 statements", () => {
      fizzBuzz(5);

      expect(console.log.mock.calls.length).toEqual(5);
    });

    test("Calling fizzbuzz with 15 prints out the correct values", () => {
      fizzBuzz(15);

      expect(console.log.mock.calls.length).toEqual(15);
      // NOTE: console.log.mock.calls is an array of array's
      expect(console.log.mock.calls[0][0]).toEqual(1); // get log message
      expect(console.log.mock.calls[1][0]).toEqual(2);
      expect(console.log.mock.calls[2][0]).toEqual("fizz");
      expect(console.log.mock.calls[3][0]).toEqual(4);
      expect(console.log.mock.calls[4][0]).toEqual("buzz");
      expect(console.log.mock.calls[5][0]).toEqual("fizz");
      expect(console.log.mock.calls[6][0]).toEqual(7);
      expect(console.log.mock.calls[7][0]).toEqual(8);
      expect(console.log.mock.calls[8][0]).toEqual("fizz");
      expect(console.log.mock.calls[9][0]).toEqual("buzz");
      expect(console.log.mock.calls[10][0]).toEqual(11);
      expect(console.log.mock.calls[11][0]).toEqual("fizz");
      expect(console.log.mock.calls[12][0]).toEqual(13);
      expect(console.log.mock.calls[13][0]).toEqual(14);
      expect(console.log.mock.calls[14][0]).toEqual("fizzbuzz");
      log(console.log.mock.calls); // actually log out the whole output (what the mock was called with)
    });

    test("Calling fizzbuzz with 9 prints out the corrent values", () => {
      fizzBuzz(9);

      expect(console.log.mock.calls.length).toEqual(9);

      expect(console.log.mock.calls[0][0]).toStrictEqual(1);
      expect(console.log.mock.calls[1][0]).toStrictEqual(2);
      expect(console.log.mock.calls[2][0]).toStrictEqual("fizz");
      expect(console.log.mock.calls[3][0]).toStrictEqual(4);
      expect(console.log.mock.calls[4][0]).toStrictEqual("buzz");
      expect(console.log.mock.calls[5][0]).toStrictEqual("fizz");
      expect(console.log.mock.calls[6][0]).toStrictEqual(7);
      expect(console.log.mock.calls[7][0]).toStrictEqual(8);
      expect(console.log.mock.calls[8][0]).toStrictEqual("fizz");
    });
  });
}
