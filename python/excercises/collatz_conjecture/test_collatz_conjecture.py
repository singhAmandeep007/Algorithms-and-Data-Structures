import unittest
from collatz_conjecture import steps


class TestCollatzConjecture(unittest.TestCase):
    def test_zero_steps_for_one(self):
        self.assertEqual(steps(1), 0)

    def test_divide_if_even(self):
        self.assertEqual(steps(16), 4)

    def test_even_and_odd_steps(self):
        self.assertEqual(steps(12), 9)

    def test_large_number_of_even_and_odd_steps(self):
        self.assertEqual(steps(1000000), 152)

    def test_zero_is_an_error(self):
        with self.assertRaises(ValueError) as err:
            steps(0)
        self.assertEqual(type(err.exception), ValueError)
        self.assertEqual(err.exception.args[0], "Only positive integers are allowed")

    def test_negative_value_is_an_error(self):
        with self.assertRaises(ValueError) as err:
            steps(-15)
        self.assertEqual(type(err.exception), ValueError)
        self.assertEqual(err.exception.args[0], "Only positive integers are allowed")


# if run directly
if __name__ == "__main__":
    # unittest.main() method is called to run all the tests on the methods that we defined.
    unittest.main()
