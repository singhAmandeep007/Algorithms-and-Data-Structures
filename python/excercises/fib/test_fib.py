import unittest
from fib import fibonacci


class TestFibonacci(unittest.TestCase):
    def test_fibonacci_10(self):
        self.assertEqual(fibonacci(10), 55)

    def test_fibonacci_0(self):
        self.assertEqual(fibonacci(0), 0)

    def test_fibonacci_1(self):
        self.assertEqual(fibonacci(1), 1)


# if run directly
if __name__ == "__main__":
    # unittest.main() method is called to run all the tests on the methods that we defined.
    unittest.main()
