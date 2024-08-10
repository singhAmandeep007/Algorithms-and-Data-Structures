def steps(n: int) -> int:
    """
    The Collatz Conjecture or 3x+1 problem can be summarized as follows:

    Take any positive integer n. If n is even, divide n by 2. If n is odd, multiply n by 3 and add 1. Repeat the process indefinitely. The conjecture states that no matter which number you start with, you will always reach 1 eventually.

    Given a number n, return the number of steps required to reach 1.

    parameters:
        n: int - a positive integer

    returns:
        int - the number of steps required to reach 1
    """
    if n <= 0:
        raise ValueError("Only positive integers are allowed")
    steps = 0
    while n != 1:
        # NOTE: conditional assignment
        # If n is odd, n % 2 will return 1, which equates to True so the statement will perform "3 * n + 1"
        # If n is even, n % 2 will return 0, which equates to False so "n / 2" will be performed instead.
        n = 3 * n + 1 if n % 2 else n / 2
        steps += 1
    return steps
