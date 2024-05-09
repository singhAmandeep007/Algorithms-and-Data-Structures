import { fizzBuzz1, fizzBuzz2 } from "./index";

describe("fizzbuzz", () => {
  [fizzBuzz1, fizzBuzz2].forEach((fizzBuzz) => {
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

      // Define the mock property on console.log function
      const logMock = console.log as jest.Mock;
      expect(logMock.mock.calls.length).toEqual(5);
    });

    test("Calling fizzbuzz with 15 prints out the correct values", () => {
      fizzBuzz(15);

      const logMock = console.log as jest.Mock;

      expect(logMock.mock.calls.length).toEqual(15);
      // NOTE: logMock.mock.calls is an array of array's
      expect(logMock.mock.calls[0][0]).toEqual(1); // get log message
      expect(logMock.mock.calls[1][0]).toEqual(2);
      expect(logMock.mock.calls[2][0]).toEqual("fizz");
      expect(logMock.mock.calls[3][0]).toEqual(4);
      expect(logMock.mock.calls[4][0]).toEqual("buzz");
      expect(logMock.mock.calls[5][0]).toEqual("fizz");
      expect(logMock.mock.calls[6][0]).toEqual(7);
      expect(logMock.mock.calls[7][0]).toEqual(8);
      expect(logMock.mock.calls[8][0]).toEqual("fizz");
      expect(logMock.mock.calls[9][0]).toEqual("buzz");
      expect(logMock.mock.calls[10][0]).toEqual(11);
      expect(logMock.mock.calls[11][0]).toEqual("fizz");
      expect(logMock.mock.calls[12][0]).toEqual(13);
      expect(logMock.mock.calls[13][0]).toEqual(14);
      expect(logMock.mock.calls[14][0]).toEqual("fizzbuzz");
      log(logMock.mock.calls); // actually log out the whole output (what the mock was called with)
    });

    test("Calling fizzbuzz with 9 prints out the corrent values", () => {
      fizzBuzz(9);

      const logMock = console.log as jest.Mock;

      expect(logMock.mock.calls.length).toEqual(9);

      expect(logMock.mock.calls[0][0]).toStrictEqual(1);
      expect(logMock.mock.calls[1][0]).toStrictEqual(2);
      expect(logMock.mock.calls[2][0]).toStrictEqual("fizz");
      expect(logMock.mock.calls[3][0]).toStrictEqual(4);
      expect(logMock.mock.calls[4][0]).toStrictEqual("buzz");
      expect(logMock.mock.calls[5][0]).toStrictEqual("fizz");
      expect(logMock.mock.calls[6][0]).toStrictEqual(7);
      expect(logMock.mock.calls[7][0]).toStrictEqual(8);
      expect(logMock.mock.calls[8][0]).toStrictEqual("fizz");
    });
  });
});
